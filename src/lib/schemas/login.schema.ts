import * as z from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(50, { message: "Password is too long" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
