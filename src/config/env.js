/**
 * Environment Configuration
 * Centralized access to environment variables
 */

import Config from 'react-native-config';
import { Platform } from 'react-native';

export const ENV = {
    GOOGLE_API_KEY: Config.GOOGLE_API_KEY || '',
    GOOGLE_API_KEY_ANDROID: Config.GOOGLE_API_KEY_ANDROID || '',
    GOOGLE_API_KEY_IOS: Config.GOOGLE_API_KEY_IOS || '',
};

// Export platform-specific key getter
export const getGoogleApiKey = () => {
    if (Platform.OS === 'ios') {
        return ENV.GOOGLE_API_KEY_IOS || ENV.GOOGLE_API_KEY;
    }
    return ENV.GOOGLE_API_KEY_ANDROID || ENV.GOOGLE_API_KEY;
};

export default ENV;

