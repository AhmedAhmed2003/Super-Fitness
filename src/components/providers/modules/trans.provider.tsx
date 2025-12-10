import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * TransProviders is a React context provider responsible for synchronizing
 * the `dir` (direction) and `lang` (language) attributes of the <html> element
 * according to the current i18n language. Ensures proper RTL/LTR and localization setup.
 *
 * @param children - The React children nodes to render within this provider.
 * @returns The children wrapped in this translation context effect.
 */
export default function TransProviders({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();

    useEffect(() => {
        const html = document.documentElement;

        html.dir = i18n.language === "ar" ? "rtl" : "ltr";
        html.lang = i18n.language;
    }, [i18n.language]);

    return <>{children}</>;
}
