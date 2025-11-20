import React, { useState, useRef } from 'react';
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
import { useDispatch } from 'react-redux';
import { Colors } from '../constants/colors';
import { setUser, setToken } from '../store/slices/authSlice';
import { logo } from '../assests';

const VerificationScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(['1', '3', '4', '5']);
  const inputRefs = useRef([]);
  const phoneNumber = route?.params?.phoneNumber || '23480*******90';

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    // TODO: real API verify
    const mockUser = {
      id: '1',
      email: 'user@example.com',
      phone: phoneNumber,
      firstName: 'User',
      lastName: 'Name',
    };
    dispatch(setUser(mockUser));
    dispatch(setToken('mock_token_12345'));
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Fake iOS status row like Figma (optional) */}
        <View style={styles.statusBarContent}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.statusIcons}>
            <View style={styles.signalBar} />
            <View style={styles.wifiIcon} />
            <View style={styles.batteryIcon} />
          </View>
        </View>

        <View style={styles.content}>
          {/* Logo row */}
          <View style={styles.logoRow}>
            <Image source={logo} style={styles.logoImage} resizeMode="contain" />
            <Text style={styles.logoText}>Snap</Text>
          </View>

          {/* Heading */}
          <Text style={styles.heading}>Enter the 4-digit code</Text>
          <Text style={styles.subtitle}>
            Please input the verification code sent to your phone number {phoneNumber}
          </Text>

          <TouchableOpacity style={styles.changeNumber}>
            <Text style={styles.changeNumberText}>Change number?</Text>
          </TouchableOpacity>

          {/* Code inputs */}
          <View style={styles.codeContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.codeInput}
                value={code[index]}
                onChangeText={(text) => handleCodeChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          {/* Resend */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't get any code yet? </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Resend code</Text>
            </TouchableOpacity>
          </View>

          {/* Verify button */}
          <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          {/* Terms */}
          <Text style={styles.terms}>
            By signing up, you agree to snap{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* fake status row */
  statusBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    marginBottom: 12,
  },
  time: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalBar: {
    width: 18,
    height: 10,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
    marginRight: 4,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
    marginRight: 4,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  /* logo */
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoImage: {
    width: 34,
    height: 34,
    marginRight: 8,
  },
  logoText: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  changeNumber: {
    marginBottom: 24,
  },
  changeNumberText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  codeInput: {
    width: 56,
    height: 56,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginRight: 12,
  },

  resendContainer: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  resendText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  resendLink: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },

  button: {
    backgroundColor: Colors.primary,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },

  terms: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 24,
  },
  termsLink: {
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default VerificationScreen;
