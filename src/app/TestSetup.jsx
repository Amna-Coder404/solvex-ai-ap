import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button, Card, Enter, IconBadge, PressableScale } from '../components/UI';
import { SUBJECTS } from '../config';
import { colors, getSubjectTheme } from '../constants/theme';
import { getBankCount } from '../services/mcqBank';
import { st } from '../styles/TestSetupScreen.style';

export default function TestSetupScreen() {

  const router = useRouter();
  const [mode, setMode] = useState('math');
  const [qty, setQty] = useState('1');

  // Offline bank: counts come straight from src/data/mcqs
  const counts = Object.fromEntries(SUBJECTS.map((s) => [s.mode, getBankCount(s.mode)]));

  const max = counts[mode] ?? 0;
  const clamp = (v) => Math.max(1, Math.min(max, v));

  const onQty = (t) => {
    const n = parseInt(t.replace(/[^0-9]/g, ''), 10);
    setQty(Number.isNaN(n) ? '' : String(max ? Math.min(n, max) : n));
  };
  const pickMode = (m) => { setMode(m); setQty('1'); };

  const n = parseInt(qty, 10);
  const valid = max > 0 && !Number.isNaN(n) && n >= 1 && n <= max;

  return (
    <View style={st.screen}>
      <Enter index={0}>
        <Card>
          <Text style={st.label}>1. Choose subject</Text>
          <View style={st.grid}>
            {SUBJECTS.map((s) => {
              const t = getSubjectTheme(s.mode);
              const on = mode === s.mode;
              return (
                <PressableScale
                  key={s.mode}
                  onPress={() => pickMode(s.mode)}
                  scaleTo={0.95}
                  style={[st.subj, on && st.subjOn, on && { borderColor: t.fg }]}
                >
                  <IconBadge name={s.icon} color={on ? '#fff' : t.fg} bg={on ? t.fg : t.bg} size={42} />
                  <View>
                    <Text style={st.subjName}>{s.label}</Text>
                    <Text style={st.subjCount}>{counts[s.mode] ?? 0} questions</Text>
                  </View>
                </PressableScale>
              );
            })}
          </View>
        </Card>
      </Enter>

      <Enter index={1}>
        <Card>
          <Text style={st.label}>2. Number of questions</Text>
          {max === 0 ? (
            <Text style={st.warn}>No questions in this subject yet.</Text>
          ) : (
            <>
              <View style={st.stepper}>
                <PressableScale style={st.stepBtn} onPress={() => setQty(String(clamp((n || 1) - 1)))}>
                  <Ionicons name="remove" size={28} color={colors.primary} />
                </PressableScale>
                <TextInput value={qty} onChangeText={onQty} keyboardType="number-pad" style={st.qty} maxLength={3} />
                <PressableScale style={st.stepBtn} onPress={() => setQty(String(clamp((n || 0) + 1)))}>
                  <Ionicons name="add" size={28} color={colors.primary} />
                </PressableScale>
              </View>
              <Text style={st.hint}>Choose 1 to {max} questions</Text>
            </>
          )}
        </Card>
      </Enter>

      <Enter index={2}>
        <Button title="Start Test" icon="play" disabled={!valid} onPress={() => router.push({ pathname: '/Quiz', params: { mode, count: String(n) } })} />
      </Enter>
    </View>
  );
}