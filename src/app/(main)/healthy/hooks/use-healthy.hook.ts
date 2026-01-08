import { fetchMealByCategory, fetchSingleMeal } from "@lib/api/healthy.api";
import type { ApiError, MealByCategoryData, SingleMeal } from "@lib/types/features/healthy.types";
import { useQuery } from "@tanstack/react-query";

export function useSingleMeal({ id }: { id: string }) {
    const {
        data: mealData,
        error: mealError,
        isLoading: mealLoading,
    } = useQuery<SingleMeal, ApiError>({
        queryKey: ["meal", id],
        queryFn: () => fetchSingleMeal({ id }),
        staleTime: 1000 * 5,
        retry: 3,
        enabled: !!id,
        retryDelay: 3000,
    });
    return { mealData, mealError, mealLoading };
}

export function UseMealByCategory({ category }: { category: string }) {
    const {
        data: mealByCategoryData,
        error: mealByCategoryError,
        isLoading: mealByCategoryLoading,
    } = useQuery<MealByCategoryData, ApiError>({
        queryKey: ["Meal-category", category],
        queryFn: () => fetchMealByCategory({ category }),
        staleTime: 1000 * 5,
        retry: 3,
        enabled: !!category,
        retryDelay: 3000,
    });
    return { mealByCategoryData, mealByCategoryError, mealByCategoryLoading };
}
