import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    variant?: 'primary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    color?: 'green' | 'yellow' | 'red' | 'blue';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color, textColor, style, textStyle, variant = 'primary', size = 'medium' }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme || 'light';

    let backgroundColor = Colors[theme].greenGreenColor;
    let borderColor = Colors[theme].greenGreen500;
    let textColorVariant = textColor || Colors[theme].white;

    switch (color) {
        case 'yellow':
            backgroundColor = Colors[theme].yellowYellowColor;
            borderColor = Colors[theme].yellowYellow500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'red':
            backgroundColor = Colors[theme].redRedColor;
            borderColor = Colors[theme].redRed500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'blue':
            backgroundColor = Colors[theme].blueBlueColor;
            borderColor = Colors[theme].blueBlue500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'green':
        default:
            backgroundColor = Colors[theme].greenGreenColor;
            borderColor = Colors[theme].greenGreen500;
            textColorVariant = textColor || Colors[theme].white;
            break;
    }

    if (variant === 'outline') 
        switch (color) {
        case 'yellow':
            backgroundColor = Colors[theme].yellowYellow100;
            borderColor = Colors[theme].yellowYellow500;
            textColorVariant = textColor || Colors[theme].yellowYellowColor;
            break;
        case 'red':
            backgroundColor = Colors[theme].redRed100;
            borderColor = Colors[theme].redRed500;
            textColorVariant = textColor || Colors[theme].redRedColor;
            break;
        case 'blue':
            backgroundColor = Colors[theme].blueBlue100;
            borderColor = Colors[theme].blueBlue500;
            textColorVariant = textColor || Colors[theme].blueBlueColor;
            break;
        case 'green':
        default:
            backgroundColor = Colors[theme].greenGreen100;
            borderColor = Colors[theme].greenGreen500;
            textColorVariant = textColor || Colors[theme].greenGreenColor;
            break;
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
                    borderRadius: 8,
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
                    borderRadius: 16,
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
                    borderRadius: 12,
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
        marginVertical: 8,
        borderWidth: 1,
    },
    buttonText: {
        fontWeight: '600',
    },
});

export default Button;