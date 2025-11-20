import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../constants/colors';
import {
  selectUserProfile,
  selectInProgressDeliveries,
  selectCompletedDeliveries,
} from '../store/selectors';
import { setDeliveryType, clearDelivery } from '../store/slices/deliverySlice';
import { SCREENS } from '../types';
import { formatDate } from '../utils/helpers';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(selectUserProfile);
  const inProgressDeliveries = useSelector(selectInProgressDeliveries);
  const completedDeliveries = useSelector(selectCompletedDeliveries);

  useEffect(() => {
    dispatch(clearDelivery());
  }, []);

  const visibleHistory = completedDeliveries.slice(0, 2);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >

          {/* ---------------- HEADER ---------------- */}
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.userName}>
                {profile.firstName} {profile.lastName}
              </Text>
            </View>

            <View style={styles.headerRight}>
              <View style={styles.notificationBtn}>
                <Icon name="notifications-none" size={22} color="#000" />
                <View style={styles.redDot} />
              </View>

              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {profile.firstName?.[0]}
                  {profile.lastName?.[0]}
                </Text>
              </View>
            </View>
          </View>

          {/* ---------------- IN-PROGRESS CARD ---------------- */}
          {inProgressDeliveries.length > 0 && (
            <View style={styles.progressCard}>
              <View>
                <Text style={styles.progressOrderId}>ORDB1234</Text>
                <Text style={styles.progressRecipient}>
                  Recipient: {inProgressDeliveries[0]?.recipientName}
                </Text>
                <Text style={styles.progressTime}>20 mins to delivery location</Text>
              </View>

              <View style={styles.progressBadge}>
                <Text style={styles.progressBadgeText}>In progress</Text>
              </View>
            </View>
          )}

          {/* ---------------- QUESTION ---------------- */}
          <Text style={styles.question}>What would you like to do?</Text>

          {/* ---------------- INSTANT DELIVERY ---------------- */}
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.instantCard}
            onPress={() => navigation.navigate(SCREENS.INSTANT_DELIVERY)}
          >
            <Icon name="bolt" size={26} color="#026B6C" />

            <View style={{ marginTop: 8 }}>
              <Text style={styles.cardTitle}>Instant Delivery</Text>
              <Text style={styles.cardSubtitle}>
                Courier takes only your package and delivers instantly
              </Text>
            </View>

            <Icon
              name="bolt"
              size={110}
              color="#026B6C"
              style={styles.instantOverlay}
            />
          </TouchableOpacity>

          {/* ---------------- SCHEDULE DELIVERY ---------------- */}
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.scheduleCard}
            onPress={() => navigation.navigate(SCREENS.SCHEDULE_DELIVERY)}
          >
            <Icon name="timer" size={26} color="#026B6C" />

            <View style={{ marginTop: 8 }}>
              <Text style={styles.cardTitle}>Schedule Delivery</Text>
              <Text style={styles.cardSubtitle}>
                Courier comes to pick up on your specified date and time
              </Text>
            </View>

            <Icon
              name="timer"
              size={120}
              color="#D1D5DB"
              style={styles.scheduleOverlay}
            />
          </TouchableOpacity>

          {/* ---------------- HISTORY ---------------- */}
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>History</Text>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.HISTORY)}>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>

          {visibleHistory.map((item, index) => (
            <View key={index} style={styles.historyBox}>
              <View style={styles.historyTopRow}>
                <View>
                  <Text style={styles.historyOrderId}>ORDB1234</Text>
                  <Text style={styles.historyRecipient}>Recipient: {item.recipientName}</Text>
                </View>

                <View style={styles.completedBadge}>
                  <Text style={styles.completedText}>Completed</Text>
                </View>
              </View>

              {/* DROP OFF ROW */}
              <View style={styles.historyBottomRow}>
                <View style={styles.scooterIconBox}>
                  <Icon name="two-wheeler" size={20} color="#026B6C" />
                </View>

                <View>
                  <View style={styles.locationRow}>
                    <Icon name="place" size={14} color="#026B6C" />
                    <Text style={styles.dropLabel}>Drop off</Text>
                  </View>

                  <Text style={styles.historyLocation}>
                    Maryland bustop, Anthony Ikeja
                  </Text>

                  <Text style={styles.historyDate}>
                    12 January 2020, 2:43pm
                  </Text>
                </View>
              </View>

              {index !== visibleHistory.length - 1 && (
                <View style={styles.historyDivider} />
              )}
            </View>
          ))}

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    paddingHorizontal: 24,
  },

  scroll: { flex: 1 },

  /* HEADER */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  welcomeText: {
    fontSize: 13,
    color: '#6B7280',
    fontFamily:'TTNormsPro-Medium',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
    color: '#111827',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBtn: {
    marginRight: 18,
  },
  redDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    backgroundColor: '#E11D48',
    borderRadius: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#A7D7D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: '#FFF', fontWeight: '700' },

  /* IN PROGRESS CARD */
  progressCard: {
    backgroundColor: '#FFF7D1',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  progressOrderId: { fontWeight: '700', fontSize: 15, color: '#000' },
  progressRecipient: { marginTop: 2, color: '#444' },
  progressTime: { marginTop: 6, color: '#15803D', fontWeight: '600' },
  progressBadge: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: '#FDE68A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  progressBadgeText: { fontSize: 12, fontWeight: '600' },

  question: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 14,
  },

  /* INSTANT CARD */
  instantCard: {
    backgroundColor: '#BFE4E6',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    overflow: 'hidden',
  },
  instantOverlay: {
    position: 'absolute',
    right: -20,
    top: 15,
    opacity: 0.1,
  },

  /* SCHEDULE CARD */
  scheduleCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    padding: 18,
    marginBottom: 26,
    overflow: 'hidden',
  },
  scheduleOverlay: {
    position: 'absolute',
    right: -30,
    top: 10,
    opacity: 0.08,
  },

  cardTitle: { fontSize: 16, fontWeight: '700', color: '#000' },
  cardSubtitle: { fontSize: 13, color: '#6B7280', marginTop: 2 },

  /* HISTORY */
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  historyTitle: { fontSize: 16, fontWeight: '700' },
  viewAll: { color: '#026B6C', fontSize: 13, fontWeight: '600' },

  historyBox: { paddingBottom: 18, marginBottom: 6 },
  historyTopRow: { flexDirection: 'row', justifyContent: 'space-between' },
  historyOrderId: { fontSize: 16, fontWeight: '700', color: '#026B6C' },
  historyRecipient: { marginTop: 2, color: '#6B7280' },

  completedBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  completedText: { color: '#FFF', fontSize: 11, fontWeight: '600' },

  historyBottomRow: { flexDirection: 'row', marginTop: 12 },
  scooterIconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 12,
  },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  dropLabel: { marginLeft: 4, color: '#6B7280' },
  historyLocation: { fontWeight: '600', marginTop: 4, color: '#111827' },
  historyDate: { marginTop: 4, color: '#9CA3AF', fontSize: 12 },

  historyDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 16,
  },
});

export default HomeScreen;
