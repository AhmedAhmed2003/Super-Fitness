import Header from "./components/shared/header";
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
    const changeLanguageFn = (lang: "en" | "ar") => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <Providers>
            <main className="px-4 md:px-20">
                <Header />
                <div className="h-screen flex flex-col gap-10 items-center justify-center text-main font-rubik">
                    <p>{t("welcome")}</p>
                    <Button
                        className="text-main-text dark:text-main-text-dark"
                        onClick={() => changeLanguageFn(i18n.language === "en" ? "ar" : "en")}
                    >
                        change language
                    </Button>
                </div>
                <ButtonModeToggle />
            </main>
        </Providers>
    );
}
