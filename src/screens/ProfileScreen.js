/**
 * Profile Screen
 * Figma-aligned layout: big initials avatar, name, menu list, sign out row
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../constants/colors';
import {selectUserProfile} from '../store/selectors';
import {logout} from '../store/slices/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectUserProfile);

  const handleLogout = () => {
    dispatch(logout());
  };

  const initials = `${profile.firstName?.[0] || ''}${profile.lastName?.[0] || ''}`;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Avatar + name (centered) */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <Text style={styles.name}>
            {profile.firstName} {profile.lastName}
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Menu items */}
        <View style={styles.menuSection}>
          <MenuRow icon="credit-card" label="Payments" />
          <MenuRow icon="history" label="Delivery History" />
          <MenuRow icon="settings" label="Settings" />
          <MenuRow icon="help-outline" label="Support/FAQ" />
          <MenuRow icon="mail-outline" label="Invite Friends" />
        </View>

        {/* Sign out row */}
        <TouchableOpacity style={styles.signOutRow} onPress={handleLogout}>
          <Icon
            name="logout"
            size={22}
            style={styles.signOutIcon}
            // red like Figma
            color={Colors.error}
          />
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

type MenuRowProps = {
  icon: string;
  label: string;
};

const MenuRow: React.FC<MenuRowProps> = ({icon, label}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Icon
          name={icon}
          size={22}
          color={Colors.textSecondary}
          style={styles.menuIcon}
        />
        <Text style={styles.menuItemText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 40,
  },

  /* Profile header */
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.primaryLight, // teal circle like Figma
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.borderLight,
    marginBottom: 24,
  },

  /* Menu */
  menuSection: {
    marginBottom: 40,
  },
  menuItem: {
    paddingVertical: 14,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 18,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.textSecondary, // bluish grey like Figma
  },

  /* Sign out */
  signOutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  signOutIcon: {
    marginRight: 12,
  },
  signOutText: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
});

export default ProfileScreen;
