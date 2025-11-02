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

// Add your custom types here
// Example:
// export interface User {
//   id: string;
//   name: string;
//   email: string;
// }
