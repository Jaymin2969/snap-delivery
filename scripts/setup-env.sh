#!/bin/bash

# Script to set up environment variables for iOS and Android
# This script reads from .env and sets up the necessary configurations

echo "Setting up environment variables..."

# Read .env file
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
    
    # For iOS, update Info.plist with the API key
    if [ -f "ios/TempRNProject/Info.plist" ]; then
        # Use PlistBuddy to update the GMSApiKey
        /usr/libexec/PlistBuddy -c "Set :GMSApiKey ${GOOGLE_API_KEY_IOS}" ios/TempRNProject/Info.plist 2>/dev/null || \
        /usr/libexec/PlistBuddy -c "Add :GMSApiKey string ${GOOGLE_API_KEY_IOS}" ios/TempRNProject/Info.plist
        
        echo "✅ Updated iOS Info.plist with Google API Key"
    fi
    
    echo "✅ Environment variables loaded from .env"
else
    echo "❌ .env file not found!"
    exit 1
fi

