import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card, Empty, Enter, IconBadge } from '../../../components/UI';
import { getSubject } from '../../../config';
import { colors, getSubjectTheme } from '../../../constants/theme';
import { getTests, syncAll } from '../../../services/storage';
import { st } from '../../../styles/TestHistoryScreen.style';
import { formatDateTime } from '../../../utils/utils';

export default function TestHistoryScreen() {
  const [tests, setTests] = useState([]);

  const router = useRouter();
  useFocusEffect(
    useCallback(() => {
      let active = true;
      getTests().then((t) => active && setTests(t));
      syncAll().then(getTests).then((t) => active && setTests(t));
      return () => { active = false; };
    }, [])
  );

  return (
    <FlatList
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={st.list}
      data={tests}
      keyExtractor={(t) => t.id}
      ListEmptyComponent={<Empty icon="stats-chart-outline" text="No tests yet. Tap “Make Test” on the Home screen." />}
      renderItem={({ item, index }) => {
        const mistakes = item.totalQuestions - item.correctAnswers;
        const good = item.scorePercentage >= 50;
        const sub = getSubject(item.subject);
        const t = getSubjectTheme(item.subject);
        return (
          <Enter index={index}>
            <Card onPress={() => router.push({ pathname: '/TestResult', params: { result: JSON.stringify(item) } })} style={st.card}>
              <IconBadge name={sub.icon} color={t.fg} bg={t.bg} size={46} />
              <View style={{ flex: 1 }}>
                <Text style={st.title}>{sub.label}</Text>
                <Text style={st.sub}>{formatDateTime(item.date)}</Text>
                <Text style={st.sub}>{item.correctAnswers}/{item.totalQuestions} correct • {mistakes} mistake{mistakes === 1 ? '' : 's'}</Text>
              </View>
              <View style={[st.score, { backgroundColor: good ? colors.successSoft : colors.dangerSoft }]}>
                <Text style={[st.pct, { color: good ? colors.success : colors.danger }]}>{item.scorePercentage}%</Text>
              </View>
            </Card>
          </Enter>
        );
      }}
    />
  );
}
