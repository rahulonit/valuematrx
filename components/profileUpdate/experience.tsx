import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Icon } from 'react-native-elements';
import { useColorScheme } from 'react-native';

interface IntroHeadlineProps {
    experience_bool: boolean;
    Experience: string;
}

const Experience: React.FC<IntroHeadlineProps> = ({ experience_bool, Experience }) => {
    const handleEdit = () => {
        console.log('Edit intro');
    };

    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light');

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Employment</Text>
                <TouchableOpacity style={styles.linkedit} onPress={handleEdit}>
                    <Icon name="edit" size={24} color={Colors[colorScheme || 'light'].primary} />
                    <Text style={styles.edit}>Add employment</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
                {experience_bool ? (
                    <View style={styles.innerInfo}>
                        <Text style={styles.text}>{Experience}</Text>
                    </View>
                ) : (
                    <View style={styles.innerInfo}>
                        <Text style={styles.NoIntrotext}>No experience added</Text>
                    </View>
                )}
            </View>
        </View>
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
            color: Colors[theme].textBody,
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
        innerContainer: {
            padding: 16,
        },
        innerInfo: {
            marginTop: 10,
        },
        text: {
            fontSize: 16,
            color: Colors[theme].textBody,
        },
        NoIntrotext: {
            fontSize: 16,
            color: Colors[theme].textSub,
            padding: 15,
            borderRadius: 8,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: Colors[theme].BorderColor,
        },
    });

export default Experience ;
