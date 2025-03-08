import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

interface InputProps extends TextInputProps {
    variant: 'text' | 'email' | 'password' | 'date';
}

const Input: React.FC<InputProps> = ({ variant, style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme || 'light';
    const [isFocused, setIsFocused] = useState(false);
    const styles = createStyles(theme, isFocused);

    return (
        <View style={styles.inputFieldContainer}>
            <TextInput
                style={[styles.placeholder, style]}
                keyboardType={variant === 'email' ? 'email-address' : 'default'}
                secureTextEntry={variant === 'password'}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors[theme].textSubTextColor}
                {...props}
            />
        </View>
    );
};

const createStyles = (theme: 'light' | 'dark', isFocused: boolean) =>
    StyleSheet.create({
        inputFieldContainer: {
            width: '100%',
            flexShrink: 0,
            borderStyle: 'solid',
            backgroundColor: Colors[theme].backgroundAndBorderBackground2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderWidth: 1,
            borderColor: isFocused ? Colors[theme].greenGreenColor : Colors[theme].backgroundAndBorderBorderColor,
            borderRadius: 12,
            marginTop: 8,
            marginBottom: 8,
        },
        placeholder: {
            width: '100%',
            textAlign: 'left',
            color: Colors[theme].textBodyTextColor,
            fontSize: 18,
            fontWeight: '400',
            paddingHorizontal: 4,
            paddingVertical: 12,
        },
    });

export default Input;