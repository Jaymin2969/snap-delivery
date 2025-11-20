/**
 * Custom Text Component
 * Wrapper around React Native Text component with TT Norms Pro as default font
 */

import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { Fonts } from '../../utils/helpers';

/**
 * Custom Text component with TT Norms Pro as default font
 * @param {Object} props - Text component props
 * @param {string} props.variant - Font variant: 'regular', 'medium', 'bold', 'light'
 * @param {Object} props.style - Additional styles
 */
export const Text = ({ variant = 'regular', style, ...props }) => {
    const fontFamily = Fonts[variant] || Fonts.regular;

    return (
        <RNText
            style={[styles.default, { fontFamily }, style]}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    default: {
        fontFamily: Fonts.regular,
    },
});

export default Text;

