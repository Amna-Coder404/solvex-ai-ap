import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../config';

// If env vars are missing the app still works 100% offline.
export const supabase =
    SUPABASE_URL && SUPABASE_ANON_KEY
        ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            auth: {
                storage: AsyncStorage,
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: false,
            },
        })
        : null;

// Anonymous auth: gives each install a private user_id for Row Level Security.
export async function ensureUser() {
    if (!supabase) return null;
    try {
        const { data } = await supabase.auth.getSession();
        return data?.session?.user?.id ?? null; // koi anonymous sign-in nahi
    } catch {
        return null;
    }
}