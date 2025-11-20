# Google API Keys Setup

## ✅ Configuration Complete

The Google API keys have been set up for both Android and iOS platforms.

## 📁 Files Modified

1. **`.env`** - Contains all Google API keys
2. **`src/config/env.js`** - Centralized config file to access keys in JavaScript
3. **`android/app/src/main/AndroidManifest.xml`** - Added Google Maps API key meta-data
4. **`android/app/build.gradle`** - Configured to use react-native-config
5. **`ios/TempRNProject/Info.plist`** - Added GMSApiKey for Google Maps

## 🔑 API Keys

- **General**: `GOOGLE_API_KEY` - Fallback key
- **Android**: `GOOGLE_API_KEY_ANDROID` - Used in AndroidManifest.xml
- **iOS**: `GOOGLE_API_KEY_IOS` - Used in Info.plist

## 📱 Usage in Code

### JavaScript/React Native

```javascript
import { getGoogleApiKey, ENV } from '../config/env';

// Get platform-specific key
const apiKey = getGoogleApiKey();

// Or access directly
const androidKey = ENV.GOOGLE_API_KEY_ANDROID;
const iosKey = ENV.GOOGLE_API_KEY_IOS;
```

### Native Configuration

- **Android**: The key is automatically injected into `AndroidManifest.xml` via react-native-config
- **iOS**: The key is set in `Info.plist` under `GMSApiKey`

## 🔧 For Google Maps

The API keys are automatically used by `react-native-maps`:
- Android reads from `AndroidManifest.xml` meta-data
- iOS reads from `Info.plist` GMSApiKey

## 🚀 Next Steps

1. **Rebuild the app** after configuration changes:
   ```bash
   # Android
   cd android && ./gradlew clean && cd .. && yarn android
   
   # iOS
   cd ios && pod install && cd .. && yarn ios
   ```

2. **Verify the keys are working** by checking if Google Maps loads correctly in `CourierTrackingScreen`

## 📝 Notes

- The `.env` file should be added to `.gitignore` (if not already) to keep keys secure
- For production, use different keys and restrict them in Google Cloud Console
- The keys are currently hardcoded in `Info.plist` for iOS. To use dynamic values, run the setup script:
  ```bash
  ./scripts/setup-env.sh
  ```

