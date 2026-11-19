import { Stack } from 'expo-router';
import { colors } from '../constants/theme';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTintColor: colors.text }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="SolverChat" options={{ title: 'Tutor' }} />
      <Stack.Screen name="TestSetup" options={{ title: 'Make Test' }} />
      <Stack.Screen name="NotesList" options={{ title: 'Notes' }} />
      <Stack.Screen name="NoteDetail" options={{ title: 'Note' }} />
      <Stack.Screen name="Quiz" options={{ title: 'Test', gestureEnabled: false }} />
      <Stack.Screen name="TestResult" options={{ title: 'Result' }} />
    </Stack>
  );
}