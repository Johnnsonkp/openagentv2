// Contact-related API types

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo?: string;
}

export interface Contact extends ContactFormData {
  id: number;
  verified: boolean;
  createdAt?: string;
}

export interface ContactCreateResponse {
  success: boolean;
  message: string;
  data: Contact;
}

export interface ContactListResponse {
  success: boolean;
  data: Contact[];
}

export interface ContactUpdateResponse {
  success: boolean;
  message: string;
  data: Contact;
}

export interface ContactDeleteResponse {
  success: boolean;
  message: string;
}

export interface ApiError {
  message: string;
  status: number;
  data?: any;
}
