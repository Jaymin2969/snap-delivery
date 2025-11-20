// CourierTrackingScreen.tsx / .js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants/colors';

const CourierTrackingScreen = ({ navigation }) => {
  const region = {
    latitude: 37.7648,
    longitude: -122.4194,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  };

  const courierLocation = { latitude: 37.7648, longitude: -122.4194 };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* MAP AS BACKGROUND */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
        showsUserLocation={false}
      >
        <Marker coordinate={courierLocation}>
          {/* tiny placeholder bike / car */}
          <Icon name="two-wheeler" size={28} color={Colors.primary} />
        </Marker>
      </MapView>

      {/* TOP TOAST */}
      <View style={styles.toastWrapper}>
        <View style={styles.toast}>
          <Text style={styles.toastText}>Your courier is on the way!</Text>
        </View>
      </View>

      {/* BOTTOM SHEET */}
      <View style={styles.sheet}>
        <View style={styles.sheetHandle} />

        {/* Header row */}
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetStatus}>Your courier is on his way!</Text>
          <Text style={styles.sheetEta}>2 mins away</Text>
        </View>

        {/* Courier row */}
        <View style={styles.courierRow}>
          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <Image
              // TODO: replace with your real asset
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.avatarImage}
            />
          </View>

          {/* Name + stats */}
          <View style={styles.courierTextCol}>
            <Text style={styles.courierName}>Allan Smith</Text>
            <Text style={styles.courierDeliveries}>124 Deliveries</Text>

            <View style={styles.ratingRow}>
              <View style={styles.starsRow}>
                <Icon name="star" size={16} color="#F7B500" />
                <Icon name="star" size={16} color="#F7B500" />
                <Icon name="star" size={16} color="#F7B500" />
                <Icon name="star" size={16} color="#F7B500" />
                <Icon name="star-border" size={16} color="#F7B500" />
              </View>
              <Text style={styles.ratingValue}>4.1</Text>
            </View>
          </View>

          {/* Call button */}
          <TouchableOpacity style={styles.callButton} activeOpacity={0.8}>
            <Icon name="phone" size={22} color={Colors.white} />
          </TouchableOpacity>
        </View>

        {/* Cancel */}
        <TouchableOpacity
          style={styles.cancelWrapper}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SHEET_HORIZONTAL_MARGIN = 0;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  /* Toast */
  toastWrapper: {
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  toast: {
    minWidth: '78%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: Colors.success,
  },
  toastText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },

  /* Bottom sheet */
  sheet: {
    position: 'absolute',
    left: SHEET_HORIZONTAL_MARGIN,
    right: SHEET_HORIZONTAL_MARGIN,
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
  },
  sheetHandle: {
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.borderMedium,
    alignSelf: 'center',
    marginBottom: 18,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sheetStatus: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.success,
  },
  sheetEta: {
    fontSize: 13,
    color: Colors.textSecondary,
  },

  courierRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  avatarWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 14,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },

  courierTextCol: {
    flex: 1,
  },
  courierName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  courierDeliveries: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    marginRight: 6,
  },
  ratingValue: {
    fontSize: 13,
    color: Colors.textSecondary,
  },

  callButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  cancelWrapper: {
    paddingTop: 4,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.error,
  },
});

export default CourierTrackingScreen;
