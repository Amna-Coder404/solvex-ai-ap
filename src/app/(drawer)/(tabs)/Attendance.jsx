import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button, Enter } from '../../../components/UI';
import { colors } from '../../../constants/theme';
import { computeStreak, getAttendance, markPresent, syncAll } from '../../../services/storage';
import { st } from '../../../styles/AttendanceScreen.style';
import { dateStr } from '../../../utils/utils';

export default function AttendanceScreen() {
  const [dates, setDates] = useState([]);
  const today = dateStr();
  const marked = dates.includes(today);

  const load = useCallback(async () => {
    const list = await getAttendance();
    setDates(list.map((a) => a.date).sort().reverse());
  }, []);

  useFocusEffect(useCallback(() => { load(); syncAll().then(load); }, [load]));

  const onPress = async () => {
    await markPresent(); // once-a-day check lives inside the service
    load();
  };

  return (
    <View style={st.screen}>
      <Enter index={0}>
        <View style={st.hero}>
          <View style={st.circle} />
          <View style={st.flameWrap}><Ionicons name="flame" size={42} color="#FFC857" /></View>
          <Text style={st.streak}>{computeStreak(dates)} day streak</Text>
          <Text style={st.heroSub}>{dates.length} days present • Today: {today}</Text>
          {marked ? (
            <View style={st.done}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={st.doneText}>Marked present today</Text>
            </View>
          ) : (
            <Button
              title="I am Present Today"
              icon="hand-right-outline"
              onPress={onPress}
              style={[st.btn, { shadowOpacity: 0, elevation: 0 }]}
              textStyle={st.btnText}
            />
          )}
        </View>
      </Enter>

      <Text style={st.heading}>History</Text>
      <FlatList
        data={dates.slice(0, 60)}
        keyExtractor={(d) => d}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={st.sub}>No attendance yet.</Text>}
        renderItem={({ item, index }) => (
          <Enter index={index}>
            <View style={st.row}>
              <View style={st.rowIcon}><Ionicons name="checkmark" size={18} color={colors.success} /></View>
              <Text style={st.rowText}>{item}</Text>
            </View>
          </Enter>
        )}
      />
    </View>
  );
}
