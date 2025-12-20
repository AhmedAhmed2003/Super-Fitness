import { ChangeLanguageDialog } from "./change-language";
import ChangePassword from "./change-password";
import { ChangemodeDialog } from "./chnage-mode";
import SettingsCard from "./settings-card";
import LogoutIcone from "@components/icones/Logout";
import HelpIcone from "@components/icones/help";
import PrivacyIcone from "@components/icones/privacy";
import ScurityIcone from "@components/icones/scurity";
import { useTranslation } from "react-i18next";

export default function SettingsSection() {
    const { t } = useTranslation();
    const settingsItems = [
        {
            icon: <ScurityIcone />,
            title: t("profile.security"),
        },
        {
            icon: <PrivacyIcone />,
            title: t("profile.privacyPolicy"),
        },
        {
            icon: <HelpIcone />,
            title: t("profile.help"),
        },
        {
            icon: <LogoutIcone />,
            title: t("profile.logout"),
            titleColred: true,
        },
    ];

    return (
        <div className=" w-220 mx-auto mt-10 px-10 font-baloo flex  flex-wrap gap-6 justify-center">
            <ChangePassword />
            <ChangeLanguageDialog />
            <ChangemodeDialog />
            {settingsItems.map((item, index) => (
                <SettingsCard key={index} icon={item.icon} title={item.title} titleColred={item.titleColred} />
            ))}
        </div>
    );
}
