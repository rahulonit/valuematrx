import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import SuggestionUpdate from '@/components/dashboard/suggestionUpdate';
import HeaderComponent from '@/components/ui/header';
import ResumeUpload from '@/components/profileUpdate/resume';
import IntroHeadline from '@/components/profileUpdate/introHeadline';
import KeySkills from '@/components/profileUpdate/keySkills';
import Experience from '@/components/profileUpdate/experience';
import { Ionicons } from '@expo/vector-icons';
import ITskill from '@/components/profileUpdate/itSkill';
import Projects from '@/components/profileUpdate/projects';
import Education from '@/components/profileUpdate/education';
import ProfileSummary from '@/components/profileUpdate/profileSummary';
import CareerProfile from '@/components/profileUpdate/careerProfile';
import ProbingQuestions from '@/components/profileUpdate/probingQuestion';

interface ProfileCardProps {
    name: string;
    role: string;
    company: string;
    location: string;
    experience: string;
    salary: string;
    phone: string;
    linkedin: string;
    email: string;
    profileUpdated: string;
}

const UpdateProfile: React.FC<ProfileCardProps> = ({
    name,
    role,
    company,
    location,
    experience,
    salary,
    phone,
    linkedin,
    email,
    profileUpdated,
}) => {
    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light');

    return (
        <View>
            <View style={styles.dashContainer}>
                <HeaderComponent title='Profile' />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                                style={styles.profileImage}
                            />
                            <View style={styles.headerText}>
                                <Text style={styles.name}>Rahul Kumar {name}</Text>
                                <Text style={styles.role}>Ux UI Desiger {role}</Text>
                                <Text style={styles.company}>at Valuematrix {company}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.description}>
                        We are currently seeking a creative, detail-oriented Designer to join our dynamic team. The ideal candidate will be responsible for creating intuitive and aesthetically pleasing designs.
                    </Text>

                    <View style={styles.detailsContainer}>
                        <DetailItem icon="location-outline" text={location} styles={styles} />
                        <DetailItem icon="briefcase-outline" text={experience} styles={styles} />
                        <DetailItem icon="cash-outline" text={salary} styles={styles} />
                        <DetailItem icon="call-outline" text={phone} styles={styles} />
                        <DetailItem icon="logo-linkedin" text={linkedin} styles={styles} />
                        <DetailItem icon="mail-outline" text={email} styles={styles} />
                    </View>

                    <Text style={styles.footer}>Profile last updated: 12 Januray 2025{profileUpdated}</Text>
                    <SuggestionUpdate />
                    <ResumeUpload />
                    <IntroHeadline introtext={false} Introtext="No Intro added" />
                    <KeySkills keyskill={false} KeySkills="No Skills added" />
                    <ITskill itskill={false} ITSkills="No IT Skills added" />
                    <Experience experience_bool={false} Experience="No experience added" />
                    <Projects projects_bool={false} Projects="No projects added" />
                    <Education education_bool={false} Education="No Education added" />
                    <CareerProfile />
                    <ProfileSummary />
                    <ProbingQuestions />
                </View>
            </ScrollView>
        </View>
    );
};

const DetailItem: React.FC<{ icon: any; text: string; styles: any }> = ({ icon, text, styles }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme || 'light';
    return (
        <View style={styles.detailItem}>
            <Ionicons name={icon} size={20} color={Colors[theme].textSub} />
            <Text style={styles.detailText}> Text goes here{text}</Text>
        </View>
    );
};

const createStyles = (theme: 'light' | 'dark') =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 16,
            paddingBottom: 40,
            gap: 16,
            marginTop: 100,
        },
        dashContainer: {
            width: '100%',
            zIndex: 100,
            position: 'absolute',
            borderBottomWidth: 1,
            borderColor: Colors[theme].BorderColor,
        },
        card: {
            backgroundColor: Colors[theme].Background1,
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: Colors[theme].BorderColor,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        },
        profileImage: {
            width: 75,
            height: 75,
            borderRadius: 12,
            marginRight: 12,
        },
        headerText: {
            flex: 1,
        },
        name: {
            fontWeight: '500',
            fontSize: 20,
            color: Colors[theme].textHeading,
        },
        role: {
            fontSize: 16,
            color: Colors[theme].textSub,
        },
        company: {
            color: Colors[theme].textBody,
        },
        description: {
            color: Colors[theme].textBody,
            marginVertical: 10,
        },
        detailsContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: 12,
        },
        detailItem: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
        },
        detailText: {
            fontSize: 16,
            marginLeft: 8,
            color: Colors[theme].textSub,
        },
        footer: {
            marginTop: 10,
            fontSize: 12,
            color: Colors[theme].textBody,
        },
    });

export default UpdateProfile;
