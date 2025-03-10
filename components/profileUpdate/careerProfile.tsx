    import React from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
    import { Icon } from 'react-native-elements';
    import { Colors } from '@/constants/Colors';
    import { useColorScheme } from 'react-native';
    
    const handleEdit = () => {
        // Define what happens when the edit button is pressed
        console.log('Edit button pressed');
    };
    
    const CareerProfile = () => {
        const colorScheme = useColorScheme();
        const styles = createStyles(colorScheme || 'light');
    
        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Career profile</Text>
                    <TouchableOpacity style={styles.linkedit} onPress={handleEdit}>
                        <Icon name="edit" size={24} color={Colors[colorScheme || 'light'].primary} />
                        <Text style={styles.edit}>Edit Career</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Current industry</Text>
                        <Text style={styles.infoText}>IT Services & Consulting</Text>
                    </View>
    
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Department</Text>
                        <Text style={styles.infoText}>UX, Design & Architecture</Text>
                    </View>
    
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Desired job type</Text>
                        <Text style={styles.infoText}>contractual, permanent</Text>
                    </View>
    
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Desired employment type</Text>
                        <Text style={styles.infoText}>Full Time</Text>
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Expected salary</Text>
                        <Text style={styles.infoText}>$ 1,100,000</Text>
                    </View>
    
                    
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Preferred work location</Text>
                        <Text style={styles.infoText}>Pune, Bangalore/Bengaluru, Mumbai, Remote, Delhi / NCR, Noida, Gurgaon/Gurugram</Text>
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
    
    export default CareerProfile;
    