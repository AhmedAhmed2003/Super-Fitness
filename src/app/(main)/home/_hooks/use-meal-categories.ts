import type { CarouselItem } from "@app/(main)/home/_components/generic-carousel";
<<<<<<< HEAD
import { fetchMealByCategory, fetchMealCategories } from "@lib/api/healthy.api";
import type { ApiError, MealByCategoryData, MealCategoriesResponse } from "@lib/types/healthy.types";
=======
import { fetchMealCategories } from "@lib/api/healthy.api";
import type { ApiError, MealCategoriesResponse } from "@lib/types/features/healthy.types";
>>>>>>> origin/feat/muscle-page
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function useMealCategories() {
    // Get meal categories
    const { data, isLoading, error } = useQuery<MealCategoriesResponse, ApiError>({
        queryKey: ["mealCategories"],
        queryFn: fetchMealCategories,
        staleTime: Infinity,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });

    // Transform data
    const mealItems: CarouselItem[] = useMemo(
        () =>
            data?.categories?.map((cat) => ({
                id: cat.strCategory,
                name: cat.strCategory,
                image: cat.strCategoryThumb,
                description: cat.strCategoryDescription,
            })) ?? [],
        [data],
    );

    // Return
    return {
        mealItems,
        isLoading,
        error: error as ApiError | null,
    };
}

export function useMealsByCategory(category?: string) {
    const {
        data,
        isLoading,
        error,
    } =  useQuery<MealByCategoryData, ApiError>({
        queryKey: ["mealsByCategory", category],
        queryFn: () =>
            fetchMealByCategory({
                category: category!,
            }),
        enabled: !!category,
        retry: 2,
    });

    return {
        meals: data?.meals ?? [],
        isLoading,
        error: error as ApiError | null,
    };
}