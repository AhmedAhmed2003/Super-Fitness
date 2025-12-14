export interface MealCategory {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface MealCategoriesResponse {
    categories: MealCategory[];
}

export interface ErrorResponse {
    message?: string;
}

export interface ApiError {
    message: string;
    statusCode?: number;
    data?: ErrorResponse;
}
