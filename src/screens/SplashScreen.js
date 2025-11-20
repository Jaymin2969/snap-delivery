import React from 'react';
import { View, StyleSheet, StatusBar, ImageBackground, Image } from 'react-native';
import { Colors } from '../constants/colors';
import { splash } from '../assests';

const SplashScreen = () => {
  // Navigation is handled by AppNavigator - this screen just displays during loading

  // Background image - add Splash.png to /assets folder
  // Once you add the image, uncomment the ImageBackground below and comment out the View

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Once you add Splash.png to /assets folder, uncomment the ImageBackground below and comment out the View */}
      <ImageBackground
        source={splash}
        style={styles.background}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white, // Fallback background color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    position: 'relative',
    marginRight: 20,
  },
  logoBlock: {
    position: 'absolute',
  },
  // Dark teal base, angled slightly (bottom layer)
  logoBlockDarkTeal: {
    backgroundColor: '#0F766E', // Dark teal
    width: 50,
    height: 50,
    bottom: 0,
    left: 0,
    transform: [{ rotate: '-8deg' }],
    zIndex: 1,
  },
  // Lighter teal rectangle, layered over dark teal, extending to the right
  logoBlockLightTeal: {
    backgroundColor: '#14B8A6', // Light teal
    width: 45,
    height: 35,
    bottom: 8,
    left: 5,
    zIndex: 2,
  },
  // Red rectangle, positioned towards left, on top of teal
  logoBlockRed: {
    backgroundColor: Colors.logoRed,
    width: 30,
    height: 25,
    bottom: 12,
    left: 2,
    zIndex: 3,
  },
  // Light blue square, positioned above red and teal, slightly to the right
  logoBlockLightBlue: {
    backgroundColor: Colors.logoLightBlue,
    width: 28,
    height: 28,
    top: 8,
    right: 8,
    zIndex: 4,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '90deg' }],
  },
  logoText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1E40AF', // Dark blue
    letterSpacing: -1,
    lineHeight: 40,
  },
});

export default SplashScreen;

