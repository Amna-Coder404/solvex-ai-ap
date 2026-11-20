import { GROQ_API_KEY, MODELS } from '../config';

const URL = 'https://api.groq.com/openai/v1/chat/completions';

// If you get an "output tokens per minute" error, lower this number.
const SOLVE_MAX_TOKENS = 1800;

const TUTOR_PROMPTS = {
    math: 'You are an expert Math tutor for ICS (Intermediate Computer Science) students. Solve step by step, explain each step briefly, and finish with a clearly marked "Final Answer".',
    physics: 'You are an expert Physics tutor for ICS students. Give the given data, formula, substitution with units, and a clearly marked "Final Answer".',
    computer: 'You are an expert Computer Science tutor for ICS students (programming, databases, networks, logic). Explain simply; show short code when useful.',
    english: 'You are an expert English tutor for ICS students. Help with grammar, comprehension, vocabulary and writing; give clear examples.',
    urdu: 'آپ انٹرمیڈیٹ (ICS) کے طلبہ کے لیے اردو کے ماہر استاد ہیں۔ سوالات، قواعد، تشریح، خلاصہ، خط یا درخواست کا جواب واضح اور سادہ اردو میں دیں۔',
};

/* Style rules for every subject: simple words, one idea per line. */
const SIMPLE_STYLE = `
STYLE (very important):
- Use simple, easy English that a student can understand quickly.
- Go line by line: ONE idea or ONE calculation per line. No long paragraphs.
- Put a blank line between steps.
- If the student asks for "step by step" or "steps", number them: Step 1:, Step 2:, ...
- If there are several questions, solve ALL of them one by one, each with its own heading like "Question 1".`;

/* English and Computer: plain text only (app shows normal text). */
const FORMAT_RULE = `${SIMPLE_STYLE}

OUTPUT FORMAT (the app shows plain text only):
- Do NOT use LaTeX, $ signs, markdown (**, ##), or tables.
- For an application, letter, email or essay, write it in the proper format, each part on its own line:
  Date
  To (name / designation / place)
  Subject: ...
  Salutation (Dear Sir/Madam,)
  Body in short paragraphs (2 to 4 lines each)
  Closing (Yours obediently / Yours sincerely,)
  Name
- For grammar, vocabulary or comprehension: give the answer first, then a one-line reason, then one example.
- For code, show it in short lines with a one-line explanation under it.
- Do not add "Final Answer" to letters, essays or explanations.`;

/* Math and Physics: LaTeX (the app renders it with MathView). */
const MATH_RULE = `${SIMPLE_STYLE}

OUTPUT FORMAT (the app renders LaTeX):
- Write ALL math in LaTeX: inline between $...$ and important equations on their own line between $$...$$.
- Never use markdown (no **, no ##, no tables, no code fences).
- Never put normal English words inside $...$. Words stay outside, math goes inside.
- Write "Step 1:", "Step 2:" ... each step on its own line.
- Use \\frac{a}{b}, x^{2}, a_{n}, \\sqrt{x}, \\bar{z}, \\lim_{n\\to\\infty}, |z|.
- Square roots must always be written as \\sqrt{...}, for example |z| = \\sqrt{a^{2}+b^{2}}.
- For several answers, give each answer on its own line: "(i) $...$", "(ii) $...$". Never put several answers in one $...$.
- End each question with a line: Final Answer: $...$
Example:
Given: $z = -4 + 7i$, so $a = -4$, $b = 7$.

Step 1: Find $a^{2} + b^{2}$.
$$a^{2} + b^{2} = (-4)^{2} + 7^{2} = 16 + 49 = 65$$

Step 2: Use the formula for the inverse.
$$z^{-1} = \\frac{a - bi}{a^{2} + b^{2}} = \\frac{-4 - 7i}{65}$$

Final Answer: $z^{-1} = -\\frac{4}{65} - \\frac{7}{65}i$`;

/* Urdu: plain Urdu script only (app shows normal text). */
const URDU_RULE = `
OUTPUT FORMAT (اردو میں جواب):
- پورا جواب سادہ اور درست اردو رسم الخط میں لکھیں (رومن اردو یا لمبے انگریزی جملوں سے پرہیز کریں، سوائے ناگزیر اصطلاحات کے)۔
- ہر نئی بات یا نکتہ نئی لکیر میں لکھیں، لمبے پیراگراف نہ بنائیں۔
- قدم بہ قدم وضاحت ہو تو مرحلہ 1:، مرحلہ 2: اس طرح ترتیب دیں۔
- مارک ڈاؤن (**, ##)، ٹیبلز یا کوڈ فینسز استعمال نہ کریں۔
- خط، درخواست یا مضمون ہو تو اس کے حصے (مقام/تاریخ، مخاطب، عنوان، القاب، نفسِ مضمون، اختتام) الگ الگ سطور میں باقاعدہ ترتیب سے لکھیں۔`;

const stripThink = (s) => String(s).replace(/<think>[\s\S]*?<\/think>/g, '').trim();
// keep the END of an old answer (that is what "continue" needs)
const short = (s, n = 600) => (String(s).length > n ? '…' + String(s).slice(-n) : String(s));

