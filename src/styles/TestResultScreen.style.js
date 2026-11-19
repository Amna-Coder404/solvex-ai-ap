import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const st = StyleSheet.create({
  scroll: { padding: 16, gap: 14, paddingBottom: 40 },
  hero: { alignItems: 'center', gap: 6, padding: 24, borderRadius: radius.xl, overflow: 'hidden', ...shadow.md },
  circle: {
    position: 'absolute', right: -40, top: -50, width: 160, height: 160,
    borderRadius: 80, backgroundColor: 'rgba(255,255,255,0.12)',
  },
  emoji: { fontSize: 40 },
  score: { fontSize: 60, fontWeight: '900', color: '#fff', letterSpacing: -2 },
  heroTitle: { color: '#fff', fontSize: 18, fontWeight: '800' },
  heroSub: { color: 'rgba(255,255,255,0.85)', fontWeight: '600' },
  bar: { alignSelf: 'stretch', marginTop: 12 },
  perfect: { textAlign: 'center', color: colors.success, fontWeight: '800', fontSize: 16, paddingVertical: 10 },
  item: { borderLeftWidth: 5 },
  q: { fontWeight: '800', color: colors.text, fontSize: 15, lineHeight: 22 },
  ans: { marginTop: 8, fontWeight: '600', lineHeight: 20 },
});
