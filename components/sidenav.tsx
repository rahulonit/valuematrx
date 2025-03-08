import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Menu from './menu';
import { Icon } from "react-native-elements";
import { BlurView } from 'expo-blur';

interface User {
    photo: string;
    name: string;
}
const { width, height } = Dimensions.get('window');


const SideNav = ({ user, isOpen, toggleNav }: { user: User, isOpen: boolean, toggleNav: () => void }) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme || 'dark'];
    const translateX = useSharedValue(-width);
    const [selectedRole, setSelectedRole] = useState("Interviewer");

    if (isOpen) {
        translateX.value = withTiming(0, { duration: 300 });
    } else {
        translateX.value = withTiming(-width, { duration: 300 });
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const styles = createStyles(colorScheme || 'dark', isOpen);

    return (
        <Animated.View style={[styles.nav, animatedStyle]}>
                <View style={styles.leftSide}>
                    {/* Toggle Buttons */}
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity
                            style={[
                                styles.toggleButton,
                                selectedRole === "Candidate" && styles.selectedButton,
                            ]}
                            onPress={() => setSelectedRole("Candidate")}
                        >
                            <Text
                                style={[
                                    styles.toggleText,
                                    selectedRole === "Candidate" && styles.selectedText,
                                ]}
                            >
                                Candidate
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.toggleButton,
                                selectedRole === "Interviewer" && styles.selectedButton,
                            ]}
                            onPress={() => setSelectedRole("Interviewer")}
                        >
                            <Text
                                style={[
                                    styles.toggleText,
                                    selectedRole === "Interviewer" && styles.selectedText,
                                ]}
                            >
                                Interviewer
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Profile Section */}
                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageWrapper}>
                            <Image source={{ uri: user.photo }} style={styles.profileImage} />
                            <View style={styles.progressRing} />
                            
                            {/* Progress Badge */}
                            <View style={styles.progressBadge}>
                                <Icon name="shield-check" type="material-community" color="white" size={14} />
                                <Text style={styles.progressText}>75%</Text>
                            </View>
                        </View>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.dateTime}>Frontend Developer</Text>
                        <Text style={styles.dateTime}>{new Date().toLocaleDateString('en-GB', {
                            day: '2-digit', month: 'long', year: '2-digit', })} •
                            {new Date().toLocaleDateString('en-GB', { weekday: 'long' })}
                        </Text>
                    </View>
                    <Menu user={user} isOpen={isOpen} toggleNav={toggleNav} />
                </View>
                {/* close Section */}
                
                <BlurView intensity={30} style={styles.rightSide }>
                <TouchableOpacity onPress={toggleNav} style={styles.closeButton}>
                    <Ionicons name="close" size={32} color={colors.textBody} />
                    </TouchableOpacity>
                </BlurView>
                
        </Animated.View>
    );
};


const createStyles = (theme: 'light' | 'dark', isFocused: boolean) => StyleSheet.create({
    nav: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: -0,
        zIndex: 1000,
        flexDirection: 'row',
    },
    leftSide: {
       // maxWidth:500,
        width:"75%",
        paddingTop: 50,
        backgroundColor: Colors[theme].Background2,
        padding: 20,
        height: height,
    },
    rightSide: {
       // maxWidth: width - 500,
        width:"25%",
        paddingTop: 50,
        backgroundColor: Colors[theme].Background1,
        backdropFilter:'screen',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingRight:20,
        height: height,
    },
    closeButton: {
        padding: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors[theme].BorderColor,
        backgroundColor: Colors[theme].Background2,
    },
    userInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: Colors[theme].BorderColor,
    },
    userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 70,
        marginBottom: 16,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors[theme].textBody,
        marginBottom: 8,
    },
    dateTime: {
        fontSize: 14,
        color: Colors[theme].textSub,
    },
    toggleContainer: {
        flexDirection: "row",
        backgroundColor: Colors[theme].Background1,
        borderRadius: 12,
        padding: 4,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
    },
    selectedButton: {
        backgroundColor: Colors[theme].GreenColor,
    },
    toggleText: {
        fontSize: 16,
        color: Colors[theme].textBody,
        fontWeight: "600",
    },
    selectedText: {
        color: Colors[theme].white,
    },
    profileContainer: {
        alignItems: "center",
        margin: 20,
    },
    profileImageWrapper: {
        position: "relative",
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    progressRing: {
        position: "absolute",
        top: -5,
        left: -5,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: Colors[theme].GreenColor,
    },
    
    progressBadge: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        bottom: 10,
        left: 14,
        width: 64,
        height: 24,
        backgroundColor: Colors[theme].LightGreenBase,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    progressText: {
        color: Colors[theme].white,
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 4,
    },

});


export default SideNav;