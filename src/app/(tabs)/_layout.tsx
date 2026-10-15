import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout(){
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="home" size={20} color={focused ? '#007AFF' : '#8E8E93'} />
                    ),
                }}
            />
            <Tabs.Screen
                name="aulas"
                options={{
                    title: 'Aulas',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="book" size={20} color={focused ? '#007AFF' : '#8E8E93'} />
                    ),
                }}
            />
            <Tabs.Screen
                name="acervo"
                options={{
                    title: 'Acervo',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="book" size={20} color={focused ? '#007AFF' : '#8E8E93'} />
                    ),
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user" size={20} color={focused ? '#007AFF' : '#8E8E93'} />
                    ),
                }}
            />
        </Tabs>);
}