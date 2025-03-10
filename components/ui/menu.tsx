import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

// Define the User type
interface User {
    photo: string;
    name: string;
    email: string;
    role: string;
}

interface MenuProps {
    user: User;
    isOpen: boolean;
    toggleNav: () => void;
    role: string;
}

const Menu = ({ isOpen, toggleNav, role }: MenuProps) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'dark', isOpen);

    const handlePress = (route: '/dashboard' | '/interviews' | '/invitations' | '/profile' | '/start' | '/appSetting') => {
        toggleNav();
        router.push(route);
    };

    return (
        <View>
            {/* Menu Section */}
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('/dashboard')}>
                <Icon name="home" size={24} color={Colors[colorScheme || 'light'].textBody} />
                <Text style={styles.menuItemText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('/interviews')}>
                <Icon name="briefcase" size={24} color={Colors[colorScheme || 'light'].textBody} />
                <Text style={styles.menuItemText}>Interviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('/invitations')}>
                <Icon name="mail" size={24} color={Colors[colorScheme || 'light'].textBody} />
                <Text style={styles.menuItemText}>Invitations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('/profile')}>
                <Icon name="person" size={24} color={Colors[colorScheme || 'light'].textBody} />
                <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('/appSetting')}>
                <Icon name="settings" size={24} color={Colors[colorScheme || 'light'].textBody} />
                <Text style={styles.menuItemText}>App Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('/start')}>
                <Icon name="log-out" size={24} color={Colors[colorScheme || 'light'].textBody} />
                <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) => StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: Colors[theme].Background1,
        marginBottom: 8,
        borderRadius: 8,
        borderColor: Colors[theme].BorderColor,
    },
    menuItemText: {
        fontSize: 16,
        color: Colors[theme].textBody,
        paddingLeft: 12,
    },
});

export default Menu;



