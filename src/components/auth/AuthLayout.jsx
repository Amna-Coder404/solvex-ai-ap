import { useEffect, useRef } from 'react';
import { Animated, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { authStyles as s } from '../../styles/auth.style';
import AuthTabs from './AuthTabs';

export default function AuthLayout({
    active,
    title = 'ICS Smart Study',
    subtitle = 'Learn smarter, every single day',
    children,
}) {
    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(anim, { toValue: 1, duration: 450, useNativeDriver: true }).start();
    }, [anim]);

    return (
        <View style={s.root}>
            <View style={s.circleTopDark} />
            <View style={s.circleTopBig} />
            <View style={s.circleBottomDark} />
            <View style={s.circleBottomSmall} />

            <View style={s.header} pointerEvents="none">
                <Text style={s.appName}>{title}</Text>
                <Text style={s.subtitle}>{subtitle}</Text>
            </View>

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    contentContainerStyle={s.scroll}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <Animated.View
                        style={{
                            opacity: anim,
                            transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [24, 0] }) }],
                        }}
                    >
                        <AuthTabs active={active} />
                        {children}
                    </Animated.View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}