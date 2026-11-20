import { StyleSheet } from 'react-native';
import { colors, font, radius, shadow, spacing } from '../constants/theme';

export const profileStyles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: colors.overlay, justifyContent: 'flex-end' },
    sheet: {
        backgroundColor: colors.card, borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl,
        padding: spacing.xl, paddingBottom: spacing.xxl, ...shadow.md,
    },
    handle: {
        alignSelf: 'center', width: 44, height: 5, borderRadius: radius.pill,
        backgroundColor: colors.border, marginBottom: spacing.lg,
    },
    modalHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    modalTitle: { ...font.h2, color: colors.text },
    modalSub: { ...font.small, color: colors.sub, marginTop: spacing.xs, marginBottom: spacing.lg },
    modalActions: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.sm },
    modalAction: { flex: 1 },
});