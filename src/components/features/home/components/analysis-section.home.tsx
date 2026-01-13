import { ANALYSIS_ITEMS } from "@lib/constants/features/home.constant";
import { useTranslation } from "react-i18next";

/**
 * AnalysisSection component
 *
 * Renders a section displaying key analysis/statistics items (e.g., counts or metrics)
 * for the home page hero section. Utilizes i18n for translated labels and displays the
 * items in a flex layout that adapts for large screens.
 *
 * @returns {JSX.Element} The analysis/statistics section for the hero section.
 */
export default function AnalysisSection() {
    const { t } = useTranslation();

    return (
        <section id="analysis-hero-section" className="mt-16">
            <ul className="flex flex-col lg:flex-row text-center lg:text-start gap-y-7 items-center justify-between">
                {ANALYSIS_ITEMS.map((item) => (
                    <li key={item.label}>
                        <strong className="text-2xl font-bold">{item.count}+</strong>
                        <p className="text-lg capitalize">{t(`Home-Page.Hero-Section.analysis-section.${item.label}`)}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
