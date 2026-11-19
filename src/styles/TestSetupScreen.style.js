import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg, padding: 16, gap: 16 },
  label: { fontWeight: '800', color: colors.text, marginBottom: 12, fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  subj: {
    width: '48%', flexGrow: 1, padding: 14, borderRadius: radius.lg, gap: 10,
    backgroundColor: colors.bg, borderWidth: 2, borderColor: 'transparent',
  },
  subjOn: { backgroundColor: colors.card, ...shadow.sm },
  subjName: { fontWeight: '800', color: colors.text, fontSize: 15 },
  subjCount: { color: colors.sub, fontSize: 12, fontWeight: '600' },
  warn: { color: colors.danger, lineHeight: 21 },
  stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 },
  stepBtn: {
    width: 52, height: 52, borderRadius: 18, backgroundColor: colors.primarySoft,
    alignItems: 'center', justifyContent: 'center',
  },
  qty: {
    width: 90, textAlign: 'center', fontSize: 34, fontWeight: '800', color: colors.text,
    borderBottomWidth: 3, borderColor: colors.primary, paddingVertical: 2,
  },
  hint: { color: colors.sub, textAlign: 'center', marginTop: 12, fontSize: 13 },
});
