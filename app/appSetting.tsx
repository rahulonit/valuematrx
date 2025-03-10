import Button from '@/components/ui/button';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

const AppSetting: React.FC = () => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Settings</Text>
            <View style={styles.themeContainer}>
                <Text style={styles.themeText}>Theme: {theme}</Text>
                <Button
                    size='medium'
                    color='gray'
                    title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                    variant="outline"
                    onPress={toggleTheme}
                />
            </View>
        </View>
    );
};

const createStyles = (theme: 'light' | 'dark') =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: Colors[theme].Background1,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: Colors[theme].textHeading,
            marginBottom: 20,
        },
        themeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        themeText: {
            fontSize: 18,
            color: Colors[theme].textBody,
        },
    });

export default AppSetting;