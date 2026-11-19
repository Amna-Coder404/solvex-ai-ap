import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const s = StyleSheet.create({
    scroll: { padding: 16, paddingBottom: 130, gap: 16 },

    // Hero
    hero: {
        backgroundColor: colors.primary, borderRadius: radius.xl, padding: 22,
        overflow: 'hidden', ...shadow.primary,
    },
    circleBig: {
        position: 'absolute', right: -50, top: -60, width: 190, height: 190,
        borderRadius: 95, backgroundColor: 'rgba(255,255,255,0.10)',
    },
    circleSmall: {
        position: 'absolute', right: 60, bottom: -50, width: 110, height: 110,
        borderRadius: 55, backgroundColor: 'rgba(255,255,255,0.08)',
    },
    heroHello: { color: colors.onPrimarySub, fontSize: 14, fontWeight: '600' },
    heroTitle: { color: '#fff', fontSize: 26, fontWeight: '800', letterSpacing: -0.5, marginTop: 2 },
    heroRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 18 },
    heroPill: {
        flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.18)',
        paddingVertical: 10, paddingHorizontal: 14, borderRadius: radius.pill,
    },
    heroPillText: { color: '#fff', fontWeight: '800', fontSize: 14 },

    // Stats

    statsCard: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card,
        borderRadius: radius.lg, paddingVertical: 16, borderWidth: 1, borderColor: colors.border, ...shadow.sm,
    },
    stat: { flex: 1, alignItems: 'center', gap: 4 },
    divider: { width: 1, height: 40, backgroundColor: colors.border },
    statValue: { fontSize: 20, fontWeight: '800', color: colors.text, letterSpacing: -0.3 },
    statLabel: { color: colors.sub, fontSize: 12, fontWeight: '600' },
    // Make test
    testCard: {
        backgroundColor: colors.ink, borderRadius: radius.xl, padding: 20,
        flexDirection: 'row', alignItems: 'center', gap: 14, overflow: 'hidden', ...shadow.md,
    },
    testGlow: {
        position: 'absolute', left: -30, bottom: -50, width: 140, height: 140,
        borderRadius: 70, backgroundColor: 'rgba(124,108,255,0.35)',
    },
    testIcon: {
        width: 52, height: 52, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.14)',
        alignItems: 'center', justifyContent: 'center',
    },
    testTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
    testSub: { color: 'rgba(255,255,255,0.7)', marginTop: 2, fontSize: 13 },

    // Quick ask
    quickRow: { flexDirection: 'row', gap: 10 },
    quick: {
        flex: 1, alignItems: 'center', gap: 8, paddingVertical: 14, borderRadius: radius.lg,
        backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, ...shadow.sm,
    },
    quickText: { fontSize: 12, fontWeight: '700', color: colors.text },

    // FAB
    fab: {
        position: 'absolute', right: 20, width: 62, height: 62, borderRadius: 22,
        backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', ...shadow.primary,
    },

    // Bottom sheet
    overlay: { flex: 1, backgroundColor: colors.overlay, justifyContent: 'flex-end' },
    sheet: {
        backgroundColor: colors.card, borderTopLeftRadius: 28, borderTopRightRadius: 28,
        paddingHorizontal: 20, paddingTop: 10,
    },
    handle: {
        alignSelf: 'center', width: 44, height: 5, borderRadius: 3,
        backgroundColor: colors.border, marginBottom: 14,
    },
    sheetTitle: { fontSize: 18, fontWeight: '800', color: colors.text },
    sheetSub: { color: colors.sub, marginTop: 2, marginBottom: 10 },
    option: {
        flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth, borderColor: colors.border,
    },
    optionText: { flex: 1, fontSize: 16, color: colors.text, fontWeight: '700' },
    // Advice
    adviceCard: {
        flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: colors.card,
        borderRadius: radius.lg, padding: 16, borderWidth: 1, borderColor: colors.border,
    },
    adviceIcon: {
        width: 44, height: 44, borderRadius: 14, backgroundColor: 'rgba(255,200,87,0.18)',
        alignItems: 'center', justifyContent: 'center',
    },
    adviceLabel: { color: colors.sub, fontSize: 12, fontWeight: '700', marginBottom: 2 },
    adviceText: { color: colors.text, fontSize: 14, fontWeight: '600', lineHeight: 20 },
});
