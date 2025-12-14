import type { ApiError, ErrorResponse, MealCategoriesResponse } from "@lib/types/healthy.types";
import axios from "axios";

const MEAL_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function fetchMealCategories(): Promise<MealCategoriesResponse> {
    try {
        const { data } = await axios.get<MealCategoriesResponse>(`${MEAL_BASE_URL}/categories.php`);
        return data;
    } catch (error: unknown) {
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
