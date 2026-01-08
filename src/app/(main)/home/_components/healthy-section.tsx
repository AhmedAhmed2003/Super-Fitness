import { useMealCategories } from "../_hooks/use-meal-categories";
import type { CarouselItem } from "@app/(main)/home/_components/generic-carousel";
import GenericCarousel from "@app/(main)/home/_components/generic-carousel";
import LogoSection from "@components/shared/logo-section";
import { EmptyCardSkeleton } from "@components/skeletons/card.skeleton";
import { useNavigate } from "react-router-dom";

export default function HealthySection() {
    // Fetch meal categories
    const { mealItems, isLoading, error } = useMealCategories();
    // Navigation
    const navigate = useNavigate();

    // Handle meal category click
    const handleMealClick = (item: CarouselItem) => {
        navigate(`/healthy?category=${item.id}`);
        console.log(item.id);
        
    };

    return (
        <div
            className="
                min-h-screen relative flex flex-col 
                bg-[url('/images/healthy-background.jpg')] 
                items-center bg-cover bg-center
                before:content-[''] before:absolute before:top-5 md:before:top-[3.56rem]
                before:w-full before:h-103.5 before:bg-[#F3F3F4]/60
                dark:before:bg-[#242424]/60 before:backdrop-blur-md
                before:z-0 pb-10 px-4 pt-6 md:pt-1"
        >
            <div className="relative w-full flex flex-col md:items-center">
                {/* Logo Section */}
                <LogoSection title="Healthy" subTitle="Healthy Nutritions" />

                {/* Title */}
                <h2 className="font-baloo w-[21.4rem] md:w-160 font-bold mt-4 md:mt-6 text-xl md:text-[2.5rem] dark:text-white leading-[120%] tracking-[0] uppercase md:text-center">
                    Fuel your fitness journey with customized{" "}
                    <span className="font-baloo font-bold text-xl md:text-[2.5rem] leading-[120%] tracking-[0] uppercase text-center text-[#FF4100]">
                        Meal Plans
                    </span>{" "}
                    designed for you
                </h2>

                {/* Error Message */}
                {error && (
                    <div className="p-4 mt-6 mb-6 bg-red-500/10 border border-red-500 rounded-lg">
                        <p className="text-red-500">{error.message || "Failed to load meals"}</p>
                    </div>
                )}

                {/* Carousel */}
                <div className="mt-12 w-full max-w-7xl">
                    {isLoading ? (
                        <EmptyCardSkeleton />
                    ) : (
                        <GenericCarousel items={mealItems} pageSize={3} buttonText="Read More" onItemClick={handleMealClick} />
                    )}
                </div>
            </div>
        </div>
    );
}
