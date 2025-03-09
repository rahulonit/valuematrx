import React from 'react';
import styled from 'styled-components';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

interface AlertBoxProps {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

const AlertBoxContainer = styled.div<{ type: string; theme: 'light' | 'dark' }>`
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
    color: white;
    background-color: ${({ type, theme }: { type: string; theme: 'light' | 'dark' }) => {
        switch (type) {
            case 'success':
                return Colors[theme].GreenColor;
            case 'error':
                return Colors[theme].RedColor;
            case 'warning':
                return Colors[theme].YellowColor;
            case 'info':
                return Colors[theme].BlueColor;
            default:
                return Colors[theme].Background1;
        }
    }};
`;

const AlertBox: React.FC<AlertBoxProps> = ({ message, type }) => {
    const colorScheme = useColorScheme() ?? 'light';

    return <AlertBoxContainer type={type} theme={colorScheme}>{message}</AlertBoxContainer>;
};

export default AlertBox;