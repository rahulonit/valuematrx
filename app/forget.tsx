import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import Input from '@/components/input';
import Button from '@/components/button';

const Forget: React.FC = () => {
    const router = useRouter(); // Navigation Hook
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light', false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [showOtpInput, setShowOtpInput] = useState(false);

    const otpRefs = useRef<(TextInput | null)[]>([]);

    const handleEmailSubmit = () => {
        // Handle email submission logic here
        console.log('Email submitted:', email);
        setShowOtpInput(true);
    };

    const handleOtpVerify = () => {
        // Handle OTP verification logic here
        const otpValue = otp.join('');
        console.log('OTP verified:', otpValue);
        Alert.alert(
            "Password Reset Successful",
            "Your password has been reset successfully.",
            [
                {
                    text: "OK",
                    onPress: () => router.push('/login')
                }
            ]
        );
    };

    const handleOtpChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field if the current one is filled
        if (value && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: Colors[colorScheme || 'light'].Background1 }]}>
            <TouchableOpacity style={styles.link} onPress={() => router.push('/login')}>
                <Text style={styles.linkText}>
                    Back
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Reset Password</Text>

            <Text style={styles.text}>
                Enter the email address you used when you joined and we’ll send you instructions to reset your password.
            </Text>
            {!showOtpInput && (
                <>
                    <Text style={styles.label}>
                        Username or Email address*
                    </Text>
                    <Input
                        variant="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Button title="Submit" size='large' onPress={handleEmailSubmit} color="green" />
                </>
            )}
            {showOtpInput && (
                <>
                    <Text style={styles.subTitle}>
                        {email}
                    </Text>
                    <Text style={styles.label}>
                        6 Digit OTP*
                    </Text>
                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => otpRefs.current[index] = ref}
                                style={styles.otpInput}
                                value={digit}
                                onChangeText={(value) => handleOtpChange(value, index)}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                        ))}
                    </View>
                    <Button title="Verify" size='large' onPress={handleOtpVerify} color="green" />
                </>
            )}
            <View style={styles.sec23}>
                <Text style={styles.text}>
                    Don’t have an account? .
                </Text>
                <TouchableOpacity style={styles.link} onPress={() => router.push('/register')}>
                    <Text style={styles.linkText}>
                        Sign up here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Forget;

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'flex-start',
            padding: 16,
            paddingTop: 54,
        },
        title: {
            fontSize: 24,
            fontWeight: '400',
            textAlign: 'left',
            marginBottom: 16,
            marginTop: 16,
            color: Colors[theme].textHeading,
        },
        subTitle: {
            fontSize: 20,
            fontWeight: '400',
            textAlign: 'left',
            marginBottom: 16,
            marginTop: 16,
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
        label: {
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'left',
            marginTop: 32,
            color: Colors[theme].textSub,
        },
        otpContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
            marginBottom: 32,
        },
        otpInput: {
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: Colors[theme].BorderColor,
            borderRadius: 8,
            textAlign: 'center',
            fontSize: 18,
            color: Colors[theme].textBody,
        },
    });