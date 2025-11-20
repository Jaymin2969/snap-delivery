// src/screens/ScheduleDeliveryScreen.js

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

const ScheduleDeliveryScreen = () => {
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
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
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
        {/* MAP */}
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

          {/* circular back button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Icon name="chevron-left" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>

          {/* BOTTOM SHEET CARD */}
          <View style={styles.bottomCard}>
            <View style={styles.cardHandle} />
            <Text style={styles.cardTitle}>Schedule Delivery</Text>

            {/* Pickup */}
            <View style={styles.inputGroup}>
              <Text style={styles.sectionLabel}>Pickup Location</Text>
              <View style={styles.locationInput}>
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
              <Text style={styles.sectionLabel}>Delivery Location</Text>
              <View style={styles.locationInput}>
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

            {/* Date & Time row */}
            <View style={styles.dateTimeRow}>
              <View style={styles.dateTimeCol}>
                <Text style={styles.sectionLabel}>Date</Text>
                <TextInput
                  style={styles.dateTimeInput}
                  value={date}
                  onChangeText={setDate}
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor={Colors.textLight}
                />
              </View>

              <View style={styles.dateTimeCol}>
                <Text style={styles.sectionLabel}>Time</Text>
                <View style={styles.timeWrapper}>
                  <TextInput
                    style={styles.timeInput}
                    value={time}
                    onChangeText={setTime}
                    placeholder="HH:MM"
                    placeholderTextColor={Colors.textLight}
                  />
                  <TouchableOpacity style={styles.timeRight}>
                    <Text style={styles.timeRightText}>pm</Text>
                    <Icon
                      name="arrow-drop-down"
                      size={20}
                      color={Colors.textSecondary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Vehicle type */}
            <View style={styles.inputGroup}>
              <Text style={styles.sectionLabel}>Vehicle Type</Text>
              <View style={styles.vehicleRow}>
                <VehicleCard
                  icon="two-wheeler"
                  selected={selectedVehicle === VEHICLE_TYPES.MOTORCYCLE}
                  onPress={() => setSelectedVehicle(VEHICLE_TYPES.MOTORCYCLE)}
                />
                <VehicleCard
                  icon="directions-car"
                  selected={selectedVehicle === VEHICLE_TYPES.CAR}
                  onPress={() => setSelectedVehicle(VEHICLE_TYPES.CAR)}
                />
                <VehicleCard
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

const VehicleCard = ({ icon, selected, onPress }) => (
  <TouchableOpacity
    style={[styles.vehicleButton, selected && styles.vehicleButtonActive]}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <Icon
      name={icon}
      size={26}
      color={selected ? Colors.primary : Colors.textSecondary}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },

  /* Map */
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
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

  /* Bottom card */
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
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.borderMedium,
    alignSelf: 'center',
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 18,
  },

  inputGroup: {
    marginBottom: 18,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  locationInput: {
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

  /* Date & Time */
  dateTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 12,
  },
  dateTimeCol: {
    flex: 1,
  },
  dateTimeInput: {
    backgroundColor: '#F4F7F7',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F7F7',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  timeInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  timeRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  timeRightText: {
    fontSize: 14,
    color: Colors.textPrimary,
    marginRight: 2,
  },

  /* Vehicle row */
  vehicleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleButton: {
    flex: 1,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#F4F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  vehicleButtonActive: {
    backgroundColor: '#CBE7E5',
    borderColor: Colors.primary,
  },

  /* Next button */
  nextButton: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
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

export default ScheduleDeliveryScreen;
