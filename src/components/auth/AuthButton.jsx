import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { authStyles as s } from '../../styles/auth.style';

export default function AuthButton({ title, loading, onPress, style }) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            disabled={loading}
            onPress={onPress}
            style={[s.button, loading && s.buttonDisabled, style]}
        >
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={s.buttonText}>{title}</Text>}
        </TouchableOpacity>
    );
}