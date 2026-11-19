export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
export const GROQ_API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;

// Change here if Groq retires/renames a model.
export const MODELS = {
    vision: 'qwen/qwen3.8-27b',   // photo -> text (OCR) only
    solve: 'openai/gpt-oss-120b', // math + physics solutions
    light: 'openai/gpt-oss-20b',  // english, computer, tests
};
// Order = FAB menu order. AsyncStorage key is `notes_${mode}`.
export const SUBJECTS = [
    { mode: 'math', label: 'Math', notesLabel: 'math_notes', icon: 'calculator-outline' },
    { mode: 'physics', label: 'Physics', notesLabel: 'phy_notes', icon: 'planet-outline' },
    { mode: 'computer', label: 'Computer', notesLabel: 'comp_notes', icon: 'laptop-outline' },
    { mode: 'english', label: 'English', notesLabel: 'eng_notes', icon: 'book-outline' },
];

export const getSubject = (mode) => SUBJECTS.find((s) => s.mode === mode) || SUBJECTS[0];
