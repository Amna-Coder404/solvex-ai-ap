import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerStyle: { width: 300 },
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />
        </Drawer>
    );
}