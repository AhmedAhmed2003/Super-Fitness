import { useMuscleGroup, useMuscleGroups } from "../_hooks/useMuscleGroups";
import MuscleGroupTabs from "./workout-group-tabs";
import type { CarouselItem } from "@app/(main)/home/_components/generic-carousel";
import GenericCarousel from "@app/(main)/home/_components/generic-carousel";
import LogoSection from "@components/shared/logo-section";
import { EmptyCardSkeleton } from "@components/skeletons/card.skeleton";
import type { MusclesResponse, MuscleGroupDetailsResponse } from "@lib/types/workout.types";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function WorkoutSection() {
    const { data: groupsData, isLoading: loadingGroups, error: groupsError } = useMuscleGroups();
    const [selectedGroup, setSelectedGroup] = useState<string>("");
    const navigate = useNavigate();

    const { data: muscleGroupDetails, isLoading: detailsLoading, error: detailsError } = useMuscleGroup(selectedGroup);

    // Memoize groups to prevent unnecessary re-renders
    const groups = useMemo(() => (groupsData as MusclesResponse)?.musclesGroup ?? [], [groupsData]);

    // Memoize muscles to prevent unnecessary re-renders
    const muscles = useMemo(() => (muscleGroupDetails as MuscleGroupDetailsResponse)?.muscles ?? [], [muscleGroupDetails]);

    // Memoize carousel items transformation
    const muscleItems: CarouselItem[] = useMemo(
        () =>
            muscles.map((muscle) => ({
                id: muscle._id,
                name: muscle.name,
                image: muscle.image,
            })),
        [muscles],
    );

    // Set initial selected group
    useEffect(() => {
        if (groups.length > 0 && !selectedGroup) {
            setSelectedGroup(groups[0]._id);
        }
    }, [groups, selectedGroup]);

    // Memoize callback to prevent unnecessary re-renders
    const handleMuscleClick = useCallback((item: CarouselItem) => {
        navigate(`/workouts?groupId=${item?.id}`);
    }, []);

    // Memoize error message
    const errorMessage = useMemo(() => groupsError?.message || detailsError?.message, [groupsError, detailsError]);

    // Show loading state
    if (loadingGroups) {
        return (
            <div className="min-h-screen relative flex flex-col bg-[url('/images/workout-backgorund.jpg')] items-center bg-cover bg-center before:content-[''] before:absolute before:top-5 md:before:top-[3.56rem] before:w-full before:h-103.5 before:bg-[#F3F3F4]/60 dark:before:bg-[#242424]/60 before:backdrop-blur-md before:z-0 pb-10 px-4 pt-6 md:pt-1">
                <div className="relative w-full flex flex-col md:items-center">
                    <LogoSection title="Workouts" subTitle="fitness class" />
                    <h2 className="font-baloo w-[21.4rem] md:w-160 font-bold mt-4 md:mt-6 text-xl md:text-[2.5rem] dark:text-white leading-[120%] tracking-[0] uppercase md:text-center">
                        Transform Your Body with Our Dynamic{" "}
                        <span className="font-baloo font-bold text-xl md:text-[2.5rem] leading-[120%] tracking-[0] uppercase text-center text-[#FF4100]">
                            Upcoming Workouts
                        </span>
                    </h2>
                    <div className="mt-12 text-center">
                        <EmptyCardSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative flex flex-col bg-[url('/images/workout-backgorund.jpg')] items-center bg-cover bg-center before:content-[''] before:absolute before:top-5 md:before:top-[3.56rem] before:w-full before:h-103.5 before:bg-[#F3F3F4]/60 dark:before:bg-[#242424]/60 before:backdrop-blur-md before:z-0 pb-10 px-4 pt-6 md:pt-1">
            <div className="relative w-full flex flex-col md:items-center">
                <LogoSection title="Workouts" subTitle="fitness class" />
                <h2 className="font-baloo w-[21.4rem] md:w-160 font-bold mt-4 md:mt-6 text-xl md:text-[2.5rem] dark:text-white leading-[120%] tracking-[0] uppercase md:text-center">
                    Transform Your Body with Our Dynamic{" "}
                    <span className="font-baloo font-bold text-xl md:text-[2.5rem] leading-[120%] tracking-[0] uppercase text-center text-[#FF4100]">
                        Upcoming Workouts
                    </span>
                </h2>

                <div className="w-full max-w-7xl">
                    {/* Muscle Group Tabs */}
                    <MuscleGroupTabs groups={groups} selected={selectedGroup} onSelect={setSelectedGroup} />

                    {/* Error State */}
                    {errorMessage && (
                        <div className="p-4 mb-6 bg-red-500/10 border border-red-500 rounded-lg">
                            <p className="text-red-500">{errorMessage}</p>
                        </div>
                    )}

                    {/* Loading State for Muscle Details */}
                    {detailsLoading ? (
                        <div className="mt-8">
                            <EmptyCardSkeleton />
                        </div>
                    ) : (
                        <div className="mt-8">
                            <GenericCarousel items={muscleItems} pageSize={3} buttonText="Explore" onItemClick={handleMuscleClick} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
