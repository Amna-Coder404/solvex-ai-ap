import { StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../constants/theme';

export const s = StyleSheet.create({
  list: { padding: 12, flexGrow: 1 },
  bubble: { maxWidth: '88%', padding: 14, borderRadius: 20, marginVertical: 5 },
  mine: { alignSelf: 'flex-end', backgroundColor: colors.primary, borderBottomRightRadius: 6, ...shadow.primary },
  theirs: {
    alignSelf: 'flex-start', backgroundColor: colors.card, borderBottomLeftRadius: 6,
    borderWidth: 1, borderColor: colors.border, ...shadow.sm,
  },
  msg: { fontSize: 15, lineHeight: 23, color: colors.text },
  img: { width: 200, height: 150, borderRadius: 12, marginBottom: 8 },
  saveBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12, alignSelf: 'flex-start',
    backgroundColor: colors.primarySoft, paddingVertical: 8, paddingHorizontal: 14, borderRadius: radius.pill,
  },
  saveText: { color: colors.primary, fontWeight: '800', fontSize: 13 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, gap: 14 },
  emptyTitle: { fontSize: 20, fontWeight: '800', color: colors.text },
  emptyText: { color: colors.sub, textAlign: 'center', lineHeight: 22 },
  thinking: {
    alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 10, margin: 8,
    backgroundColor: colors.card, paddingVertical: 10, paddingHorizontal: 14, borderRadius: radius.pill,
    borderWidth: 1, borderColor: colors.border,
  },
  thinkingText: { color: colors.sub, fontWeight: '600' },
  preview: {
    flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14, paddingTop: 10,
    backgroundColor: colors.card,
  },
  previewImg: { width: 60, height: 60, borderRadius: 12 },
  bar: {
    flexDirection: 'row', alignItems: 'flex-end', gap: 6, paddingHorizontal: 10, paddingTop: 10,
    backgroundColor: colors.card, borderTopWidth: 1, borderColor: colors.border,
  },
  iconBtn: {
    width: 40, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.primarySoft,
  },
  input: {
    flex: 1, maxHeight: 120, minHeight: 42, backgroundColor: colors.bg, borderRadius: 22,
    paddingHorizontal: 16, paddingTop: 11, paddingBottom: 11, fontSize: 15, color: colors.text,
    borderWidth: 1, borderColor: colors.border,
  },
  send: {
    width: 44, height: 44, borderRadius: 16, backgroundColor: colors.primary,
    alignItems: 'center', justifyContent: 'center', ...shadow.primary,
  },
});
