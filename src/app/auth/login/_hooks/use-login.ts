import { loginUser } from "@/lib/api/login.api";
import type { LoginFormData, LoginResponse } from "@/lib/types/login.types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLoginMutation = () => {
    // Navigation
    const navigate = useNavigate();

    // Mutation
    return useMutation({
        // Mutation function
        mutationFn: ({ email, password }: LoginFormData) => loginUser(email, password),
        // On Success & Error handlers
        onSuccess: (data: LoginResponse) => {
            toast.success(`Welcome ${data.user.firstName}!`, {
                description: "Login successful",
            });
            navigate("/");
        },
        onError: (error: Error) => {
            toast.error("Login Failed", {
                description: error.message || "An unexpected error occurred",
            });
        },
    });
};
