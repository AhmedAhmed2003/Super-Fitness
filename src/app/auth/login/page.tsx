import LoginForm from "./_components/login-form";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
    // Translations
    const { t } = useTranslation();
    return (
        <div className="w-120">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-white text-2xl mb-2">{t("Login-Page.form.login-title")}</h2>
                <h1 className="text-white text-4xl font-bold">{t("Login-Page.header.WELCOME BACK!")}</h1>
            </div>
            {/* Form */}
            <LoginForm />
        </div>
    );
}
