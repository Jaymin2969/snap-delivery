/**
 * Validation Utilities
 * Centralized validation functions for form inputs
 */

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if phone is valid
 */
export const isValidPhone = (phone) => {
    if (!phone || typeof phone !== 'string') return false;
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with isValid and message
 */
export const validatePassword = (password) => {
    if (!password || password.length < 8) {
        return {
            isValid: false,
            message: 'Password must be at least 8 characters long',
        };
    }

    if (!/[A-Z]/.test(password)) {
        return {
            isValid: false,
            message: 'Password must contain at least one uppercase letter',
        };
    }

    if (!/[a-z]/.test(password)) {
        return {
            isValid: false,
            message: 'Password must contain at least one lowercase letter',
        };
    }

    if (!/[0-9]/.test(password)) {
        return {
            isValid: false,
            message: 'Password must contain at least one number',
        };
    }

    return {
        isValid: true,
        message: '',
    };
};

/**
 * Validates required fields
 * @param {object} fields - Object with field names as keys and values
 * @returns {object} - Validation result with isValid and errors
 */
export const validateRequiredFields = (fields) => {
    const errors = {};
    let isValid = true;

    Object.keys(fields).forEach((key) => {
        if (!fields[key] || (typeof fields[key] === 'string' && fields[key].trim() === '')) {
            errors[key] = `${key} is required`;
            isValid = false;
        }
    });

    return {
        isValid,
        errors,
    };
};

/**
 * Formats phone number for display
 * @param {string} phone - Phone number to format
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
    if (!phone || typeof phone !== 'string') return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11) {
        return cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1****$3');
    }
    return phone;
};

