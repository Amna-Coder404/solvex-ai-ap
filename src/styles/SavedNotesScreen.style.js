import { StyleSheet } from 'react-native';
import { colors, radius } from '../constants/theme';

export const st = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 16, borderRadius: radius.lg },
  title: { fontSize: 17, fontWeight: '800', color: colors.text },
  sub: { color: colors.sub, marginTop: 2, fontSize: 13 },
  countPill: {
    paddingVertical: 4, paddingHorizontal: 10, borderRadius: radius.pill, minWidth: 34, alignItems: 'center',
  },
  countText: { fontWeight: '800', fontSize: 13 },
});
