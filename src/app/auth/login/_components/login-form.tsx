import { useLoginMutation } from "../_hooks/use-login";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schemas/login.schema";
import type { LoginFormData } from "@/lib/types/login.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LoginForm() {
    // Mutations
    const { mutate: login, isPending, error } = useLoginMutation();

    // Translations
    const { t } = useTranslation();

    // Form setup with React Hook Form and Zod
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Submit handler
    const onSubmit = (data: LoginFormData) => {
        login(data);
    };

    return (
        <div className="p-4">
            <div className="w-full">
                {/* Card */}
                <Card className="backdrop-blur-sm gap-0 border-primary-disabled rounded-[3rem] p-10 bg-transparent shadow-none">
                    {/* Card Header */}
                    <CardHeader className="p-0 mb-4 block">
                        <CardTitle className="text-white text-2xl font-extrabold text-center">{t("Login-Page.form.login-title")}</CardTitle>
                    </CardHeader>
                    {/* Card Content */}
                    <CardContent className="p-0">
                        {/* Form */}
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    iconType="email"
                                                    placeholder={t("Login-Page.form.email-placeholder")}
                                                    className="w-full border py-2 border-primary-disabled rounded-[1.25rem] h-12 text-white placeholder-primary-disabled focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary bg-transparent"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500 text-sm mt-1 mr-2" />
                                        </FormItem>
                                    )}
                                />

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="mb-2">
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    iconType="password"
                                                    showPasswordToggle={true}
                                                    placeholder={t("Login-Page.form.password-placeholder")}
                                                    className="w-full border border-primary-disabled rounded-[1.25rem] h-12 text-white placeholder-primary-disabled focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary bg-transparent"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500 text-sm mt-1 mr-2" />
                                        </FormItem>
                                    )}
                                />

                                {/* API Error */}
                                {error && (
                                    <Alert variant="destructive" className="bg-red-500/10 border-red-500 rounded-xl p-3">
                                        <AlertDescription className="text-red-500 text-sm text-center">
                                            {t("Login-Page.messages.login-failed")}
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {/* Forgot Password */}
                                <div className="text-right mb-6">
                                    <Link to="/forgot-password" className="text-primary text-sm underline hover:text-primary/80">
                                        {t("Login-Page.form.forget-password")}
                                    </Link>
                                </div>

                                {/* Login Button */}
                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full rounded-[1.25rem] bg-linear-to-r mb-2 from-primary to-orange-600 text-white font-semibold py-3 h-auto hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                            {t("Login-Page.form.logging-in")}
                                        </>
                                    ) : (
                                        t("Login-Page.form.login-button")
                                    )}
                                </Button>

                                {/* Register Link */}
                                <p className="text-center text-primary-disabled">
                                    {t("Login-Page.form.no-account")}{" "}
                                    <Link to="/register" className="text-primary hover:underline font-semibold">
                                        {t("Login-Page.form.register")}
                                    </Link>
                                </p>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
