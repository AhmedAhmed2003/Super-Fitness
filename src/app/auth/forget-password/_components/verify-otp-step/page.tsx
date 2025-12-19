import OtpForm from "./_components/otp-form";
import { useTranslation } from "react-i18next";

export default function VerifyOtpPage() {
    // Translations
    const { t } = useTranslation();

    return (
        <div className="w-120">
            {/* Header */}
            <div className="text-center mb-4">
                <h1 className="text-white text-4xl font-bold">{t("VerifyOtp-Page.header.otp-code")}</h1>
            </div>
            {/* Form */}
            <OtpForm />
        </div>
    );
}
