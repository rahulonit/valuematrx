import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Dashboard: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Candidate Dashboard</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Welcome to the Dashboard</Text>
                <Text style={styles.cardContent}>Here you can find an overview of your activities.</Text>
            </View>
            {/* Add more dashboard components here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 14,
        color: '#666',
    },
});

export default Dashboard;