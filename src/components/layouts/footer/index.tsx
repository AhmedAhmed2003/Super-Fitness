import MarqueeSection from "@components/features/home/components/marquee-section.home";
import FooterColumn from "./components/footer-column";
import { footerData } from "./components/footer-data";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation("Footer");

    return (
        <>
              {/* Marquee section - display marquee section */}
                    <MarqueeSection />
        <footer className="bg-[#e2e3e3] text-[#242424] dark:bg-zinc-900 dark:text-zinc-200">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <FooterColumn>
                        <img src={footerData.brand.logo} alt="logo" className="w-36" />
                        <p className="text-base font-normal leading-relaxed text-[#242424] dark:text-zinc-200">
                            {t(footerData.brand.textKey)}
                        </p>
                    </FooterColumn>

                    {/* Contact */}
                    <FooterColumn title={t("titles.contact")}>
                        <ul className="space-y-4">
                            {footerData.contact.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="flex items-center gap-3 text-base font-normal">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900 dark:border-zinc-200">
                                            <Icon size={16} />
                                        </span>
                                        {t(item.valueKey)}
                                    </li>
                                );
                            })}
                        </ul>
                    </FooterColumn>

                    {/* Timing */}
                    <FooterColumn title={t("titles.timing")}>
                        <ul className="space-y-2 text-base font-normal text-[#242424] dark:text-zinc-200">
                            {footerData.timing.map((time) => (
                                <li key={time}>{t(time)}</li>
                            ))}
                        </ul>
                    </FooterColumn>

                    {/* Location */}
                    <FooterColumn title={t("titles.location")}>
                        <p className="text-base font-normal text-[#242424] dark:text-zinc-200 leading-relaxed">
                            {t(footerData.locationKey)}
                        </p>
                    </FooterColumn>
                </div>
            </div>
        </footer>
        </>
    );
}
