import HealthySection from "./_components/healthy-section";
import WorkoutSection from "./_components/workout-section";
import { ButtonModeToggle } from "@components/shared/button-mode-toggle.shared";
import { Button } from "@components/ui/button";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="h-screen flex flex-col gap-10 items-center justify-center">
                <p>{t("welcome")}</p>
                <Button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}>change language</Button>
            </div>

            {/*Workout Section*/}
            <WorkoutSection />

            {/*Healthy Section*/}
            <HealthySection />
            <ButtonModeToggle />
        </>
    );
}
