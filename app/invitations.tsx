import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import HeaderComponent from '@/components/ui/header';
import { Stack, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import UpdateProfile from '@/components/updateProfile';


const CognitiveandPsychometric = [
    { id: '1', title: 'Software Engineer', company: 'Meta', match: 92, logo: 'https://logo.clearbit.com/meta.com' },
    { id: '2', title: 'Cloud Infrastructure Engineer', company: 'AWS', match: 88, logo: 'https://logo.clearbit.com/aws.amazon.com' },
    { id: '3', title: 'Product Designer', company: 'Spotify', match: 76, logo: 'https://logo.clearbit.com/spotify.com' },
    { id: '4', title: 'Data Scientist', company: 'IBM', match: 72, logo: 'https://logo.clearbit.com/ibm.com' },
    { id: '5', title: 'AI Engineer', company: 'OpenAI', match: 65, logo: 'https://logo.clearbit.com/openai.com' },
    { id: '6', title: 'Security Analyst', company: 'Palo Alto Networks', match: 91, logo: 'https://logo.clearbit.com/paloaltonetworks.com' },
];

const PendingInvites = [
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
    if (match >= 90) return { backgroundColor: Colors[theme].Green100, borderColor: Colors[theme].GreenColor, color: Colors[theme].GreenColor };
    if (match >= 80) return { backgroundColor: Colors[theme].Blue100, borderColor: Colors[theme].BlueColor, color: Colors[theme].BlueColor };
    if (match >= 70) return { backgroundColor: Colors[theme].Yellow100, borderColor: Colors[theme].YellowColor, color: Colors[theme].YellowColor };
    return { backgroundColor: Colors[theme].Red100, borderColor: Colors[theme].RedColor, color: Colors[theme].RedColor };
};

interface InterviewItem {
    id: string;
    title: string;
    company: string;
    match: number;
    logo?: string;
}

const InterviewCard = ({ item, theme, styles }: { item: InterviewItem; theme: 'light' | 'dark'; styles: any }) => {
    const matchColor = getMatchColor(item.match, theme);
    return (
        <View style={styles.card}>
            <View style={styles.cardInfo}>
                <Image source={{ uri: item.logo }} style={styles.logo} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.company}>{item.company}</Text>
                </View>
            </View>
            <View style={[styles.matchTag, matchColor]}>
                <Text style={[styles.matchText, { color: matchColor.color }]}>Match - {item.match}%</Text>
            </View>
        </View>
    );
};

export default function InvitationScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme() ?? 'light';
    const theme = colorScheme;
    const styles = createStyles(theme);
    const [selectedTab, setSelectedTab] = useState('Pending Invites');

    const TabContentPendingInvites = useMemo(() => (
        <FlatList
            data={PendingInvites}
            renderItem={({ item }) => <InterviewCard item={item} theme={theme} styles={styles} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    ), [PendingInvites, theme, styles]);

    const TabContentCognitiveandPsychometric = useMemo(() => (
        <FlatList
            data={CognitiveandPsychometric}
            renderItem={({ item }) => <InterviewCard item={item} theme={theme} styles={styles} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    ), [CognitiveandPsychometric, theme, styles]);

    return (
        <View>
            <Stack.Screen options={{ title: 'Invitations' }} />
            <View style={styles.dashContainer}>
                <HeaderComponent title='Invitations' />
            </View>
            <View style={styles.container}>
                <UpdateProfile />
                <View style={styles.tabContainer}>
                    <View style={styles.tabs}>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Pending Invites' && styles.activeTabButton]}
                            onPress={() => setSelectedTab('Pending Invites')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Pending Invites' && styles.activeTabButtonText]}>Pending Invites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Cognitive and Psychometric' && styles.activeTabButton]}
                            onPress={() => setSelectedTab('Cognitive and Psychometric')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Cognitive and Psychometric' && styles.activeTabButtonText]}>Cognitive and Psychometric</Text>
                        </TouchableOpacity>
                    </View>
                    {selectedTab === 'Pending Invites' && TabContentPendingInvites}
                    {selectedTab === 'Cognitive and Psychometric' && TabContentCognitiveandPsychometric}
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
    
    tabContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        borderColor: Colors[theme].BorderColor,
        borderWidth: 1,flex: 1, 
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
        
        backgroundColor: Colors[theme].Background2,
    },
    tabButton: {
        flex: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        alignItems: 'center',
        
        justifyContent: 'center',
    },
    activeTabButton: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors[theme].Green100,
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
        borderColor: Colors[theme].BorderColor,
        width: '100%',
        borderTopWidth: 0,
        borderRadius: 16,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: 12,
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
        borderRadius: 6,
        padding: 10,
    },
    matchText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    
});
