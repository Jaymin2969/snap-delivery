/**
 * Auth Slice
 * Redux slice for authentication state management
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    phoneNumber: null,
    verificationCode: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setVerificationCode: (state, action) => {
            state.verificationCode = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.phoneNumber = null;
            state.verificationCode = null;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setUser,
    setToken,
    setPhoneNumber,
    setVerificationCode,
    setLoading,
    setError,
    logout,
    clearError,
} = authSlice.actions;

export default authSlice.reducer;

