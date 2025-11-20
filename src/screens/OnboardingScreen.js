import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { logo, onboardingBG } from '../assests';
import { Colors } from '../constants/colors';
import { SCREENS } from '../types';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    title: 'Request for Delivery\nin few clicks',
    description: 'On-demand delivery whenever and\nwherever the need arises.',
    image: onboardingBG,
  },
  {
    id: '2',
    title: 'Fast & Reliable Delivery',
    description: 'Track your parcels and enjoy timely\nupdates every step of the way.',
    image: onboardingBG,
  },
  {
    id: '3',
    title: 'We Deliver Everything',
    description: 'Groceries, gifts, essentials.\nDelivered to your doorstep.',
    image: onboardingBG,
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  const onMomentumEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setIndex(newIndex);
  };

  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.image}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>Snap</Text>
          </View>

          {/* Text content */}
          <View style={styles.content}>
            <Text style={styles.headline}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumEnd}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Progress bar like Figma */}
      <View style={styles.progressContainer}>
        {SLIDES.map((_, i) => (
          <View
            key={i}
            style={[
              styles.progressBar,
              i === index ? styles.activeBar : styles.inactiveBar,
            ]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          if (index === SLIDES.length - 1) {
            navigation.navigate(SCREENS.SIGN_UP);
          } else {
            // swipe to next programmatically (optional)
            flatListRef.current?.scrollToIndex({
              index: index + 1,
              animated: true,
            });
          }
        }}>
        <Text style={styles.buttonText}>
          {index === SLIDES.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>

      {/* Sign in */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Have an account already? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGN_IN)}>
          <Text style={styles.signInLink}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  background: { width, height },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  logoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  headline: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 12,
    lineHeight: 38,
  },
  description: {
    fontSize: 15,
    color: Colors.white,
    opacity: 0.9,
    marginBottom: 40,
    lineHeight: 22,
  },
  progressContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  activeBar: {
    width: 30,
    backgroundColor: Colors.white,
  },
  inactiveBar: {
    width: 14,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  button: {
    backgroundColor: Colors.primary,
    marginHorizontal: 30,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  signInText: {
    color: Colors.white,
    fontSize: 14,
  },
  signInLink: {
    color: Colors.white,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default OnboardingScreen;
