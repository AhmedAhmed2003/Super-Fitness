import BASE_URL, { axios } from "@/lib/axios";
import type { ApiError, ForgotPasswordData } from "@lib/types/forgot-password.types";

/**
 * Sends a forgot password request to the API.
 * @param data - Object containing the user's email.
 * @returns The API response if successful.
 * @throws ApiError if the request fails or there is a network error.
 */
export const forgotPassword = async (data: ForgotPasswordData) => {
  try {
    // Make POST request to the forgotPassword endpoint
    const { data: response } = await BASE_URL.post("/auth/forgotPassword", data);
    return response;
  } catch (error: unknown) {
    // Check if the error is an Axios error
    if (axios.isAxiosError(error)) { 
      const errData = error.response?.data;

      // Create a standardized ApiError object
      const apiError: ApiError = {
        message: errData?.message || error.message || "An error occurred while sending.",
        statusCode: error.response?.status,
        data: errData,
      };
      throw apiError;
    }

    // Fallback for network errors
    throw { message: "Network error: No Connection!" } as ApiError;
  }
};
