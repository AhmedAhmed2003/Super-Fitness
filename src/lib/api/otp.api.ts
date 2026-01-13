import type { OtpError, OtpResponse } from "@lib/types/otp.types";

const API_BASE_URL = "https://fitness.elevateegy.com/api/v1";

export const verifyOtp = async (resetCode: string): Promise<OtpResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/verifyResetCode`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ resetCode }),
        });

        const data = await response.json();

        if (!response.ok) {
            const error = data as OtpError;
            throw new Error(error.error || "An error occurred during OTP verification");
        }

        return data as OtpResponse;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("An unexpected error occurred");
    }
};
