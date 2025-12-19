import { verifyOtp } from "@lib/api/otp.api";
import type { OtpFormData, OtpResponse } from "@lib/types/otp.types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useOtpMutation = () => {
    // Navigation
    const navigate = useNavigate();

    // Mutation
    return useMutation({
        // Mutation function
        mutationFn: ({ resetCode }: OtpFormData) => verifyOtp(resetCode),
        // On Success & Error handlers
        onSuccess: (data: OtpResponse) => {
            toast.success("Verification Successful!", {
                description: data.status,
            });
            // Navigate to reset password page or wherever you want
            navigate("/reset-password");
        },
        onError: (error: Error) => {
            toast.error("Verification Failed", {
                description: error.message || "An unexpected error occurred",
            });
        },
    });
};
