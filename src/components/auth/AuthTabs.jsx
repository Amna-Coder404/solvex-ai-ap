import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { authStyles as s } from '../../styles/auth.style';

export default function AuthTabs({ active }) {
    const router = useRouter();
    const Tab = ({ id, label, href }) => {
        const on = active === id;
        return (
            <TouchableOpacity
                style={[s.tab, on && s.tabActive]}
                onPress={() => !on && router.replace(href)}
            >
                <Text style={[s.tabText, on && s.tabTextActive]}>{label}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={s.tabsRow}>
            <Tab id="login" label="Login" href="/signin" />
            <Tab id="register" label="Register" href="/signup" />
        </View>
    );
}