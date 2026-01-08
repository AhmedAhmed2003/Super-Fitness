import { z } from "zod";

/**
 * Zod schema for validating the Forgot Password form.
 * 
 * Fields:
 * - email: must be a valid email and required.
 * 
 */
export const forgotPasswordSchema = z.object({
  email: z.email("email-invalid").min(1, "email-required"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
