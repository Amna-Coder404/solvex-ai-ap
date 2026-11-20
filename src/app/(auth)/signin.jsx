import { useState } from 'react';
import AuthButton from '../../components/auth/AuthButton';
import AuthField from '../../components/auth/AuthField';
import AuthLayout from '../../components/auth/AuthLayout';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, signIn } = useAuth();

    return (
        <AuthLayout active="login" >
            <AuthField icon="mail-outline" label="Email" value={email} onChangeText={setEmail}
                placeholder="you@example.com" autoCapitalize="none" keyboardType="email-address" />
            <AuthField icon="lock-closed-outline" label="Password" value={password} onChangeText={setPassword}
                placeholder="••••••••" secure autoCapitalize="none" />
            <AuthButton title="Login" loading={loading} onPress={() => signIn({ email, password })} />
        </AuthLayout>
    );
}