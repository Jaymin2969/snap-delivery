/**
 * Application Type Definitions
 * Centralized type constants and definitions
 */

// User Types
export const USER_ROLES = {
    CUSTOMER: 'customer',
    COURIER: 'courier',
};

// Delivery Status Types
export const DELIVERY_STATUS = {
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
};

// Vehicle Types
export const VEHICLE_TYPES = {
    MOTORCYCLE: 'motorcycle',
    CAR: 'car',
    VAN: 'van',
};

// Payment Types
export const PAYMENT_TYPES = {
    CARD: 'card',
    CASH: 'cash',
    WALLET: 'wallet',
};

// Payment Payer Types
export const PAYMENT_PAYER = {
    ME: 'me',
    RECIPIENT: 'recipient',
};

// Navigation Screen Names
export const SCREENS = {
    SPLASH: 'Splash',
    ONBOARDING: 'Onboarding',
    SIGN_IN: 'SignIn',
    SIGN_UP: 'SignUp',
    VERIFICATION: 'Verification',
    HOME: 'Home',
    INSTANT_DELIVERY: 'InstantDelivery',
    SCHEDULE_DELIVERY: 'ScheduleDelivery',
    DETAILS: 'Details',
    CONFIRM_DETAILS: 'ConfirmDetails',
    COURIER_TRACKING: 'CourierTracking',
    REVIEW: 'Review',
    HISTORY: 'History',
    DELIVERY_DETAILS: 'DeliveryDetails',
    PROFILE: 'Profile',
};

// Action Types
export const ACTION_TYPES = {
    // Auth Actions
    SET_USER: 'auth/setUser',
    SET_TOKEN: 'auth/setToken',
    LOGOUT: 'auth/logout',
    SET_LOADING: 'auth/setLoading',

    // Delivery Actions
    SET_DELIVERY_TYPE: 'delivery/setDeliveryType',
    SET_PICKUP_LOCATION: 'delivery/setPickupLocation',
    SET_DELIVERY_LOCATION: 'delivery/setDeliveryLocation',
    SET_VEHICLE_TYPE: 'delivery/setVehicleType',
    SET_DELIVERY_DETAILS: 'delivery/setDeliveryDetails',
    SET_SCHEDULE: 'delivery/setSchedule',
    CREATE_DELIVERY: 'delivery/createDelivery',
    UPDATE_DELIVERY_STATUS: 'delivery/updateStatus',
    SET_COURIER: 'delivery/setCourier',
    CLEAR_DELIVERY: 'delivery/clear',

    // User Actions
    UPDATE_PROFILE: 'user/updateProfile',
    SET_DELIVERY_HISTORY: 'user/setDeliveryHistory',
};

