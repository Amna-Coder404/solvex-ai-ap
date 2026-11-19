import * as Print from 'expo-print';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import MathView, { buildDoc, mathToHtml } from '../components/MathView';
import { Button, Card, Enter } from '../components/UI';
import { getSubject } from '../config';
import { colors } from '../constants/theme';
import { deleteNote } from '../services/storage';
import { st } from '../styles/NoteDetailScreen.style';
import { formatDateTime } from '../utils/utils';



const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const buildHtml = (note) => {
  const isMath = note.mode === 'math' || note.mode === 'physics';
  const solution = isMath ? mathToHtml(note.solution) : esc(note.solution).replace(/\n/g, '<br/>');
  const body = `
    <h2>${esc(getSubject(note.mode).label)} Note</h2>
    <p style="color:#666">${esc(formatDateTime(note.createdAt))}</p>
    <h3>Question</h3><p>${esc(note.question).replace(/\n/g, '<br/>')}</p>
    <h3>Solution</h3><div>${solution}</div>`;
  return `<html><body style="padding:24px">${buildDoc(body, { fontSize: 15, color: '#111' })}</body></html>`;
};

export default function NoteDetailScreen() {

  const router = useRouter();
  const params = useLocalSearchParams();
  const note = JSON.parse(params.note);

  const [busy, setBusy] = useState(false);

  const download = async () => {
    try {
      await Print.printAsync({ html: buildHtml(note) }); // system dialog -> "Save as PDF"
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const remove = () =>
    Alert.alert('Delete note?', 'This removes it from this device and the cloud.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive',
        onPress: async () => { await deleteNote(note.mode, note.id); router.back(); },
      },
    ]);

  return (
    <ScrollView style={{ backgroundColor: colors.bg }} contentContainerStyle={st.scroll}>
      <Enter index={0}>
        <Card>
          <View style={st.labelRow}><View style={st.labelPill}><Text style={st.label}>Question</Text></View></View>
          <Text style={st.text} selectable>{note.question}</Text>
        </Card>
      </Enter>
      <Enter index={1}>
        <Card>
          <View style={st.labelRow}><View style={st.labelPill}><Text style={st.label}>Solution</Text></View></View>
          {note.mode === 'math' || note.mode === 'physics' ? (
            <MathView text={note.solution} />
          ) : (
            <Text style={st.text} selectable>{note.solution}</Text>
          )}
        </Card>
      </Enter>
      <Text style={st.date}>{formatDateTime(note.createdAt)}</Text>
      <Enter index={2} style={st.actions}>
        <Button title="Download as PDF" icon="download-outline" onPress={download} />
        <Button title="Delete" icon="trash-outline" variant="danger" onPress={remove} />
      </Enter>
    </ScrollView>
  );
}
