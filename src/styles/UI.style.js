import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const ui = StyleSheet.create({
  btn: {
    flexDirection: 'row', gap: 8, paddingVertical: 15, paddingHorizontal: 20,
    borderRadius: radius.md, alignItems: 'center', justifyContent: 'center',
  },
  btnText: { fontSize: 15, fontWeight: '800', letterSpacing: 0.2 },
  card: {
    backgroundColor: colors.card, borderRadius: radius.lg, padding: 16,
    borderWidth: 1, borderColor: colors.border, ...shadow.sm,
  },
  empty: { padding: 40, alignItems: 'center', gap: 14 },
  emptyText: { color: colors.sub, textAlign: 'center', fontSize: 15, lineHeight: 22 },
  badge: { alignItems: 'center', justifyContent: 'center' },
  sectionTitle: {
    fontSize: 13, fontWeight: '800', color: colors.sub, textTransform: 'uppercase',
    letterSpacing: 1, marginTop: 8, marginBottom: 2,
  },
  chip: {
    flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 10,
    paddingHorizontal: 16, borderRadius: radius.pill, backgroundColor: colors.primarySoft,
    borderWidth: 1.5, borderColor: 'transparent',
  },
  chipOn: { backgroundColor: colors.primary, ...shadow.primary },
  chipText: { color: colors.primary, fontWeight: '700' },
  track: { backgroundColor: colors.border, borderRadius: radius.pill, overflow: 'hidden' },
  fill: { borderRadius: radius.pill },
});
