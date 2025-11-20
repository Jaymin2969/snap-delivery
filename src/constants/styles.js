import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from './colors';
import { Fonts } from '../utils/helpers';

const { width, height } = Dimensions.get('window');

// Default font family for the app
const defaultFontFamily = Platform.select({
  ios: Fonts.default,
  android: Fonts.default,
});

export const Styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // Status bar
  statusBar: {
    height: 44,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Typography
  titleLarge: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: Fonts.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  titleMedium: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: Fonts.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  titleSmall: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: Fonts.medium,
    color: Colors.textPrimary,
  },
  bodyLarge: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: Fonts.regular,
    color: Colors.textLight,
  },

  // Button styles
  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.medium,
  },

  // Input styles
  input: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },

  // Card styles
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

export const Dimensions = {
  screenWidth: width,
  screenHeight: height,
};

