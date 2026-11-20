import { supabase } from './supabase';

export const authService = {
    signUp: ({ email, password, name }) =>
        supabase.auth.signUp({
            email: email.trim(),
            password,
            options: { data: { name: (name ?? '').trim() } },
        }),

    signIn: ({ email, password }) =>
        supabase.auth.signInWithPassword({ email: email.trim(), password }),

    signOut: () => supabase.auth.signOut(),

    getSession: () => supabase.auth.getSession(),
};