import { useMealCategories } from "../_hooks/use-meal-categories";
import type { CarouselItem } from "@app/(main)/home/_components/generic-carousel";
import GenericCarousel from "@app/(main)/home/_components/generic-carousel";
import LogoSection from "@components/shared/logo-section";
import { EmptyCardSkeleton } from "@components/skeletons/card.skeleton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HealthySection() {
    const { t, i18n } = useTranslation();

    // Fetch meal categories with current language
    const { mealItems, isLoading, error } = useMealCategories(i18n.language);

    // Navigation
    const navigate = useNavigate();

    // Handle meal category click
    const handleMealClick = (item: CarouselItem) => {
        navigate(`/healthy?category=${item.id}`);
    };

    return (
        <div
            className="
                min-h-screen relative flex flex-col 
                bg-[url('/images/healthy-background.jpg')] 
                items-center bg-cover bg-center
                before:content-[''] before:absolute before:top-5 md:before:top-[3.56rem]
                before:w-full before:h-103.5 before:bg-[#F3F3F4]/60
                dark:before:bg-secondary/60 before:backdrop-blur-md
                before:z-0 pb-10 px-4 pt-6 md:pt-1"
        >
            <div className="relative w-full flex flex-col md:items-center">
                {/* Logo Section */}
                <LogoSection title={t("healthy-page.title")} subTitle={t("healthy-page.subtitle")} />

                {/* Title */}
                <h2 className="font-baloo w-[21.4rem] md:w-160 font-bold mt-4 md:mt-6 text-xl md:text-[2.5rem] dark:text-white leading-[120%] tracking-[0] uppercase md:text-center">
                    {t("healthy-page.description.start")}{" "}
                    <span className="font-baloo font-bold text-xl md:text-[2.5rem] leading-[120%] tracking-[0] uppercase text-center text-[#FF4100]">
                        {t("healthy-page.description.highlight")}
                    </span>{" "}
                    {t("healthy-page.description.end")}
                </h2>

                {/* Error Message */}
                {error && (
                    <div className="p-4 mt-6 mb-6 bg-red-500/10 border border-red-500 rounded-lg">
                        <p className="text-red-500">{error.message || t("healthy-page.error")}</p>
                    </div>
                )}

                {/* Carousel */}
                <div className="mt-12 w-full max-w-7xl">
                    {isLoading ? (
                        <EmptyCardSkeleton />
                    ) : (
                        <GenericCarousel
                            items={mealItems}
                            pageSize={3}
                            buttonText={t("healthy-page.button")}
                            onItemClick={handleMealClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
