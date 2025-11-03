export interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  additionalInfo: string
  submitting: boolean
  success: boolean

  setField: (field: string, value: string) => void
  resetForm: () => void
  setSubmitting: (value: boolean) => void
  setSuccess: (value: boolean) => void
}