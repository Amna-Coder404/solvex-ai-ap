import { StyleSheet } from 'react-native';
import { colors, radius } from '../constants/theme';

export const st = StyleSheet.create({
  list: { padding: 16, gap: 12, flexGrow: 1 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 14, borderRadius: radius.lg },
  title: { fontWeight: '800', fontSize: 16, color: colors.text },
  sub: { color: colors.sub, marginTop: 2, fontSize: 13 },
  score: { width: 66, height: 66, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  pct: { fontSize: 20, fontWeight: '900' },
});
