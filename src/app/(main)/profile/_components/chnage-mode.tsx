import ModeIcone from "@components/icones/mode-icone";
import { Switch } from "@components/ui/switch";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ChangemodeDialog() {
    const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme-mode") === "dark" ? "dark" : "light");
     const [language, setLanguage] = useState<"en" | "ar">(i18next.language === "ar" ? "ar" : "en");
    const { t } = useTranslation();

    const handleSave = () => {
        // Apply theme
        document.documentElement.classList.toggle("dark", theme === "dark");

        // Persist
        localStorage.setItem("theme-mode", theme);
    };

    return (
        <div className="w-52.25 h-42 flex flex-col justify-center items-center gap-4 border border-[#D3D3D3] rounded-lg bg-transparent transition-all duration-300 ease-out hover:border-[#FF4100] hover:bg-[#FF4100]/5 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <ModeIcone />
            <div className="flex items-center gap-0.5">
                <p className="capitalize font-semibold text-white">{t("profile.mode.title")}</p>
                <p className="capitalize text-white">
                    (<span className="text-[#FF4100] text-sm">{theme === "light" ? t("profile.mode.light") : t("profile.mode.dark")}</span>)
                </p>
            </div>

            {/* Switch */}
            <Switch
            dir={language === "en" ? "rtl" : "ltr"}
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                onChange={handleSave}
                className="bg-[#FF4100] data-[state=checked]:bg-[#FF4100]"
            />
        </div>
    );
}
