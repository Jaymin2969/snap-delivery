/**
 * Helper Utilities
 * Common utility functions used throughout the application
 */

/**
 * Formats date to display format
 * @param {Date|string} date - Date to format
 * @param {string} format - Format string (default: 'DD MMMM YYYY, h:mm A')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, format = 'DD MMMM YYYY, h:mm A') => {
    if (!date) return '';

    const dateObj = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) return '';

    // Ensure format is a string
    const formatStr = typeof format === 'string' ? format : 'DD MMMM YYYY, h:mm A';

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');

    return formatStr
        .replace('DD', day.toString().padStart(2, '0'))
        .replace('MMMM', month)
        .replace('YYYY', year)
        .replace('h', displayHours)
        .replace('mm', displayMinutes)
        .replace('A', ampm);
};

/**
 * Calculates estimated delivery time
 * @param {number} distance - Distance in kilometers
 * @param {string} vehicleType - Type of vehicle
 * @returns {number} - Estimated time in minutes
 */
export const calculateEstimatedTime = (distance, vehicleType) => {
    const speeds = {
        motorcycle: 30, // km/h
        car: 25, // km/h
        van: 20, // km/h
    };

    const speed = speeds[vehicleType] || 25;
    const timeInHours = distance / speed;
    return Math.ceil(timeInHours * 60); // Convert to minutes
};

/**
 * Calculates estimated delivery fee
 * @param {number} distance - Distance in kilometers
 * @param {string} vehicleType - Type of vehicle
 * @param {number} quantity - Number of items
 * @returns {number} - Estimated fee in dollars
 */
export const calculateEstimatedFee = (distance, vehicleType, quantity = 1) => {
    const baseRates = {
        motorcycle: 50,
        car: 100,
        van: 150,
    };

    const baseRate = baseRates[vehicleType] || 100;
    const distanceMultiplier = Math.max(1, distance / 5); // $5 per 5km
    const quantityMultiplier = Math.max(1, quantity * 0.1);

    return Math.ceil(baseRate * distanceMultiplier * quantityMultiplier);
};

/**
 * Generates order ID
 * @returns {string} - Order ID in format ORDB####
 */
export const generateOrderId = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    return `ORDB${randomNum.toString().padStart(4, '0')}`;
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Truncates text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 50) => {
    if (!text || text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
};

/**
 * Font configuration
 * TT Norms Pro font family names for different weights
 */
export const Fonts = {
    regular: 'TTNormsPro-Regular',
    medium: 'TTNormsPro-Medium',
    bold: 'TTNormsPro-Bold',
    light: 'TTNormsPro-Light',
    // Fallback to system fonts if custom font is not available
    default: 'TTNormsPro-Regular',
};

