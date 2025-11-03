import type { ApiError, ContactCreateResponse, ContactFormData } from '../types/contactTypes';
import { ValidationError, validateContactForm } from '../utils/validation';

import { apiClient } from '../lib/api';
import { useFormStore } from '../store/formStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface UseContactFormReturn {
  // Form state
  formData: ContactFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitError: string | null;
  
  // Form handlers
  handleChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  clearError: (field: keyof ContactFormData) => void;
  resetForm: () => void;
}

/**
 * Custom hook for handling contact form submission with validation
 * Addresses all requirements: validation, API submission, error handling, navigation
 */
export const useContactForm = (): UseContactFormReturn => {
  const navigate = useNavigate();
  const formStore = useFormStore();
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  /**
   * Handle input field changes
   */
  const handleChange = (field: keyof ContactFormData, value: string) => {
    formStore.setField(field, value);
    
    // Clear field error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
    
    // Clear submit error
    if (submitError) {
      setSubmitError(null);
    }
  };

  /**
   * Clear specific field error
   */
  const clearError = (field: keyof ContactFormData) => {
    const newErrors = { ...errors };
    delete newErrors[field];
    setErrors(newErrors);
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    formStore.resetForm();
    setErrors({});
    setSubmitError(null);
  };

  /**
   * Handle form submission with validation and API call
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    setSubmitError(null);

    // Prepare form data
    const formData: ContactFormData = {
      firstName: formStore.firstName,
      lastName: formStore.lastName,
      email: formStore.email,
      phone: formStore.phone,
      additionalInfo: formStore.additionalInfo || undefined,
    };

    // Validate form
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      // Convert validation errors to field-keyed object
      const fieldErrors: Record<string, string> = {};
      validation.errors.forEach((error: ValidationError) => {
        fieldErrors[error.field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Submit to API
    formStore.setSubmitting(true);

    try {
      const response = await apiClient.post<ContactCreateResponse>(
        '/contacts',
        formData
      );

      if (response.data.success) {
        // Mark as successful
        formStore.setSuccess(true);
        
        // Navigate to thank you page
        navigate('/thank-you', { 
          state: { 
            contactName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email 
          }
        });
        
        // Reset form after short delay (in case user navigates back)
        setTimeout(() => {
          resetForm();
        }, 1000);
      } else {
        setSubmitError(response.data.message || 'Failed to submit form');
      }
    } catch (error) {
      const apiError = error as ApiError;
      
      // Handle specific error cases
      if (apiError.status === 400 && apiError.data?.errors) {
        // Server-side validation errors
        const fieldErrors: Record<string, string> = {};
        apiError.data.errors.forEach((err: { field: string; message: string }) => {
          fieldErrors[err.field] = err.message;
        });
        setErrors(fieldErrors);
      } else if (apiError.status === 409) {
        // Duplicate email/phone
        setSubmitError(apiError.message || 'A contact with this email or phone already exists');
      } else {
        // Generic error
        setSubmitError(
          apiError.message || 'Failed to submit form. Please try again later.'
        );
      }
    } finally {
      formStore.setSubmitting(false);
    }
  };

  return {
    formData: {
      firstName: formStore.firstName,
      lastName: formStore.lastName,
      email: formStore.email,
      phone: formStore.phone,
      additionalInfo: formStore.additionalInfo,
    },
    errors,
    isSubmitting: formStore.submitting,
    submitError,
    handleChange,
    handleSubmit,
    clearError,
    resetForm,
  };
};
