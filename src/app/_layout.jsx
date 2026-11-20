import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../constants/theme';
import { AuthProvider, useAuth } from '../hooks/useProfile';

function AuthLoader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

function RootStack() {
  const { session, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  const inAuth = segments[0] === '(auth)';
  const shouldRedirectToAuth = !loading && !session && !inAuth;
  const shouldRedirectToApp = !loading && !!session && inAuth;

  useEffect(() => {
    if (loading) return;
    if (shouldRedirectToAuth) {
      router.replace('/signin');
    } else if (shouldRedirectToApp) {
      router.replace('/');
    }
  }, [loading, shouldRedirectToAuth, shouldRedirectToApp, router]);

  if (loading || shouldRedirectToAuth || shouldRedirectToApp) {
    return <AuthLoader />;
  }

  return (
    <Stack screenOptions={{ headerTintColor: colors.text }}>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="SolverChat" options={{ title: 'Tutor' }} />
      <Stack.Screen name="TestSetup" options={{ title: 'Make Test' }} />
      <Stack.Screen name="NotesList" options={{ title: 'Notes' }} />
      <Stack.Screen name="NoteDetail" options={{ title: 'Note' }} />
      <Stack.Screen name="Quiz" options={{ title: 'Test', gestureEnabled: false }} />
      <Stack.Screen name="TestResult" options={{ title: 'Result' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },
});