import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Icon } from 'react-native-elements';
import { useColorScheme } from 'react-native';
import Button from '../ui/button';
import * as DocumentPicker from 'expo-document-picker';

const ResumeUpload = () => {
    const [resume, setResume] = useState<string | null>('Kaarthik - Designer- resume.pdf');
    const [uploadDate, setUploadDate] = useState<string>('14 June 2024');

    const handleUpload = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
            copyToCacheDirectory: true,
        });

        if (result.canceled) return;

        const fileSize = result.assets[0].size || 0;
        if (fileSize > 3 * 1024 * 1024) {
            alert('File size should be less than 3 MB');
            return;
        }

        setResume(result.assets[0].name);
        setUploadDate(new Date().toLocaleDateString('en-GB'));
    };

    const handleDelete = () => {
        setResume(null);
        setUploadDate('');
    };

    const colorScheme = useColorScheme();
    const styles = createStyles(colorScheme || 'light');


    return (
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Resume</Text>
            </View>
            {resume ? (
                <View style={styles.resumeCard}>
                    <View style={styles.resumeInfo}>
                        <Text style={styles.resumeName}>{resume}</Text>
                        <Text style={styles.uploadDate}>Uploaded on {uploadDate}</Text>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Icon name="edit" size={24} color={Colors[colorScheme || 'light'].primary} />
                           
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconButton, styles.deleteButton]} onPress={handleDelete}>
                          <Icon name="delete" size={24} color={Colors[colorScheme || 'light'].YellowColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
            <View style={styles.uploadCard}>
                <Button style={styles.button} title="Upload Resume" onPress={handleUpload} />
                <Text style={styles.fileInfo}>doc, docx, and pdf</Text>
                <Text style={styles.fileInfo}>(Up to 3 MB)</Text>
            </View>
        </View>
    );
};

const createStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
        backgroundColor: Colors[theme].Background1,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors[theme].BorderColor,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors[theme].textHeading,
    },
    titlecontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: Colors[theme].BorderColor,
        width: "100%",
        padding: 16,
    },
    resumeCard: {
        padding: 16,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems:'flex-start',
        justifyContent: 'space-between',
    },
    resumeInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    },
    resumeName: {
        color: Colors[theme].textHeading,
        fontSize: 16,
        fontWeight: '600',
    },
    uploadDate: {
        color: Colors[theme].textSub,
        fontSize: 12,
        marginTop: 12,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        width: '30%',
    },
    iconButton: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: Colors[theme].Green100,
        margin: 2,
        borderWidth: 1,
        borderColor: Colors[theme].GreenColor,
    },
    deleteButton: {
        backgroundColor: Colors[theme].Yellow100,
        borderWidth: 1,
        borderColor: Colors[theme].YellowColor,
    },
    icon: {
        fontSize: 20,
    },
    uploadCard: {
        margin: 16,
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors[theme].BorderColor,
    },
    button: {
        width: '100%',
    },

    fileInfo: {
        textAlign: 'center',
        color: Colors[theme].textSub,
        marginTop: 5,
    },
});

export default ResumeUpload;
