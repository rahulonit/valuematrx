import React from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import Button from './button';

interface CustomAlertBoxProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const CustomAlertBox: React.FC<CustomAlertBoxProps> = ({ visible, onConfirm, onCancel }) => {
    const colorScheme = useColorScheme() ?? 'light';
    const styles = createStyles(colorScheme);

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.alertBox}>
                    <Image
                        source={require('../assets/shield-icon.png')} // Use the shield icon or any relevant image
                        style={styles.icon}
                    />
                    <Text style={styles.alertText}>
                        Do you want to switch to{" "}
                        <Text style={styles.boldText}>Candidate Dashboard</Text>?
                    </Text>

                    <View style={styles.buttonContainer}>
                        <Button title="Stay here" size="small" color="yellow" onPress={onCancel} />
                        <Button title="Switch to Candidate" size="small" color="green" onPress={onConfirm} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const createStyles = (theme: 'light' | 'dark') =>
    StyleSheet.create({
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        alertBox: {
            backgroundColor: Colors[theme].Background1,
            width: '80%',
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
        },
        icon: {
            width: 90,
            height: 80,
            marginBottom: 16,
        },
        alertText: {
            fontSize: 18,
            color: Colors[theme].textBody,
            textAlign: 'center',
            marginBottom: 24,
        },
        boldText: {
            fontWeight: 'bold',
            color: Colors[theme].primary,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        },
        button: {
            paddingVertical: 12,
            width: '48%',
            borderRadius: 8,
        },
    });

export default CustomAlertBox;
