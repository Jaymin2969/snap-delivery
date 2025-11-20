# TT Norms Pro Font Setup

This directory should contain the TT Norms Pro font files.

## Required Font Files

Please add the following font files to this directory:

- `TTNormsPro-Regular.ttf` (or `.otf`)
- `TTNormsPro-Medium.ttf` (or `.otf`)
- `TTNormsPro-Bold.ttf` (or `.otf`)
- `TTNormsPro-Light.ttf` (or `.otf`)

## Font File Names

The font files must be named exactly as listed above. If your font files have different names, you can either:
1. Rename them to match the expected names, or
2. Update the font names in `/src/utils/helpers.js` in the `Fonts` object

## After Adding Fonts

1. **Link the fonts** (if not using auto-linking):
   ```bash
   npx react-native-asset
   ```

2. **For iOS**, rebuild the app:
   ```bash
   cd ios && pod install && cd ..
   npm run ios
   ```

3. **For Android**, rebuild the app:
   ```bash
   npm run android
   ```

## Font Usage

The fonts are automatically applied as the default font family throughout the app via the styles in `/src/constants/styles.js`.

To use the fonts directly in your components:

```javascript
import { Fonts } from '../utils/helpers';

// In your StyleSheet
const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.regular, // or Fonts.medium, Fonts.bold, Fonts.light
  },
});
```

