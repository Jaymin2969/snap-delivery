/**
 * Redux Store Configuration
 * Main store setup with Redux Toolkit and persistence
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './slices/authSlice';
import deliveryReducer from './slices/deliverySlice';
import userReducer from './slices/userSlice';

// Persist configuration
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'user'], // Only persist auth and user data
};

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    delivery: deliveryReducer,
    user: userReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

// Create persistor
export const persistor = persistStore(store);

export default store;

