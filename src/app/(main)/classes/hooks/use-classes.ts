import { fetchClassesGroup, fetchMuscleById } from "../api/classes.api";
import { useQuery } from "@tanstack/react-query";

export function useAllMusclesGroups(lang: string = "en") {
    const { data, isLoading, error } = useQuery({
        queryKey: ["Muscles-groups", lang],
        queryFn: () => fetchClassesGroup(lang),
        retry: 3,
        staleTime: 1000 * 60 * 5,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
    return { data, isLoading, error };
}

export function useMuscleById(id: string, lang: string = "en") {
    const {
        data: muscleByID,
        error: muscleByIdError,
        isLoading: muscleByIdLoading,
    } = useQuery({
        queryKey: ["muscle-id", id, lang],
        queryFn: () => fetchMuscleById(id, lang),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
    return { muscleByID, muscleByIdError, muscleByIdLoading };
}
