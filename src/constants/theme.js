// ───────────── ICS Smart Study — design tokens ─────────────
// Old keys (primary, bg, card, text, sub ...) are kept so nothing breaks.

export const colors = {
    primary: '#5648E8',
    primaryDark: '#3B30C4',
    primarySoft: '#EEEBFF',
    bg: '#F5F6FC',
    card: '#FFFFFF',
    text: '#0F1535',
    sub: '#6B7390',
    border: '#E6E8F2',
    success: '#12B76A',
    successSoft: '#DCFAE6',
    danger: '#F04438',
    dangerSoft: '#FEE4E2',
    warn: '#F79009',
    warnSoft: '#FEF0C7',
    pink: '#EC4899',
    pinkSoft: '#FCE7F3',
    ink: '#17154A',          // dark card background
    onPrimary: '#FFFFFF',
    onPrimarySub: 'rgba(255,255,255,0.78)',
    overlay: 'rgba(15,21,53,0.45)',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };

export const radius = { sm: 10, md: 14, lg: 20, xl: 28, pill: 999 };

export const shadow = {
    sm: {
        shadowColor: '#1B1F4B', shadowOpacity: 0.06, shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 }, elevation: 2,
    },
    md: {
        shadowColor: '#1B1F4B', shadowOpacity: 0.1, shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 }, elevation: 5,
    },
    primary: {
        shadowColor: '#5648E8', shadowOpacity: 0.35, shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 }, elevation: 8,
    },
};

export const font = {
    h1: { fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
    h2: { fontSize: 20, fontWeight: '800', letterSpacing: -0.3 },
    h3: { fontSize: 16, fontWeight: '700' },
    body: { fontSize: 15, lineHeight: 22 },
    small: { fontSize: 13 },
    tiny: { fontSize: 12 },
};

// Each subject gets its own colour so screens feel alive.
export const subjectTheme = {
    math: { fg: '#5648E8', bg: '#EEEBFF' },
    physics: { fg: '#0EA5E9', bg: '#E0F4FE' },
    computer: { fg: '#12B76A', bg: '#DCFAE6' },
    english: { fg: '#F79009', bg: '#FEF0C7' },
};
export const getSubjectTheme = (mode) => subjectTheme[mode] || subjectTheme.math;
