import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function QuickReplies() {
    const { t } = useTranslation("ai");

    return (
        <div className="flex gap-2 px-4 py-2 overflow-x-auto">
            <Button variant="outline" size="sm">
                {t("workoutAtHome")}
            </Button>

            <Button variant="outline" size="sm">
                {t("dietPlan")}
            </Button>

            <Button variant="outline" size="sm">
                {t("twentyMinutesWorkout")}
            </Button>
        </div>
    );
}

