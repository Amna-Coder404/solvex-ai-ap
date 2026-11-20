import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/theme';
import { profileStyles as s } from '../../styles/profile.style';
import { Button } from '../UI';
import AuthField from '../auth/AuthField';

export default function ChangePasswordModal({
    visible, onClose, onSubmit, loading,
    current, setCurrent, next, setNext, confirm, setConfirm,
}) {
    return (
        <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
            <KeyboardAvoidingView style={s.overlay} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />

                <View style={s.sheet}>
                    <View style={s.handle} />

                    <View style={s.modalHeader}>
                        <Text style={s.modalTitle}>Change password</Text>
                        <TouchableOpacity onPress={onClose} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                            <Ionicons name="close" size={24} color={colors.sub} />
                        </TouchableOpacity>
                    </View>
                    <Text style={s.modalSub}>Use at least 6 characters.</Text>

                    <AuthField icon="lock-closed-outline" label="Current password" secure
                        value={current} onChangeText={setCurrent} autoCapitalize="none" />
                    <AuthField icon="key-outline" label="New password" secure
                        value={next} onChangeText={setNext} autoCapitalize="none" />
                    <AuthField icon="key-outline" label="Confirm new password" secure
                        value={confirm} onChangeText={setConfirm} autoCapitalize="none" />

                    <View style={s.modalActions}>
                        <View style={s.modalAction}>
                            <Button title="Cancel" variant="outline" onPress={onClose} />
                        </View>
                        <View style={s.modalAction}>
                            <Button title="Update" loading={loading} onPress={onSubmit} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}