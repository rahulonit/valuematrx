import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Info } from "lucide-react-native";
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const TodayInterview = () => {

    const colorScheme = useColorScheme() || 'light';
    const styles = createStyles(colorScheme || 'light', false);
    return (
        <View style={styles.todayContainer}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Today Interview</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>

            {/* Message Box */}
            <View style={styles.infoBox}>
                <View style={styles.iconContainer}>
                    <Info size={20} color={Colors[colorScheme].white} />
                </View>
                <Text style={styles.message}>There is no Interview scheduled for today</Text>
            </View>

        </View>
    );
};

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        todayContainer: {
            backgroundColor: Colors[theme].Background1,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: Colors[theme].BorderColor,
            // shadowColor: Colors[theme].greyGreyColor,
            // shadowOpacity: 0.1,
            // shadowRadius: 4,
            // elevation: 2,
            width: "100%",
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: Colors[theme].textBody,
            borderBottomWidth: 1,
            borderBottomColor: Colors[theme].BorderColor,
            width: "100%",
            padding: 16,
        },
        title: {
            color: Colors[theme].textHeading,
            fontSize: 18,
            fontWeight: "bold",
        },
        viewAll: {
            fontSize: 16,
            color: Colors[theme].primary,
            fontWeight: "600",
        },
        infoBox: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors[theme].Blue100,
            borderRadius: 12,
            padding: 12,
            borderWidth: 1,
            borderColor: Colors[theme].BlueColor,
            margin: 16,

        },
        iconContainer: {
            backgroundColor: Colors[theme].BlueColor,
            borderRadius: 8,
            padding: 6,
            marginRight: 8,
        },
        icon:{
            color: Colors[theme].textBody,
        },
        message: {
            fontSize: 14,
            color: Colors[theme].BlueColor,
            flexShrink: 1,
        },

    });

export default TodayInterview;
