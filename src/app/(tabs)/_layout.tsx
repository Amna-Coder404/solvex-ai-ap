import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '../../constants/theme';

const tabIcon = (name: any, focusedName: any) =>
    ({ color, size, focused }: any) =>
        <Ionicons name={focused ? focusedName : name} size={size} color={color} />;

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
            <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false, tabBarIcon: tabIcon('home-outline', 'home') }} />
            <Tabs.Screen name="SavedNotes" options={{ title: 'Notes', tabBarIcon: tabIcon('bookmarks-outline', 'bookmarks') }} />
            <Tabs.Screen name="TestHistory" options={{ title: 'Tests', tabBarIcon: tabIcon('document-text-outline', 'document-text') }} />
            <Tabs.Screen name="Attendance" options={{ title: 'Attendance', tabBarIcon: tabIcon('calendar-outline', 'calendar') }} />
        </Tabs>
    );
}