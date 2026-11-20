import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const st = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: colors.bg },
  loadText: { color: colors.sub, marginTop: 14, fontWeight: '600' },
  errText: { color: colors.danger, textAlign: 'center', marginBottom: 12, fontWeight: '700' },
  errSub: { color: colors.sub, textAlign: 'center', marginBottom: 18 },
  scroll: { padding: 16, gap: 12, paddingBottom: 40 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progress: { color: colors.sub, fontWeight: '700' },
  progressNum: { color: colors.primary, fontWeight: '800' },
  qCard: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 18, borderWidth: 1, borderColor: colors.border, ...shadow.sm },
  question: { fontSize: 18, fontWeight: '800', color: colors.text, lineHeight: 27 },
  opt: {
    flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: colors.card,
    padding: 14, borderRadius: radius.md, borderWidth: 2, borderColor: colors.border,
  },
  optCorrect: { backgroundColor: colors.successSoft, borderColor: colors.success },
  optWrong: { backgroundColor: colors.dangerSoft, borderColor: colors.danger },
  letter: {
    width: 32, height: 32, borderRadius: 11, backgroundColor: colors.primarySoft,
    alignItems: 'center', justifyContent: 'center',
  },
  letterText: { fontWeight: '800', color: colors.primary },
  optText: { flex: 1, color: colors.text, fontSize: 15, lineHeight: 21 },
  feedback: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 4 },
  feedbackText: { fontWeight: '800', flex: 1 },
  repeatBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  repeatText: { fontSize: 12, fontWeight: '600', color: '#8A6D00' },
});
