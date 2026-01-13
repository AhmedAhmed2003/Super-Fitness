import Container from "@components/layouts/container.layout";
import LogoSection from "@components/shared/logo-section";
import { Button } from "@components/ui/button";
// import { cn } from "@lib/utils/cn.util";
import ArrowIcon from "@public/vectors/arrow";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/healthy");
    };

    return (
        <section id="about-section" className="py-20 bg-[#F9F9F9] dark:bg-[#242424F2]">
            <Container>
                <div className="flex flex-col-reverse lg:flex-row items-start gap-16">
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
                                right-0 rtl:right-auto rtl:left-0 
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
                                right-0 rtl:right-auto rtl:left-0
                                w-[60%]
                                max-h-10/12
                                rounded-2xl
                                shadow-xl
                            "
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2">
                        {/* Logo Section */}
                        <LogoSection title={t("Home-Page.About-Section.subtitle")} subTitle={t("Home-Page.About-Section.subtitle")} />

                        {/* Title */}
                        <h2 className="font-baloo w-[21.4rem] md:w-160 font-bold mt-4 md:mt-6 text-xl md:text-[2.5rem] dark:text-white leading-[120%] tracking-[0] uppercase">
                            {t("Home-Page.About-Section.title.start")}{" "}
                            <span className="font-baloo font-bold text-xl md:text-[2.5rem] leading-[120%] tracking-[0] uppercase text-[#FF4100]">
                                {t("Home-Page.About-Section.title.middle")}
                            </span>{" "}
                            {t("Home-Page.About-Section.title.end")}
                        </h2>

                        {/* Description */}
                        <p className="mt-6 text-secondary font-normal text-lg dark:text-[#F3F3F4]">
                            {t("Home-Page.About-Section.description")}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14 mb-8">
                            {[
                                {
                                    title: t("Home-Page.About-Section.features.personal.title"),
                                    desc: t("Home-Page.About-Section.features.personal.desc"),
                                },
                                {
                                    title: t("Home-Page.About-Section.features.cardio.title"),
                                    desc: t("Home-Page.About-Section.features.cardio.desc"),
                                },
                                {
                                    title: t("Home-Page.About-Section.features.equipment.title"),
                                    desc: t("Home-Page.About-Section.features.equipment.desc"),
                                },
                                {
                                    title: t("Home-Page.About-Section.features.nutrition.title"),
                                    desc: t("Home-Page.About-Section.features.nutrition.desc"),
                                },
                            ].map((item, i) => (
                                <div key={i} className="">
                                    <div className="flex gap-2 items-center">
                                        <ArrowIcon bgColor="none" color="#FF4100" strokeColor="none" />
                                        <h4 className="font-bold text-secondary dark:text-[#F3F3F4] text-base">{item.title}</h4>
                                    </div>
                                    <div>
                                        <p className="text-secondary dark:text-[#F3F3F4] text-lg font-normal mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <Button variant="secondary" className="capitalize w-full lg:w-fit" onClick={handleClick}>
                            {t("Home-Page.About-Section.btn")}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
