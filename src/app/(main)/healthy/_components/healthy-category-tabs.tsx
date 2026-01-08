import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselItem as CategoryItem } from "@app/(main)/home/_components/generic-carousel";
import { Button } from "@components/ui/button";
import { memo, useCallback } from "react";

interface HealthyCategoryTabsProps {
    categories: CategoryItem[];
    selected: string;
    onSelect: (category: string) => void;
}

const HealthyCategoryTabs = memo(
    ({ categories, selected, onSelect }: HealthyCategoryTabsProps) => {
        const getButtonClassName = useCallback(
            (category: string) =>
                `cursor-pointer text-[14px] md:text-xl p-2 rounded-4xl text-center transition-colors duration-200 ${
                    selected === category
                        ? "bg-[#FF4100] text-white hover:bg-[#FF4100]"
                        : "text-[#242424] bg-transparent hover:text-[#FF4100] dark:text-white dark:hover:text-[#FF4100]"
                }`,
            [selected],
        );

        return (
            <div className="w-full md:w-181 mx-auto my-4 md:my-8 px-4">
                <Carousel opts={{ align: "start", dragFree: true }}>
                    <CarouselContent className="-ml-4">
                        {categories.map((cat) => (
                            <CarouselItem key={cat.id} className="basis-auto px-4">
                                <Button
                                    onClick={() => onSelect(cat.id)}
                                    className={getButtonClassName(cat.id)}
                                >
                                    {cat.name}
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        );
    },
);

HealthyCategoryTabs.displayName = "HealthyCategoryTabs";
export default HealthyCategoryTabs;
