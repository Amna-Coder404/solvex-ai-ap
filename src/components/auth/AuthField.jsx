import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/theme';
import { authStyles as s } from '../../styles/auth.style';

export default function AuthField({ icon, label, secure, ...inputProps }) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={s.field}>
            <Ionicons name={icon} size={20} color={colors.primaryDark} style={s.fieldIcon} />
            <TextInput
                {...inputProps}
                accessibilityLabel={label}
                secureTextEntry={secure && !visible}
                placeholder={inputProps.placeholder ?? label}
                placeholderTextColor={colors.sub}
                style={s.fieldInput}
            />
            {secure && (
                <TouchableOpacity onPress={() => setVisible(v => !v)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Ionicons name={visible ? 'eye-off-outline' : 'eye-outline'} size={20} color={colors.sub} />
                </TouchableOpacity>
            )}
        </View>
    );
}