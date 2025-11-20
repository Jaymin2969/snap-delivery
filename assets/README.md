# Assets Directory

This directory contains image assets for the SnapDeliveryApp.

## Exporting Assets from Figma

To export assets from the Figma design:

1. **Open the Figma file**: [Dispatch Courier Delivery App](https://www.figma.com/design/CijAYFkYxwVyrvGAEB1ORk/Dispatch-Courier-Delivery-App--Community---Copy-?node-id=1-2&p=f&t=mXBqg0EpUJBnw9BQ-0)

2. **Export the onboarding background image**:
   - Select the background image/component in the design
   - In the right panel, click the "Export" button
   - Choose format: **JPG** or **PNG**
   - Set resolution: **2x** or **3x** for high DPI displays
   - Click "Export" and save as `onboarding-bg.jpg` in this directory

3. **Export other assets as needed**:
   - Icons, logos, and other images can be exported similarly
   - Use appropriate formats (PNG for transparency, JPG for photos)
   - Use @2x and @3x suffixes for different screen densities if needed

## Required Assets

- `onboarding-bg.jpg` - Background image for the onboarding screen

## Current Status

The OnboardingScreen is already configured to use `onboarding-bg.jpg`. Simply add the image file to this directory and it will work automatically.

The code uses `ImageBackground` with a dark overlay (50% opacity) to ensure text readability over the image.

## Notes

- For React Native, you can use JPG or PNG formats
- Consider exporting @2x and @3x versions for better quality on different devices
- Keep file sizes optimized for mobile performance
- The app currently uses a temporary dark background color so it can run without the image

