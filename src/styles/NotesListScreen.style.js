import { StyleSheet } from 'react-native';
import { colors, radius } from '../constants/theme';

export const st = StyleSheet.create({
  list: { padding: 16, gap: 12, flexGrow: 1 },
  card: { padding: 16, borderRadius: radius.lg, borderLeftWidth: 5 },
  q: { fontWeight: '800', fontSize: 16, color: colors.text, lineHeight: 22 },
  sol: { color: colors.sub, marginTop: 6, lineHeight: 20 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  date: { fontSize: 12, color: colors.sub, fontWeight: '600' },
  sync: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  syncText: { fontSize: 12, fontWeight: '700' },
});
