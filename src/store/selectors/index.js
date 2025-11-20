/**
 * Redux Selectors
 * Centralized selectors for accessing Redux state
 */

// Auth Selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectPhoneNumber = (state) => state.auth.phoneNumber;

// Delivery Selectors
export const selectCurrentDelivery = (state) => state.delivery.currentDelivery;
export const selectActiveDeliveries = (state) => state.delivery.activeDeliveries;
export const selectDeliveryHistory = (state) => state.delivery.deliveryHistory;
export const selectCourier = (state) => state.delivery.courier;
export const selectCourierLocation = (state) => state.delivery.courierLocation;
export const selectEstimatedArrival = (state) => state.delivery.estimatedArrival;
export const selectDeliveryLoading = (state) => state.delivery.isLoading;
export const selectDeliveryError = (state) => state.delivery.error;

// User Selectors
export const selectUserProfile = (state) => state.user.profile;
export const selectUserPreferences = (state) => state.user.preferences;
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;

// Computed Selectors
export const selectInProgressDeliveries = (state) =>
    state.delivery.activeDeliveries.filter(
        (delivery) => delivery.status === 'in_progress'
    );

export const selectCompletedDeliveries = (state) =>
    state.delivery.deliveryHistory.filter(
        (delivery) => delivery.status === 'completed'
    );

export const selectDeliveryById = (state, deliveryId) =>
    state.delivery.deliveryHistory.find((delivery) => delivery.id === deliveryId);

