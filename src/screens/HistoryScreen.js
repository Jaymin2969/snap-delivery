import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants/colors';
import { SCREENS } from '../types';

const HistoryScreen = ({ navigation }) => {
  const deliveries = [
    {
      id: 'ORDB1234',
      recipient: 'Paul Pogba',
      location: '21b, Karimu Kotun Street, Victoria Island',
      time: '20 mins to delivery location',
      status: 'in_progress',
    },
    {
      id: 'ORDB1234',
      recipient: 'Paul Pogba',
      location: 'Maryland bustop, Anthony Ikeja',
      date: '12 January 2020, 2:43pm',
      status: 'completed',
    },
    {
      id: 'ORDB1234',
      recipient: 'Paul Pogba',
      location: 'Maryland bustop, Anthony Ikeja',
      date: '12 January 2020, 2:43pm',
      status: 'completed',
    },
    {
      id: 'ORDB1234',
      recipient: 'Paul Pogba',
      location: 'Maryland bustop, Anthony Ikeja',
      date: '12 January 2020, 2:43pm',
      status: 'completed',
    },
  ];

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerRow}>
        <Text style={styles.screenTitle}>Delivery History</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
          <Icon name="tune" size={18} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {deliveries.map((delivery, index) => (
          <View key={`${delivery.id}-${index}`}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.deliveryCard}
              onPress={() => navigation.navigate(SCREENS.DELIVERY_DETAILS)}
            >
              {/* Top row: ID + status pill */}
              <View style={styles.topRow}>
                <View>
                  <Text style={styles.orderId}>{delivery.id}</Text>
                  <Text style={styles.recipient}>
                    Recipient: {delivery.recipient}
                  </Text>
                </View>

                <View
                  style={[
                    styles.statusPill,
                    delivery.status === 'completed'
                      ? styles.statusCompleted
                      : styles.statusInProgress,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      delivery.status === 'completed'
                        ? styles.statusTextCompleted
                        : styles.statusTextInProgress,
                    ]}
                  >
                    {delivery.status === 'completed'
                      ? 'Completed'
                      : 'In progress'}
                  </Text>
                </View>
              </View>

              {/* Scooter + location + time/date */}
              <View style={styles.middleRow}>
                <View style={styles.scooterBox}>
                  <Icon
                    name="two-wheeler"
                    size={20}
                    color={Colors.primary}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <View style={styles.dropOffRow}>
                    <Icon
                      name="place"
                      size={14}
                      color={Colors.primary}
                      style={{ marginRight: 4 }}
                    />
                    <Text style={styles.dropOffLabel}>Drop off</Text>
                  </View>

                  <Text style={styles.locationText}>{delivery.location}</Text>

                  {delivery.time ? (
                    <Text style={styles.timeToDelivery}>{delivery.time}</Text>
                  ) : (
                    <Text style={styles.dateText}>{delivery.date}</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>

            {/* Divider line between items (not after last one) */}
            {index !== deliveries.length - 1 && (
              <View style={styles.divider} />
            )}
          </View>
        ))}
      </ScrollView>

      {/* Bottom nav bar (Home / History / Profile) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('MainTabs', { screen: SCREENS.HOME })
          }
        >
          <Icon name="home" size={22} color={Colors.textLight} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <Icon name="history" size={22} color={Colors.primary} />
          <Text style={[styles.navText, styles.navTextActive]}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('MainTabs', { screen: SCREENS.PROFILE })
          }
        >
          <Icon name="person" size={22} color={Colors.textLight} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  /* Header */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  filterButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },

  deliveryCard: {
    paddingVertical: 16,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  recipient: {
    fontSize: 13,
    color: Colors.textSecondary,
  },

  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusInProgress: {
    backgroundColor: '#FFF2CC', // soft yellow like Figma
  },
  statusCompleted: {
    backgroundColor: Colors.primary,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  statusTextInProgress: {
    color: '#7A5A00',
  },
  statusTextCompleted: {
    color: Colors.white,
  },

  middleRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  scooterBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F3F6F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dropOffRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  dropOffLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  locationText: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: '500',
    marginBottom: 2,
  },
  timeToDelivery: {
    fontSize: 12,
    color: Colors.success,
  },
  dateText: {
    fontSize: 12,
    color: Colors.textLight,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.borderLight,
  },

  /* Bottom nav */
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    paddingVertical: 10,
    paddingBottom: 22,
    backgroundColor: Colors.white,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 11,
    color: Colors.textLight,
    marginTop: 2,
  },
  navTextActive: {
    color: Colors.primary,
    fontWeight: '600',
  },
});

export default HistoryScreen;
