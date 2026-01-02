import type {
    ApiError,
    ErrorResponse,
    MealByCategoryData,
    MealCategoriesResponse,
    MealsError,
    SingleMeal,
} from "@lib/types/features/healthy.types";
import axios from "axios";

// Constants
const MEAL_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function fetchMealCategories(): Promise<MealCategoriesResponse> {
    try {
        // Fetch meal categories
        const { data } = await axios.get<MealCategoriesResponse>(`${MEAL_BASE_URL}/categories.php`);

        return data;
    } catch (error: unknown) {
        // Handle error
        if (axios.isAxiosError(error)) {
            const errData: ErrorResponse | undefined = error.response?.data;
            const apiError: ApiError = {
                message: errData?.message || error.message || "Failed to fetch meal categories",
                statusCode: error.response?.status,
                data: errData,
            };
            throw apiError;
        }
        throw { message: "Network error: Unable to fetch meal categories" } as ApiError;
    }
}

export async function fetchSingleMeal({ id }: { id: string }): Promise<SingleMeal> {
    try {
        // Fetch meal categories
        const { data } = await axios.get<SingleMeal>(`${MEAL_BASE_URL}/lookup.php?i=${id}`);

        return data;
    } catch (error: unknown) {
        // Handle error
        if (axios.isAxiosError(error)) {
            const errData: MealsError | undefined = error.response?.data;
            const apiError: ApiError = {
                message: errData?.meals || error.message || "Failed to fetch meal categories",
                statusCode: error.response?.status,
                data: errData,
            };

            throw apiError;
        }
        throw { message: "Network error: Unable to fetch meal categories" } as ApiError;
    }
}

export async function fetchMealByCategory({ category }: { category: string }): Promise<MealByCategoryData> {
    try {
        const { data } = await axios.get<MealByCategoryData>(`${MEAL_BASE_URL}/filter.php?c=${category}`);

        return data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errData: MealsError | undefined = error.response?.data;
            const apiError: ApiError = {
                message: errData?.meals || error.message || "Failed to fetch meal categories",
                statusCode: error.response?.status,
                data: errData,
            };
            throw apiError;
        }
        throw { message: "Network error: Unable to fetch meal categories" } as ApiError;
    }
}
