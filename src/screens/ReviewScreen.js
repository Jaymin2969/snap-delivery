import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../constants/colors';
import { SCREENS } from '../types';

const ReviewScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  const region = {
    latitude: 37.7648,
    longitude: -122.4194,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12,
  };

  const pathCoordinates = [
    { latitude: 37.7605, longitude: -122.4785 },
    { latitude: 37.7625, longitude: -122.46 },
    { latitude: 37.7645, longitude: -122.445 },
    { latitude: 37.767, longitude: -122.435 },
    { latitude: 37.7695, longitude: -122.425 },
  ];

  const pickupLocation = pathCoordinates[0];
  const deliveryLocation = pathCoordinates[pathCoordinates.length - 1];

  const handleDone = () => {
    navigation.navigate('MainTabs', { screen: SCREENS.HOME });
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          initialRegion={region}
          showsUserLocation={false}
          pointerEvents="none"
        >
          {/* route */}
          <Polyline
            coordinates={pathCoordinates}
            strokeColor={Colors.primary}
            strokeWidth={4}
          />

          {/* pickup + drop markers (simplified icons) */}
          <Marker coordinate={pickupLocation}>
            <View style={styles.packageMarker}>
              <Icon name="local-shipping" size={18} color={Colors.primary} />
            </View>
          </Marker>

          <Marker coordinate={deliveryLocation}>
            <View style={styles.courierMarker} />
          </Marker>
        </MapView>

        {/* green toast on top */}
        <View style={styles.toast}>
          <Text style={styles.toastText}>Delivery in progress</Text>
        </View>

        {/* bottom review sheet */}
        <View style={styles.bottomCard}>
          <View style={styles.handle} />

          <Text style={styles.title}>Leave a review about this Courier</Text>

          <Text style={styles.ratingLabel}>Rating</Text>

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map(star => {
              const filled = star <= rating;
              return (
                <TouchableOpacity
                  key={star}
                  activeOpacity={0.8}
                  onPress={() => setRating(star)}
                >
                  <Icon
                    name={filled ? 'star' : 'star-border'}
                    size={34}
                    style={styles.starIcon}
                    color={filled ? '#F2B035' : '#F2B035'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.doneButton}
            activeOpacity={0.9}
            onPress={handleDone}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  mapWrapper: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },

  /* top toast */
  toast: {
    position: 'absolute',
    top: 16,
    left: 24,
    right: 24,
    backgroundColor: Colors.success,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
  toastText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },

  /* markers */
  packageMarker: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  courierMarker: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.white,
  },

  /* bottom sheet */
  bottomCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 32,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 10,
  },
  handle: {
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.borderMedium,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 24,
  },
  ratingLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 10,
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  starIcon: {
    marginRight: 8,
  },

  doneButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  doneText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReviewScreen;
