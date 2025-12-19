import { useOtpMutation } from "../_hooks/use-otp";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "@lib/schemas/otp.schema";
import type { OtpFormData } from "@lib/types/otp.types";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function OtpForm() {
    // Mutations
    const { mutate: verifyOtp, isPending, error } = useOtpMutation();
    // Translations
    const { t } = useTranslation();

    // Form setup with React Hook Form and Zod
    const form = useForm<OtpFormData>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            resetCode: "",
        },
    });

    // Submit handler
    const onSubmit = (data: OtpFormData) => {
        verifyOtp(data);
    };

    return (
        <div className="flex items-center justify-center p-4">
            {/* Card */}
            <Card className="w-fit backdrop-blur-sm border-primary-disabled rounded-[3rem] p-10 bg-transparent shadow-none">
                {/* Card Header */}
                <CardHeader className="p-0 mb-8 text-center block">
                    <CardTitle className="text-white text-2xl font-normal"> {t("Otp-Page.form.enter-otp")}</CardTitle>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-0">
                    {/* Form */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* OTP */}
                            <FormField
                                control={form.control}
                                name="resetCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            {/* OTP Input */}
                                            <InputOTP
                                                maxLength={6}
                                                value={field.value}
                                                onChange={field.onChange}
                                                className="flex justify-center border-none focus:ring-0 focus:ring-offset-0"
                                            >
                                                {/* OTP Slots */}
                                                <InputOTPGroup className="gap-4 border-none">
                                                    {[...Array(6)].map((_, index) => (
                                                        <InputOTPSlot
                                                            key={index}
                                                            index={index}
                                                            className="
                                                                w-14
                                                                h-8
                                                                bg-transparent
                                                                border-0
                                                                border-b-2
                                                                border-primary-disabled
                                                                rounded-none
                                                                text-xl
                                                                font-bold
                                                                text-primary
                                                                transition-colors
                                                                data-[active=true]:border-primary
                                                                focus:border-primary
                                                                focus:outline-none
                                                            "
                                                        />
                                                    ))}
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>

                                        {/* Error Message */}
                                        <FormMessage className="text-red-500 text-sm mt-2 text-center" />
                                    </FormItem>
                                )}
                            />

                            {/* API Error */}
                            {error && (
                                <Alert variant="destructive" className="bg-red-500/10 border-red-500 rounded-xl p-3">
                                    <AlertDescription className="text-red-500 text-sm text-center">{error.message}</AlertDescription>
                                </Alert>
                            )}

                            {/* Confirm Button */}
                            <Button
                                type="submit"
                                disabled={isPending || form.watch("resetCode").length !== 6}
                                className="
                                    w-full
                                    h-10
                                    rounded-[1.25rem]
                                    bg-primary
                                    text-white
                                    font-semibold
                                    py-2
                                    px-4
                                    hover:from-orange-600
                                    hover:to-orange-700
                                    transition-all
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                "
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        {isPending ? t("Otp-Page.form.verifying") : t("Otp-Page.form.confirm")}
                                    </>
                                ) : (
                                    "Confirm"
                                )}
                            </Button>

                            {/* Resend */}
                            <div className="text-center space-y-1">
                                <p className="text-primary-disabled text-sm">{t("Otp-Page.form.didnt-receive")}</p>
                                <Link to="/resend-code" className="text-primary underline font-bold text-sm">
                                    {t("Otp-Page.form.resend-code")}
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
