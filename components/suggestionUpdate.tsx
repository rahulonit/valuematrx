import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CheckCircle, AlertCircle } from "lucide-react-native";
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import Button from './ui/button';

const SuggestionUpdate = () => {
    const router = useRouter();
    const colorScheme = useColorScheme() ?? 'light';
    const theme = colorScheme;
    const styles = createStyles(theme);

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
                <Button style={{ width: 140 }} title="Update Profile" size='small' color='green' onPress={() => router.push('/profile')} />
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
                        <CheckCircle color={Colors[theme].GreenColor} size={20} />
                    ) : (
                        <AlertCircle color={Colors[theme].RedColor} size={20} />
                    )}
                    <Text style={{ fontSize: 14, color: Colors[theme].textBody }}>{section.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default SuggestionUpdate;

const createStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    profileStatus: {
        fontSize: 12,
        color: "#6b7280",
        marginTop: 4,
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: Colors[theme].Background2,
        padding: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors[theme].BorderColor,
    },
    Sectionscontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        backgroundColor: Colors[theme].Background1,
        borderRadius: 18,
        padding: 12,
        paddingTop: 4,
        borderColor: Colors[theme].BorderColor,
        borderWidth: 1,
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
        color: Colors[theme].textBody,
    },
    barcontainer: {
        width: "100%",
    },
    statusBar: {
        width: "100%",
        height: 8,
        backgroundColor: Colors[theme].Background1,
        borderRadius: 5,
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        backgroundColor: Colors[theme].GreenColor,
    },
    percentage: {
        fontSize: 14,
        color: Colors[theme].textBody,
        marginBottom: 8,
    },
});



