import AsyncStorage from '@react-native-async-storage/async-storage';
import { SUBJECTS } from '../config';
import { dateStr, uuid } from '../utils/utils';
import { ensureUser, supabase } from './supabase';

/* AsyncStorage is the source of truth (offline-first).
   Every key is prefixed with the user's id, so two accounts on one phone never mix.
   Every write goes to AsyncStorage first, then syncAll() pushes to Supabase when online. */

const KEY = {
    notes: (mode) => `notes_${mode}`,
    attendance: 'attendance',
    tests: 'test_history',
    pending: 'pending_deletes',
};

let currentUid = null;
const getUid = async () => currentUid ?? (currentUid = await ensureUser());
supabase?.auth.onAuthStateChange((_e, s) => { currentUid = s?.user?.id ?? null; });
const scoped = async (key) => `${(await getUid()) ?? 'guest'}:${key}`;

const read = async (key, fallback = []) => {
    try {
        const v = await AsyncStorage.getItem(await scoped(key));
        return v ? JSON.parse(v) : fallback;
    } catch {
        return fallback;
    }
};
const write = async (key, value) =>
    AsyncStorage.setItem(await scoped(key), JSON.stringify(value));

/* ---------------- Notes ---------------- */
export async function getNotes(mode) {
    const list = await read(KEY.notes(mode));
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function getNoteCount(mode) {
    return (await read(KEY.notes(mode))).length;
}

export async function saveNote({ mode, question, solution, imagePath = null }) {
    const note = {
        id: uuid(), mode, question, solution, imagePath,
        createdAt: new Date().toISOString(), synced: false,
    };
    const list = await read(KEY.notes(mode));
    await write(KEY.notes(mode), [note, ...list]);
    syncAll();
    return note;
}

export async function deleteNote(mode, id) {
    const list = await read(KEY.notes(mode));
    await write(KEY.notes(mode), list.filter((n) => n.id !== id));
    const pending = await read(KEY.pending);
    await write(KEY.pending, [...pending, { table: 'notes', id }]);
    syncAll();
}

/* ---------------- Attendance ---------------- */
export const getAttendance = () => read(KEY.attendance);

export async function hasMarkedToday() {
    const list = await read(KEY.attendance);
    return list.some((a) => a.date === dateStr());
}

export async function markPresent() {
    const date = dateStr();
    const list = await read(KEY.attendance);
    if (list.some((a) => a.date === date)) return false; // once-a-day rule
    await write(KEY.attendance, [...list, { date, synced: false }]);
    syncAll();
    return true;
}

export function computeStreak(dates) {
    const set = new Set(dates);
    const cursor = new Date();
    if (!set.has(dateStr(cursor))) cursor.setDate(cursor.getDate() - 1); // today not marked yet -> count from yesterday
    let streak = 0;
    while (set.has(dateStr(cursor))) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
}

/* ---------------- Tests ---------------- */
export const getTests = async () =>
    (await read(KEY.tests)).sort((a, b) => new Date(b.date) - new Date(a.date));

export async function saveTest(result) {
    const record = { id: uuid(), ...result, synced: false };
    const list = await read(KEY.tests);
    await write(KEY.tests, [record, ...list]);
    syncAll();
    return record;
}

/* ---------------- Dashboard stats ---------------- */
export async function getStats() {
    const counts = await Promise.all(SUBJECTS.map((s) => getNoteCount(s.mode)));
    const attendance = await read(KEY.attendance);
    const tests = await read(KEY.tests);
    const avg = tests.length ? Math.round(tests.reduce((s, t) => s + t.scorePercentage, 0) / tests.length) : 0;
    return {
        totalNotes: counts.reduce((a, b) => a + b, 0),
        streak: computeStreak(attendance.map((a) => a.date)),
        daysPresent: attendance.length,
        testsTaken: tests.length,
        avgScore: avg,
    };
}

/* ---------------- Sync (push local -> cloud, then pull cloud -> local) ---------------- */
let syncing = false;

export async function syncAll() {
    if (!supabase || syncing) return false;
    syncing = true;
    try {
        const userId = await ensureUser();
        if (!userId) return false;

        // 1) deletes
        const pending = await read(KEY.pending);
        const remaining = [];
        for (const p of pending) {
            const { error } = await supabase.from(p.table).delete().eq('id', p.id);
            if (error) remaining.push(p);
        }
        await write(KEY.pending, remaining);
        const pendingNoteIds = new Set(remaining.filter((p) => p.table === 'notes').map((p) => p.id));

        // 2) push notes
        for (const s of SUBJECTS) {
            const list = await read(KEY.notes(s.mode));
            const unsynced = list.filter((n) => !n.synced);
            if (!unsynced.length) continue;
            const rows = unsynced.map((n) => ({
                id: n.id, user_id: userId, subject: n.mode,
                question: n.question, solution: n.solution,
                image_path: n.imagePath ?? null, created_at: n.createdAt,
            }));
            const { error } = await supabase.from('notes').upsert(rows, { onConflict: 'id' });
            if (!error) {
                const ids = new Set(unsynced.map((n) => n.id));
                const fresh = await read(KEY.notes(s.mode));
                await write(KEY.notes(s.mode), fresh.map((n) => (ids.has(n.id) ? { ...n, synced: true } : n)));
            }
        }

        // 3) push attendance
        const att = await read(KEY.attendance);
        const attUnsynced = att.filter((a) => !a.synced);
        if (attUnsynced.length) {
            const rows = attUnsynced.map((a) => ({ user_id: userId, date: a.date }));
            const { error } = await supabase.from('attendance').upsert(rows, { onConflict: 'user_id,date', ignoreDuplicates: true });
            if (!error) {
                const dates = new Set(attUnsynced.map((a) => a.date));
                const fresh = await read(KEY.attendance);
                await write(KEY.attendance, fresh.map((a) => (dates.has(a.date) ? { ...a, synced: true } : a)));
            }
        }

        // 4) push tests
        const tests = await read(KEY.tests);
        const testsUnsynced = tests.filter((t) => !t.synced);
        if (testsUnsynced.length) {
            const rows = testsUnsynced.map((t) => ({
                id: t.id, user_id: userId, subject: t.subject,
                total_questions: t.totalQuestions, correct_answers: t.correctAnswers,
                score_percentage: t.scorePercentage, details: t.details, taken_at: t.date,
            }));
            const { error } = await supabase.from('test_history').upsert(rows, { onConflict: 'id' });
            if (!error) {
                const ids = new Set(testsUnsynced.map((t) => t.id));
                const fresh = await read(KEY.tests);
                await write(KEY.tests, fresh.map((t) => (ids.has(t.id) ? { ...t, synced: true } : t)));
            }
        }

        // 5) pull: restore anything that exists in the cloud but not on this device
        const { data: cloudNotes } = await supabase.from('notes').select('*');
        if (cloudNotes) {
            for (const s of SUBJECTS) {
                const local = await read(KEY.notes(s.mode));
                const have = new Set(local.map((n) => n.id));
                const add = cloudNotes
                    .filter((r) => r.subject === s.mode && !have.has(r.id) && !pendingNoteIds.has(r.id))
                    .map((r) => ({
                        id: r.id, mode: r.subject, question: r.question, solution: r.solution,
                        imagePath: r.image_path, createdAt: r.created_at, synced: true,
                    }));
                if (add.length) await write(KEY.notes(s.mode), [...local, ...add]);
            }
        }
        const { data: cloudAtt } = await supabase.from('attendance').select('date');
        if (cloudAtt) {
            const local = await read(KEY.attendance);
            const have = new Set(local.map((a) => a.date));
            const add = cloudAtt.filter((r) => !have.has(r.date)).map((r) => ({ date: r.date, synced: true }));
            if (add.length) await write(KEY.attendance, [...local, ...add]);
        }
        const { data: cloudTests } = await supabase.from('test_history').select('*');
        if (cloudTests) {
            const local = await read(KEY.tests);
            const have = new Set(local.map((t) => t.id));
            const add = cloudTests.filter((r) => !have.has(r.id)).map((r) => ({
                id: r.id, subject: r.subject, totalQuestions: r.total_questions, correctAnswers: r.correct_answers,
                scorePercentage: Number(r.score_percentage), date: r.taken_at, details: r.details, synced: true,
            }));
            if (add.length) await write(KEY.tests, [...local, ...add]);
        }
        return true;
    } catch {
        return false; // offline: everything stays queued locally
    } finally {
        syncing = false;
    }
}