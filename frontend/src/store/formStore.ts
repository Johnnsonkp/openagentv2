import {FormState} from '../types/formTypes'
import { create } from 'zustand'

export const useFormStore = create<FormState>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  additionalInfo: '',
  submitting: false,
  success: false,

  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      additionalInfo: '',
      submitting: false,
      success: false,
    }),
  setSubmitting: (val) => set({ submitting: val }),
  setSuccess: (val) => set({ success: val }),
}))
