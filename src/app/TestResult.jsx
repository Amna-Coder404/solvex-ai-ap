import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, Enter, ProgressBar } from '../components/UI';
import { getSubject } from '../config';
import { colors } from '../constants/theme';
import { st } from '../styles/TestResultScreen.style';
import { formatDateTime } from '../utils/utils';

export default function TestResultScreen() {

  const router = useRouter();
  const params = useLocalSearchParams();
  const result = JSON.parse(params.result);
  const [onlyMistakes, setOnlyMistakes] = useState(false);
  const items = result.details.map((d, idx) => ({ ...d, idx })).filter((d) => !onlyMistakes || !d.isCorrect);
  const good = result.scorePercentage >= 50;
  const heroBg = good ? colors.success : colors.danger;

  return (
    <ScrollView style={{ backgroundColor: colors.bg }} contentContainerStyle={st.scroll}>
      <Enter index={0}>
        <View style={[st.hero, { backgroundColor: heroBg }]}>
          <View style={st.circle} />
          <Text style={st.emoji}>{result.scorePercentage === 100 ? '🏆' : good ? '🎉' : '💪'}</Text>
          <Text style={st.score}>{result.scorePercentage}%</Text>
          <Text style={st.heroTitle}>{good ? 'Great job!' : 'Keep practising!'}</Text>
          <Text style={st.heroSub}>{getSubject(result.subject).label} • {result.correctAnswers}/{result.totalQuestions} correct</Text>
          <Text style={st.heroSub}>{formatDateTime(result.date)}</Text>
          <ProgressBar progress={result.scorePercentage / 100} color="#fff" height={8} style={[st.bar, { backgroundColor: 'rgba(255,255,255,0.3)' }]} />
        </View>
      </Enter>

      <Enter index={1}>
        <Button
          title={onlyMistakes ? 'Show all questions' : 'Show mistakes only'}
          icon={onlyMistakes ? 'list' : 'alert-circle-outline'}
          variant="outline"
          onPress={() => setOnlyMistakes((v) => !v)}
        />
      </Enter>

      {items.length === 0 && <Text style={st.perfect}>No mistakes — perfect! 🎯</Text>}

      {items.map((d, k) => (
        <Enter key={d.idx} index={k + 2}>
          <Card style={[st.item, { borderLeftColor: d.isCorrect ? colors.success : colors.danger }]}>
            <Text style={st.q}>{d.idx + 1}. {d.question}</Text>
            <Text style={[st.ans, { color: d.isCorrect ? colors.success : colors.danger }]}>
              Your answer: {d.selected}
            </Text>
            {!d.isCorrect && <Text style={[st.ans, { color: colors.success, marginTop: 2 }]}>Correct answer: {d.correctAnswer}</Text>}
          </Card>
        </Enter>
      ))}

      <Button title="Back to Home" icon="home" onPress={() => router.replace('/')} />
    </ScrollView>
  );
}
