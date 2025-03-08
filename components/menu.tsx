import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import Svg, { Path } from 'react-native-svg';

interface User {
    user: User;
    isOpen: boolean;
    toggleNav: () => void;
    role: string;
}

const Menu = ({ isOpen }: { user: User, isOpen: boolean }) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'dark', isOpen);

    return (
        <View>
            {/* Menu Section */}
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/dashboard')}>
            <Icon name="arrow-back" size={24} color={Colors[colorScheme || 'light'].primary} />

                <Text style={styles.menuItemText}>
                    Dashboard
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/interviews')}>
            <Icon name="arrow-back" size={24} color={Colors[colorScheme || 'light'].primary} />
                <Text style={styles.menuItemText} >
                    Interviews
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} >
            <Icon name="arrow-back" size={24} color={Colors[colorScheme || 'light'].primary} onPress={() => router.push('/invitations')}/>

                <Text style={styles.menuItemText}>
                    Invitation
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
            <Icon name="arrow-back" size={24} color={Colors[colorScheme || 'light'].primary} onPress={() => router.push('/profile')}/>

                <Text style={styles.menuItemText}>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
            <Icon name="arrow-back" size={24} color={Colors[colorScheme || 'light'].primary} />

                <Text style={styles.menuItemText}>
                    Setting
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/start')}>
                <Text style={styles.menuItemText}>
                    Logout
                </Text>
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



