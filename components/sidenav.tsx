import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { Icon } from "react-native-elements";
import { BlurView } from 'expo-blur';

interface User {
    photo: string;
    name: string;
}
const { width, height } = Dimensions.get('window');
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
        backgroundColor: Colors[theme].backgroundAndBorderBackground2,
        padding: 20,
        height: height,
    },
    rightSide: {
       // maxWidth: width - 500,
        width:"25%",
        paddingTop: 50,
        backgroundColor: Colors[theme].backgroundAndBorderBackground1,
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
        borderColor: Colors[theme].backgroundAndBorderBorderColor,
        backgroundColor: Colors[theme].backgroundAndBorderBackground2,
    },
    userInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: Colors[theme].backgroundAndBorderBorderColor,
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
        color: Colors[theme].text,
        marginBottom: 8,
    },
    dateTime: {
        fontSize: 14,
        color: Colors[theme].textSubTextColor,
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: Colors[theme].backgroundAndBorderBackground1,
        marginBottom: 12,
        borderRadius: 8,
        borderColor: Colors[theme].backgroundAndBorderBorderColor,
    },
    menuItemText: {
        fontSize: 16,
        color: Colors[theme].text,
        paddingLeft: 12,
    },
    nav_container: {
        flexDirection: 'row',
        width: '100%',
    },
    
    
    icon: {
        color: Colors[theme].text,
    },

    toggleContainer: {
        flexDirection: "row",
        backgroundColor: Colors[theme].backgroundAndBorderBackground1,
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
        backgroundColor: Colors[theme].greenGreenColor,
    },
    toggleText: {
        fontSize: 16,
        color: Colors[theme].text,
        fontWeight: "600",
    },
    selectedText: {
        color: Colors[theme].whiteForAll,
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
        borderColor: Colors[theme].greenGreenColor,
    },
    
    progressBadge: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        bottom: 10,
        left: 14,
        width: 64,
        height: 24,
        backgroundColor: Colors[theme].lightGreenLightGreenBase,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    progressText: {
        color: Colors[theme].whiteForAll,
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 4,
    },

});

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
                            day: '2-digit',
                            month: 'long',
                            year: '2-digit',
                        })} •
                            {new Date().toLocaleDateString('en-GB', {
                                weekday: 'long'
                            })}
                        </Text>
                    </View>
                    {/* Menu Section */}
                    <TouchableOpacity style={styles.menuItem}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.20829 10.8333C8.59913 10.8333 8.74996 11.9833 8.74996 14.375C8.74996 15.5733 8.74996 16.4258 8.24663 17.05C7.66746 17.7691 6.61329 17.9166 5.20829 17.9166C3.80329 17.9166 2.74913 17.7691 2.16996 17.05C1.66663 16.4258 1.66663 15.5741 1.66663 14.3958L2.29163 14.375H1.66663C1.66663 11.9833 1.81746 10.8333 5.20829 10.8333ZM14.375 10.8333C17.7658 10.8333 17.9166 11.9833 17.9166 14.375C17.9166 15.5733 17.9166 16.4258 17.4133 17.05C16.8341 17.7691 15.78 17.9166 14.375 17.9166C12.97 17.9166 11.9158 17.7691 11.3366 17.05C10.8333 16.4258 10.8333 15.5741 10.8333 14.3958L11.4583 14.375H10.8333C10.8333 11.9833 10.9841 10.8333 14.375 10.8333ZM5.38009 12.0837L5.20829 12.0833C3.03415 12.0833 2.92265 12.2393 2.91693 14.0642L2.91728 14.7751C2.92123 15.5009 2.94889 16.0252 3.14246 16.2666C3.36329 16.54 4.01913 16.6666 5.20829 16.6666C6.39746 16.6666 7.05329 16.5391 7.27413 16.2658C7.49996 15.985 7.49996 15.3183 7.49996 14.395C7.49996 12.3115 7.49996 12.0935 5.38009 12.0837ZM14.5468 12.0837L14.375 12.0833C12.2008 12.0833 12.0893 12.2393 12.0836 14.0642L12.084 14.7751C12.0879 15.5009 12.1156 16.0252 12.3091 16.2666C12.53 16.54 13.1858 16.6666 14.375 16.6666C15.5641 16.6666 16.22 16.5391 16.4408 16.2658C16.6666 15.985 16.6666 15.3183 16.6666 14.395C16.6666 12.3115 16.6666 12.0935 14.5468 12.0837ZM5.20829 1.66663C8.59913 1.66663 8.74996 2.81663 8.74996 5.20829C8.74996 6.40663 8.74996 7.25913 8.24663 7.88329C7.66746 8.60246 6.61329 8.74996 5.20829 8.74996C3.80329 8.74996 2.74913 8.60246 2.16996 7.88329C1.66663 7.25913 1.66663 6.40746 1.66663 5.22913L2.29163 5.20829H1.66663C1.66663 2.81663 1.81746 1.66663 5.20829 1.66663ZM14.375 1.66663C17.7658 1.66663 17.9166 2.81663 17.9166 5.20829C17.9166 6.40663 17.9166 7.25913 17.4133 7.88329C16.8341 8.60246 15.78 8.74996 14.375 8.74996C12.97 8.74996 11.9158 8.60246 11.3366 7.88329C10.8333 7.25913 10.8333 6.40746 10.8333 5.22913L11.4583 5.20829H10.8333C10.8333 2.81663 10.9841 1.66663 14.375 1.66663ZM5.38009 2.917L5.20829 2.91663C3.03415 2.91663 2.92265 3.07264 2.91693 4.8975L2.91728 5.60844C2.92123 6.33424 2.94889 6.85853 3.14246 7.09996C3.36329 7.37329 4.01913 7.49996 5.20829 7.49996C6.39746 7.49996 7.05329 7.37246 7.27413 7.09913C7.49996 6.81829 7.49996 6.15163 7.49996 5.22829C7.49996 3.14479 7.49996 2.92681 5.38009 2.917ZM14.5468 2.917L14.375 2.91663C12.2008 2.91663 12.0893 3.07264 12.0836 4.8975L12.084 5.60844C12.0879 6.33424 12.1156 6.85853 12.3091 7.09996C12.53 7.37329 13.1858 7.49996 14.375 7.49996C15.5641 7.49996 16.22 7.37246 16.4408 7.09913C16.6666 6.81829 16.6666 6.15163 16.6666 5.22829C16.6666 3.14479 16.6666 2.92681 14.5468 2.917Z" fill="#5E5E5E" />
                        </Svg>

                        <Text style={styles.menuItemText}>
                            Dashboard
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.74106 4.16782L7.13301 4.16832C7.20001 4.16841 7.26776 4.16851 7.33613 4.16862L7.75268 4.16929C8.66667 4.17085 9.64021 4.17299 10.3822 4.17453L10.7071 4.1752C10.7582 4.1753 10.8076 4.1754 10.8553 4.17549C12.7303 4.04383 14.4228 5.43549 14.5736 7.30299C14.575 7.32215 14.5763 7.43085 14.5773 7.62857L16.3071 6.21191C16.8105 5.79941 17.488 5.71858 18.0755 5.99608C18.663 6.27524 19.028 6.85191 19.0271 7.50191L19.0171 13.6261C19.0163 14.2761 18.6505 14.8527 18.0638 15.1294C17.8338 15.2386 17.5905 15.2911 17.3488 15.2911C16.973 15.2911 16.6021 15.1619 16.2963 14.9111L14.5812 13.4879C14.5811 13.512 14.5811 13.5362 14.5811 13.5605C14.6161 14.4405 14.3028 15.288 13.6978 15.9463C13.062 16.6388 12.1853 17.0413 11.2303 17.0805C11.2141 17.0817 11.1228 17.0824 10.973 17.0829L10.6438 17.0835C10.5154 17.0836 10.3695 17.0836 10.2097 17.0835L9.50472 17.0829C9.4412 17.0828 9.37667 17.0827 9.31126 17.0826L8.90925 17.082C7.95145 17.0803 6.87253 17.0778 6.03607 17.076L5.69349 17.0753C5.58495 17.0751 5.48242 17.0748 5.38696 17.0747C5.29863 17.0813 5.21029 17.0847 5.12196 17.0847C3.36029 17.0855 1.82363 15.7355 1.67863 13.9647L1.6785 13.9629L1.67772 13.9463C1.67766 13.9445 1.6776 13.9426 1.67754 13.9404L1.67697 13.9141C1.6769 13.9104 1.67683 13.9064 1.67677 13.902L1.67613 13.8535C1.67606 13.847 1.67599 13.84 1.67592 13.8327L1.67525 13.7539C1.67518 13.7437 1.6751 13.733 1.67503 13.7217L1.67457 13.6472C1.6745 13.6337 1.67442 13.6195 1.67434 13.6047L1.67367 13.4539C1.67359 13.4351 1.67352 13.4156 1.67345 13.3953L1.67279 13.1924C1.67272 13.1674 1.67265 13.1417 1.67258 13.1151L1.67198 12.8521C1.67192 12.8201 1.67185 12.7873 1.67179 12.7534L1.67109 12.2998C1.67104 12.2578 1.67098 12.2148 1.67093 12.1707L1.67029 11.4235C1.67025 11.3677 1.67022 11.3107 1.67019 11.2525L1.67018 7.98753C1.67021 7.88851 1.67025 7.78784 1.67029 7.68549C1.63029 6.82633 1.94196 5.97299 2.55029 5.30883C3.18529 4.61549 4.06113 4.21133 5.01696 4.17049C5.02983 4.16957 5.09073 4.16887 5.1912 4.16836L5.37049 4.16774C5.40497 4.16766 5.44165 4.16759 5.4804 4.16753L6.55382 4.16762C6.61513 4.16768 6.67758 4.16774 6.74106 4.16782ZM10.9003 5.42383C9.84816 5.4223 8.56169 5.42046 7.46385 5.41926L6.88627 5.41867C6.79397 5.41859 6.70387 5.41851 6.61628 5.41844L5.16705 5.41849C5.11251 5.41873 5.07724 5.4191 5.06363 5.41966C4.44863 5.44549 3.88113 5.70633 3.47196 6.15299C3.09029 6.57049 2.89363 7.10383 2.91946 7.65716L2.92015 10.8763C2.92018 10.9474 2.92022 11.0179 2.92026 11.0879L2.92103 12.083C2.92109 12.1449 2.92115 12.2058 2.92122 12.2655L2.92165 12.6097C2.92172 12.6646 2.9218 12.7182 2.92189 12.7703L2.9227 13.1995C2.92358 13.5858 2.92471 13.8364 2.92613 13.8847C3.02113 15.0388 4.10279 15.9213 5.34113 15.8263C5.47208 15.8265 5.60663 15.8267 5.74398 15.8269L6.1636 15.8276C6.51891 15.8282 6.88662 15.8288 7.25407 15.8294L7.69408 15.8302C7.91322 15.8305 8.13044 15.8309 8.34302 15.8312L8.76117 15.8318C8.82956 15.8319 8.89723 15.832 8.96408 15.8321L9.35454 15.8326C9.41771 15.8327 9.47985 15.8328 9.54087 15.8329L11.0121 15.8328C11.1083 15.8325 11.1688 15.832 11.187 15.8313C11.7995 15.8063 12.3678 15.5463 12.777 15.1005C13.1595 14.6847 13.3561 14.1513 13.332 13.6005L13.3312 13.5867L13.3311 9.55658C13.331 9.49113 13.331 9.42652 13.331 9.36284L13.3303 8.64964C13.3303 8.59494 13.3302 8.54154 13.3301 8.48954L13.3294 8.06172C13.3292 7.93333 13.3289 7.82 13.3285 7.72421L13.3278 7.55672C13.3273 7.46163 13.3268 7.40065 13.3261 7.37966C13.232 6.21966 12.1453 5.32633 10.9003 5.42383ZM17.0988 7.17941L14.5808 9.23382C14.5809 9.33621 14.581 9.44264 14.5811 9.55311L14.5816 11.6428L17.0888 13.9452C17.273 14.0952 17.458 14.0336 17.5296 13.9986C17.6013 13.9652 17.7671 13.8611 17.7671 13.6244L17.7771 7.50024C17.778 7.26358 17.6113 7.15941 17.5396 7.12524C17.4688 7.09191 17.2813 7.02941 17.0988 7.17941Z" fill="#5E5E5E" />
                        </Svg>

                        <Text style={styles.menuItemText}>
                            Interviews
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.2573 1.66663C15.8773 1.66663 17.6373 3.46079 17.6373 6.13079V13.7941C17.6373 16.4875 15.9314 18.2391 13.2914 18.2558L6.88059 18.2583C4.26059 18.2583 2.49976 16.4641 2.49976 13.7941V6.13079C2.49976 3.43663 4.20559 1.68579 6.84559 1.66996L13.2564 1.66663H13.2573ZM13.2573 2.91663L6.84976 2.91996C4.90976 2.93163 3.74976 4.13163 3.74976 6.13079V13.7941C3.74976 15.8066 4.92059 17.0083 6.87976 17.0083L13.2873 17.0058C15.2273 16.9941 16.3873 15.7925 16.3873 13.7941V6.13079C16.3873 4.11829 15.2173 2.91663 13.2573 2.91663ZM13.0965 12.8947C13.4415 12.8947 13.7215 13.1747 13.7215 13.5197C13.7215 13.8647 13.4415 14.1447 13.0965 14.1447H7.07984C6.73484 14.1447 6.45484 13.8647 6.45484 13.5197C6.45484 13.1747 6.73484 12.8947 7.07984 12.8947H13.0965ZM13.0965 9.40596C13.4415 9.40596 13.7215 9.68596 13.7215 10.031C13.7215 10.376 13.4415 10.656 13.0965 10.656H7.07984C6.73484 10.656 6.45484 10.376 6.45484 10.031C6.45484 9.68596 6.73484 9.40596 7.07984 9.40596H13.0965ZM9.37542 5.92529C9.72042 5.92529 10.0004 6.20529 10.0004 6.55029C10.0004 6.89529 9.72042 7.17529 9.37542 7.17529H7.07959C6.73459 7.17529 6.45459 6.89529 6.45459 6.55029C6.45459 6.20529 6.73459 5.92529 7.07959 5.92529H9.37542Z" fill="#5E5E5E" />
                        </Svg>

                        <Text style={styles.menuItemText}>
                            Invitation
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M16.5333 15.1609C16.5333 17.9075 12.7666 18.225 9.93408 18.225L9.73139 18.2249C7.92676 18.2205 3.33325 18.1066 3.33325 15.1442C3.33325 12.4536 6.94855 12.094 9.75949 12.0805L10.1368 12.0802C11.9413 12.0846 16.5333 12.1985 16.5333 15.1609ZM9.93408 13.33C6.38325 13.33 4.58325 13.94 4.58325 15.1442C4.58325 16.3592 6.38325 16.975 9.93408 16.975C13.4841 16.975 15.2833 16.365 15.2833 15.1609C15.2833 13.9459 13.4841 13.33 9.93408 13.33ZM9.93408 1.66638C12.3741 1.66638 14.3583 3.65138 14.3583 6.09138C14.3583 8.53138 12.3741 10.5155 9.93408 10.5155H9.90742C7.47242 10.508 5.49992 8.52222 5.50823 6.08888C5.50823 3.65138 7.49325 1.66638 9.93408 1.66638ZM9.93408 2.85638C8.14992 2.85638 6.69823 4.30722 6.69823 6.09138C6.69242 7.86972 8.13325 9.31972 9.90992 9.32638L9.93408 9.92138V9.32638C11.7174 9.32638 13.1683 7.87472 13.1683 6.09138C13.1683 4.30722 11.7174 2.85638 9.93408 2.85638Z" fill="#5E5E5E" />
                        </Svg>

                        <Text style={styles.menuItemText}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.2227 1.66711C10.8194 1.66711 11.3994 1.91211 11.8152 2.33795C12.2302 2.76628 12.4594 3.35378 12.4419 3.94961C12.4436 4.08378 12.4877 4.23878 12.5677 4.37461C12.7002 4.59961 12.9094 4.75795 13.1577 4.82295C13.4061 4.88461 13.6661 4.85128 13.8869 4.72045C14.9536 4.11128 16.3111 4.47628 16.9202 5.53461L17.4394 6.43378C17.4527 6.45795 17.4644 6.48128 17.4744 6.50545C18.0261 7.54795 17.6577 8.86045 16.6327 9.45961C16.4836 9.54545 16.3627 9.66545 16.2794 9.81045C16.1502 10.0346 16.1144 10.3013 16.1794 10.5463C16.2461 10.7963 16.4052 11.0038 16.6294 11.1321C17.1352 11.4229 17.5127 11.9129 17.6636 12.4788C17.8144 13.0438 17.7319 13.6571 17.4377 14.1629L16.8844 15.0846C16.2752 16.1313 14.9177 16.4938 13.8619 15.8838C13.7211 15.8029 13.5586 15.7588 13.3969 15.7546H13.3919C13.1511 15.7546 12.9036 15.8571 12.7236 16.0363C12.5411 16.2188 12.4411 16.4621 12.4427 16.7204C12.4369 17.9446 11.4411 18.9346 10.2227 18.9346H9.17856C7.95439 18.9346 6.95856 17.9396 6.95856 16.7154C6.95689 16.5646 6.91356 16.4079 6.83273 16.2721C6.70189 16.0438 6.49023 15.8804 6.24606 15.8154C6.00356 15.7504 5.73773 15.7863 5.51939 15.9129C4.99606 16.2046 4.38023 16.2754 3.81689 16.1171C3.25439 15.9579 2.76856 15.5713 2.48356 15.0588L1.96273 14.1613C1.35356 13.1046 1.71606 11.7504 2.77106 11.1404C3.07023 10.9679 3.25606 10.6463 3.25606 10.3013C3.25606 9.95628 3.07023 9.63378 2.77106 9.46128C1.71523 8.84795 1.35356 7.49045 1.96189 6.43378L2.52689 5.50628C3.12773 4.46128 4.48606 4.09295 5.54523 4.70128C5.68939 4.78711 5.84606 4.83045 6.00523 4.83211C6.52439 4.83211 6.95856 4.40378 6.96689 3.87711C6.96356 3.29628 7.19273 2.73878 7.61022 2.31795C8.02939 1.89795 8.58606 1.66711 9.17856 1.66711H10.2227ZM10.2227 2.91711H9.17856C8.92023 2.91711 8.67856 3.01795 8.49606 3.19961C8.31439 3.38211 8.21523 3.62461 8.21689 3.88295C8.19939 5.10128 7.20356 6.08211 5.99773 6.08211C5.61106 6.07795 5.23856 5.97378 4.91523 5.78045C4.46106 5.52211 3.86773 5.68128 3.60189 6.14378L3.03773 7.07128C2.77939 7.51961 2.93773 8.11211 3.39773 8.37961C4.08023 8.77461 4.50606 9.51128 4.50606 10.3013C4.50606 11.0913 4.08023 11.8271 3.39606 12.2229C2.93856 12.4879 2.78023 13.0771 3.04523 13.5354L3.57106 14.4421C3.70106 14.6763 3.91356 14.8454 4.15939 14.9146C4.40439 14.9829 4.67439 14.9538 4.89939 14.8288C5.23023 14.6346 5.61523 14.5338 6.00189 14.5338C6.19273 14.5338 6.38356 14.5579 6.57023 14.6079C7.13356 14.7596 7.62273 15.1363 7.91273 15.6421C8.10106 15.9596 8.20523 16.3304 8.20856 16.7088C8.20856 17.2504 8.64356 17.6846 9.17856 17.6846H10.2227C10.7552 17.6846 11.1902 17.2529 11.1927 16.7204C11.1894 16.1321 11.4194 15.5729 11.8402 15.1521C12.2552 14.7371 12.8352 14.4879 13.4152 14.5046C13.7952 14.5138 14.1611 14.6163 14.4836 14.7996C14.9477 15.0654 15.5402 14.9071 15.8086 14.4488L16.3619 13.5263C16.4852 13.3138 16.5211 13.0471 16.4552 12.8013C16.3902 12.5554 16.2269 12.3421 16.0069 12.2163C15.4919 11.9196 15.1244 11.4413 14.9719 10.8679C14.8211 10.3054 14.9036 9.69128 15.1977 9.18545C15.3894 8.85211 15.6702 8.57128 16.0069 8.37795C16.4586 8.11378 16.6169 7.52295 16.3544 7.06295C16.3436 7.04461 16.3336 7.02545 16.3252 7.00545L15.8369 6.15878C15.5711 5.69628 14.9794 5.53711 14.5152 5.80128C14.0136 6.09795 13.4169 6.18295 12.8436 6.03211C12.2711 5.88378 11.7911 5.52128 11.4919 5.00961C11.3002 4.68961 11.1961 4.31711 11.1927 3.93795C11.2002 3.65295 11.1002 3.39711 10.9186 3.20961C10.7377 3.02295 10.4836 2.91711 10.2227 2.91711ZM9.70431 7.47886C11.2601 7.47886 12.526 8.74553 12.526 10.3014C12.526 11.8572 11.2601 13.1222 9.70431 13.1222C8.14848 13.1222 6.88264 11.8572 6.88264 10.3014C6.88264 8.74553 8.14848 7.47886 9.70431 7.47886ZM9.70431 8.72886C8.83764 8.72886 8.13264 9.4347 8.13264 10.3014C8.13264 11.168 8.83764 11.8722 9.70431 11.8722C10.571 11.8722 11.276 11.168 11.276 10.3014C11.276 9.4347 10.571 8.72886 9.70431 8.72886Z" fill="#5E5E5E" />
                        </Svg>

                        <Text style={styles.menuItemText}>
                            Setting
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.menuItem}  onPress={() => router.push('/start')}>
                       

                        <Text style={styles.menuItemText}>
                            Logout
                        </Text>
                    </TouchableOpacity>



                </View>
                {/* close Section */}
                
                <BlurView intensity={30} style={styles.rightSide }>
                <TouchableOpacity onPress={toggleNav} style={styles.closeButton}>
                    <Ionicons name="close" size={32} color={colors.text} />
                    </TouchableOpacity>
                </BlurView>
                
        </Animated.View>
    );
};

export default SideNav;