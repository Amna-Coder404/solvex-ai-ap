import { Dimensions, StyleSheet } from 'react-native';
import { colors, font, radius, shadow, spacing } from '../constants/theme';

const { width: W, height: H } = Dimensions.get('window');

export const authStyles = StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg },

    // ---------- header ----------
    header: { position: 'absolute', left: W * 0.3, right: W * 0.06, top: W * 0.2 },
    appName: { ...font.h1, fontSize: 26, color: colors.onPrimary },
    subtitle: { ...font.body, color: colors.onPrimarySub, marginTop: spacing.xs },

    // ---------- background circles ----------
    circleTopDark: {
        position: 'absolute', width: W * 0.42, height: W * 0.42, borderRadius: W,
        left: -W * 0.02, top: -W * 0.05, backgroundColor: colors.primaryDark,
    },
    circleTopBig: {
        position: 'absolute', width: W * 1.06, height: W * 1.06, borderRadius: W,
        left: W * 0.25, top: -W * 0.235, backgroundColor: colors.primary,
        ...shadow.md,
    },
    circleBottomDark: {
        position: 'absolute', width: W * 0.5, height: W * 0.5, borderRadius: W,
        left: -W * 0.12, bottom: -W * 0.13, backgroundColor: colors.primaryDark,
    },
    circleBottomSmall: {
        position: 'absolute', width: W * 0.135, height: W * 0.135, borderRadius: W,
        left: W * 0.3, bottom: W * 0.28, backgroundColor: colors.primary,
    },

    // ---------- layout ----------
    scroll: {
        flexGrow: 1,
        paddingHorizontal: W * 0.08,
        paddingTop: Math.min(W * 0.78, H * 0.38),
        paddingBottom: spacing.xl,
    },

    // ---------- tabs ----------
    tabsRow: {
        flexDirection: 'row', alignSelf: 'center', marginBottom: spacing.lg,
        borderBottomWidth: 1, borderBottomColor: colors.border,
    },
    tab: {
        paddingHorizontal: spacing.lg, paddingVertical: spacing.sm - 2,
        borderBottomWidth: 2, borderBottomColor: 'transparent',
    },
    tabActive: { borderBottomColor: colors.primaryDark },
    tabText: { ...font.small, fontWeight: '600', color: colors.sub },
    tabTextActive: { color: colors.primaryDark },

    // ---------- field (simple) ----------
    field: {
        flexDirection: 'row', alignItems: 'center', height: 50,
        backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
        borderRadius: radius.md, paddingHorizontal: spacing.lg, marginBottom: spacing.md,
    },
    fieldIcon: { marginRight: spacing.md },
    fieldInput: { flex: 1, fontSize: 15, color: colors.text, height: '100%', paddingVertical: 0 },

    // ---------- button ----------
    button: {
        alignSelf: 'center', width: '68%', height: 48, borderRadius: radius.pill,
        marginTop: spacing.lg, backgroundColor: colors.primary,
        alignItems: 'center', justifyContent: 'center',
        ...shadow.primary,
    },
    buttonDisabled: { opacity: 0.7 },
    buttonText: { color: colors.onPrimary, ...font.h3 },
});