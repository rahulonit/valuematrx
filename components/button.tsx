import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    color?: string;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    variant?: 'primary' | 'outline';
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color, textColor, style, textStyle, variant = 'primary', size = 'medium' }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme || 'light';
    let backgroundColor = color || Colors[theme].primary;
    let borderColor = color || Colors[theme].primary;
    let textColorVariant = textColor || Colors[theme].white;

    if (variant === 'outline') {
        backgroundColor = 'transparent';
        borderColor = color || Colors[theme].primary;
        textColorVariant = color || Colors[theme].primary;
    }

    const sizeStyles = getSizeStyles(size);

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor, borderColor }, sizeStyles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, { color: textColorVariant }, sizeStyles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const getSizeStyles = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small':
            return {
                button: {
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                },
                buttonText: {
                    fontSize: 12,
                },
            };
        case 'large':
            return {
                button: {
                    paddingVertical: 16,
                    paddingHorizontal: 32,
                },
                buttonText: {
                    fontSize: 18,
                },
            };
        case 'medium':
        default:
            return {
                button: {
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                },
                buttonText: {
                    fontSize: 14,
                },
            };
    }
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        width: '100%',
        marginVertical: 8,
        borderWidth: 1,
    },
    buttonText: {
        fontWeight: '600',
    },
});

export default Button;