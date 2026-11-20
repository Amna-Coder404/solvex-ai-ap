import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import Animated, {
    Easing, FadeInDown,
    useAnimatedStyle,
    useSharedValue,
    withSpring, withTiming,
} from 'react-native-reanimated';
import { colors, shadow } from '../constants/theme';
import { ui } from '../styles/UI.style';

const APressable = Animated.createAnimatedComponent(Pressable);

/** Any pressable that squishes a little when touched (spring animation). */
export function PressableScale({ children, onPress, disabled, style, scaleTo = 0.96, ...rest }) {
    const scale = useSharedValue(1);
    const anim = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
    return (
        <APressable
            onPress={onPress}
            disabled={disabled}
            onPressIn={() => { scale.value = withSpring(scaleTo, { damping: 15, stiffness: 320 }); }}
            onPressOut={() => { scale.value = withSpring(1, { damping: 12, stiffness: 260 }); }}
            style={[style, anim]}
            {...rest}
        >
            {children}
        </APressable>
    );
}

/** Wrap anything to make it fade + slide in. `index` staggers lists. */
export function Enter({ children, index = 0, style }) {
    return (
        <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 70).duration(420)} style={style}>
            {children}
        </Animated.View>
    );
}

const VARIANTS = {
    primary: { bg: colors.primary, fg: '#fff', extra: shadow.primary },
    success: { bg: colors.success, fg: '#fff' },
    danger: { bg: colors.danger, fg: '#fff' },
    soft: { bg: colors.primarySoft, fg: colors.primary },
    outline: { bg: 'transparent', fg: colors.primary, border: colors.primary },
};

export function Button({
    title,
    onPress,
    variant = 'primary',
    disabled,
    loading,
    style,
    textStyle,
    color, // optional custom text/icon color override
    icon,
}) {
    const v = VARIANTS[variant] || VARIANTS.primary;
    const fg = color || textStyle?.color || v.fg;

    return (
        <PressableScale
            onPress={onPress}
            disabled={disabled || loading}
            scaleTo={0.97}
            style={[
                ui.btn,
                { backgroundColor: v.bg, opacity: disabled ? 0.45 : 1 },
                v.border && { borderWidth: 1.5, borderColor: v.border },
                !disabled && v.extra,
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={fg} />
            ) : (
                <>
                    {icon ? <Ionicons name={icon} size={18} color={fg} /> : null}
                    <Text style={[ui.btnText, { color: fg }, textStyle]}>{title}</Text>
                </>
            )}
        </PressableScale>
    );
}
/** Card — pass onPress to make it a tappable animated card. */
export function Card({ children, style, onPress }) {
    if (onPress) {
        return <PressableScale onPress={onPress} scaleTo={0.97} style={[ui.card, style]}>{children}</PressableScale>;
    }
    return <View style={[ui.card, style]}>{children}</View>;
}

export function Empty({ text, icon = 'sparkles-outline' }) {
    return (
        <View style={ui.empty}>
            <IconBadge name={icon} size={72} color={colors.primary} bg={colors.primarySoft} />
            <Text style={ui.emptyText}>{text}</Text>
        </View>
    );
}

/** Rounded coloured icon holder. */
export function IconBadge({ name, color = colors.primary, bg = colors.primarySoft, size = 46 }) {
    return (
        <View style={[ui.badge, { width: size, height: size, borderRadius: size / 2.4, backgroundColor: bg }]}>
            <Ionicons name={name} size={size * 0.5} color={color} />
        </View>
    );
}

export function SectionTitle({ children }) {
    return <Text style={ui.sectionTitle}>{children}</Text>;
}

export function Chip({ label, active, onPress, icon }) {
    return (
        <PressableScale onPress={onPress} scaleTo={0.94} style={[ui.chip, active && ui.chipOn]}>
            {icon ? <Ionicons name={icon} size={16} color={active ? '#fff' : colors.primary} /> : null}
            <Text style={[ui.chipText, active && { color: '#fff' }]}>{label}</Text>
        </PressableScale>
    );
}

/** Animated progress bar. progress = 0..1 */
export function ProgressBar({ progress = 0, color = colors.primary, height = 8, style }) {
    const p = useSharedValue(0);
    useEffect(() => {
        p.value = withTiming(Math.max(0, Math.min(1, progress)), { duration: 600, easing: Easing.out(Easing.cubic) });
    }, [progress]);
    const fill = useAnimatedStyle(() => ({ width: `${p.value * 100}%` }));
    return (
        <View style={[ui.track, { height }, style]}>
            <Animated.View style={[ui.fill, { height, backgroundColor: color }, fill]} />
        </View>
    );
}
