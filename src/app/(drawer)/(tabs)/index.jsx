import { Ionicons } from '@expo/vector-icons';
import { Stack, useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import Animated, { FadeIn, SlideInDown, ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuButton } from '../../../components/Drawer';
import { Enter, IconBadge, PressableScale } from '../../../components/UI';
import { SUBJECTS } from '../../../config';
import { colors, getSubjectTheme } from '../../../constants/theme';
import { useAuth } from '../../../hooks/useProfile';
import { getStats, syncAll } from '../../../services/storage';
import { s } from '../../../styles/HomeScreen.style';

const EMPTY = { totalNotes: 0, streak: 0, daysPresent: 0, testsTaken: 0, avgScore: 0 };
const WEEK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function ScoreRing({ score = 0, testsTaken = 0 }) {
  const clamped = Math.max(0, Math.min(100, Number(score) || 0));
  const activeColor = colors.primary;

  return (
    <View style={s.ringOuter}>
      <View style={[s.ringTrack, { borderColor: `${activeColor}28` }]} />
      <View
        style={[
          s.ringArc,
          {
            borderTopColor: activeColor,
            borderRightColor: clamped >= 35 ? activeColor : 'transparent',
            borderBottomColor: clamped >= 70 ? activeColor : 'transparent',
            borderLeftColor: clamped >= 90 ? activeColor : 'transparent',
            transform: [{ rotate: '-45deg' }],
          },
        ]}
      />
      <View style={s.ringInner}>
        <Text style={s.ringPercent}>{clamped}%</Text>
        <Text style={s.ringSub}>across tests</Text>
      </View>
      <Text style={s.ringFooter}>
        <Text style={s.ringFooterBold}>{testsTaken}</Text> tests taken
      </Text>
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const [stats, setStats] = useState(EMPTY);
  const [menu, setMenu] = useState(false);

  const joinedIso = user?.created_at;
  const dayNo = joinedIso ? Math.floor((Date.now() - new Date(joinedIso)) / 864e5) + 1 : 1;

  // Highlight streak days from Monday onward (visual weekly indicator)
  const activeCount = Math.max(0, Math.min(7, Number(stats.streak) || 0));

  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        setStats(await getStats());
        await syncAll().catch(() => { });
        if (active) setStats(await getStats());
      })();
      return () => { active = false; };
    }, [])
  );

  const openSolver = (mode) => {
    setMenu(false);
    router.push({ pathname: '/SolverChat', params: { mode } });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Solvex',
          headerStyle: { backgroundColor: colors.bg },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerRight: () => <MenuButton color={colors.text} />,
        }}
      />

      <ScrollView
        contentContainerStyle={[s.scroll, { paddingTop: 12 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Streak & Study Card */}
        <Enter index={0}>
          <View style={s.topCard}>
            <View style={s.topMetaRow}>
              <View style={s.dayBadge}>
                <Ionicons name="rocket" size={13} color="#fff" />
                <Text style={s.dayBadgeText}>DAY {dayNo}</Text>
              </View>
              <View style={s.streakBadge}>
                <Ionicons name="flame" size={16} color="#FFC857" />
                <Text style={s.streakBadgeText}>{stats.streak} day streak</Text>
              </View>
            </View>

            <Text style={s.topTitle}>Let's study today</Text>

            {/* Weekly Strip */}
            <View style={s.weekBox}>
              {WEEK_DAYS.map((letter, idx) => {
                const isDone = idx < activeCount;
                const isCurrent = idx === activeCount;
                return (
                  <View key={`${letter}-${idx}`} style={s.dayCol}>
                    <View
                      style={[
                        s.dayDot,
                        isDone && s.dayDotDone,
                        !isDone && isCurrent && s.dayDotCurrent,
                        !isDone && !isCurrent && s.dayDotIdle,
                      ]}
                    >
                      {isDone && <Ionicons name="flame" size={15} color="#F97316" />}
                    </View>
                    <Text style={[s.dayLetter, isCurrent && s.dayLetterActive]}>{letter}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Enter>

        {/* Your Progress Section */}
        <Enter index={1}>
          <View style={s.progressSection}>
            <View style={s.progressHeader}>
              <Text style={s.progressHeading}>Your progress</Text>
              <Text style={s.progressAllTime}>All time</Text>
            </View>

            <View style={s.progressGrid}>
              {/* Left Tall Card: Avg Score */}
              <View style={s.avgCard}>
                <Text style={s.avgTitle}>Avg score</Text>
                <ScoreRing score={stats.avgScore} testsTaken={stats.testsTaken} />
              </View>

              {/* Right Column: Two Stacked Cards */}
              <View style={s.rightStack}>
                <View style={s.miniCard}>
                  <View style={[s.miniIconWrap, { backgroundColor: colors.primarySoft }]}>
                    <Ionicons name="document-text" size={18} color={colors.primary} />
                  </View>
                  <Text style={s.miniValue}>{stats.totalNotes}</Text>
                  <Text style={s.miniLabel}>Saved notes</Text>
                </View>

                <View style={s.miniCard}>
                  <View style={[s.miniIconWrap, { backgroundColor: colors.successSoft }]}>
                    <Ionicons name="calendar" size={18} color={colors.success} />
                  </View>
                  <Text style={s.miniValue}>{stats.daysPresent}</Text>
                  <Text style={s.miniLabel}>Days present</Text>
                </View>
              </View>
            </View>
          </View>
        </Enter>

        {/* Make Test Card */}
        <Enter index={2}>
          <PressableScale onPress={() => router.push('/TestSetup')} scaleTo={0.97} style={s.testCard}>
            <View style={s.testGlow} />
            <View style={s.testIcon}>
              <Ionicons name="school" size={26} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.testTitle}>Make Test</Text>
              <Text style={s.testSub}>Random MCQs from your saved notes</Text>
            </View>
            <Ionicons name="arrow-forward-circle" size={38} color="#fff" />
          </PressableScale>
        </Enter>
      </ScrollView>

      {/* FAB */}
      <Animated.View
        entering={ZoomIn.delay(400).springify().damping(14)}
        style={[s.fab, { bottom: 24 + insets.bottom }]}
      >
        <PressableScale
          onPress={() => setMenu(true)}
          scaleTo={0.9}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}
        >
          <Ionicons name="sparkles" size={26} color="#fff" />
        </PressableScale>
      </Animated.View>

      {/* Bottom Sheet */}
      <Modal visible={menu} transparent animationType="none" onRequestClose={() => setMenu(false)}>
        <Animated.View entering={FadeIn.duration(200)} style={{ flex: 1 }}>
          <Pressable style={s.overlay} onPress={() => setMenu(false)}>
            <Animated.View
              entering={SlideInDown.springify().damping(18)}
              style={[s.sheet, { paddingBottom: 16 + insets.bottom }]}
            >
              <Pressable>
                <View style={s.handle} />
                <Text style={s.sheetTitle}>Ask AI tutor</Text>
                <Text style={s.sheetSub}>Choose a subject to start</Text>
                {SUBJECTS.map((sub) => {
                  const t = getSubjectTheme(sub.mode);
                  return (
                    <PressableScale
                      key={sub.mode}
                      onPress={() => openSolver(sub.mode)}
                      scaleTo={0.98}
                      style={s.option}
                    >
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

