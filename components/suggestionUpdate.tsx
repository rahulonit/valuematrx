import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CheckCircle, AlertCircle } from "lucide-react-native";
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import Button from '../components/button';

const SuggestionUpdate = () => {
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light', false);
    const profileSections = [
        { name: "Resume", completed: true },
        { name: "Probing Questions", completed: false },
        { name: "Resume headline", completed: true },
        { name: "Key skills", completed: true },
        { name: "IT skills", completed: false },
        { name: "Experience", completed: true },
        { name: "Projects", completed: false },
        { name: "Education and certification", completed: true },
        { name: "Career profile", completed: false },
        { name: "Profile summary", completed: true },
    ];

    return (
        <View style={styles.Sectionscontainer}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderTitle}>Suggested for you</Text>
                <Button style={{ width: 140 }} title="Update Profile" size='small' color='green' onPress={() => { /* Add your onPress logic here */ }} />
            </View>
            <Text style={styles.profileStatus}>Profile last updated: <Text style={{ fontWeight: "bold" }}>14 June 2024</Text></Text>
            <View style={styles.barcontainer}>
                <Text style={styles.percentage}>Profile status (75%)</Text>
                <View style={styles.statusBar}>
                    <View style={[styles.progressBar, { width: `75%` }]} />
                </View>
            </View>
            {/* Suggestion for you Section */}
            {profileSections.map((section, index) => (
                <View key={index} style={styles.section}>
                    {section.completed ? (
                        <CheckCircle color={Colors[colorScheme || 'light'].greenGreenColor} size={20} />
                    ) : (
                        <AlertCircle color={Colors[colorScheme || 'light'].redRedColor} size={20} />
                    )}
                    <Text style={{ fontSize: 14, color: Colors[colorScheme || "light"].text }}>{section.name}</Text>
                </View>
            ))}

        </View>
    );
};

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({

        profileStatus: {
            fontSize: 12,
            color: "#6b7280",
            marginTop: 4,
        },
        section: {
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            backgroundColor: Colors[theme].backgroundAndBorderBackground1,
            padding: 6,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors[theme].backgroundAndBorderBorderColor,
        },
        Sectionscontainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            backgroundColor: Colors[theme].backgroundAndBorderBackground2,
            borderRadius: 18,
            padding: 12,
            paddingTop: 4,
            borderColor: Colors[theme].backgroundAndBorderBorderColor,
            borderWidth: 1,
            // shadowColor: Colors[theme].greyGreyColor,
            // shadowOpacity: 0.1,
            // shadowRadius: 4,
            // elevation: 2,
        },
        cardHeader: {
            flexDirection: "row",
            alignItems: 'center',
            gap: 8,
            width: "100%",
            justifyContent: "space-between",
        },
        cardHeaderTitle: {
            fontSize: 16,
            fontWeight: "bold",
            color: Colors[theme].text,
        },
        barcontainer: {
            width: "100%",
        },
        statusBar: {
            width: "100%",
            height: 8,
            backgroundColor: Colors[theme].backgroundAndBorderBackground1,
            borderRadius: 5,
            overflow: "hidden",
        },
        progressBar: {
            height: "100%",
            backgroundColor: Colors[theme].greenGreenColor,
        },
        percentage: {
            fontSize: 14,
            color: Colors[theme].textTextColor,
            marginBottom: 8,
        },
    });

export default SuggestionUpdate;