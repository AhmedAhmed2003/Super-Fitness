import type { LoginError, LoginResponse } from "@/lib/types/login.types";

const API_BASE_URL = "https://fitness.elevateegy.com/api/v1";

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            const error = data as LoginError;
            throw new Error(error.error || "An error occurred during login");
        }

        // Store token in localStorage
        localStorage.setItem("fitness_token", data.token);
        localStorage.setItem("fitness_user", JSON.stringify(data.user));

        return data as LoginResponse;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("An unexpected error occurred");
    }
};

// Helper function to get token from localStorage
export const getToken = (): string | null => {
    return localStorage.getItem("fitness_token");
};

// Helper function to get user from localStorage
export const getUser = () => {
    const user = localStorage.getItem("fitness_user");
    return user ? JSON.parse(user) : null;
};

// Helper function to logout
export const logout = (): void => {
    localStorage.removeItem("fitness_token");
    localStorage.removeItem("fitness_user");
};
