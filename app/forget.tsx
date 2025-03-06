import React, { useState } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import Input from '@/components/input';
import Button from '@/components/button';

const Forget: React.FC = () => {
    const router = useRouter(); // Navigation Hook
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme || 'light'];
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleEmailSubmit = () => {
        // Handle email submission logic here
        console.log('Email submitted:', email);
        setShowOtpInput(true);
    };

    const handleOtpVerify = () => {
        // Handle OTP verification logic here
        console.log('OTP verified:', otp);
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

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>Forget Password</Text>
            {!showOtpInput && (
                <>
                    <Input
                        variant="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Button title="Submit" onPress={handleEmailSubmit} color={colors.greenGreenColor} />
                </>
            )}
            {showOtpInput && (
                <>
                    <Input
                        variant="text"
                        placeholder="6-digit OTP"
                        keyboardType="numeric"
                        value={otp}
                        onChangeText={setOtp}
                    />
                    <Button title="Verify" onPress={handleOtpVerify} color={colors.greenGreenColor} />
                </>
            )}
        </View>
    );
};

export default Forget;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 16,
    },
});