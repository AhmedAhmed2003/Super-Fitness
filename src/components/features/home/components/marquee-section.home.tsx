import { Marquee, MarqueeContent, MarqueeItem } from "@components/ui/marquee";
import { MARQUEE_LISTS } from "@lib/constants/features/home.constant";
import { useTranslation } from "react-i18next";

/**
 * MarqueeSection component
 *
 * Renders a horizontal marquee displaying a list of highlighted features with icons.
 * Uses styled Marquee, MarqueeContent, and MarqueeItem UI components.
 *
 * @returns {JSX.Element} A marquee section component
 */
export default function MarqueeSection() {
    const { t, i18n } = useTranslation("Home-Page", { keyPrefix: "Hero-Section.marquee-section" });

    return (
        <Marquee className="bg-primary h-24">
            <MarqueeContent className="h-full place-content-center" direction={i18n.language === "en" ? "right" : "right"}>
                {MARQUEE_LISTS.map((item, index) => (
                    <MarqueeItem className="text-2xl text-white font-bold uppercase flex gap-3.5" key={index}>
                        <img src="/vectors/star.png" alt="star-vector" width="26" height="26" aria-hidden="true" />
                        {t(item)}
                    </MarqueeItem>
                ))}
            </MarqueeContent>
        </Marquee>
    );
}
