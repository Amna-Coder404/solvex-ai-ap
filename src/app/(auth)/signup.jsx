import { useState } from 'react';
import AuthButton from '../../components/auth/AuthButton';
import AuthField from '../../components/auth/AuthField';
import AuthLayout from '../../components/auth/AuthLayout';
import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const { loading, signUp } = useAuth();

    return (
        <AuthLayout active="register" subtitle="Create your account to get started">
            <AuthField icon="person-outline" label="User Name" value={name} onChangeText={setName}
                placeholder="Your name" autoCapitalize="none" />
            <AuthField icon="lock-closed-outline" label="Password" value={password} onChangeText={setPassword}
                placeholder="••••••••" secure autoCapitalize="none" />
            <AuthField icon="lock-closed-outline" label="Confirm Password" value={confirm} onChangeText={setConfirm}
                placeholder="••••••••" secure autoCapitalize="none" />
            <AuthField icon="mail-outline" label="Email" value={email} onChangeText={setEmail}
                placeholder="you@example.com" autoCapitalize="none" keyboardType="email-address" />
            <AuthButton title="Register" loading={loading} onPress={() => signUp({ email, name, password, confirm })} />
        </AuthLayout>
    );
}