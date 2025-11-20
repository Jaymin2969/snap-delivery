/**
 * Delivery Slice
 * Redux slice for delivery state management
 */

import { createSlice } from '@reduxjs/toolkit';
import { DELIVERY_STATUS, VEHICLE_TYPES } from '../../types';

const initialState = {
    // Current delivery being created
    currentDelivery: {
        type: null, // 'instant' or 'schedule'
        pickupLocation: null,
        deliveryLocation: null,
        vehicleType: VEHICLE_TYPES.MOTORCYCLE,
        itemType: null,
        quantity: 1,
        recipientName: null,
        recipientPhone: null,
        whoPays: 'me',
        paymentType: null,
        scheduledDate: null,
        scheduledTime: null,
        packageImage: null,
    },

    // Active deliveries
    activeDeliveries: [],

    // Delivery history
    deliveryHistory: [],

    // Current courier tracking
    courier: null,
    courierLocation: null,
    estimatedArrival: null,

    // UI State
    isLoading: false,
    error: null,
};

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        setDeliveryType: (state, action) => {
            state.currentDelivery.type = action.payload;
        },
        setPickupLocation: (state, action) => {
            state.currentDelivery.pickupLocation = action.payload;
        },
        setDeliveryLocation: (state, action) => {
            state.currentDelivery.deliveryLocation = action.payload;
        },
        setVehicleType: (state, action) => {
            state.currentDelivery.vehicleType = action.payload;
        },
        setDeliveryDetails: (state, action) => {
            state.currentDelivery = {
                ...state.currentDelivery,
                ...action.payload,
            };
        },
        setSchedule: (state, action) => {
            state.currentDelivery.scheduledDate = action.payload.date;
            state.currentDelivery.scheduledTime = action.payload.time;
        },
        setPackageImage: (state, action) => {
            state.currentDelivery.packageImage = action.payload;
        },
        createDelivery: (state, action) => {
            const newDelivery = {
                id: action.payload.id,
                ...state.currentDelivery,
                status: DELIVERY_STATUS.PENDING,
                createdAt: new Date().toISOString(),
                estimatedFee: action.payload.estimatedFee,
            };
            state.activeDeliveries.push(newDelivery);
            state.deliveryHistory.unshift(newDelivery);
        },
        updateDeliveryStatus: (state, action) => {
            const { deliveryId, status } = action.payload;
            const delivery = state.activeDeliveries.find((d) => d.id === deliveryId);
            if (delivery) {
                delivery.status = status;
                if (status === DELIVERY_STATUS.COMPLETED) {
                    state.activeDeliveries = state.activeDeliveries.filter(
                        (d) => d.id !== deliveryId
                    );
                }
            }

            const historyDelivery = state.deliveryHistory.find((d) => d.id === deliveryId);
            if (historyDelivery) {
                historyDelivery.status = status;
            }
        },
        setCourier: (state, action) => {
            state.courier = action.payload;
        },
        setCourierLocation: (state, action) => {
            state.courierLocation = action.payload;
        },
        setEstimatedArrival: (state, action) => {
            state.estimatedArrival = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearDelivery: (state) => {
            state.currentDelivery = initialState.currentDelivery;
            state.courier = null;
            state.courierLocation = null;
            state.estimatedArrival = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setDeliveryType,
    setPickupLocation,
    setDeliveryLocation,
    setVehicleType,
    setDeliveryDetails,
    setSchedule,
    setPackageImage,
    createDelivery,
    updateDeliveryStatus,
    setCourier,
    setCourierLocation,
    setEstimatedArrival,
    setLoading,
    setError,
    clearDelivery,
    clearError,
} = deliverySlice.actions;

export default deliverySlice.reducer;

