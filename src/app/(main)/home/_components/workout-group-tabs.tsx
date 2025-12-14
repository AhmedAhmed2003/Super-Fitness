import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@components/ui/button";
import type { MuscleGroup } from "@lib/types/workout.types";
import { memo, useCallback } from "react";

interface MuscleGroupTabsProps {
    groups: MuscleGroup[];
    selected: string;
    onSelect: (id: string) => void;
}

const MuscleGroupTabs = memo(({ groups, selected, onSelect }: MuscleGroupTabsProps) => {
    const getButtonClassName = useCallback(
        (groupId: string) =>
            `cursor-pointer text-[14px] md:text-xl p-2 rounded-4xl text-center transition-colors duration-200 ${
                selected === groupId
                    ? "bg-[#FF4100] text-white hover:bg-[#FF4100]"
                    : "text-[#242424] bg-transparent hover:text-[#FF4100] hover:bg-transparent dark:text-white dark:hover:text-[#FF4100]"
            }`,
        [selected],
    );

    return (
        <div className="w-full md:w-181 mx-auto my-4 md:my-8 px-4">
            <Carousel
                opts={{
                    align: "start",
                    dragFree: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {groups.map((group) => (
                        <CarouselItem key={group._id} className="basis-auto px-8">
                            <Button onClick={() => onSelect(group._id)} variant="default" className={getButtonClassName(group._id)}>
                                {group.name}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
});

MuscleGroupTabs.displayName = "MuscleGroupTabs";

export default MuscleGroupTabs;
