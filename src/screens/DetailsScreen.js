import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants/colors';
import { SCREENS } from '../types';

const DetailsScreen = ({ navigation }) => {
  const [itemType, setItemType] = useState('');
  const [quantity, setQuantity] = useState('5');
  const [whoPays, setWhoPays] = useState('me');
  const [recipientName, setRecipientName] = useState('Donald Duck');
  const [recipientPhone, setRecipientPhone] = useState('08123456789');
  const [paymentType, setPaymentType] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Icon name="chevron-left" size={28} color={Colors.textPrimary} />
          </TouchableOpacity>

          <Text style={styles.screenTitle}>Details</Text>
        </View>

        {/* Body */}
        <View style={styles.content}>
          {/* Item type */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>What are you sending</Text>
            <Text style={styles.hint}>
              Select type of item (e.g gadget, document)
            </Text>

            <View style={styles.dropdownBox}>
              <TextInput
                style={styles.inputDropdown}
                value={itemType}
                onChangeText={setItemType}
                placeholder="Select"
                placeholderTextColor={Colors.textSecondary}
              />
              <Icon
                name="keyboard-arrow-down"
                size={20}
                color={Colors.textSecondary}
              />
            </View>

            {/* Warning */}
            <View style={styles.warningContainer}>
              <View style={styles.warningIconCircle}>
                <Text style={styles.warningIconText}>!</Text>
              </View>
              <Text style={styles.warningText}>
                Our Prohibited Items include: blah, blah, blah, blah, blah,
                blah, blah, blah, blah, blah, blah, blah, blah, blah, blah
              </Text>
            </View>
          </View>

          {/* Quantity */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
              placeholder="0"
              keyboardType="number-pad"
              placeholderTextColor={Colors.textSecondary}
            />
          </View>

          {/* Who pays */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Select who pays</Text>
            <View style={styles.radioContainer}>
              {/* Me */}
              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setWhoPays('me')}
              >
                <View style={styles.radioOuter}>
                  {whoPays === 'me' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioText}>Me</Text>
              </TouchableOpacity>

              {/* Recipient */}
              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setWhoPays('recipient')}
              >
                <View style={styles.radioOuter}>
                  {whoPays === 'recipient' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioText}>Recipient</Text>
              </TouchableOpacity>
            </View>

            {/* Payment type dropdown */}
            <View style={styles.dropdownBox}>
              <TextInput
                style={styles.inputDropdown}
                value={paymentType}
                onChangeText={setPaymentType}
                placeholder="Payment type"
                placeholderTextColor={Colors.textSecondary}
              />
              <Icon
                name="keyboard-arrow-down"
                size={20}
                color={Colors.textSecondary}
              />
            </View>
          </View>

          {/* Recipient name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Recipient Names</Text>
            <TextInput
              style={styles.input}
              value={recipientName}
              onChangeText={setRecipientName}
              placeholder="Recipient name"
              placeholderTextColor={Colors.textSecondary}
            />
          </View>

          {/* Recipient phone */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Recipient contact number</Text>
            <TextInput
              style={styles.input}
              value={recipientPhone}
              onChangeText={setRecipientPhone}
              keyboardType="phone-pad"
              placeholder="Phone number"
              placeholderTextColor={Colors.textSecondary}
            />
          </View>

          {/* Upload package photo */}
          <View style={styles.inputGroup}>
            <TouchableOpacity
              style={styles.photoBox}
              activeOpacity={0.8}
            >
              <View style={styles.cameraCircle}>
                <Icon
                  name="photo-camera"
                  size={20}
                  color={Colors.primary}
                />
              </View>
              <Text style={styles.photoText}>
                Take a picture of the package
              </Text>
            </TouchableOpacity>
          </View>

          {/* Continue */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate(SCREENS.CONFIRM_DETAILS)}
            activeOpacity={0.9}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* ----------------------  STYLES  ----------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // light grey edge like Figma
  },

  /* Fake iOS Status bar */
  statusBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 6,
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 4,
  },
  signalBar: {
    width: 18,
    height: 10,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },

  scrollView: {
    flex: 1,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 8,
    paddingVertical: 4,
    paddingRight: 8,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.textPrimary,
  },

  /* Content */
  content: {
    paddingHorizontal: 24,
  },

  inputGroup: {
    marginBottom: 24,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  hint: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 10,
  },

  /* Dropdown box */
  dropdownBox: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputDropdown: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
    paddingRight: 8,
  },

  /* Warning */
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  warningIconCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  warningIconText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  warningText: {
    flex: 1,
    fontSize: 11,
    color: Colors.textSecondary,
    lineHeight: 16,
  },

  /* Inputs */
  input: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    color: Colors.textPrimary,
  },

  /* Radio row */
  radioContainer: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 14,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  radioText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },

  /* Photo upload box */
  photoBox: {
    backgroundColor: Colors.background,
    borderStyle: 'dashed',
    borderWidth: 1.3,
    borderColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#D3ECEA',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  photoText: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '500',
  },

  /* Continue button */
  continueButton: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  continueButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailsScreen;
