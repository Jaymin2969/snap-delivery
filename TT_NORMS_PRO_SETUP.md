# TT Norms Pro Font Integration Guide

This guide explains how to complete the TT Norms Pro font integration in your React Native app.

## ✅ What's Already Done

1. ✅ Font configuration added to `/src/utils/helpers.js`
2. ✅ Styles updated in `/src/constants/styles.js` to use TT Norms Pro
3. ✅ iOS Info.plist updated to register font files
4. ✅ React Native config created for automatic font linking
5. ✅ Custom Text component wrapper created at `/src/components/common/Text.js`
6. ✅ Fonts directory created at `/src/assets/fonts/`

## 📋 Next Steps

### Step 1: Add Font Files

1. Obtain the TT Norms Pro font files (`.ttf` or `.otf` format)
2. Place them in `/src/assets/fonts/` with these exact names:
   - `TTNormsPro-Regular.ttf` (or `.otf`)
   - `TTNormsPro-Medium.ttf` (or `.otf`)
   - `TTNormsPro-Bold.ttf` (or `.otf`)
   - `TTNormsPro-Light.ttf` (or `.otf`)

**Important:** The file names must match exactly. If your font files have different names, either:
- Rename them to match, or
- Update the font names in `/src/utils/helpers.js`

### Step 2: Link Fonts

Run the following command to link the fonts:

```bash
npx react-native-asset
```

Or if you prefer manual linking:

**For iOS:**
```bash
cd ios && pod install && cd ..
```

**For Android:**
The fonts will be automatically linked via `react-native.config.js`

### Step 3: Rebuild the App

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

## 🎨 Usage

### Option 1: Using Predefined Styles (Recommended)

The font is already integrated into your existing styles in `/src/constants/styles.js`:

```javascript
import { Styles } from '../constants/styles';

<Text style={Styles.titleLarge}>Large Title</Text>
<Text style={Styles.bodyLarge}>Body Text</Text>
```

### Option 2: Using Font Helper Directly

```javascript
import { Fonts } from '../utils/helpers';

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.regular,  // or Fonts.medium, Fonts.bold, Fonts.light
  },
});
```

### Option 3: Using Custom Text Component

```javascript
import Text from '../components/common/Text';

<Text variant="bold">Bold Text</Text>
<Text variant="medium">Medium Text</Text>
<Text variant="regular">Regular Text</Text>
<Text variant="light">Light Text</Text>
```

## 🔍 Verifying Font Installation

### iOS
1. Check that font files are in `ios/TempRNProject/Info.plist` under `UIAppFonts`
2. Verify fonts are in the Xcode project's "Copy Bundle Resources"

### Android
1. Fonts should be automatically linked via `react-native.config.js`
2. Check `android/app/src/main/assets/fonts/` after building

## 🐛 Troubleshooting

### Font Not Appearing

1. **Check file names:** Ensure font file names match exactly (case-sensitive)
2. **Rebuild:** Clean and rebuild the app:
   ```bash
   # iOS
   cd ios && pod deintegrate && pod install && cd ..
   npm run ios
   
   # Android
   cd android && ./gradlew clean && cd ..
   npm run android
   ```

3. **Verify font names:** Check the actual font family name inside the font file using a font viewer tool
4. **Check console:** Look for font loading errors in the React Native debugger

### Font Name Mismatch

If your font files have different internal names, you can check the actual font name and update `/src/utils/helpers.js`:

```javascript
export const Fonts = {
    regular: 'ActualFontName-Regular',  // Update with actual name
    medium: 'ActualFontName-Medium',
    // ...
};
```

## 📝 Notes

- The font is set as the default for all text styles in `styles.js`
- Individual screens can override the font by specifying `fontFamily` in their styles
- The custom `Text` component is optional but provides a convenient way to use fonts consistently

