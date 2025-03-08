import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import HeaderComponent from '@/components/header';
import { Stack, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Button from '@/components/button';

const today = [
    { id: '1', title: 'Frontend Developer', company: 'Google', match: 95, logo: 'https://logo.clearbit.com/google.com' },
    { id: '2', title: 'Data Analyst', company: 'Amazon', match: 87, logo: 'https://logo.clearbit.com/amazon.com' },
    { id: '3', title: 'UI/UX Designer', company: 'Adobe', match: 68, logo: 'https://logo.clearbit.com/adobe.com' },
];

const scheduled = [
    { id: '1', title: 'Software Engineer', company: 'Meta', match: 92, logo: 'https://logo.clearbit.com/meta.com' },
    { id: '2', title: 'Cloud Infrastructure Engineer', company: 'AWS', match: 88, logo: 'https://logo.clearbit.com/aws.amazon.com' },
    { id: '3', title: 'Product Designer', company: 'Spotify', match: 76, logo: 'https://logo.clearbit.com/spotify.com' },
    { id: '4', title: 'Data Scientist', company: 'IBM', match: 72, logo: 'https://logo.clearbit.com/ibm.com' },
    { id: '5', title: 'AI Engineer', company: 'OpenAI', match: 65, logo: 'https://logo.clearbit.com/openai.com' },
    { id: '6', title: 'Security Analyst', company: 'Palo Alto Networks', match: 91, logo: 'https://logo.clearbit.com/paloaltonetworks.com' },
];

const pending = [
    { id: '1', title: 'Backend Developer', company: 'Microsoft', match: 93, logo: 'https://logo.clearbit.com/microsoft.com' },
    { id: '2', title: 'QA Engineer', company: 'Dropbox', match: 84, logo: 'https://logo.clearbit.com/dropbox.com' },
    { id: '3', title: 'UI/UX Researcher', company: 'Figma', match: 62, logo: 'https://logo.clearbit.com/figma.com' },
    { id: '4', title: 'DevOps Engineer', company: 'DigitalOcean', match: 75, logo: 'https://logo.clearbit.com/digitalocean.com' },
    { id: '5', title: 'Technical Writer', company: 'Notion', match: 70, logo: 'https://logo.clearbit.com/notion.so' },
    { id: '6', title: 'Mobile App Developer', company: 'Snapchat', match: 58, logo: 'https://logo.clearbit.com/snapchat.com' },
    { id: '7', title: 'Cloud Infrastructure Engineer', company: 'AWS', match: 88, logo: 'https://logo.clearbit.com/aws.amazon.com' },
    { id: '8', title: 'Product Designer', company: 'Spotify', match: 76, logo: 'https://logo.clearbit.com/spotify.com' },
    { id: '9', title: 'Data Scientist', company: 'IBM', match: 72, logo: 'https://logo.clearbit.com/ibm.com' },
    { id: '10', title: 'AI Engineer', company: 'OpenAI', match: 65, logo: 'https://logo.clearbit.com/openai.com' },
];


const getMatchColor = (match: number, theme: 'light' | 'dark') => {
    if (match >= 90) return { backgroundColor: Colors[theme].GreenColor };
    if (match >= 70) return { backgroundColor: Colors[theme].YellowColor };
    return { backgroundColor: Colors[theme].RedColor };
};

interface InterviewItem {
    id: string;
    title: string;
    company: string;
    match: number;
    logo?: string;
}

const InterviewCard = ({ item, theme, styles }: { item: InterviewItem; theme: 'light' | 'dark'; styles: any }) => (
    <View style={styles.card}>
        <View style={styles.cardInfo}>
            <Image source={{ uri: item.logo  }} style={styles.logo} />
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.company}>{item.company}</Text>
            </View>
        </View>
        <View style={[styles.matchTag, getMatchColor(item.match, theme)]}>
            <Text style={styles.matchText}>Match - {item.match}%</Text>
        </View>
    </View>
);

