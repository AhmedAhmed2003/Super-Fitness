import Container from "@components/layouts/container.layout";
import { Button } from "@components/ui/button";
// import { cn } from "@lib/utils/cn.util";
import ArrowIcon from "@public/vectors/arrow";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
    const { t } = useTranslation("Home-Page", { keyPrefix: "About-Section" });

    return (
        <section id="about-section" className="py-20 bg-[#F9F9F9]">
            <Container>
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    {/* Left Images */}
                    <div className="relative w-full lg:w-1/2">
                        {/* Large left image */}
                        <img src="/images/about-1.png" alt="training" className="rounded-2xl w-[55%] shadow-xl" />

                        {/* Top-right small image */}
                        <img
                            src="/images/about-2.png"
                            alt="training"
                            className="
                                absolute 
                                top-14 
                                right-0 
                                w-[40%] 
                                rounded-2xl 
                                shadow-xl
                            "
                        />

                        {/* Bottom-right medium image */}
                        <img
                            src="/images/about-3.png"
                            alt="training"
                            className="
                                absolute 
                                top-1/2 
                                right-0
                                w-[60%] 
                                max-h-10/12
                                rounded-2xl 
                                shadow-xl
                            "
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2">
                        {/* Subtitle */}
                        <p className="text-[#FF4100] font-semibold capitalize tracking-wide mb-3">{t("subtitle")}</p>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
                            {t("title.start")} <span className="text-[#FF4100]">{t("title.middle")}</span> {t("title.end")}
                        </h2>

                        {/* Description */}
                        <p className="mt-6 text-[#242424] font-normal text-lg">{t("description")}</p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14 mb-8">
                            {[
                                {
                                    title: t("features.personal.title"),
                                    desc: t("features.personal.desc"),
                                },
                                {
                                    title: t("features.cardio.title"),
                                    desc: t("features.cardio.desc"),
                                },
                                {
                                    title: t("features.equipment.title"),
                                    desc: t("features.equipment.desc"),
                                },
                                {
                                    title: t("features.nutrition.title"),
                                    desc: t("features.nutrition.desc"),
                                },
                            ].map((item, i) => (
                                <div key={i} className="">
                                    <div className="flex gap-2 items-center">
                                        <ArrowIcon bgColor="none" color="#FF4100" strokeColor="none" />
                                        <h4 className="font-bold text-[#242424] text-base">{item.title}</h4>
                                    </div>
                                    <div>
                                        <p className="text-[#242424] text-lg font-normal mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <Button variant="secondary" className="capitalize w-full lg:w-fit">
                            {t("btn")}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
