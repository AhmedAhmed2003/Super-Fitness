import { fetchMuscleGroups, fetchMuscleGroupById } from "@lib/api/workout.api";
import type { MusclesResponse, MuscleGroupDetailsResponse, ApiError } from "@lib/types/features/workout.types";
import { useQuery } from "@tanstack/react-query";

export function useMuscleGroups() {
    // Get muscle groups
    return useQuery<MusclesResponse, ApiError>({
        queryKey: ["muscleGroups"],
        queryFn: fetchMuscleGroups,
        staleTime: Infinity,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
}

export function useMuscleGroup(id: string) {
    // Get muscle group details by id
    return useQuery<MuscleGroupDetailsResponse, ApiError>({
        queryKey: ["muscleGroup", id],
        queryFn: () => fetchMuscleGroupById(id),
        enabled: !!id,
        staleTime: Infinity,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
}
