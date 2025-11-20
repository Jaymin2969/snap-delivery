/**
 * User Slice
 * Redux slice for user profile and preferences state management
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: {
        firstName: 'Davidson',
        lastName: 'Edgar',
        email: null,
        phone: null,
        avatar: null,
    },
    preferences: {
        defaultVehicleType: 'motorcycle',
        defaultPaymentMethod: 'card',
    },
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profile = {
                ...state.profile,
                ...action.payload,
            };
        },
        updatePreferences: (state, action) => {
            state.preferences = {
                ...state.preferences,
                ...action.payload,
            };
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    updateProfile,
    updatePreferences,
    setLoading,
    setError,
    clearError,
} = userSlice.actions;

export default userSlice.reducer;

