import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import Button from '@/components/button';
import Input from '@/components/input';

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        mainContainer: {
            paddingTop: 54,
            alignItems: 'center',
            backgroundColor: Colors[theme].background,
            flex: 1,
        },
        contentContainer: {
            padding: 16,
            width: '100%',
            alignItems: 'center',
        },
        signIntitle: {
            fontSize: 32,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 16,
            color: Colors[theme].text,
        },
        description: {
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '400',
            textAlign: 'center',
            color: Colors[theme].textSubTextColor,
        },
        registerLink: {
            marginTop: 12,
            marginBottom: 12,
            fontSize: 16,
            fontWeight: '600',
            color: Colors[theme].primary,
            alignItems: 'center',
        },
        
    });

const Register: React.FC = () => {
    const router = useRouter(); // Navigation Hook
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme || 'dark'];
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Register:', { username, email, password });
        router.push('/dashboard');
    };

    const styles = createStyles(colorScheme || 'dark', false);

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.signIntitle}>Register</Text>
                <Input
                    variant="text"
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Input
                    variant="email"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <Input
                    variant="password"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Register" size='large' onPress={handleRegister} color={colors.greenGreenColor} />
                <View>
                    <Text style={styles.description}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <Text style={styles.registerLink}>
                            Sign in here
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;