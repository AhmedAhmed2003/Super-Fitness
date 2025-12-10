import Providers from "@components/providers";
import { ButtonModeToggle } from "@components/shared/button-mode-toggle.shared";
import { Button } from "@components/ui/button";
import { useTranslation } from "react-i18next";

/**
 * The root App component for the application.
 * @returns {JSX.Element} The rendered application container.
 */
export default function App() {
    const { t, i18n } = useTranslation();
    return (
        <Providers>
            <div className="h-screen flex flex-col gap-10 items-center justify-center">
                <p>{t("welcome")}</p>
                <Button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}>change language</Button>
            </div>
            <ButtonModeToggle />
        </Providers>
    );
}
