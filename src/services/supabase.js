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
        if (data?.session?.user) return data.session.user.id;
        const res = await supabase.auth.signInAnonymously();
        if (res.error) throw res.error;
        return res.data.user?.id ?? null;
    } catch {
        return null; // offline or not configured -> stay local, retry next sync
    }
}
