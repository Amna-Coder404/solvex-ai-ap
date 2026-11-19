import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import Animated, { FadeIn, SlideInDown, ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Enter, IconBadge, PressableScale } from '../../components/UI';
import { SUBJECTS } from '../../config';
import { colors, getSubjectTheme } from '../../constants/theme';
import { getStats, syncAll } from '../../services/storage';
import { s } from '../../styles/HomeScreen.style';

const EMPTY = { totalNotes: 0, streak: 0, daysPresent: 0, testsTaken: 0, avgScore: 0 };

function Stat({ label, value, tint }) {
  return (
    <View style={s.stat}>
      <Text style={[s.statValue, { color: tint }]}>{value}</Text>
      <Text style={s.statLabel}>{label}</Text>
    </View>
  );
}
export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [stats, setStats] = useState(EMPTY);
  const [menu, setMenu] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        setStats(await getStats());
        await syncAll();
        if (active) setStats(await getStats());
      })();
      return () => { active = false; };
    }, [])
  );



  const openSolver = (mode) => {
    router.push({ pathname: '/SolverChat', params: { mode } });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <ScrollView
        contentContainerStyle={[s.scroll, { paddingTop: insets.top + 12 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ marginBottom: 18 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: colors.text }}>Solvex</Text>
          <Text style={{ fontSize: 13, color: colors.sub }}>Your AI study partner</Text>
        </View>



        {/* Hero */}
        <Enter index={0}>
          <View style={s.hero}>
            <View style={s.circleBig} />
            <View style={s.circleSmall} />
            <Text style={s.heroHello}>Welcome back 👋</Text>
            <Text style={s.heroTitle}>Let's study today</Text>
            <View style={s.heroRow}>
              <View style={s.heroPill}>
                <Ionicons name="flame" size={18} color="#FFC857" />
                <Text style={s.heroPillText}>{stats.streak} day streak</Text>
              </View>
              <View style={s.heroPill}>
                <Ionicons name="calendar" size={16} color="#fff" />
                <Text style={s.heroPillText}>{stats.daysPresent} days present</Text>
              </View>
            </View>
          </View>
        </Enter>


        {/* Stats */}
        <Enter index={1}>
          <View style={s.statsCard}>
            <Stat label="Notes" value={stats.totalNotes} tint={colors.primary} />
            <Stat label="Streak" value={stats.streak} tint={colors.warn} />
            <Stat label="Tests" value={stats.testsTaken} tint={colors.success} />
            <Stat label="Avg" value={`${stats.avgScore}%`} tint={colors.pink} />
          </View>
        </Enter>

        {/* Make test */}
        <Enter index={5}>
          <PressableScale onPress={() => router.push('/TestSetup')} scaleTo={0.97} style={s.testCard}>
            <View style={s.testGlow} />
            <View style={s.testIcon}><Ionicons name="school" size={26} color="#fff" /></View>
            <View style={{ flex: 1 }}>
              <Text style={s.testTitle}>Make Test</Text>
              <Text style={s.testSub}>Random MCQs from your saved notes</Text>
            </View>
            <Ionicons name="arrow-forward-circle" size={38} color="#fff" />
          </PressableScale>
        </Enter>


      </ScrollView>

      <Animated.View entering={ZoomIn.delay(400).springify().damping(14)} style={[s.fab, { bottom: 24 + insets.bottom }]}>
        <PressableScale onPress={() => setMenu(true)} scaleTo={0.9} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}>
          <Ionicons name="sparkles" size={26} color="#fff" />
        </PressableScale>
      </Animated.View>



      <Modal visible={menu} transparent animationType="none" onRequestClose={() => setMenu(false)}>
        <Animated.View entering={FadeIn.duration(200)} style={{ flex: 1 }}>
          <Pressable style={s.overlay} onPress={() => setMenu(false)}>
            <Animated.View entering={SlideInDown.springify().damping(18)} style={[s.sheet, { paddingBottom: 16 + insets.bottom }]}>
              <Pressable>
                <View style={s.handle} />
                <Text style={s.sheetTitle}>Ask AI tutor</Text>
                <Text style={s.sheetSub}>Choose a subject to start</Text>
                {SUBJECTS.map((sub) => {
                  const t = getSubjectTheme(sub.mode);
                  return (
                    <PressableScale key={sub.mode} onPress={() => openSolver(sub.mode)} scaleTo={0.98} style={s.option}>
                      <IconBadge name={sub.icon} color={t.fg} bg={t.bg} size={44} />
                      <Text style={s.optionText}>{sub.label}</Text>
                      <Ionicons name="chevron-forward" size={20} color={colors.sub} />
                    </PressableScale>
                  );
                })}
              </Pressable>
            </Animated.View>
          </Pressable>
        </Animated.View>
      </Modal>
    </View>
  );
}
