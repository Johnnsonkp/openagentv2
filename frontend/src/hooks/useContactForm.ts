import type { ApiError, ContactCreateResponse, ContactFormData } from '../types/contactTypes';
import { ValidationError, validateContactForm } from '../utils/validation';

import { apiClient } from '../lib/api';
import { useContactStore } from '../store/contactStore';
import { useFormStore } from '../store/formStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface UseContactFormReturn {
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

export const useContactForm = (): UseContactFormReturn => {
  const navigate = useNavigate();
  const formStore = useFormStore();  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { refreshContacts } = useContactStore();

  const handleChange = (field: keyof ContactFormData, value: string) => {
    formStore.setField(field, value);    
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }

    if (submitError) {
      setSubmitError(null);
    }
  };

  const clearError = (field: keyof ContactFormData) => {
    const newErrors = { ...errors };
    delete newErrors[field];
    setErrors(newErrors);
  };

  const resetForm = () => {
    formStore.resetForm();
    setErrors({});
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();    
    setErrors({});
    setSubmitError(null);

    const formData: ContactFormData = {
      firstName: formStore.firstName,
      lastName: formStore.lastName,
      email: formStore.email,
      phone: formStore.phone,
      additionalInfo: formStore.additionalInfo || undefined,
    };

    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      const fieldErrors: Record<string, string> = {};
      validation.errors.forEach((error: ValidationError) => {
        fieldErrors[error.field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }
    formStore.setSubmitting(true);

    try {
      const response = await apiClient.post<ContactCreateResponse>(
        '/contacts',
        formData
      );

      if (response.data.success) {
        formStore.setSuccess(true);
        refreshContacts(response.data.data);
        console.log('Response Data:', response.data);
        navigate('/thank-you', { 
          state: { 
            contactName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email 
          }
        });
        setTimeout(() => {
          resetForm();
        }, 1000);
      } else {
        setSubmitError(response.data.message || 'Failed to submit form');
      }
    } catch (error) {
      setErrors(error as Record<string, string>);
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
