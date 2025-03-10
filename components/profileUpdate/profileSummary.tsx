import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import Button from '../ui/button';

const handleEdit = () => {
    // Define what happens when the edit button is pressed
    console.log('Edit button pressed');
};

const ProfileSummary = () => {
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Profile summary</Text>
                <TouchableOpacity style={styles.linkedit} onPress={handleEdit}>
                    <Icon name="edit" size={24} color={Colors[colorScheme || 'light'].primary} />
                    <Text style={styles.edit}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Personal</Text>
                    <Text style={styles.infoText}>male, Single / unmarried</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Career break</Text>
                    <Text style={styles.infoText}>UX, Design & Architecture</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Date of birth</Text>
                    <Text style={styles.infoText}>06 Apr 1994</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Category</Text>
                    <Text style={styles.infoText}>OBC - Creamy</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Phone Number</Text>
                    <View style={styles.withIcon}>
                        <Icon name="phone" size={24} color={Colors[colorScheme || 'light'].textBody} />
                        <Text style={styles.infoText}> +91 9643092020</Text>
                        <Icon name="shield" size={24} color={Colors[colorScheme || 'light'].primary} />
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Email ID</Text>
                    <View style={styles.withIcon}>
                        <Icon name="mail" size={24} color={Colors[colorScheme || 'light'].textBody} />
                        <Text style={styles.infoText}> theshivammonga@gmail.com</Text>
                        <Icon name="shield" size={24} color={Colors[colorScheme || 'light'].primary} />
                    </View>
                </View>


                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Address</Text>
                    <Text style={styles.infoText}>Near Sai Temple, Bhagina Road, Pilani, 333031</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Languages</Text>
                    <View style={styles.languagesList}>
                        <Button size='medium' color='gray' title="Hindi   ✕" variant="outline" onPress={() => {}} />
                        <Button size='medium' color='gray' title="English   ✕" variant="outline" onPress={() => {}} />
                        <Button size='medium' color='green' title="+ Add Language" variant="primary" onPress={() => {}}/>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};

const createStyles = (theme: 'light' | 'dark') =>
    StyleSheet.create({
        container: {
            backgroundColor: Colors[theme].Background1,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: Colors[theme].BorderColor,
            width: '100%',
        },
        titleContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: Colors[theme].BorderColor,
            width: "100%",
            padding: 16,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors[theme].textHeading,
        },
        linkedit: {
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
        },
        edit: {
            fontSize: 16,
            color: Colors[theme].primary,
            fontWeight: "600",
        },
        verified: {
            color: Colors[theme].primary,   
        },
        detailContainer: {
            padding: 16,
            gap: 16,
        },
        sectionContainer: {
            padding: 0,
        },
        withIcon: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 4,
        },
        sectionTitle: {
            fontSize: 13,
            fontWeight: '400',
            color: Colors[theme].textSub,
            marginBottom: 8,
        },
        infoText: {
            fontSize: 16,
            color: Colors[theme].textBody,
        },

        languagesList: {
            flexDirection: 'row',
            gap: 8,
            flexWrap: 'wrap',
        },
    });

export default ProfileSummary;
