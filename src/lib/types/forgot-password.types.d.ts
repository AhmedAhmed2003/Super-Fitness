// Data structure for sending a forgot password request
export interface ForgotPasswordData {
  email: string; // User's email address
}

// Standardized structure for API errors
export interface ApiError {
  message: string;         // Error message
  statusCode?: number;     // Optional HTTP status code
  data?: any;              // Optional additional error data from the API
}
