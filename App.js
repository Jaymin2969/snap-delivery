/**
 * App.js
 * Main application entry point with Redux Provider
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import { store, persistor } from './src/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider>
                        <AppNavigator />
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;

