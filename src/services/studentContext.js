import { SUBJECTS, getSubject } from '../config';
import { dateStr } from '../utils/utils';
import { getNotes, getStats, getTests } from './storage';

export async function buildStudentContext(profile, user) {
    const joinedIso = profile?.created_at ?? user?.created_at;
    const [stats, tests, ...noteLists] = await Promise.all([
        getStats(),
        getTests(),
        ...SUBJECTS.map((s) => getNotes(s.mode)),
    ]);

    const today = dateStr();
    const isToday = (iso) => dateStr(new Date(iso)) === today;

    const notesToday = noteLists.flat().filter((n) => isToday(n.createdAt)).length;
    const testsToday = tests.filter((t) => isToday(t.date)).length;
    const perSubject = SUBJECTS.map((s, i) => `${s.label} ${noteLists[i].length}`).join(', ');

    const joined = joinedIso ? new Date(joinedIso).toDateString() : 'unknown';
    const days = joinedIso ? Math.floor((Date.now() - new Date(joinedIso)) / 864e5) : 0;

    const by = {};
    for (const t of tests) (by[t.subject] ??= []).push(t.scorePercentage);
    let weak = null, low = 101;
    for (const [k, arr] of Object.entries(by)) {
        const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
        if (avg < low) { low = avg; weak = k; }
    }

    return (
        `Started studying on ${joined} (${days} days ago). ` +
        `Total so far: ${stats.totalNotes} notes saved (${perSubject}), ${stats.testsTaken} tests, ` +
        `avg ${stats.avgScore}%, ${stats.daysPresent} days present, streak ${stats.streak}. ` +
        `Today: ${notesToday} notes, ${testsToday} tests.` +
        (weak ? ` Weakest: ${getSubject(weak).label} ${Math.round(low)}%.` : '')
    );
}