import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/theme';

export default function PasswordInput({ value, onChangeText, placeholder = 'Password' }) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center',
            borderWidth: 1, borderColor: colors.border, borderRadius: 12,
            backgroundColor: colors.card, paddingHorizontal: 12,
        }}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.sub}
                secureTextEntry={!visible}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ flex: 1, paddingVertical: 12, color: colors.text }}
            />
            <TouchableOpacity onPress={() => setVisible(v => !v)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Ionicons name={visible ? 'eye-off-outline' : 'eye-outline'} size={22} color={colors.sub} />
            </TouchableOpacity>
        </View>
    );
}