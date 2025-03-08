import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import Button from '@/components/button';

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        mainContainer: {
            paddingTop: 54,
            alignItems: 'center',
            backgroundColor: Colors[theme].background,
            flex: 1,
        },
        imageContainer: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        topimage: {
            width: '100%',
            height: 450,
        },
        contentContainer: {
            padding: 16,
            alignItems: 'center',
        },
        textContainer: {
            alignItems: 'center',
        },
        titleandDescriptionContainer: {
            alignItems: 'center',
            paddingVertical: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: '400',
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
    });

const Start: React.FC = () => {
    const router = useRouter(); // Navigation Hook
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'dark', false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    const redirectToSignIn = () => {
        console.log('Sign in');
        router.push('/login');
    };

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Animated.Image
                    style={[styles.topimage, { opacity: fadeAnim }]}
                    source={colorScheme === 'dark' ? require('@/assets/images/dark-image.png') : require('@/assets/images/image.png')}
                />
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <View style={styles.titleandDescriptionContainer}>
                        <Text style={styles.title}>Get the full experience</Text>
                    </View>
                </View>
            </View>
            <Button title="Sign in" size='large' style={{ width: 350 }} onPress={redirectToSignIn} />
        </ScrollView>
    );
};

export default Start;