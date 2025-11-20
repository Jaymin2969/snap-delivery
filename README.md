# Snap Delivery App

A professional React Native delivery application built with Redux for state management, matching the Figma design pixel-perfectly.

## Features

- **Authentication Flow**: Sign In, Sign Up, and Verification screens
- **Delivery Management**: Instant and Scheduled delivery options
- **Real-time Tracking**: Courier tracking with map integration
- **Delivery History**: Complete history of all deliveries
- **Redux State Management**: Professional state management with Redux Toolkit
- **Pixel-Perfect UI**: Matches Figma design exactly

## Tech Stack

- React Native 0.73.0
- Redux Toolkit for state management
- React Navigation for navigation
- React Native Maps for map integration
- Redux Persist for state persistence

## Project Structure

```
SnapDeliveryApp/
├── src/
│   ├── components/        # Reusable components
│   ├── constants/        # Constants (colors, styles, types)
│   ├── navigation/      # Navigation configuration
│   ├── screens/          # Screen components
│   ├── services/         # API services
│   ├── store/            # Redux store
│   │   ├── slices/      # Redux slices
│   │   └── selectors/   # Redux selectors
│   ├── types/            # Type definitions
│   └── utils/            # Utility functions
├── App.js                # Main app entry point
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS:
```bash
cd ios && pod install && cd ..
npm run ios
```

3. For Android:
```bash
npm run android
```

## Redux Store Structure

### Slices

1. **authSlice**: Manages authentication state
   - User information
   - Authentication token
   - Loading and error states

2. **deliverySlice**: Manages delivery-related state
   - Current delivery being created
   - Active deliveries
   - Delivery history
   - Courier tracking information

3. **userSlice**: Manages user profile and preferences
   - User profile information
   - User preferences

### Usage Example

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/authSlice';
import { selectUser } from '../store/selectors';

const MyComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  const handleAction = () => {
    dispatch(setUser({ name: 'John Doe' }));
  };
};
```

## Code Standards

- **Professional Code Format**: All code follows professional standards with proper documentation
- **Redux Best Practices**: Uses Redux Toolkit with proper slice structure
- **Component Structure**: Each component is well-documented with JSDoc comments
- **Error Handling**: Proper error handling throughout the application
- **Validation**: Input validation using utility functions
- **Type Safety**: Type definitions for constants and actions

## Screens

1. Splash Screen
2. Onboarding Screen
3. Sign In Screen
4. Sign Up Screen
5. Verification Screen
6. Home Screen
7. Instant Delivery Screen
8. Schedule Delivery Screen
9. Details Screen
10. Confirm Details Screen
11. Courier Tracking Screen
12. Review Screen
13. History Screen
14. Delivery Details Screen
15. Profile Screen

## Development

Start the Metro bundler:
```bash
npm start
```

Run on iOS:
```bash
npm run ios
```

Run on Android:
```bash
npm run android
```

## License

This project is private and proprietary.

# snap-delivery
