import { GROQ_API_KEY, MODELS, getSubject } from '../config';

const URL = 'https://api.groq.com/openai/v1/chat/completions';

// If you get an "output tokens per minute" error, lower these numbers.
const SOLVE_MAX_TOKENS = 3500;
const TEST_MAX_TOKENS = 2500;

const TUTOR_PROMPTS = {
    math: 'You are an expert Math tutor for ICS (Intermediate Computer Science) students. Solve step by step, explain each step briefly, and finish with a clearly marked "Final Answer".',
    physics: 'You are an expert Physics tutor for ICS students. Give the given data, formula, substitution with units, and a clearly marked "Final Answer".',
    computer: 'You are an expert Computer Science tutor for ICS students (programming, databases, networks, logic). Explain simply; show short code when useful.',
    english: 'You are an expert English tutor for ICS students. Help with grammar, comprehension, vocabulary and writing; give clear examples.',
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
- NEVER use LaTeX, $ signs, backslashes, markdown (**, ##) or tables.
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

/* ---------- LaTeX -> plain text cleaner (used for test questions and note previews) ---------- */
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻', '+': '⁺', n: 'ⁿ' };
const toSup = (s) => ([...s].every((c) => SUP[c]) ? [...s].map((c) => SUP[c]).join('') : `^(${s})`);

export function cleanMath(text) {
    const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉', '-': '₋', '+': '₊', n: 'ₙ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', x: 'ₓ', a: 'ₐ', m: 'ₘ', p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ' };
    const toSub = (s) => ([...s].every((c) => SUB[c]) ? [...s].map((c) => SUB[c]).join('') : `_${s}`);
    let t = String(text).replace(/<think>[\s\S]*?<\/think>/g, '');
    t = t
        .replace(/\\left|\\right/g, '')
        .replace(/\\text\{([^{}]*)\}/g, '$1')
        .replace(/\\(?:bar|overline)\{([^{}]*)\}/g, 'conj($1)')
        .replace(/_\{([^{}]*)\}/g, (_, s) => toSub(s))
        .replace(/_([a-zA-Z0-9])/g, (_, s) => toSub(s));

    // nested-safe fractions: repeat until no \frac is left
    let prev;
    do {
        prev = t;
        t = t.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)');
    } while (t !== prev);

    t = t
        .replace(/\((-?\w+)\)\/\((-?\w+)\)/g, '$1/$2') // (a)/(b) -> a/b when simple
        .replace(/\\sqrt\{([^{}]*)\}/g, '√($1)')
        .replace(/\\cdot/g, '·').replace(/\\times/g, '×').replace(/\\div/g, '÷')
        .replace(/\\pm/g, '±').replace(/\\leq?/g, '≤').replace(/\\geq?/g, '≥')
        .replace(/\\neq/g, '≠').replace(/\\approx/g, '≈').replace(/\\infty/g, '∞')
        .replace(/\\pi/g, 'π').replace(/\\theta/g, 'θ').replace(/\\alpha/g, 'α').replace(/\\beta/g, 'β')
        .replace(/\\(?:Rightarrow|implies)/g, '⇒').replace(/\\(?:to|rightarrow)/g, '→')
        .replace(/\\circ/g, '°')
        .replace(/\^\{([^{}]*)\}/g, (_, s) => toSup(s))
        .replace(/\^(-?\d+|[a-zA-Z])/g, (_, s) => toSup(s))
        .replace(/\\\\/g, '\n')
        .replace(/\\[,;! ]/g, ' ')
        .replace(/\\\[|\\\]|\\\(|\\\)/g, '')
        .replace(/\$+/g, '')
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/^#{1,6}\s*/gm, '')
        .replace(/[{}]/g, '')
        .replace(/[ \t]{2,}/g, ' ')
        .replace(/^[ \t]+|[ \t]+$/gm, '')
        .replace(/\n{3,}/g, '\n\n');
    return t.trim();
}

const stripThink = (s) => String(s).replace(/<think>[\s\S]*?<\/think>/g, '').trim();
// keep the END of an old answer (that is what "continue" needs)
const short = (s, n = 600) => (String(s).length > n ? '…' + String(s).slice(-n) : String(s));

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

/* Step 1 (only when there is a photo): the vision model just COPIES the question as text.
   This output is short, so it fits the small output limit of the vision model. */
