import { useMealCategories, useMealsByCategory } from "../home/_hooks/use-meal-categories";
import HealthyCategoryTabs from "./_components/healthy-category-tabs";
import GenericCarousel from "@app/(main)/home/_components/generic-carousel";
import type { CarouselItem } from "@app/(main)/home/_components/generic-carousel";
import LogoSection from "@components/shared/logo-section";
import { EmptyCardSkeleton } from "@components/skeletons/card.skeleton";
import { useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function HealthyPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    /** ----------------------------
     * Categories
     ----------------------------- */
    const { mealItems: categories, isLoading: isCategoriesLoading } = useMealCategories();

    const defaultCategory = categories?.[0]?.name;
    const selectedCategory = searchParams.get("category") || defaultCategory;

    /** ----------------------------
     * Meals
     ----------------------------- */
    const { meals, isLoading: isMealsLoading, error } = useMealsByCategory(selectedCategory!);

    /** ----------------------------
     * Sync URL with default category
     ----------------------------- */
    useEffect(() => {
        if (!searchParams.get("category") && defaultCategory) {
            setSearchParams({ category: defaultCategory });
        }
    }, [defaultCategory, searchParams, setSearchParams]);

    /** ----------------------------
     * Tabs handler
     ----------------------------- */
    const handleCategorySelect = (category: string) => {
        setSearchParams({ category });
    };

    /** ----------------------------
     * Carousel click
     ----------------------------- */
    const handleMealClick = (item: CarouselItem) => {
        navigate(`/healthy/${item.id}`);
        // navigate(`/healthy/${meal.idMeal}`);
    };

    /** ----------------------------
     * Map meals → CarouselItem
     ----------------------------- */
    const mealItems: CarouselItem[] = useMemo(
        () =>
            meals?.map((meal) => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
            })) ?? [],
        [meals],
    );

    return (
        <div className="min-h-screen bg-[#F3F3F4] dark:bg-[#121212] px-4 pb-10 pt-16">
            <div className="relative w-full flex flex-col md:items-center">
                {/* Logo Section */}
                <LogoSection title="Healthy" subTitle="Healthy Nutritions" />

                {/* Title */}
                <h2 className="font-baloo w-[21.4rem] md:w-160 font-bold mt-4 md:mt-6 text-xl md:text-[2rem] dark:text-white leading-[120%] tracking-[0] uppercase md:text-center">
                    Fuel your fitness journey with customized{" "}
                    <span className="font-baloo font-bold text-xl md:text-[2rem] leading-[120%] tracking-[0] uppercase text-center text-[#FF4100]">
                        Meal Plans
                    </span>{" "}
                    for you
                </h2>

                {/* Logo */}
            </div>
            {/* Tabs */}
            {isCategoriesLoading ? null : (
                <HealthyCategoryTabs categories={categories} selected={selectedCategory!} onSelect={handleCategorySelect} />
            )}

            {/* Error */}
            {error && (
                <div className="p-4 mt-6 bg-red-500/10 border border-red-500 rounded-lg">
                    <p className="text-red-500">{error.message || "Failed to load meals"}</p>
                </div>
            )}

            {/* Carousel (REUSED) */}
            <div className="mt-12 w-full max-w-7xl mx-auto">
                {isMealsLoading ? (
                    <EmptyCardSkeleton />
                ) : (
                    <GenericCarousel
                        items={mealItems}
                        pageSize={6} // 2 rows × 3 columns
                        buttonText="View Meal"
                        onItemClick={handleMealClick}
                    />
                )}
            </div>
        </div>
    );
}
