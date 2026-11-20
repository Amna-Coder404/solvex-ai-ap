import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../services/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [session, setSession] = useState(undefined); // undefined = loading
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data }) => {
            if (data.session?.user?.is_anonymous) {
                await supabase.auth.signOut();
                setSession(null);
                return;
            }
            setSession(data.session);
        });
        const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
            setSession(s?.user?.is_anonymous ? null : s)
        );
        return () => sub.subscription.unsubscribe();
    }, []);

    const user = session?.user ?? null;

    useEffect(() => {
        if (!user) { setProfile(null); return; }
        supabase.from('profiles').select('*').eq('id', user.id).maybeSingle()
            .then(({ data }) => setProfile(data));
    }, [user?.id]);



    const changePassword = useCallback(async (currentPassword, newPassword) => {
        const { error: verifyError } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: currentPassword,
        });
        if (verifyError) throw new Error('Current password is incorrect.');
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) throw error;
    }, [user?.email]);

    const signOut = useCallback(() => supabase.auth.signOut(), []);

    const value = useMemo(
        () => ({ session, user, profile, loading: session === undefined, changePassword, signOut }),
        [session, user, profile, changePassword, signOut]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
    return ctx;
}