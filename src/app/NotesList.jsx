import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useCallback, useLayoutEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card, Empty, Enter } from '../components/UI';
import { getSubject } from '../config';
import { colors, getSubjectTheme } from '../constants/theme';
import { cleanMath } from '../services/groq';
import { getNotes, syncAll } from '../services/storage';
import { st } from '../styles/NotesListScreen.style';
import { formatDateTime } from '../utils/utils';

export default function NotesListScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const { mode } = useLocalSearchParams();
  const subject = getSubject(mode);
  const theme = getSubjectTheme(mode);
  const [notes, setNotes] = useState([]);

  useLayoutEffect(() => { navigation.setOptions({ title: subject.notesLabel }); }, [navigation, subject.notesLabel]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      getNotes(mode).then((n) => active && setNotes(n)); // offline-first: show local immediately
      syncAll().then(() => getNotes(mode)).then((n) => active && setNotes(n)); // then refresh after sync
      return () => { active = false; };
    }, [mode])
  );

  return (
    <FlatList
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={st.list}
      data={notes}
      keyExtractor={(n) => n.id}
      ListEmptyComponent={<Empty icon="bookmarks-outline" text="No notes yet. Ask the AI tutor a question and tap “Save”." />}
      renderItem={({ item, index }) => (
        <Enter index={index}>
          <Card
            onPress={() => router.push({ pathname: '/NoteDetail', params: { note: JSON.stringify(item) } })}
            style={[st.card, { borderLeftColor: theme.fg }]}
          >
            <Text style={st.q} numberOfLines={2}>{item.question}</Text>
            <Text style={st.sol} numberOfLines={2}>
              {mode === 'math' || mode === 'physics' ? cleanMath(item.solution) : item.solution}
            </Text>
            <View style={st.footer}>
              <Text style={st.date}>{formatDateTime(item.createdAt)}</Text>
              <View style={st.sync}>
                <Ionicons name={item.synced ? 'cloud-done-outline' : 'cloud-offline-outline'} size={16} color={item.synced ? colors.success : colors.warn} />
                <Text style={[st.syncText, { color: item.synced ? colors.success : colors.warn }]}>{item.synced ? 'Synced' : 'Offline'}</Text>
              </View>
            </View>
          </Card>
        </Enter>
      )}
    />
  );
}
