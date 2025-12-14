import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState, useMemo, useCallback, memo } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CarouselItem {
    id: string;
    name: string;
    image: string;
    description?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GenericCarouselProps {
    items: CarouselItem[];
    pageSize?: number;
    buttonText?: string;
    onItemClick?: (item: CarouselItem) => void;
}

// memoize carousel card
const CarouselCard = memo(
    ({ item, buttonText, onItemClick }: { item: CarouselItem; buttonText: string; onItemClick: (item: CarouselItem) => void }) => (
        <div className="card-wrapper">
            <Card className="gap-0 p-0 bg-[#FFFFFF]/50 dark:bg-[#242424]/50 backdrop-blur-[3.6rem] rounded-2xl border-none w-[21.4rem] md:w-100 overflow-hidden">
                <img src={item.image} alt={item.name} loading="lazy" className="w-full h-74 object-cover rounded-t-2xl bg-[#F3F3F4]/60" />

                <CardContent className="p-4 pb-2">
                    <h3 className="mb-2 uppercase font-[Baloo_Thambi_2] font-bold text-[22.2px] leading-[33.6px] tracking-[2.24px] align-middle text-[#242424] dark:text-white">
                        {item.name}
                    </h3>

                    <Button
                        variant="ghost"
                        onClick={() => onItemClick(item)}
                        className="flex items-center justify-between text-[#FF4100] font-baloo font-medium text-[20px] leading-[18px] capitalize p-0 hover:bg-transparent cursor-pointer"
                    >
                        <span>{buttonText}</span>
                        <div className="ml-2 w-6 h-6 rounded-[63px] flex items-center justify-center bg-[#FF4100] transform -rotate-45 p-2 opacity-100">
                            <ArrowRight className="w-[8.64px] h-[6.39px] text-[#242424]" />
                        </div>
                    </Button>
                </CardContent>
            </Card>
        </div>
    ),
);

CarouselCard.displayName = "CarouselCard";

// memoize pagination dots
const PaginationDots = memo(
    ({ pagesCount, currentPage, onPageChange }: { pagesCount: number; currentPage: number; onPageChange: (page: number) => void }) => {
        if (pagesCount <= 1) return null;

        return (
            <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: pagesCount }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        aria-label={`Go to page ${i + 1}`}
                        className={`cursor-pointer transition-all duration-300 ease-in-out ${
                            currentPage === i ? "bg-orange-500 w-8 h-2 rounded-2xl" : "bg-[#242424] dark:bg-[#F3F3F4] w-2 h-2 rounded-full"
                        }`}
                    />
                ))}
            </div>
        );
    },
);

PaginationDots.displayName = "PaginationDots";

// memoize generic carousel
const GenericCarousel = memo(({ items, pageSize = 3, buttonText = "Explore", onItemClick }: GenericCarouselProps) => {
    const [page, setPage] = useState(0);

    // Memoize calculations
    const pagesCount = useMemo(() => Math.ceil(items.length / pageSize), [items.length, pageSize]);
    const visibleItems = useMemo(() => {
        const start = page * pageSize;
        return items.slice(start, start + pageSize);
    }, [items, page, pageSize]);

    // Memoize callback
    const handleItemClick = useCallback(
        (item: CarouselItem) => {
            onItemClick?.(item);
        },
        [onItemClick],
    );

    // callback for pagination
    const handlePageChange = useCallback((newPage: number) => {
        setPage(newPage);
    }, []);

    return (
        <div>
            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {visibleItems.map((item) => (
                    <CarouselCard key={item.id} item={item} buttonText={buttonText} onItemClick={handleItemClick} />
                ))}
            </div>

            {/* Pagination Dots */}
            <PaginationDots pagesCount={pagesCount} currentPage={page} onPageChange={handlePageChange} />
        </div>
    );
});

GenericCarousel.displayName = "GenericCarousel";

export default GenericCarousel;
