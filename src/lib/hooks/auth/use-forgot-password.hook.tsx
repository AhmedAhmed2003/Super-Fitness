import { forgotPassword } from "@lib/api/forgot-password.api";
import type { ApiError, ForgotPasswordData } from "@lib/types/forgot-password.types";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

/**
 * Custom hook to handle the "Forgot Password" functionality.
 * Uses React Query's useMutation to send the request and manage loading/error states.
 * Integrates i18next for translations and Sonner for toast notifications.
 *
 * @returns mutation object containing mutate function and state (isLoading, error, etc.)
 */
export const useForgotPassword = () => {
  // Initialize translation function for the "forget-pss" namespace
  const { t } = useTranslation("forget-pss");

  return useMutation<any, ApiError, ForgotPasswordData>({
    // Function to execute the forgot password API request
    mutationFn: forgotPassword,

    // Callback executed when the request is successful
    onSuccess: () => {
      // Show a success toast with translated message
      toast.success(t("successMessage"));
    },

    // Callback executed when the request fails
    onError: (error) => {
      // Show an error toast with either API error message or translated fallback
      toast.error(error.message || t("errorMessage"));
    },
  });
};
