import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants/colors';

const DeliveryDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Icon name="chevron-left" size={26} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Delivery details</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Courier row */}
        <View style={styles.courierRow}>
          <View style={styles.avatarWrapper}>
            {/* Replace with real image if you have URL */}
            {/* <Image source={{ uri: avatarUrl }} style={styles.avatarImage} /> */}
            <View style={styles.avatarPlaceholder} />
          </View>

          <View style={styles.courierMiddle}>
            <Text style={styles.courierName}>Allan Smith</Text>
            <Text style={styles.courierSub}>124 Deliveries</Text>
            <View style={styles.ratingRow}>
              {/* Stars */}
              {[1, 2, 3, 4].map((s) => (
                <Icon
                  key={s}
                  name="star"
                  size={16}
                  style={styles.starIcon}
                  color="#F5B400"
                />
              ))}
              <Icon
                name="star-border"
                size={16}
                style={styles.starIcon}
                color="#F5B400"
              />
              <Text style={styles.ratingText}>4.1</Text>
            </View>
          </View>

          <View style={styles.courierRight}>
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>Completed</Text>
            </View>
            <View style={styles.vehiclePill}>
              <Icon
                name="two-wheeler"
                size={18}
                color={Colors.primary}
              />
            </View>
          </View>
        </View>

        {/* Locations */}
        <View style={styles.locationsBlock}>
          <View style={styles.pinColumn}>
            <View style={styles.pinTop} />
            <View style={styles.pinDot} />
            <View style={styles.pinDot} />
            <View style={styles.pinBottom} />
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.locationItem}>
              <Text style={styles.locationLabel}>Pickup Location</Text>
              <Text style={styles.locationText}>
                32 Samwell Sq, Chevron
              </Text>
            </View>

            <View style={styles.locationItem}>
              <Text style={styles.locationLabel}>Delivery Location</Text>
              <Text style={styles.locationText}>
                21b, Karimu Kotun Street, Victoria Island
              </Text>
            </View>
          </View>
        </View>

        {/* Two-column info grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoRow}>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>What you are sending</Text>
              <Text style={styles.infoValue}>Electronics/Gadgets</Text>
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Recipient</Text>
              <Text style={styles.infoValue}>Donald Duck</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Recipient contact number</Text>
              <Text style={styles.infoValue}>08123456789</Text>
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Fee:</Text>
              <Text style={styles.feeValue}>$150</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Payment</Text>
              <Text style={styles.infoValue}>Card</Text>
            </View>
            <View style={styles.infoCol} />
          </View>
        </View>

        {/* Images */}
        <View style={styles.imagesSection}>
          <Text style={styles.imagesLabel}>Pickup image(s)</Text>
          <View style={styles.imagesRow}>
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
          </View>

          <Text style={[styles.imagesLabel, { marginTop: 24 }]}>
            Delivery image(s)
          </Text>
          <View style={styles.imagesRow}>
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  /* header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
  },
  backButton: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
  },

  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  /* courier row */
  courierRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    marginRight: 12,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    flex: 1,
    backgroundColor: Colors.textSecondary,
  },
  courierMiddle: {
    flex: 1,
  },
  courierName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  courierSub: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 2,
  },
  ratingText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  courierRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 8,
  },
  completedBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: Colors.success,
    marginBottom: 8,
  },
  completedText: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: '600',
  },
  vehiclePill: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* locations */
  locationsBlock: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  pinColumn: {
    width: 20,
    alignItems: 'center',
    marginRight: 8,
    marginTop: 4,
  },
  pinTop: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E9505A',
    marginBottom: 4,
  },
  pinDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#00A46C',
    marginVertical: 2,
  },
  pinBottom: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00A46C',
    marginTop: 2,
  },
  locationItem: {
    marginBottom: 12,
  },
  locationLabel: {
    fontSize: 12,
    color: '#7280A7', // bluish like Figma
    marginBottom: 2,
  },
  locationText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },

  /* info grid */
  infoGrid: {
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  infoCol: {
    flex: 1,
    paddingRight: 16,
  },
  infoLabel: {
    fontSize: 12,
    color: '#7280A7',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  feeValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3250',
  },

  /* images */
  imagesSection: {
    marginBottom: 24,
  },
  imagesLabel: {
    fontSize: 13,
    color: '#7280A7',
    marginBottom: 8,
  },
  imagesRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  imageBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#E6E6E6',
    marginRight: 12,
  },
});

export default DeliveryDetailsScreen;
