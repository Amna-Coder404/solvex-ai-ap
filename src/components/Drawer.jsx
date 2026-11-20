import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '../constants/theme';
import { useAuth } from '../hooks/useProfile';
import { drawerStyles as s } from '../styles/drawer.style';
import ChangePasswordModal from './profile/ChangePasswordModal';

export function MenuButton({ color = colors.text }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={s.menuBtn}
            activeOpacity={0.75}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            <Ionicons name="menu" size={25} color={color} />
        </TouchableOpacity>
    );
}

function Item({ icon, label, subtitle, onPress, danger }) {
    return (
        <TouchableOpacity
            style={[s.item, danger && s.itemDanger]}
            activeOpacity={0.75}
            onPress={onPress}
        >
            <View style={[s.itemIcon, danger && s.itemIconDanger]}>
                <Ionicons
                    name={icon}
                    size={20}
                    color={danger ? colors.danger : colors.primary}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={[s.itemText, danger && s.itemTextDanger]}>{label}</Text>
                {subtitle ? <Text style={s.itemSub}>{subtitle}</Text> : null}
            </View>
            <Ionicons
                name="chevron-forward"
                size={18}
                color={danger ? colors.danger : colors.sub}
            />
        </TouchableOpacity>
    );
}

export default function DrawerContent({ navigation }) {
    const insets = useSafeAreaInsets();
    const { user, profile, changePassword, signOut } = useAuth();

    const [showPass, setShowPass] = useState(false);
    const [current, setCurrent] = useState('');
    const [next, setNext] = useState('');
    const [confirm, setConfirm] = useState('');
    const [savingPass, setSavingPass] = useState(false);

    const name = profile?.name || user?.user_metadata?.username || 'Student';
    const email = user?.email ?? '';
    const initial = name.trim().charAt(0).toUpperCase() || 'S';

    const closePass = () => {
        setShowPass(false);
        setCurrent('');
        setNext('');
        setConfirm('');
    };

    const savePassword = async () => {
        if (!current || !next) return Alert.alert('Missing', 'Fill all password fields.');
        if (next.length < 6) return Alert.alert('Weak password', 'Use at least 6 characters.');
        if (next !== confirm) return Alert.alert('Mismatch', 'New passwords do not match.');
        setSavingPass(true);
        try {
            await changePassword(current, next);
            closePass();
            Alert.alert('Done', 'Password changed.');
        } catch (e) {
            Alert.alert('Error', e.message);
        } finally {
            setSavingPass(false);
        }
    };

    return (
        <>
            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <DrawerContentScrollView
                    contentContainerStyle={{ paddingTop: 0, flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Profile Header */}
                    <View style={[s.header, { paddingTop: insets.top + spacing.lg }]}>
                        <View style={s.decorCircle} />
                        <View style={s.avatarRow}>
                            <View style={s.avatar}>
                                <Text style={s.avatarText}>{initial}</Text>
                            </View>
                            <View style={s.badgePill}>
                                <Ionicons name="sparkles" size={12} color="#FFC857" />
                                <Text style={s.badgeText}>Solvex</Text>
                            </View>
                        </View>
                        <Text style={s.name} numberOfLines={1}>{name}</Text>
                        {email ? <Text style={s.email} numberOfLines={1}>{email}</Text> : null}
                    </View>

                    {/* Account Actions */}
                    <View style={s.menu}>
                        <Text style={s.sectionLabel}>Account</Text>

                        <Item
                            icon="key-outline"
                            label="Change password"
                            subtitle="Update your account security"
                            onPress={() => {
                                navigation.closeDrawer();
                                setTimeout(() => setShowPass(true), 280);
                            }}
                        />

                        <View style={s.divider} />

                        <Item
                            icon="log-out-outline"
                            label="Log out"
                            subtitle="Sign out of this device"
                            danger
                            onPress={signOut}
                        />
                    </View>
                </DrawerContentScrollView>

                {/* Bottom Footer */}
                <View style={[s.footer, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
                    <Text style={s.footerText}>Solvex Study Workspace</Text>

                </View>
            </View>

            <ChangePasswordModal
                visible={showPass}
                onClose={closePass}
                onSubmit={savePassword}
                loading={savingPass}
                current={current}
                setCurrent={setCurrent}
                next={next}
                setNext={setNext}
                confirm={confirm}
                setConfirm={setConfirm}
            />
        </>
    );
}