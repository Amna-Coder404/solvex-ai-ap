import { MCQS } from '../data/mcqs';
import { shuffle } from '../utils/utils';

const valid = (q) => {
    const ok = Array.isArray(q.options) && q.options.includes(q.correctAnswer);
    if (!ok) console.warn(`MCQ ${q.id}: correctAnswer is not in options`);
    return ok;
};

const bank = (mode) => (MCQS[mode] ?? []).filter(valid);

export const getBankCount = (mode) => bank(mode).length;

export function getMcqs(mode, count) {
    return shuffle([...bank(mode)])
        .slice(0, count)
        .map((q) => ({
            question: q.question,
            options: shuffle([...q.options]), // options ka order bhi badal jaye
            correctAnswer: q.correctAnswer,
            repeated: q.repeated ?? 1,
        }));
}