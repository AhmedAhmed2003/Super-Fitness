import { z } from "zod";

export const otpSchema = z.object({
    resetCode: z.string().length(6, "OTP must be exactly 6 digits").regex(/^\d+$/, "OTP must contain only numbers"),
});
