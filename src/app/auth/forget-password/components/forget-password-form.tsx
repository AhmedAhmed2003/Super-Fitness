import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForgotPassword } from "@lib/hooks/auth/use-forgot-password.hook";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "@lib/schemas/forget-password.schema";
import { useTranslation } from "react-i18next";

/**
 * ForgotPasswordForm component
 * ----------------------------
 * A form component for requesting a password reset link.
 * Uses React Hook Form for form state management, Zod for validation,
 * and shadcn/ui components for consistent UI.
 *
 * The form integrates with the useForgotPassword custom hook, which handles
 * the API call and toast notifications for success/error messages.
 */
export const ForgotPasswordForm = () => {
  const { mutate, isPending } = useForgotPassword();
  // Initialize translation function for the "forget-pss" namespace
  const { t } = useTranslation("forget-pss");

  // Setup the form with React Hook Form and Zod resolver
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "", // Default empty value
    },
  });

  // Submit handler: calls the mutation with validated form values
  const onSubmit = (values: ForgotPasswordFormData) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-20 py-10 mx-auto border-1 rounded-[50px] border-[#D3D3D3] font-baloo"
      >
        {/* Email input field with validation and error messages */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-xl text-center mx-auto">{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} className="rounded-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button with loading state */}
        <Button type="submit" disabled={isPending} className="w-full mt-6 rounded-2xl text-base font-extrabold">
          {isPending ? t("sending") : t("send")}
        </Button>
      </form>
    </Form>
  );
};
