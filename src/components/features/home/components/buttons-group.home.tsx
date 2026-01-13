import { Button } from "@components/ui/button";
import { useTranslation } from "react-i18next";

/**
 * ButtonsGroup component
 *
 * Renders a group of call-to-action buttons for the home page, typically including
 * options like "Get Started" and "Explore More". Utilizes localized text.
 *
 * @returns {JSX.Element} The button group component for hero section actions.
 */
export default function ButtonsGroup() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-wrap items-center gap-6 lg:gap-16 mt-16">
            <Button variant="secondary" className="capitalize w-full lg:w-fit">
                {t("Home-Page.Hero-Section.group-buttons.get-started")}
            </Button>
            <Button variant="secondary_outline" className="capitalize w-full lg:w-fit">
                {t("Home-Page.Hero-Section.group-buttons.explore-more")}
            </Button>
        </div>
    );
}
