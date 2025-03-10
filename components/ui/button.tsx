import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps {
    title: string;
    iconName?:string;
    onPress: () => void;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    variant?: 'primary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    color?: 'green' | 'yellow' | 'red' | 'blue' | 'gray';
    icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color, textColor, style, textStyle, variant = 'primary', size = 'medium', icon = false, iconName }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme || 'light';

    let backgroundColor = Colors[theme].GreenColor;
    let borderColor = Colors[theme].Green500;
    let textColorVariant = textColor || Colors[theme].white;

    switch (color) {
        case 'gray':
            backgroundColor = Colors[theme].GreyColor;
            borderColor = Colors[theme].Grey500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'yellow':
            backgroundColor = Colors[theme].YellowColor;
            borderColor = Colors[theme].Yellow500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'red':
            backgroundColor = Colors[theme].RedColor;
            borderColor = Colors[theme].Red500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'blue':
            backgroundColor = Colors[theme].BlueColor;
            borderColor = Colors[theme].Blue500;
            textColorVariant = textColor || Colors[theme].white;
            break;
        case 'green':
        default:
            backgroundColor = Colors[theme].GreenColor;
            borderColor = Colors[theme].Green500;
            textColorVariant = textColor || Colors[theme].white;
            break;
    }

    if (variant === 'outline')
        switch (color) {
            case 'gray':
                backgroundColor = Colors[theme].Grey100;
                borderColor = Colors[theme].Grey500;
                textColorVariant = textColor || Colors[theme].GreyColor;
                break;
            case 'yellow':
                backgroundColor = Colors[theme].Yellow100;
                borderColor = Colors[theme].Yellow500;
                textColorVariant = textColor || Colors[theme].YellowColor;
                break;
            case 'red':
                backgroundColor = Colors[theme].Red100;
                borderColor = Colors[theme].Red500;
                textColorVariant = textColor || Colors[theme].RedColor;
                break;
            case 'blue':
                backgroundColor = Colors[theme].Blue100;
                borderColor = Colors[theme].Blue500;
                textColorVariant = textColor || Colors[theme].BlueColor;
                break;
            case 'green':
            default:
                backgroundColor = Colors[theme].Green100;
                borderColor = Colors[theme].Green500;
                textColorVariant = textColor || Colors[theme].GreenColor;
                break;
        }

    const sizeStyles = getSizeStyles(size);

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor, borderColor }, sizeStyles.button, style]} onPress={onPress}>
            <View style={styles.content}>
                {icon && iconName && <Ionicons name={iconName as any} size={16} color={textColorVariant} style={styles.icon} />}
                <Text style={[styles.buttonText, { color: textColorVariant }, sizeStyles.buttonText, textStyle]}>{title}</Text>
            </View>
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
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
});

export default Button;