import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const UpdateProfile: React.FC<ProfileCardProps> = ({ name, role, company, location, experience, salary, phone, linkedin, email, profileUpdated}) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                    style={styles.profileImage}
                />
                <View style={styles.headerText}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.role}>{role}</Text>
                    <Text style={styles.company}>at {company}</Text>
                </View>
            </View>

            <Text style={styles.description}>
                We are currently seeking a creative, detail-oriented Designer to join our dynamic team. The ideal candidate will be responsible for creating intuitive and aesthetically pleasing designs.
            </Text>

            <View style={styles.detailsContainer}>
                <DetailItem icon="location-outline" text={location} />
                <DetailItem icon="briefcase-outline" text={experience} />
                <DetailItem icon="cash-outline" text={salary} />
                <DetailItem icon="call-outline" text={phone} />
                <DetailItem icon="logo-linkedin" text={linkedin} />
                <DetailItem icon="mail-outline" text={email} />
            </View>

            <Text style={styles.footer}>Profile last updated: {profileUpdated}</Text>
        </View>
    );
};

const DetailItem: React.FC<{ icon: any; text: string }> = ({ icon, text }) => (
    <View style={styles.detailItem}>
        <Ionicons name={icon} size={20} color="#4CAF50" />
        <Text style={styles.detailText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 4,
        margin: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    headerText: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    role: {
        color: '#666',
    },
    company: {
        color: '#888',
    },
    description: {
        color: '#666',
        marginVertical: 10,
    },
    detailsContainer: {
        marginTop: 12,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    detailText: {
        marginLeft: 8,
        color: '#333',
    },
    footer: {
        marginTop: 10,
        fontSize: 12,
        color: '#999',
    },
});

export default UpdateProfile;
