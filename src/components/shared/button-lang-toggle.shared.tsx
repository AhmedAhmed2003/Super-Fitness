import { Button } from "@components/ui/button";
import { useTranslation } from "react-i18next";

/**
 * ButtonLangToggle component
 *
 * A language toggle button that switches app language between English ("en") and Arabic ("ar").
 * The button displays the current language code and updates the language when clicked.
 *
 * @returns {JSX.Element} A button to toggle application language.
 */
export default function ButtonLangToggle() {
    const { i18n } = useTranslation();
    return <Button className="fixed bottom-14 right-3.5 w-9 h-9 rounded-full p-5 uppercase z-10" onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}>{i18n.language}</Button>;
}
