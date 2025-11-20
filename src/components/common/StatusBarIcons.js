/**
 * Status Bar Icons Component
 * Reusable status bar icons for signal, wifi, and battery
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/colors';

const StatusBarIcons = ({ color = Colors.textPrimary, size = 18 }) => {
    return (
        <View style={styles.container}>
            <Icon name="signal-cellular-4-bar" size={size} color={color} />
            <Icon name="wifi" size={size} color={color} style={styles.icon} />
            <Icon name="battery-full" size={size} color={color} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    icon: {
        marginLeft: 4,
    },
});

export default StatusBarIcons;

