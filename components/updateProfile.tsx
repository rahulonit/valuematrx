import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Button from '@/components/ui/button';

export default function UpdateProfile() {
    const router = useRouter();
    const colorScheme = useColorScheme() ?? 'light';
    const theme = colorScheme;
    const styles = createStyles(theme);
    
    return (
        <View style={styles.profileContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.profileText}>Complete your profile</Text>
                <Button
                    style={styles.button}
                    title="Update Profile"
                    color='yellow'
                    variant='outline'
                    onPress={() => router.push('/profile')}
                />
            </View>
            <Text style={styles.matchText}>75% Completed</Text>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBar} />
            </View>
        </View>
    );
}

const createStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    profileContainer: {
        borderRadius: 12,
        padding: 16, 
        backgroundColor: Colors[theme].Background1,
        borderColor: Colors[theme].BorderColor,
        borderWidth: 1,
    },
    profileText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors[theme].textHeading,
    },
    updateButton: {
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignSelf: 'flex-end',
        backgroundColor: Colors[theme].GreenColor,
    },
    progressBarContainer: {
        marginTop: 8,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors[theme].Grey200,
    },
    progressBar: {
        width: '75%',
        height: '100%',
        borderRadius: 3,
        backgroundColor: Colors[theme].GreenColor,
    },
    button: {
        paddingVertical: 12,
        width: 150,
        borderRadius: 8,
    },
    matchText: {
        color: Colors[theme].textBody,
    },
});