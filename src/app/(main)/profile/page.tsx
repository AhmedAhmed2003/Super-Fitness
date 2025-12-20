import img from "../../../../public/images/auth-bg-image.png";
import CardChange from "./_components/card-chnage";
import SettingsSection from "./_components/settings-section";
import { useTranslation } from "react-i18next";

export default function AccountPage() {
    const { t } = useTranslation();
    return (
        <div className="relative  text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${img})` }}></div>

            {/* Overlay with opacity + blur */}
            <div className="absolute inset-0 bg-[#24242499] backdrop-blur-[86px] z-10"></div>

            {/* Content */}
            <div className="relative  flex flex-col  z-20 ">
                <div className="flex w-220  mx-auto gap-20 mt-10">
                    <CardChange title={t("profile.cards.goal")} subtitle={t("profile.cards.tapToChange")} value="lose weight" />
                    <CardChange title={t("profile.cards.level")} subtitle={t("profile.cards.tapToChange")} value="Beginner" />
                    <CardChange title={t("profile.cards.weight")} subtitle={t("profile.cards.tapToChange")} value="90 kg" />
                </div>

                <SettingsSection />
            </div>
        </div>
    );
}
