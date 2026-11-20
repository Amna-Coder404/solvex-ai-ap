
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../config';

// Expo Router can evaluate this module during server-side rendering.
const isServer = Platform.OS === 'web' && typeof window === 'undefined';

// Use safe storage during SSR, and persistent storage on actual devices.
const authStorage = {
    getItem: async (key) => {
        if (isServer) return null;
        return AsyncStorage.getItem(key);
    },

    setItem: async (key, value) => {
        if (isServer) return;
        await AsyncStorage.setItem(key, value);
    },

    removeItem: async (key) => {
        if (isServer) return;
        await AsyncStorage.removeItem(key);
    },
};

// If environment variables are missing, the app still works offline.
export const supabase =
    SUPABASE_URL && SUPABASE_ANON_KEY
        ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            auth: {
                storage: authStorage,
                autoRefreshToken: !isServer,
                persistSession: true,
                detectSessionInUrl: false,
            },
        })
        : null;

// Retrieve the current authenticated user's ID.
export async function ensureUser() {
    if (!supabase) return null;

    try {
        const { data, error } = await supabase.auth.getSession();

        if (error) return null;

        return data?.session?.user?.id ?? null;
    } catch {
        return null;
    }
}
