import React from 'react';
import styled from 'styled-components';
import { Colors } from '@/constants/Colors';

interface AlertBoxProps {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

const theme = {
    colors: {
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FFC107',
        info: '#2196F3',
    },
};

const AlertBoxContainer = styled.div<{ type: string }>`
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
    color: white;
    background-color: ${({ type }) => theme.colors[type]};
`;

const AlertBox: React.FC<AlertBoxProps> = ({ message, type }) => {
    return <AlertBoxContainer type={type}>{message}</AlertBoxContainer>;
};

export default AlertBox;