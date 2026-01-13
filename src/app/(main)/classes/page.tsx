import GenericCarousel from "../home/_components/generic-carousel";
import { useAllMusclesGroups, useMuscleById } from "./hooks/use-classes";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MarqueeSection from "@components/features/home/components/marquee-section.home";
import PageLoader from "@components/shared/loader";
import LogoSection from "@components/shared/logo-section";
import Title from "@components/shared/title";
import { EmptyCardSkeleton } from "@components/skeletons/card.skeleton";
import { Button } from "@components/ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function ClassesPage() {
    // Translation
    const { i18n } = useTranslation();
    const { t } = useTranslation("classes-page");

    // Search params
    const [searchParams, setSearchParams] = useSearchParams();
    const muscleGroupParam = searchParams.get("muscle") || "67c79f3526895f87ce0aa971";

    // Use state
    const [muscle, setMuscle] = useState(muscleGroupParam);

    // Hooks
    const { data: allMuscleGroup, error: allMusleError, isLoading: allMusleLoading } = useAllMusclesGroups(i18n.language);
    const { muscleByID, muscleByIdError, muscleByIdLoading } = useMuscleById(muscle, i18n.language);

    // Funnction
    const handleMuscleGroup = (muscleId: string) => {
        setMuscle(() => muscleId);
    };

    // UseEffect
    useEffect(() => {
        setSearchParams({ muscle });
    }, [setSearchParams, muscle]);

    return (
        <>
            <div className="pt-30 px-10 md:px-20 pb-10">
                <div className="flex justify-center items-center relative">
                    <LogoSection title={t("workouts")} subTitle={t("fitness")} />
                </div>
                {/* The title */}
                <Title title={t("title")} span={t("subtitle")} />

                {/* The muscle group carousal */}
                {allMusleLoading ? (
                    // The muscle group carousal Loading
                    <PageLoader />
                ) : allMusleError ? (
                    //    The muscle group carousal Loading Error
                    <h2 className="text-3xl flex items-center justify-center "> Something Went wrong , please reload the page </h2>
                ) : (
                    // Carosusel display
                    <>
                        <Carousel
                            opts={{
                                align: "center",
                                slidesToScroll: 2,
                                direction: i18n.dir(),
                            }}
                            className=" lg:max-w-3xl  max-w-full  m-auto mt-8"
                        >
                            <CarouselContent className="p-5">
                                {allMuscleGroup?.musclesGroup.map((item) => (
                                    <CarouselItem key={item._id} className=" sm:basis-1/4 basis-1/2  flex justify-center items-center">
                                        <div className="sm:text-center text-start ">
                                            <Button
                                                variant={item?._id == muscle ? "default" : "ghost"}
                                                key={item._id}
                                                size={"rounded-btn"}
                                                className="md:text-xl sm:text-base text-sm  font-bold py-1 "
                                                onClick={() => handleMuscleGroup(item._id)}
                                            >
                                                {item.name}
                                            </Button>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="ms-4 " />
                            <CarouselNext className="me-4" />
                        </Carousel>

                        {/* The muscle group cards */}
                        <div className="flex justify-center items-center pt-8 gap-8 flex-wrap">
                            {/* The muscle group cards Loading */}
                            {muscleByIdLoading ? (
                                <EmptyCardSkeleton />
                            ) : muscleByIdError ? (
                                <h2 className="text-3xl flex items-center justify-center text-red-500">
                                    Something went wrong, please reload the page
                                </h2>
                            ) : muscleByID?.muscles && muscleByID.muscles.length > 0 ? (
                                // Muscle group cards display
                                <>
                                    <GenericCarousel
                                        items={muscleByID.muscles}
                                        pageSize={3}
                                        buttonText="Read More"
                                        onItemClick={handleMuscleGroup}
                                    />
                                </>
                            ) : (
                                <h2 className="text-3xl flex items-center justify-center text-red-500">
                                    No classes available for this muscle group
                                </h2>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* The marquee section */}
            <MarqueeSection />
        </>
    );
}
