import React from 'react';
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

const ConfirmDetailsScreen = ({ navigation }) => {
  const region = {
    latitude: 37.8024,
    longitude: -122.4058,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const pickupLocation = { latitude: 37.8024, longitude: -122.4058 };
  const deliveryLocation = { latitude: 37.8044, longitude: -122.4078 };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* Map */}
      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          initialRegion={region}
          showsUserLocation={false}
        >
          <Marker coordinate={pickupLocation} pinColor={Colors.error} />
          <Marker coordinate={deliveryLocation} pinColor={Colors.success} />
          <Polyline
            coordinates={[pickupLocation, deliveryLocation]}
            strokeColor={Colors.success}
            strokeWidth={3}
          />
        </MapView>

        {/* circular back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Icon name="chevron-left" size={26} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Floating card */}
      <View style={styles.cardOuter}>
        <View style={styles.bottomCard}>
          <View style={styles.cardHandle} />

          <Text style={styles.cardTitle}>Confirm Details</Text>

          {/* Pickup + Delivery block */}
          <View style={styles.routeRow}>
            {/* dots column */}
            <View style={styles.dotsColumn}>
              <View style={[styles.dot, styles.redDot]} />
              <View style={[styles.dot, styles.greenDot, { marginTop: 4 }]} />
              <View style={[styles.dot, styles.greenDot, { marginTop: 4 }]} />
              <View style={[styles.dotHollow]} />
            </View>

            {/* text column */}
            <View style={styles.routeTextColumn}>
              {/* pickup */}
              <View style={{ marginBottom: 12 }}>
                <Text style={styles.routeLabel}>Pickup Location</Text>
                <Text style={styles.routeAddress}>32 Samwell Sq, Chevron</Text>
              </View>

              {/* delivery */}
              <View>
                <Text style={styles.routeLabel}>Delivery Location</Text>
                <Text style={styles.routeAddress}>
                  21b, Karimu Kotun Street, Victoria Island
                </Text>
              </View>
            </View>

            {/* vehicle pill */}
            <View style={styles.vehiclePill}>
              <Icon name="two-wheeler" size={18} color={Colors.primary} />
            </View>
          </View>

          {/* What / Recipient row */}
          <View style={styles.twoColRow}>
            <View style={styles.col}>
              <Text style={styles.subLabel}>What you are sending</Text>
              <Text style={styles.subValue}>Electronics/Gadgets</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.subLabel}>Receipient</Text>
              <Text style={styles.subValue}>Donald Duck</Text>
            </View>
          </View>

          {/* Recipient contact full width */}
          <View style={styles.singleBlock}>
            <Text style={styles.subLabel}>Receipient contact number</Text>
            <Text style={styles.subValue}>08123456789</Text>
          </View>

          {/* Payment / Estimated fee row */}
          <View style={styles.twoColRow}>
            <View style={styles.col}>
              <Text style={styles.subLabel}>Payment</Text>
              <Text style={styles.subValue}>Card</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.subLabel}>Estimated fee:</Text>
              <Text style={styles.feeValue}>$150</Text>
            </View>
          </View>

          {/* Edit link */}
          <TouchableOpacity
            style={styles.editLink}
            onPress={() => navigation.navigate(SCREENS.DETAILS)}
          >
            <Text style={styles.editLinkText}>Edit Details</Text>
          </TouchableOpacity>

          {/* CTA */}
          <TouchableOpacity
            style={styles.courierButton}
            onPress={() => navigation.navigate(SCREENS.COURIER_TRACKING)}
            activeOpacity={0.9}
          >
            <Text style={styles.courierButtonText}>Look for courier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CARD_MARGIN_H = 20;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  /* map */
  mapWrapper: {
    height: '45%',
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },

  /* card */
  cardOuter: {
    flex: 1,
    marginTop: -24,
    // paddingHorizontal: CARD_MARGIN_H,
  },
  bottomCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 28,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  cardHandle: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.borderMedium,
    alignSelf: 'center',
    marginBottom: 18,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 20,
  },

  /* route section */
  routeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  dotsColumn: {
    width: 18,
    alignItems: 'center',
    marginRight: 6,
    marginTop: 4,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  redDot: {
    backgroundColor: Colors.error,
  },
  greenDot: {
    backgroundColor: Colors.success,
  },
  dotHollow: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.success,
    marginTop: 4,
  },
  routeTextColumn: {
    flex: 1,
    paddingLeft: 4,
  },
  routeLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  routeAddress: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  vehiclePill: {
    alignSelf: 'flex-start',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#E0F2F1',
    marginLeft: 8,
  },

  /* info rows */
  twoColRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  col: {
    flex: 1,
  },
  singleBlock: {
    marginBottom: 18,
  },
  subLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  subValue: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  feeValue: {
    fontSize: 18,
    color: Colors.textPrimary,
    fontWeight: '700',
  },

  /* edit link */
  editLink: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 18,
  },
  editLinkText: {
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },

  /* CTA */
  courierButton: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  courierButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default ConfirmDetailsScreen;
