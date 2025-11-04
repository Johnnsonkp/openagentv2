export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateName = (name: string): boolean => {
  if (name.trim().length < 2) return false;
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name);
};

export const validateContactForm = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo?: string;
}): ValidationResult => {
  const errors: ValidationError[] = [];

  // First Name validation
  if (!validateRequired(data.firstName)) {
    errors.push({ field: 'firstName', message: 'First name is required' });
  } else if (!validateName(data.firstName)) {
    errors.push({ field: 'firstName', message: 'First name must be at least 2 characters and contain only letters' });
  }

  // Last Name validation
  if (!validateRequired(data.lastName)) {
    errors.push({ field: 'lastName', message: 'Last name is required' });
  } else if (!validateName(data.lastName)) {
    errors.push({ field: 'lastName', message: 'Last name must be at least 2 characters and contain only letters' });
  }

  // Email validation
  if (!validateRequired(data.email)) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Phone validation
  if (!validateRequired(data.phone)) {
    errors.push({ field: 'phone', message: 'Phone number is required' });
  } else if (!validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