async function readImage(imageBase64) {
    const { text } = await ask(
        {
            model: MODELS.vision,
            temperature: 0,
            max_completion_tokens: 800,
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text:
                                'Copy ALL the questions written in this image as plain text, with the same numbering. ' +
                                'Write math in LaTeX between $...$. Do NOT solve anything. Do NOT explain.',
                        },
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
export async function solveQuestion({ mode, text, imageBase64, history = [] }) {
    const isMath = mode === 'math' || mode === 'physics';
    try {
        let task = text?.trim() || '';
        if (imageBase64) {
            const seen = await readImage(imageBase64);
            task =
                (task ? task : 'Solve ALL the questions below, one by one.') +
                '\n\nQuestions from the photo:\n' +
                seen;
        }
        if (!task) throw new Error('Type a question or add a photo.');

        // Step 2: a text model writes the full solution.
        // math/physics -> big model (120b), english/computer -> light model (20b): separate daily limits.
        const res = await ask(
            {
                model: isMath ? MODELS.solve : MODELS.light,
                temperature: 0.3,
                max_completion_tokens: SOLVE_MAX_TOKENS,
                messages: [
                    { role: 'system', content: TUTOR_PROMPTS[mode] + (isMath ? MATH_RULE : FORMAT_RULE) },
                    ...history.slice(-2).map((m) => ({ role: m.role, content: short(m.content) })),
                    { role: 'user', content: task },
                ],
            },
            'low' // gpt-oss accepts low | medium | high
        );

        let answer = stripThink(res.text);
        if (!answer) throw new Error('The answer came back empty. Please ask again.');
        if (res.finish === 'length') {
            answer += '\n\n⚠️ The answer was cut off. Type "continue" to get the rest.';
        }
        return answer;
    } catch (e) {
        throw friendlyLimit(e);
    }
}

function normalizeQuestion(q, clean) {
    if (!q || typeof q.question !== 'string' || !Array.isArray(q.options) || q.options.length < 2) return null;
    const options = q.options.map((o) => clean(String(o)));
    let correct = clean(String(q.correctAnswer ?? ''));
    if (!options.includes(correct)) {
        const letter = correct.match(/^\(?([A-D])[\).:]?$/i);
        if (letter) correct = options[letter[1].toUpperCase().charCodeAt(0) - 65];
        else correct = options.find((o) => o.toLowerCase() === correct.toLowerCase());
    }
    if (!correct) return null;
    return { question: clean(q.question), options, correctAnswer: correct };
}

/** N saved notes -> N MCQs in strict JSON. */
export async function generateMCQs(mode, notes, count) {
    const subject = getSubject(mode);
    // Saved math notes contain LaTeX: turn it into plain text before sending to the test model.
    const plain = mode === 'math' || mode === 'physics' ? cleanMath : (s) => s;
    const material = notes
        .map((n, i) => `${i + 1}. QUESTION: ${plain(n.question).slice(0, 300)}\n   SOLUTION: ${plain(n.solution).slice(0, 500)}`)
        .join('\n\n');

    let raw;
    try {
        const res = await chat({
            model: MODELS.light,
            temperature: 0.4,
            max_completion_tokens: TEST_MAX_TOKENS,
            reasoning_effort: 'low',
            response_format: { type: 'json_object' },
            messages: [
                {
                    role: 'system',
                    content:
                        'You write multiple choice tests. Respond ONLY with a JSON object of this exact shape: ' +
                        '{"questions":[{"question":"string","options":["A","B","C","D"],"correctAnswer":"must be exactly one of the options"}]}',
                },
                {
                    role: 'user',
                    content:
                        `Subject: ${subject.label}. Create exactly ${count} MCQs, one per study note below (same order). ` +
                        `Each has 4 options with exactly one correct answer. Use plain text only: no LaTeX, no $ signs, no markdown. ` +
                        `Write powers like x² and fractions like a/b.\n\n${material}`,
                },
            ],
        });
        raw = res.text;
    } catch (e) {
        throw friendlyLimit(e);
    }

    const cleaned = stripThink(raw);
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');

    if (start === -1 || end === -1) throw new Error('AI returned an invalid test. Please try again.');
    let parsed;
    try {
        parsed = JSON.parse(cleaned.slice(start, end + 1));
    } catch {
        throw new Error('AI returned an invalid test. Please try again.');
    }
    const clean = mode === 'math' || mode === 'physics' ? cleanMath : (s) => s.trim();
    const list = (parsed.questions || []).map((q) => normalizeQuestion(q, clean)).filter(Boolean).slice(0, count);

    if (!list.length) {
        throw new Error('Could not build questions from your notes. Please try again.');
    }
    return list;
}