/** Build a compact summary of student progress to pass as `studentContext`. */
export function buildStudentContext({
    program = 'ICS Part 1',
    coveredTopics = [],
    streakDays = 0,
    notesCount = 0,
} = {}) {
    const parts = [`Program: ${program}`];
    if (notesCount > 0) parts.push(`Saved notes: ${notesCount}`);
    if (streakDays > 0) parts.push(`Study streak: ${streakDays} days`);
    if (coveredTopics.length > 0) parts.push(`Covered topics: ${coveredTopics.join(', ')}`);
    return parts.join(' | ');
}

// Chat with AI. Returns { text, finish }.
const chat = async (body) => {
    if (!GROQ_API_KEY) {
        throw new Error('Missing EXPO_PUBLIC_GROQ_API_KEY in your .env file.');
    }

    const res = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${GROQ_API_KEY}` },
        body: JSON.stringify(body),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) throw new Error(json?.error?.message || `Groq request failed (${res.status})`);
    const choice = json?.choices?.[0];
    return { text: choice?.message?.content ?? '', finish: choice?.finish_reason };
};

// Try with reasoning_effort first; if the model rejects that option, retry without it.
async function ask(body, effort) {
    try {
        return await chat({ ...body, reasoning_effort: effort });
    } catch (e) {
        if (/reasoning/i.test(e.message)) return chat(body);
        throw e;
    }
}

const friendlyLimit = (e) =>
    /output tokens per minute|OTPM|tokens per minute|TPM|too large|rate limit/i.test(e.message)
        ? new Error('Groq limit reached for this minute. Wait about 1 minute and try again.')
        : e;

/* Step 1 (only when there is a photo): the vision model just COPIES the question as text. */
async function readImage(imageBase64, isUrdu = false) {
    const promptText = isUrdu
        ? 'تصویر میں لکھے تمام سوالات کو اسی نمبرنگ کے ساتھ ہو بہ ہو کاپی کریں۔ کچھ حل نہ کریں اور اضافی وضاحت نہ لکھیں۔'
        : 'Copy ALL the questions written in this image as plain text, with the same numbering. ' +
        'Write math in LaTeX between $...$. Do NOT solve anything. Do NOT explain.';

    const { text } = await ask(
        {
            model: MODELS.vision,
            temperature: 0,
            max_completion_tokens: 800,
            messages: [
                {
                    role: 'user',
                    content: [
                        { type: 'text', text: promptText },
                        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
                    ],
                },
            ],
        },
        'none'
    );
    const seen = stripThink(text);
    if (!seen) throw new Error('Could not read the photo. Try a clearer or closer photo.');
    return seen;
}

/** Text and/or image question -> full tutor answer. */
export async function solveQuestion({ mode, text, imageBase64, history = [], studentName = '', studentContext = '' }) {
    const isMath = mode === 'math' || mode === 'physics';
    const isUrdu = mode === 'urdu';
    const rule = isMath ? MATH_RULE : isUrdu ? URDU_RULE : FORMAT_RULE;

    try {
        let task = text?.trim() || '';
        if (imageBase64) {
            const seen = await readImage(imageBase64, isUrdu);
            task =
                (task ? task : isUrdu ? 'نیچے دیے گئے تمام سوالات ترتیب سے حل کریں۔' : 'Solve ALL the questions below, one by one.') +
                '\n\nQuestions from the photo:\n' +
                seen;
        }
        if (!task) throw new Error('Type a question or add a photo.');

        const res = await ask(
            {
                model: isMath ? MODELS.solve : MODELS.light,
                temperature: 0.3,
                max_completion_tokens: SOLVE_MAX_TOKENS,
                messages: [
                    {
                        role: 'system',
                        content:
                            (TUTOR_PROMPTS[mode] || TUTOR_PROMPTS.computer) +
                            rule +
                            (studentName ? `\n\nThe student's name is ${studentName}.` : '') +
                            (studentContext
                                ? ` Student facts: ${studentContext} If the student asks when they started, or how much they covered, answer from these facts in 2-3 simple lines. Otherwise do not mention them.`
                                : ''),
                    },
                    ...history.slice(-2).map((m) => ({ role: m.role, content: short(m.content) })),
                    { role: 'user', content: task },
                ],
            },
            'low'
        );

        let answer = stripThink(res.text);
        if (!answer) throw new Error('The answer came back empty. Please ask again.');
        if (res.finish === 'length') {
            answer += isUrdu
                ? '\n\n⚠️ جواب ادھورا رہ گیا ہے۔ باقی حصہ دیکھنے کے لیے "continue" لکھیں۔'
                : '\n\n⚠️ The answer was cut off. Type "continue" to get the rest.';
        }
        return answer;
    } catch (e) {
        throw friendlyLimit(e);
    }
}

/**
 * Clean LaTeX delimiters for saved-note previews.
 */
export function cleanMath(text) {
    if (!text) return '';

    return String(text)
        .replace(/\$\$([\s\S]*?)\$\$/g, '$1')
        .replace(/\$([\s\S]*?)\$/g, '$1')
        .replace(/\\\[|\\\]/g, '')
        .replace(/\\\(|\\\)/g, '')
        .trim();
}