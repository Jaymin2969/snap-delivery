/**
 * Instant Delivery Screen
 * Figma-aligned layout: map on top + bottom sheet card
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../constants/colors';
import {
  setPickupLocation,
  setDeliveryLocation,
  setVehicleType,
} from '../store/slices/deliverySlice';
import { selectCurrentDelivery } from '../store/selectors';
import { VEHICLE_TYPES, SCREENS } from '../types';
import StatusBarIcons from '../components/common/StatusBarIcons';

const InstantDeliveryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentDelivery = useSelector(selectCurrentDelivery);

  const [pickupLocation, setPickupLocationLocal] = useState(
    currentDelivery.pickupLocation || '32 Samwell Sq, Chevron',
  );
  const [deliveryLocation, setDeliveryLocationLocal] = useState(
    currentDelivery.deliveryLocation ||
      '21b, Karimu Kotun Street, Victoria Island',
  );
  const [selectedVehicle, setSelectedVehicle] = useState(
    currentDelivery.vehicleType || VEHICLE_TYPES.MOTORCYCLE,
  );

  useEffect(() => {
    dispatch(setPickupLocation(pickupLocation));
    dispatch(setDeliveryLocation(deliveryLocation));
    dispatch(setVehicleType(selectedVehicle));
  }, [pickupLocation, deliveryLocation, selectedVehicle, dispatch]);

  const region = {
    latitude: 37.8024,
    longitude: -122.4058,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const handleNext = () => {
    navigation.navigate(SCREENS.DETAILS);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* Map fills top; bottom sheet overlays it */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={region}
            showsUserLocation={false}
          >
            <Marker
              coordinate={{ latitude: 37.8024, longitude: -122.4058 }}
              pinColor={Colors.error}
            />
            <Marker
              coordinate={{ latitude: 37.8044, longitude: -122.4078 }}
              pinColor={Colors.success}
            />
          </MapView>

          {/* circular back button like Figma */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Icon name="chevron-left" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>

          {/* bottom sheet card */}
          <View style={styles.bottomCard}>
            <View style={styles.cardHandle} />
            <Text style={styles.cardTitle}>Instant Delivery</Text>

            {/* Pickup */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pickup Location</Text>
              <View style={styles.inputContainer}>
                <View style={styles.pinCircleRed}>
                  <Icon
                    name="place"
                    size={14}
                    color={Colors.error}
                    style={{ marginTop: 1 }}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  value={pickupLocation}
                  onChangeText={setPickupLocationLocal}
                  placeholder="Enter pickup location"
                  placeholderTextColor={Colors.textLight}
                />
              </View>
            </View>

            {/* Delivery */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Delivery Location</Text>
              <View style={styles.inputContainer}>
                <View style={styles.pinCircleGreen}>
                  <Icon
                    name="place"
                    size={14}
                    color={Colors.success}
                    style={{ marginTop: 1 }}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  value={deliveryLocation}
                  onChangeText={setDeliveryLocationLocal}
                  placeholder="Enter delivery location"
                  placeholderTextColor={Colors.textLight}
                />
              </View>
            </View>

            {/* Vehicle type */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Vehicle Type</Text>
              <View style={styles.vehicleRow}>
                <VehicleCard
                  label="Bike"
                  icon="two-wheeler"
                  selected={selectedVehicle === VEHICLE_TYPES.MOTORCYCLE}
                  onPress={() => setSelectedVehicle(VEHICLE_TYPES.MOTORCYCLE)}
                />
                <VehicleCard
                  label="Car"
                  icon="directions-car"
                  selected={selectedVehicle === VEHICLE_TYPES.CAR}
                  onPress={() => setSelectedVehicle(VEHICLE_TYPES.CAR)}
                />
                <VehicleCard
                  label="Van"
                  icon="local-shipping"
                  selected={selectedVehicle === VEHICLE_TYPES.VAN}
                  onPress={() => setSelectedVehicle(VEHICLE_TYPES.VAN)}
                />
              </View>
            </View>

            {/* Next button */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const VehicleCard = ({ label, icon, selected, onPress }) => (
  <TouchableOpacity
    style={[styles.vehicleButton, selected && styles.vehicleButtonActive]}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <Icon
      name={icon}
      size={22}
      color={selected ? Colors.primary : Colors.textSecondary}
    />
    <Text
      style={[
        styles.vehicleLabel,
        selected && { color: Colors.primary, fontWeight: '600' },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  statusBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 6,
  },
  time: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },

  container: {
    flex: 1,
  },

  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },

  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

  bottomCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 10,
  },
  cardHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.borderMedium,
    alignSelf: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 16,
  },

  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F7F7',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  pinCircleRed: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  pinCircleGreen: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
  },

  vehicleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleButton: {
    flex: 1,
    height: 80,
    borderRadius: 12,
    backgroundColor: Colors.background,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  vehicleButtonActive: {
    backgroundColor: '#E0F2F1',
    borderColor: Colors.primary,
  },
  vehicleLabel: {
    marginTop: 6,
    fontSize: 12,
    color: Colors.textSecondary,
  },

  nextButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default InstantDeliveryScreen;
