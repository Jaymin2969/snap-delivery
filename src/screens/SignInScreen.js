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
    SafeAreaView,
    Image,
} from 'react-native';
import { Colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../types';
import { logo } from '../assests';

const SignInScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={logo}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.logoText}>Snap</Text>
                </View>

                {/* Welcome */}
                <View style={styles.header}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.subtitle}>Please input your details</Text>
                </View>

                {/* Form */}
                <View style={styles.form}>
                    {/* Email */}
                    <TextInput
                        style={styles.input}
                        placeholder="youremailaddress@address.com"
                        placeholderTextColor="#8795A1"
                        value={email}
                        onChangeText={setEmail}
                    />

                    {/* Password */}
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="#8795A1"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            disabled={!password}
                        >
                            <Text style={styles.showText}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Forgot password */}
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    {/* Button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Need an account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(SCREENS.SIGN_UP)}
                        >
                            <Text style={styles.footerLink}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24, // similar to Figma side padding
    },

    // Logo row
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 40,
    },
    logoImage: {
        width: 32,   // tweak 28–36 if needed to match Figma
        height: 32,
        marginRight: 8,
    },
    logoText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0F172A',
        letterSpacing: -0.3,
    },

    // Heading
    header: {
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    welcome: {
        fontSize: 26,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 13,
        color: '#6B7280',
    },

    // Form
    form: {
        flex: 1,
    },
    input: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        marginBottom: 16,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
    },
    showText: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: '500',
    },

    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 4,
        marginBottom: 32,
    },
    forgotPasswordText: {
        fontSize: 13,
        color: '#6B7280',
    },

    button: {
        backgroundColor: '#1F6F78',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 24,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 13,
        color: '#6B7280',
    },
    footerLink: {
        fontSize: 13,
        color: '#1F6F78',
        fontWeight: '600',
    },
});

export default SignInScreen;
