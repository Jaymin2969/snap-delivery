/**
 * App Navigator
 * Main navigation configuration for the application
 */

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { SCREENS } from '../types';
import { selectIsAuthenticated } from '../store/selectors';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerificationScreen from '../screens/VerificationScreen';
import HomeScreen from '../screens/HomeScreen';
import InstantDeliveryScreen from '../screens/InstantDeliveryScreen';
import ScheduleDeliveryScreen from '../screens/ScheduleDeliveryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ConfirmDetailsScreen from '../screens/ConfirmDetailsScreen';
import CourierTrackingScreen from '../screens/CourierTrackingScreen';
import ReviewScreen from '../screens/ReviewScreen';
import HistoryScreen from '../screens/HistoryScreen';
import DeliveryDetailsScreen from '../screens/DeliveryDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Main Tab Navigator
 * Bottom tab navigation for authenticated users
 */
const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0D9488',   // teal
                tabBarInactiveTintColor: '#9CA3AF', // grey
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 88,
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderTopLeftRadius: 28,
                    borderTopRightRadius: 28,
                    elevation: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.08,
                    shadowRadius: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 8,
                },
            }}
        >
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.HISTORY}
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (
                        <Icon name="event-note" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" size={26} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
/**
 * Auth Stack Navigator
 * Stack navigation for authentication screens
 */
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#F5F5F5' },
            }}
        >
            <Stack.Screen name={SCREENS.ONBOARDING} component={OnboardingScreen} />
            <Stack.Screen name={SCREENS.SIGN_IN} component={SignInScreen} />
            <Stack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} />
            <Stack.Screen name={SCREENS.VERIFICATION} component={VerificationScreen} />
        </Stack.Navigator>
    );
};

/**
 * Main Stack Navigator
 * Stack navigation for main app screens
 */
const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#F5F5F5' },
            }}
        >
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen
                name={SCREENS.INSTANT_DELIVERY}
                component={InstantDeliveryScreen}
            />
            <Stack.Screen
                name={SCREENS.SCHEDULE_DELIVERY}
                component={ScheduleDeliveryScreen}
            />
            <Stack.Screen name={SCREENS.DETAILS} component={DetailsScreen} />
            <Stack.Screen
                name={SCREENS.CONFIRM_DETAILS}
                component={ConfirmDetailsScreen}
            />
            <Stack.Screen
                name={SCREENS.COURIER_TRACKING}
                component={CourierTrackingScreen}
            />
            <Stack.Screen name={SCREENS.REVIEW} component={ReviewScreen} />
            <Stack.Screen
                name={SCREENS.DELIVERY_DETAILS}
                component={DeliveryDetailsScreen}
            />
        </Stack.Navigator>
    );
};

/**
 * Root Navigator
 * Main navigation container that switches between auth and main stacks
 */
const AppNavigator = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate initial loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {isAuthenticated ? (
                    <Stack.Screen name="Main" component={MainStack} />
                ) : (
                    <Stack.Screen name="Auth" component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

