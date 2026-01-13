import AnalysisSection from "./components/analysis-section.home";
import ButtonsGroup from "./components/buttons-group.home";
import MarqueeSection from "./components/marquee-section.home";
import Container from "@components/layouts/container.layout";
import { cn } from "@lib/utils/cn.util";
import { useTranslation } from "react-i18next";

/**
 * HeroSection component
 *
 * Renders the hero section for the home page, including the main heading, description, analysis section,
 * button group, hero image, and a marquee section. Adapts content and styling for internationalization.
 *
 * @returns {JSX.Element} The hero section of the landing page.
 */
export default function HeroSection() {
    const { t, i18n } = useTranslation();

    // Helper function عشان الكود يبقى أقصر
    const heroT = (key: string) => t(`Home-Page.Hero-Section.${key}`);

    return (
        <header
            id="hero-section"
            className="min-h-screen pt-10"
            style={{ background: "url('/images/cover-hero-section.png') center/cover" }}
        >
            <Container>
                {/* Section content - display section content  */}
                <section id="content" className="flex flex-col lg:flex-row items-center justify-between mt-24 gap-20">
                    {/* left side - info */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl/snug md:text-5xl/snug font-bold uppercase">
                            {heroT("title.start")} <span className="text-[#FF4100]">{heroT("title.middle")}</span> {heroT("title.end")}{" "}
                        </h1>
                        <p className="mt-6 text-lg flex before:w-2 before:rounded-2xl before:me-4 before:bg-[#FF4100] before:content-[''] me-4">
                            {heroT("description")}
                        </p>

                        {/* Analysis section - display analysis section */}
                        <AnalysisSection />

                        {/* Buttons group - display buttons group */}
                        <ButtonsGroup />
                    </div>

                    {/* right side - img */}
                    <img
                        className={cn(i18n.language === "ar" && "-scale-x-100")}
                        src="/images/man-hero-section.png"
                        alt="man hero section"
                        loading="lazy"
                        width="467"
                        height="619"
                    />
                </section>
            </Container>

            {/* Marquee section - display marquee section */}
            <MarqueeSection />
        </header>
    );
}
