import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
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
        imageContainer: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: "20%",
        },
        topimage: {
            width: '100%',
            height: "100%",
            resizeMode: "contain",
        },
        contentContainer: {
            padding: 16,
            width: '100%',
            alignItems: 'center',
            maxWidth: 500,
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
        },
        button: { width: "100%" },
        ButtonContainer: {
            marginTop: 16,
            padding: 10,
            borderRadius: 12,
            alignItems: 'center',
            width: '100%',
            borderWidth: 1,
            backgroundColor: Colors[theme].Background2,
            borderColor: Colors[theme].BorderColor,
        },
        buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        buttonText: {
            color: Colors[theme].textBody,
            fontSize: 14,
            fontWeight: '500',
            paddingLeft: 8,
        },
    });

const Login: React.FC = () => {
    const router = useRouter(); // Navigation Hook
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme || 'dark'];
    const [showSignInForm, setShowSignInForm] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: showSignInForm ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [showSignInForm]);

    const handdleForgetPassword = () => {
        console.log('forget password');
        router.push('/forget');
    }
    const redirectToRegister = () => {
        console.log('Create/Register account');
        router.push('/register');
    }

    const redirectSignIn = () => {
        // Handle sign-in logic here
        console.log('Sign in');
        router.push('/dashboard');
    };

    const styles = createStyles(colorScheme || 'dark', false);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.topimage}
                        source={colorScheme === 'dark' ? require('@/assets/images/dark-image.png') : require('@/assets/images/image.png')}
                    />
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.signIntitle}>Log In</Text>
                    <Input
                        variant="email"
                        placeholder="Email"
                        autoCapitalize="none"
                    />
                    <Input
                        variant="password"
                        placeholder="Password"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={handdleForgetPassword}>
                        <Text style={styles.registerLink}>
                            forget password
                        </Text>
                    </TouchableOpacity>
                    <Button style={styles.button} title="Sign in" size='large' onPress={redirectSignIn} />
                    <View >
                        <Text style={styles.description}>
                            ------  or  ------
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.description}>
                            Don't have account</Text>
                        <TouchableOpacity onPress={redirectToRegister}>
                            <Text style={styles.registerLink}>
                                Create a account here
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.ButtonContainer}>
                        <View style={styles.buttonContent}>
                            <Svg width="24" height="24" viewBox="0 0 24 23" fill="none">
                                <Path fillRule="evenodd" clipRule="evenodd" d="M23.04 11.7613C23.04 10.9459 22.9668 10.1618 22.8309 9.40906H12V13.8575H18.1891C17.9225 15.295 17.1123 16.5129 15.8943 17.3284V20.2138H19.6109C21.7855 18.2118 23.04 15.2636 23.04 11.7613Z" fill="#4285F4" />
                                <Path fillRule="evenodd" clipRule="evenodd" d="M12 22.9998C15.105 22.9998 17.7081 21.97 19.6109 20.2137L15.8943 17.3282C14.8645 18.0182 13.5472 18.4259 12 18.4259C9.00474 18.4259 6.46951 16.403 5.56519 13.6848H1.72314V16.6644C3.61542 20.4228 7.50451 22.9998 12 22.9998Z" fill="#34A853" />
                                <Path fillRule="evenodd" clipRule="evenodd" d="M5.56523 13.6851C5.33523 12.9951 5.20455 12.2581 5.20455 11.5001C5.20455 10.7422 5.33523 10.0051 5.56523 9.31512V6.33557H1.72318C0.944318 7.88807 0.5 9.64443 0.5 11.5001C0.5 13.3558 0.944318 15.1122 1.72318 16.6647L5.56523 13.6851Z" fill="#FBBC05" />
                                <Path fillRule="evenodd" clipRule="evenodd" d="M12 4.57386C13.6884 4.57386 15.2043 5.15409 16.3961 6.29364L19.6945 2.99523C17.7029 1.13955 15.0997 0 12 0C7.50451 0 3.61542 2.57705 1.72314 6.33545L5.56519 9.315C6.46951 6.59682 9.00474 4.57386 12 4.57386Z" fill="#EA4335" />
                            </Svg>
                            <Text style={styles.buttonText}>
                                Sign in with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer}>
                        <View style={styles.buttonContent}>
                            <Svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                                <Path d="M9.7519 23.5C20.4279 23.5 26.2662 14.6521 26.2662 6.97956C26.2662 6.72829 26.2611 6.47816 26.2497 6.22907C27.3857 5.40677 28.3662 4.38864 29.145 3.2224C28.105 3.68493 26.9859 3.99623 25.8118 4.13659C27.0102 3.41778 27.9301 2.2806 28.3642 0.925098C27.2248 1.60124 25.9784 2.07788 24.6786 2.33448C23.6194 1.20587 22.1115 0.5 20.4418 0.5C17.2366 0.5 14.6373 3.10026 14.6373 6.30549C14.6373 6.76117 14.6883 7.20427 14.7879 7.62943C9.96396 7.3866 5.68642 5.07614 2.82367 1.56295C2.30806 2.44904 2.03685 3.45611 2.03776 4.4813C2.03776 6.49576 3.06241 8.27406 4.62066 9.31446C3.69893 9.2863 2.79744 9.03725 1.99199 8.58824C1.99112 8.61262 1.99112 8.63636 1.99112 8.66241C1.99112 11.4743 3.99178 13.8221 6.64759 14.3541C6.14879 14.49 5.63409 14.5587 5.11711 14.5584C4.74376 14.5584 4.3799 14.5217 4.02628 14.4538C4.76521 16.7608 6.90789 18.4396 9.4483 18.4865C7.46173 20.0441 4.95927 20.9719 2.23947 20.9719C1.77679 20.9723 1.3145 20.9454 0.85498 20.8915C3.42374 22.5385 6.47388 23.4996 9.75218 23.4996" fill="#1D9BF0" />
                            </Svg>
                            <Text style={styles.buttonText}>Sign in with Twitter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;