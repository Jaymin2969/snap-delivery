import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../types';
import { logo } from '../assests';
import { Colors } from '../constants/colors';

const SignUpScreen = () => {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#FFFFFF' }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <StatusBar barStyle="dark-content" />

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView>

                    {/* Logo */}
                    <View style={styles.logoRow}>
                        <Image
                            source={logo}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.logoText}>Snap</Text>
                    </View>

                    {/* Title */}
                    <Text style={styles.title}>Let’s get started</Text>
                    <Text style={styles.subtitle}>Please input your details</Text>

                    {/* Form */}
                    <View style={styles.form}>
                        {/* First + Last name row */}
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.input, styles.half]}
                                placeholder="First name"
                                placeholderTextColor="#9CA3AF"
                                value={firstName}
                                onChangeText={setFirstName}
                            />

                            <TextInput
                                style={[styles.input, styles.half]}
                                placeholder="Last name"
                                placeholderTextColor="#9CA3AF"
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </View>

                        {/* Phone with country flag */}
                        <View style={styles.phoneRow}>
                            <View style={styles.flagBox}>
                                <Text style={{ fontSize: 18 }}>🇳🇬</Text>
                            </View>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder="Your phone number"
                                placeholderTextColor="#9CA3AF"
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType="phone-pad"
                            />
                        </View>

                        {/* Email */}
                        <TextInput
                            style={styles.input}
                            placeholder="Your email"
                            placeholderTextColor="#9CA3AF"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        {/* Password */}
                        <TextInput
                            style={styles.input}
                            placeholder="Your password"
                            placeholderTextColor="#9CA3AF"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        {/* Continue Button */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate(SCREENS.VERIFICATION)}
                        >
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>

                        {/* Terms */}
                        <Text style={styles.terms}>
                            By signing up, you agree to snap{" "}
                            <Text style={styles.link}>Terms of Service</Text>{" "}
                            and{" "}
                            <Text style={styles.link}>Privacy Policy</Text>
                        </Text>

                        {/* Sign in */}
                        <View style={styles.signInRow}>
                            <Text style={styles.signInText}>
                                Already had an account?{" "}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGN_IN)}>
                                <Text style={styles.signInLink}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 60,
        paddingHorizontal: 24,
    },

    /* LOGO */
    logoRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 40,
        alignItems: 'center',
    },
    logoImage: {
        width: 34, // matches Figma size
        height: 34,
        marginRight: 8,
    },
    logoText: {
        fontSize: 26,
        fontWeight: '700',
        color: '#0F172A',
        letterSpacing: -0.3,
    },

    /* TITLES */
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 28,
    },

    /* FORM */
    form: {
        width: '100%',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    half: {
        width: '48%',
    },

    input: {
        height: 52,
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingHorizontal: 14,
        fontSize: 16,
        color: '#111827',
        marginBottom: 16,
    },

    /* PHONE */
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        marginBottom: 16,
    },
    flagBox: {
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneInput: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 14,
        fontSize: 16,
    },

    /* BUTTON */
    button: {
        backgroundColor: '#1F6F78',
        height: 52,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '600',
    },

    /* TERMS */
    terms: {
        marginTop: 18,
        fontSize: 12,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 18,
    },
    link: {
        color: '#1F6F78',
        textDecorationLine: 'underline',
        fontWeight: '500',
    },

    /* SIGN IN */
    signInRow: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signInText: {
        fontSize: 14,
        color: '#6B7280',
    },
    signInLink: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F6F78',
    },
});

export default SignUpScreen;
