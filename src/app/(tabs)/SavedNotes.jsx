import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Enter, IconBadge } from '../../components/UI';
import { SUBJECTS } from '../../config';
import { colors, getSubjectTheme } from '../../constants/theme';
import { getNoteCount, syncAll } from '../../services/storage';
import { st } from '../../styles/SavedNotesScreen.style';

export default function SavedNotesScreen() {
  const [counts, setCounts] = useState({});
  const router = useRouter();


  const load = useCallback(async () => {
    const entries = await Promise.all(SUBJECTS.map(async (s) => [s.mode, await getNoteCount(s.mode)]));
    setCounts(Object.fromEntries(entries));
  }, []);

  useFocusEffect(
    useCallback(() => {
      load();
      syncAll().then(load);
    }, [load])
  );

  return (
    <ScrollView style={{ backgroundColor: colors.bg }} contentContainerStyle={st.scroll}>
      {SUBJECTS.map((s, i) => {
        const t = getSubjectTheme(s.mode);
        return (
          <Enter key={s.mode} index={i}>
            <Card onPress={() => router.push({ pathname: '/NotesList', params: { mode: s.mode } })} style={st.row}>
              <IconBadge name={s.icon} color={t.fg} bg={t.bg} size={50} />
              <View style={{ flex: 1 }}>
                <Text style={st.title}>{s.notesLabel}</Text>
                <Text style={st.sub}>{s.label} notes</Text>
              </View>
              <View style={[st.countPill, { backgroundColor: t.bg }]}>
                <Text style={[st.countText, { color: t.fg }]}>{counts[s.mode] ?? 0}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.sub} />
            </Card>
          </Enter>
        );
      })}
    </ScrollView>
  );
}
