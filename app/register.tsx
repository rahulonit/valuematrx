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
            backgroundColor: Colors[theme].Background1,
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
            color: Colors[theme].textHeading,
        },
        description: {
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '400',
            textAlign: 'center',
            color: Colors[theme].textSub,
        },
        registerLink: {
            marginTop: 12,
            marginBottom: 12,
            fontSize: 16,
            fontWeight: '600',
            color: Colors[theme].primary,
            alignItems: 'center',
        },
        inputContaniner: {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginTop: 8,
        },
        label: {
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'left',
            color: Colors[theme].textSub,
        },
        text: {
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'left',
            color: Colors[theme].textBody,
        },
        link: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            padding: 8,
        },
        linkText: {
            fontSize: 18,
            color: Colors[theme].primary,
            fontWeight: '600',
        },
        sec23: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
        },
    });

const Register: React.FC = () => {
    const router = useRouter(); // Navigation Hook
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme || 'dark'];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [OTP, setOTP] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Register:', { firstName, lastName, username, email, password, OTP });
        router.push('/dashboard');
    };

    const sendOTP = () => {
        // Handle sending OTP logic here
        console.log('Send OTP to:', email);
    };

    const styles = createStyles(colorScheme || 'dark', false);

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.signIntitle}>Register</Text>

                <View style={styles.inputContaniner}>
                    <Text style={styles.label}>
                        First Name*
                    </Text>
                    <Input
                        variant="text"
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>
                <View style={styles.inputContaniner}>
                    <Text style={styles.label}>
                        Last Name
                    </Text>
                    <Input
                        variant="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>

                <View style={styles.inputContaniner}>
                    <Text style={styles.label}>
                        UserName*
                    </Text>
                    <Input
                        variant="text"
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.inputContaniner}>
                    <Text style={styles.label}>
                        Email*
                    </Text>
                    <Input
                        variant="email"
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />
                    <Button title="Send OTP" size='small' variant="outline" onPress={sendOTP}  />
                </View>

                <View style={styles.inputContaniner}>
                    <Text style={styles.label}>
                        Insert OTP*
                    </Text>
                    <Input
                        variant="text"
                        placeholder="OTP"
                        value={OTP}
                        onChangeText={setOTP}
                    />
                </View>

                <View style={styles.inputContaniner}>
                    <Text style={styles.label}>
                        Password*
                    </Text>
                    <Input
                        variant="password"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <Button title="Register" size='large' onPress={handleRegister}  />
                <View style={styles.sec23}>
                                <Text style={styles.text}>
                                Already have an account?
                                </Text>
                                <TouchableOpacity style={styles.link} onPress={() => router.push('/login')}>
                                    <Text style={styles.linkText}>
                                    Sign in here
                                    </Text>
                                </TouchableOpacity>
                            </View>
                
            </View>
        </ScrollView>
    );
};

export default Register;