export default function InterviewsScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme() ?? 'light';
    const theme = colorScheme;
    const styles = createStyles(theme);
    const [selectedTab, setSelectedTab] = useState('Today');

    const TabContentToday = useMemo(() => (
        <FlatList
            data={today}
            renderItem={({ item }) => <InterviewCard item={item} theme={theme} styles={styles} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    ), [today, theme, styles]);
    
    const TabContentScheduled = useMemo(() => (
        <FlatList
            data={scheduled}
            renderItem={({ item }) => <InterviewCard item={item} theme={theme} styles={styles} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    ), [scheduled, theme, styles]);
    
    const TabContentPending = useMemo(() => (
        <FlatList
            data={pending}
            renderItem={({ item }) => <InterviewCard item={item} theme={theme} styles={styles} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    ), [pending, theme, styles]);

    return (
        <View >
            <Stack.Screen options={{ title: 'Interviwes' }} />
            <View style={styles.dashContainer}>
                <HeaderComponent />
            </View>
                <View style={styles.container}>
                    {/* Profile Status Bar */}
                    <View style={styles.profileContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>  
                            <Text style={styles.profileText}>Complete your profile</Text>
                            <Button style={styles.button}  title="Update Profile" color='yellow' variant='outline' onPress={() => router.push('/profile')} />
                       </View>
                        <Text style={styles.matchText}>75% Completed</Text>
                        <View style={styles.progressBarContainer}>
                            <View style={styles.progressBar} />
                        </View>
                    </View>
                    <View style={styles.tabContainer}>
                    {/* Tabs */}
                    <View style={styles.tabs}>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Today' && styles.activeTabButton]}
                            onPress={() => setSelectedTab('Today')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Today' && styles.activeTabButtonText]}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Scheduled' && styles.activeTabButton]}
                            onPress={() => setSelectedTab('Scheduled')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Scheduled' && styles.activeTabButtonText]}>Scheduled</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Pending' && styles.activeTabButton]}
                            onPress={() => setSelectedTab('Pending')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Pending' && styles.activeTabButtonText]}>Pending</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Tab Content */}
                    {selectedTab === 'Today' && TabContentToday}
                    {selectedTab === 'Scheduled' && TabContentScheduled}
                    {selectedTab === 'Pending' && TabContentPending}
                    </View>
                </View>
        </View>
    );
}

const createStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    dashContainer: {
        width: '100%',
        zIndex: 100,
        position: 'absolute',
        borderBottomWidth: 1,
        borderColor: Colors[theme].BorderColor,
      
    },
    container: {
        padding: 16,
        paddingBottom: 40,
        gap: 16,
        paddingTop: 140,
        height: '100%',
    },
    profileContainer: {
        borderRadius: 12,
        padding: 16,
        backgroundColor: Colors[theme].Background1,
        borderColor: Colors[theme].BorderColor,
        borderWidth: 1,
    },
    profileText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors[theme].textHeading,
    },
    updateButton: {
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignSelf: 'flex-end',
        backgroundColor: Colors[theme].GreenColor,
    },
    
    progressBarContainer: {
        marginTop: 8,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors[theme].Grey200,
    },
    progressBar: {
        width: '75%',
        height: '100%',
        borderRadius: 3,
        backgroundColor: Colors[theme].GreenColor,
    },
    tabContainer: {
        flex: 1, 
    },  
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: Colors[theme].BorderColor,
        borderBottomWidth: 0,
        borderRadius: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
        gap: 8,
    },
    tabButton: {
        flex: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: 0,
        borderWidth: 1,
        borderColor: Colors[theme].BorderColor,
    },
    activeTabButton: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors[theme].Background1,
    },
    tabButtonText: {
        fontSize: 16,
        color: Colors[theme].textBody,
    },
    activeTabButtonText: {
        color: Colors[theme].primary,
    },
    listContainer: {
        gap: 8,
        width: '100%',
        borderTopWidth: 0,
        borderRadius: 16,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: 12,
        borderColor: Colors[theme].BorderColor,
        borderWidth: 1,
        backgroundColor: Colors[theme].Background1,
    },
    card: {
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors[theme].Background2,
        borderColor: Colors[theme].BorderColor,
        borderWidth: 1,
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    logo: {
        width: 44,
        height: 44,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors[theme].textHeading,
        paddingBottom: 4,
        width: 150,
    },
    company: {
        fontSize: 12,
        color: Colors[theme].textBody,
    },
    matchTag: {
        width: 100,
        alignItems: 'center',
        borderRadius: 4,
        padding: 10,
    },
    matchText: {
        color: Colors[theme].white,
        fontWeight: '400',
        fontSize: 12,
    },
    button: {
        paddingVertical: 12,
        width: 150,
        borderRadius: 8,
    },
});
