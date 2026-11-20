import { useState } from 'react';
import { Alert } from 'react-native';
import { authService } from '../services/authService';

export function useAuth() {
    const [loading, setLoading] = useState(false);

    const signIn = async ({ email, password }) => {
        if (!email.trim() || !password) {
            Alert.alert('Missing info', 'Enter email and password.');
            return false;
        }
        setLoading(true);
        const { error } = await authService.signIn({ email, password });
        setLoading(false);
        if (error) {
            Alert.alert('Sign in failed', error.message);
            return false;
        }
        return true; // root layout redirect karega
    };

    const signUp = async ({ email, password, confirm, name }) => {
        if (!email.trim() || !password) {
            Alert.alert('Missing info', 'Enter email and password.');
            return false;
        }
        if (password.length < 6) {
            Alert.alert('Weak password', 'Use at least 6 characters.');
            return false;
        }
        if (password !== confirm) {
            Alert.alert('Mismatch', 'Passwords do not match.');
            return false;
        }
        setLoading(true);
        const { data, error } = await authService.signUp({ email, password, name });
        setLoading(false);
        if (error) {
            Alert.alert('Sign up failed', error.message);
            return false;
        }
        // email confirmation on ho to session null aata hai
        if (!data.session) Alert.alert('Check your email', 'Confirm your email, then sign in.');
        return true;
    };

    const signOut = () => authService.signOut();

    return { loading, signIn, signUp, signOut };
}