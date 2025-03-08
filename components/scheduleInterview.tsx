import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Briefcase, Calendar, MapPin } from "lucide-react-native";
import { useColorScheme } from 'react-native';
import Button from '@/components/button';
import { Colors } from '../constants/Colors';

const redirectSignIn = () => {
    console.log("Redirecting to sign in...");
};

const invites = [
    {
        id: '1',
        jobTitle: 'Crane Operator',
        company: 'VonRueden Group',
        jobType: 'Freelancing',
        location: 'West Marlen',
        startDate: 'Sep 13 2024',
        endDate: 'Sep 13 2024',
    },
    {
        id: '2',
        jobTitle: 'Software Engineer',
        company: 'Tech Solutions',
        jobType: 'Full-time',
        location: 'San Francisco',
        startDate: 'Oct 1 2024',
        endDate: 'Oct 1 2025',
    },
    {
        id: '3',
        jobTitle: 'Project Manager',
        company: 'Innovate Corp',
        jobType: 'Contract',
        location: 'New York',
        startDate: 'Nov 15 2024',
        endDate: 'Nov 15 2025',
    },
    {
        id: '4',
        jobTitle: 'Data Analyst',
        company: 'Data Insights',
        jobType: 'Part-time',
        location: 'Chicago',
        startDate: 'Dec 1 2024',
        endDate: 'Dec 1 2025',
    },
    {
        id: '5',
        jobTitle: 'Marketing Specialist',
        company: 'Creative Agency',
        jobType: 'Freelancing',
        location: 'Los Angeles',
        startDate: 'Jan 10 2025',
        endDate: 'Jan 10 2026',
    },
];

const ScheduleInterview = () => {
    const colorScheme = useColorScheme() ?? 'light';
    const styles = createStyles(colorScheme);

    const renderItem = ({ item }: { item: typeof invites[0] }) => (
        <View style={styles.card}>
            <Text style={styles.jobTitle}>{item.jobTitle}</Text>
            <Text style={styles.company}>{item.company}</Text>

            {/* Progress Bar */}
            <View style={styles.progressBar}>
                <Text style={styles.progressText}>Progress: </Text>
                <Text style={styles.progressStatus}>N/A</Text>
            </View>
            <View style={styles.details}>
                {/* Job Details */}
                <View style={styles.detailsRow}>
                    <Briefcase size={16} color={Colors[colorScheme].textSub} />
                    <Text style={styles.detailText}>{item.jobType}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <MapPin size={16} color={Colors[colorScheme].textSub} />
                    <Text style={styles.detailText}>{item.location}</Text>
                </View>

                {/* Start & End Date */}
                <View style={styles.dateRow}>
                    <Calendar size={16} color={Colors[colorScheme].textSub} />
                    <Text style={styles.dateText}>Start: {item.startDate}</Text>
                </View>
                <View style={styles.dateRow}>
                    <Calendar size={16} color={Colors[colorScheme].textSub} />
                    <Text style={styles.dateText}>End: {item.endDate}</Text>
                </View>
            </View>
            {/* View Result & Withdraw Buttons */}
            <View style={styles.buttonRow}>
                <Button style={styles.buttonDes} title="View Details" size='medium' color="green" onPress={redirectSignIn} />
                <Button style={styles.buttonDes} title="Withdraw" size='medium' color="yellow" variant="outline" onPress={redirectSignIn} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Scheduled Interview (30)</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>

            {/* Invite Cards */}
            <FlatList
                data={invites}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />

        </View>
    );
};

const createStyles = (theme: 'light' | 'dark') =>
    StyleSheet.create({
        container: {
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
        flatListContent: {
            paddingHorizontal: 16,
            paddingVertical: 12,
            gap: 16,
        },
        details: {
            alignItems: "flex-start",
            marginBottom: 6,
            gap: 8,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          },
        card: {
            backgroundColor: Colors[theme].Background2,
            borderRadius: 12,
            padding: 12,
            width: 300,
            borderBottomColor: Colors[theme].BorderColor,
        },
        jobTitle: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 4,
            color: Colors[theme].textHeading,
        },
        company: {
            fontSize: 14,
            color: Colors[theme].textSub,
            marginBottom: 8,
        },
        progressBar: {
            backgroundColor: Colors[theme].Green100,
            borderRadius: 8,
            paddingVertical: 4,
            paddingHorizontal: 10,
            marginBottom: 8,
            flexDirection: 'row',
            alignItems: 'center'
        },
        progressText: {
            fontSize: 14,
            color: Colors[theme].textBody,
            fontWeight: '600'
        },
        progressStatus: {
            fontWeight: "bold",
            color: Colors[theme].Green600
        },
        detailsRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
            flexWrap: "wrap",
        },
        detailText: {
            fontSize: 14,
            color: Colors[theme].textBody,
            marginLeft: 6,
        },
        dateRow: {
            flexDirection: "row",
            alignItems: "center",
        },
        dateText: {
            fontSize: 14,
            color: Colors[theme].textBody,
            marginLeft: 6,
        },
        buttonRow: {
            flexDirection: "row",
            marginTop: 12,
            gap: 16,
          },
      
          buttonDes: {
            width: 130,
          },
        
    });

export default ScheduleInterview;
