import { MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5F60B9',
                tabBarInactiveTintColor: '#6C757E',
            }}>

            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className={`flex-1 flex justify-center items-center w-full h-full`
                        }>
                            <Octicons name="home" size={24} color={color} />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="chat"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className={`flex-1 flex justify-center items-center w-full h-full`}>
                            <MaterialCommunityIcons name="wallet-outline" size={28} color={color} />
                        </View>
                    ),
                }}
            />

        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
    },
});
