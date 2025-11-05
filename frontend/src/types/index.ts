// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface HealthCheckResponse {
  success: boolean;
  message: string;
}

// Error Types
export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
}

export interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  additionalInfo?: string
  verified: boolean
}

export interface ContactStore {
  contacts: Contact[]
  loading: boolean
  error: string | null

  refreshContacts: (contact: Contact) => Promise<void>
  fetchContacts: () => Promise<void>
  addContact: (contact: Omit<Contact, 'id' | 'verified'>) => Promise<void>
  markVerified: (id: number) => Promise<void>
  deleteContact: (id: number) => Promise<void>
  updateContact: (id: number, updatedData: Partial<Omit<Contact, 'id' | 'verified'>>) => Promise<void>
}