import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Button, Enter, PressableScale, ProgressBar } from '../components/UI';
import { colors } from '../constants/theme';
import { getMcqs } from '../services/mcqBank';
import { saveTest } from '../services/storage';
import { st } from '../styles/QuizScreen.style';

export default function QuizScreen() {
  const router = useRouter();
  const { mode, count: countParam } = useLocalSearchParams();
  const count = Number(countParam);
  const [status, setStatus] = useState('loading'); // loading | error | ready
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState([]);
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [saving, setSaving] = useState(false);

  const load = useCallback(() => {
    setStatus('loading');
    setError('');
    const qs = getMcqs(mode, count); // offline, from src/data/mcqs
    if (!qs.length) {
      setError('No questions for this subject yet.');
      setStatus('error');
      return;
    }
    setQuestions(qs); setI(0); setSelected(null); setAnswers([]);
    setStatus('ready');
  }, [mode, count]);

  useEffect(() => { load(); }, [load]);

  if (status === 'loading') {
    return (
      <View style={st.center}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={st.loadText}>Preparing your test…</Text>
      </View>
    );
  }
  if (status === 'error') {
    return (
      <View style={st.center}>
        <Text style={st.errText}>{error}</Text>
        <Button title="Try again" icon="refresh" onPress={load} />
        <Button title="Go back" variant="outline" onPress={() => router.back()} style={{ marginTop: 10 }} />
      </View>
    );
  }

  const q = questions[i];
  const answered = selected !== null;
  const last = i === questions.length - 1;

  const next = async () => {
    const rec = {
      question: q.question, options: q.options, correctAnswer: q.correctAnswer,
      selected, isCorrect: selected === q.correctAnswer, // instant local check
    };
    const all = [...answers, rec];
    if (!last) { setAnswers(all); setI(i + 1); setSelected(null); return; }

    setSaving(true);
    const correct = all.filter((a) => a.isCorrect).length;
    const saved = await saveTest({
      subject: mode,
      totalQuestions: all.length,
      correctAnswers: correct,
      scorePercentage: Math.round((correct / all.length) * 100),
      date: new Date().toISOString(),
      details: all,
    });
    router.replace({ pathname: '/TestResult', params: { result: JSON.stringify(saved) } });
  };

  const optStyle = (opt) => {
    if (!answered) return st.opt;
    if (opt === q.correctAnswer) return [st.opt, st.optCorrect];
    if (opt === selected) return [st.opt, st.optWrong];
    return [st.opt, { opacity: 0.55 }];
  };

  return (
    <ScrollView style={{ backgroundColor: colors.bg }} contentContainerStyle={st.scroll}>
      <View style={st.progressRow}>
        <Text style={st.progress}>Question <Text style={st.progressNum}>{i + 1}</Text> of {questions.length}</Text>
        <Text style={st.progress}>{Math.round(((i + (answered ? 1 : 0)) / questions.length) * 100)}%</Text>
      </View>
      <ProgressBar progress={(i + (answered ? 1 : 0)) / questions.length} height={8} />

      <Animated.View key={i} entering={FadeInRight.duration(320)} style={{ gap: 12 }}>
        <View style={st.qCard}>
          <View style={[st.repeatBadge, q.repeated <= 1 && { backgroundColor: '#E8EEF5' }]}>
            <Text style={[st.repeatText, q.repeated <= 1 && { color: '#4A5A6E' }]}>
              {q.repeated > 1
                ? `🔁 Repeated ${q.repeated} times in past papers`
                : 'Asked 1 time in past papers'}
            </Text>
          </View>
          <Text style={st.question}>{q.question}</Text>
        </View>
        {q.options.map((opt, idx) => {
          const isCorrect = answered && opt === q.correctAnswer;
          const isWrong = answered && opt === selected && opt !== q.correctAnswer;
          return (
            <PressableScale key={idx} scaleTo={0.97} onPress={() => !answered && setSelected(opt)} style={optStyle(opt)}>
              <View style={[st.letter, isCorrect && { backgroundColor: colors.success }, isWrong && { backgroundColor: colors.danger }, !answered && opt === selected && { backgroundColor: colors.primary }]}>
                {isCorrect ? <Ionicons name="checkmark" size={18} color="#fff" />
                  : isWrong ? <Ionicons name="close" size={18} color="#fff" />
                    : <Text style={st.letterText}>{String.fromCharCode(65 + idx)}</Text>}
              </View>
              <Text style={st.optText}>{opt}</Text>
            </PressableScale>
          );
        })}
      </Animated.View>

      {answered && (
        <Enter>
          <View style={st.feedback}>
            <Ionicons
              name={selected === q.correctAnswer ? 'happy-outline' : 'sad-outline'}
              size={22}
              color={selected === q.correctAnswer ? colors.success : colors.danger}
            />
            <Text style={[st.feedbackText, { color: selected === q.correctAnswer ? colors.success : colors.danger }]}>
              {selected === q.correctAnswer ? 'Correct!' : `Wrong. Correct answer: ${q.correctAnswer}`}
            </Text>
          </View>
        </Enter>
      )}
      <Button title={last ? 'Finish' : 'Next'} icon={last ? 'flag' : 'arrow-forward'} onPress={next} disabled={!answered} loading={saving} style={{ marginTop: 8 }} />
    </ScrollView>
  );
}