import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const s = StyleSheet.create({
    scroll: {
        paddingHorizontal: 16,
        paddingBottom: 130,
        gap: 18,
    },

    // Top Card
    topCard: {
        backgroundColor: colors.primary,
        borderRadius: radius.xl,
        padding: 20,
        ...shadow.primary,
    },
    topMetaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    dayBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255,255,255,0.20)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: radius.pill,
    },
    dayBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    streakBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    streakBadgeText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    topTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800',
        letterSpacing: -0.5,
        marginTop: 14,
    },
    weekBox: {
        marginTop: 16,
        backgroundColor: 'rgba(255,255,255,0.13)',
        borderRadius: radius.lg,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dayCol: {
        alignItems: 'center',
        gap: 6,
    },
    dayDot: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayDotDone: {
        backgroundColor: '#fff',
    },
    dayDotCurrent: {
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderColor: 'rgba(255,255,255,0.75)',
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    dayDotIdle: {
        backgroundColor: 'rgba(255,255,255,0.16)',
    },
    dayLetter: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: 11,
        fontWeight: '700',
    },
    dayLetterActive: {
        color: '#fff',
        fontWeight: '800',
    },

    // Your Progress Section
    progressSection: {
        gap: 12,
    },
    progressHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        paddingHorizontal: 2,
    },
    progressHeading: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.text,
    },
    progressAllTime: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.sub,
    },
    progressGrid: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'stretch',
    },
    avgCard: {
        flex: 1.05,
        backgroundColor: colors.card,
        borderRadius: radius.xl,
        padding: 16,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'space-between',
        alignItems: 'center',
        ...shadow.sm,
    },
    avgTitle: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: '700',
        color: colors.text,
    },
    ringOuter: {
        width: 132,
        height: 132,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    ringTrack: {
        position: 'absolute',
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 11,
    },
    ringArc: {
        position: 'absolute',
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 11,
    },
    ringInner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ringPercent: {
        fontSize: 24,
        fontWeight: '800',
        color: colors.text,
        letterSpacing: -0.5,
    },
    ringSub: {
        fontSize: 11,
        color: colors.sub,
        fontWeight: '600',
        marginTop: 1,
    },
    ringFooter: {
        fontSize: 12,
        color: colors.sub,
        fontWeight: '600',
    },
    ringFooterBold: {
        color: colors.text,
        fontWeight: '800',
    },
    rightStack: {
        flex: 1,
        gap: 12,
    },
    miniCard: {
        flex: 1,
        backgroundColor: colors.card,
        borderRadius: radius.xl,
        padding: 14,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        ...shadow.sm,
    },
    miniIconWrap: {
        width: 34,
        height: 34,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    miniValue: {
        fontSize: 22,
        fontWeight: '800',
        color: colors.text,
        letterSpacing: -0.4,
    },
    miniLabel: {
        fontSize: 12,
        color: colors.sub,
        fontWeight: '600',
        marginTop: 2,
    },

    // Make Test Card
    testCard: {
        backgroundColor: colors.ink,
        borderRadius: radius.xl,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        overflow: 'hidden',
        ...shadow.md,
    },
    testGlow: {
        position: 'absolute',
        left: -30,
        bottom: -50,
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: 'rgba(124,108,255,0.35)',
    },
    testIcon: {
        width: 52,
        height: 52,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.14)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    testTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
    testSub: { color: 'rgba(255,255,255,0.7)', marginTop: 2, fontSize: 13 },

    // FAB
    fab: {
        position: 'absolute',
        right: 20,
        width: 62,
        height: 62,
        borderRadius: 22,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        ...shadow.primary,
    },

    // Bottom sheet
    overlay: { flex: 1, backgroundColor: colors.overlay, justifyContent: 'flex-end' },
    sheet: {
        backgroundColor: colors.card,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    handle: {
        alignSelf: 'center',
        width: 44,
        height: 5,
        borderRadius: 3,
        backgroundColor: colors.border,
        marginBottom: 14,
    },
    sheetTitle: { fontSize: 18, fontWeight: '800', color: colors.text },
    sheetSub: { color: colors.sub, marginTop: 2, marginBottom: 10 },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.border,
    },
    optionText: { flex: 1, fontSize: 16, color: colors.text, fontWeight: '700' },
});