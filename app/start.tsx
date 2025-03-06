import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
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
    const colors = Colors[colorScheme || 'dark'];
    

    const redirectToSignIn = () => {
        console.log('Sign in');
        router.push('/login');
    };

    const styles = createStyles(colorScheme || 'dark', false);

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    style={styles.topimage}
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
            <Button title="Sign in" size='large' style={{ width: 350 }} onPress={redirectToSignIn} color={colors.greenGreenColor} />
        </ScrollView>
    );
};

export default Start;