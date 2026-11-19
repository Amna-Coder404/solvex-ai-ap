import { StyleSheet } from 'react-native';
import { colors, radius } from '../constants/theme';

export const st = StyleSheet.create({
  scroll: { padding: 16, gap: 14, paddingBottom: 40 },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  labelPill: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: radius.pill, backgroundColor: colors.primarySoft },
  label: { fontSize: 11, fontWeight: '800', color: colors.primary, textTransform: 'uppercase', letterSpacing: 0.8 },
  text: { fontSize: 16, lineHeight: 25, color: colors.text },
  date: { color: colors.sub, fontSize: 12, textAlign: 'center', fontWeight: '600' },
  actions: { gap: 10, marginTop: 4 },
});
