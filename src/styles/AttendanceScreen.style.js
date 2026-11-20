import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  hero: {
    alignItems: 'center', gap: 6, backgroundColor: colors.primary, borderRadius: radius.xl,
    padding: 24, overflow: 'hidden', ...shadow.primary,
  },
  circle: {
    position: 'absolute', right: -40, top: -50, width: 160, height: 160,
    borderRadius: 80, backgroundColor: 'rgba(255,255,255,0.10)',
  },
  flameWrap: {
    width: 76, height: 76, borderRadius: 26, backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center', justifyContent: 'center', marginBottom: 4,
  },
  streak: { fontSize: 30, fontWeight: '800', color: '#fff', letterSpacing: -0.5 },
  heroSub: { color: colors.onPrimarySub, fontSize: 13, fontWeight: '600' },
  btn: {
    alignSelf: 'stretch',
    marginTop: 14,
    backgroundColor: colors.bg, // '#fff' ki jagah theme bg (ya dark/card color)
  },
  btnText: {
    color: colors.primary, // taake white/light bg par text clear dikhe
    fontWeight: '800',
  },
  done: {
    alignSelf: 'stretch', marginTop: 14, flexDirection: 'row', gap: 8, alignItems: 'center',
    justifyContent: 'center', paddingVertical: 15, borderRadius: radius.md,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  doneText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  heading: { fontSize: 18, fontWeight: '800', marginTop: 24, marginBottom: 10, color: colors.text },
  sub: { color: colors.sub, fontSize: 13 },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: colors.card, padding: 14,
    borderRadius: radius.md, marginBottom: 8, borderWidth: 1, borderColor: colors.border,
  },
  rowIcon: {
    width: 34, height: 34, borderRadius: 12, backgroundColor: colors.successSoft,
    alignItems: 'center', justifyContent: 'center',
  },
  rowText: { color: colors.text, fontWeight: '600', fontSize: 15 },
});