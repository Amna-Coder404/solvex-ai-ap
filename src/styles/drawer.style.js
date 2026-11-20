import { Dimensions, StyleSheet } from 'react-native';
import { colors, font, radius, spacing } from '../constants/theme';

const { width: W } = Dimensions.get('window');
export const DRAWER_W = Math.min(W * 0.82, 320);

export const drawerStyles = StyleSheet.create({
    // ---------- header ----------
    header: {
        backgroundColor: colors.primary,
        paddingBottom: spacing.xl,
        paddingHorizontal: spacing.lg,
        borderBottomLeftRadius: radius.xl,
        borderBottomRightRadius: radius.xl,
        overflow: 'hidden',
    },
    decorCircle: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 75,
        right: -35,
        top: -35,
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
    },
    avatarRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: spacing.md,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.30)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        ...font.h1,
        color: colors.onPrimary,
        fontWeight: '800',
    },
    badgePill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.22)',
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.onPrimary,
    },
    name: {
        ...font.h2,
        color: colors.onPrimary,
        fontWeight: '800',
    },
    email: {
        ...font.small,
        color: colors.onPrimarySub,
        marginTop: 3,
    },

    // ---------- menu ----------
    menu: {
        padding: spacing.lg,
        gap: spacing.sm,
    },
    sectionLabel: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.6,
        textTransform: 'uppercase',
        color: colors.sub,
        marginBottom: 4,
        paddingHorizontal: 4,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        padding: spacing.md,
        borderRadius: radius.lg,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
    },
    itemDanger: {
        backgroundColor: colors.dangerSoft,
        borderColor: 'transparent',
    },
    itemIcon: {
        width: 40,
        height: 40,
        borderRadius: radius.md,
        backgroundColor: colors.primarySoft,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemIconDanger: {
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
    },
    itemText: {
        ...font.h3,
        color: colors.text,
        fontWeight: '700',
    },
    itemSub: {
        fontSize: 12,
        color: colors.sub,
        marginTop: 1,
    },
    itemTextDanger: {
        color: colors.danger,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.xs,
    },

    // ---------- footer ----------
    footer: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: spacing.md,
        paddingHorizontal: spacing.lg,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: colors.sub,
        fontWeight: '600',
    },

    // ---------- header button ----------
    menuBtn: {
        padding: spacing.sm,
        marginRight: spacing.xs,
    },
});