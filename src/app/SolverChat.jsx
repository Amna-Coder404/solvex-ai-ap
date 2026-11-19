import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList, Image,
  KeyboardAvoidingView,
  Text, TextInput,
  View,
} from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MathView from '../components/MathView';
import { IconBadge, PressableScale } from '../components/UI';
import { getSubject } from '../config';
import { colors, getSubjectTheme } from '../constants/theme';
import { solveQuestion } from '../services/groq';
import { saveNote } from '../services/storage';
import { s } from '../styles/SolverChatScreen.style';
import { uuid } from '../utils/utils';




export default function SolverChatScreen() {
  const { mode } = useLocalSearchParams();
  const navigation = useNavigation();
  const subject = getSubject(mode);
  const isMath = mode === 'math' || mode === 'physics';
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const listRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null); // { uri, base64 }
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${subject.label} Tutor` });
  }, [navigation, subject.label]);

  const pick = async (fromCamera) => {
    const perm = fromCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) return Alert.alert('Permission needed', 'Please allow access in Settings.');
    const opts = { mediaTypes: ['images'], base64: true, quality: 0.4 };
    const res = fromCamera ? await ImagePicker.launchCameraAsync(opts) : await ImagePicker.launchImageLibraryAsync(opts);
    if (!res.canceled && res.assets?.[0]) {
      const a = res.assets[0];
      setImage({ uri: a.uri, base64: a.base64 });
    }
  };

  const send = async () => {
    const text = input.trim();
    if ((!text && !image) || loading) return;
    const userMsg = { id: uuid(), role: 'user', text, image: image?.uri };
    const history = messages.filter((m) => !m.error).map((m) => ({ role: m.role, content: m.text }));
    setMessages((m) => [...m, userMsg]);
    setInput('');
    const base64 = image?.base64;
    setImage(null);
    setLoading(true);
    try {
      const answer = await solveQuestion({ mode, text, imageBase64: base64, history });
      setMessages((m) => [
        ...m,
        { id: uuid(), role: 'assistant', text: answer, question: text || '(Image question)', saved: false },
      ]);
    } catch (e) {
      setMessages((m) => [...m, { id: uuid(), role: 'assistant', text: `⚠️ ${e.message}`, error: true }]);
    } finally {
      setLoading(false);
      setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  const save = async (msg) => {
    await saveNote({ mode, question: msg.question, solution: msg.text });
    setMessages((m) => m.map((x) => (x.id === msg.id ? { ...x, saved: true } : x)));
  };

  const renderItem = ({ item }) => {
    const mine = item.role === 'user';
    const showMath = !mine && !item.error && isMath;
    return (
      <Animated.View
        entering={FadeInDown.duration(300)}
        style={[
          s.bubble,
          mine ? s.mine : s.theirs,
          showMath && { width: '92%' },
          item.error && { backgroundColor: colors.dangerSoft, borderColor: colors.danger },
        ]}
      >
        {item.image ? <Image source={{ uri: item.image }} style={s.img} /> : null}
        {item.text ? (
          showMath ? (
            <MathView text={item.text} />
          ) : (
            <Text style={[s.msg, mine && { color: '#fff' }]} selectable>{item.text}</Text>
          )
        ) : null}
        {!mine && !item.error && (
          <PressableScale disabled={item.saved} onPress={() => save(item)} scaleTo={0.94} style={[s.saveBtn, item.saved && { opacity: 0.6 }]}>
            <Ionicons name={item.saved ? 'checkmark-circle' : 'bookmark-outline'} size={16} color={colors.primary} />
            <Text style={s.saveText}>{item.saved ? 'Saved' : `Save in ${subject.notesLabel}`}</Text>
          </PressableScale>
        )}
      </Animated.View>
    );
  };

  const t = getSubjectTheme(mode);

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.bg }} behavior="padding" keyboardVerticalOffset={headerHeight}>
      <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={(m) => m.id}
        renderItem={renderItem}
        contentContainerStyle={s.list}
        onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
        ListEmptyComponent={
          <Animated.View entering={FadeIn.duration(500)} style={s.empty}>
            <IconBadge name={subject.icon} color={t.fg} bg={t.bg} size={84} />
            <Text style={s.emptyTitle}>{subject.label} Tutor</Text>
            <Text style={s.emptyText}>
              Type a {subject.label} question, or attach a photo of it.
            </Text>
          </Animated.View>
        }
        ListFooterComponent={
          loading ? (
            <Animated.View entering={FadeInUp.duration(250)} style={s.thinking}>
              <ActivityIndicator size="small" color={colors.primary} />
              <Text style={s.thinkingText}>Thinking…</Text>
            </Animated.View>
          ) : null
        }
      />

      {image && (
        <Animated.View entering={FadeInUp.duration(250)} style={s.preview}>
          <Image source={{ uri: image.uri }} style={s.previewImg} />
          <PressableScale onPress={() => setImage(null)} scaleTo={0.85}>
            <Ionicons name="close-circle" size={26} color={colors.danger} />
          </PressableScale>
        </Animated.View>
      )}

      <View style={[s.bar, { paddingBottom: 10 + insets.bottom }]}>
        <PressableScale onPress={() => pick(false)} scaleTo={0.9} style={s.iconBtn}><Ionicons name="image-outline" size={22} color={colors.primary} /></PressableScale>
        <PressableScale onPress={() => pick(true)} scaleTo={0.9} style={s.iconBtn}><Ionicons name="camera-outline" size={22} color={colors.primary} /></PressableScale>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask a question…"
          placeholderTextColor={colors.sub}
          multiline
          style={s.input}
        />
        <PressableScale onPress={send} disabled={loading} scaleTo={0.88} style={[s.send, loading && { opacity: 0.5 }]}>
          <Ionicons name="send" size={18} color="#fff" />
        </PressableScale>
      </View>
    </KeyboardAvoidingView>
  );
}
