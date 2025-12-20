import { useTranslation } from "react-i18next";
import { ForgotPasswordForm } from "./components/forget-password-form";

export default function ForgetPasswordPage() {
  // Translation
  const { t } = useTranslation("forget-pss");
    return (
        <section>
            <h1 className="font-baloo font-extrabold text-4xl mb-5 mx-auto text-center">{t("title")}</h1>
            <ForgotPasswordForm />
        </section>
    );
}
