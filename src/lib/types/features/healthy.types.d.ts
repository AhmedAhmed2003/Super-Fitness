export interface MealCategory {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface MealCategoriesResponse {
    categories: MealCategory[];
}

declare interface ErrorResponse {
    message?: string;
}

declare interface ApiError {
    message: string;
    statusCode?: number;
    data?: ErrorResponse | MealsError;
}

export interface SingleMealDetalie {
    idMeal: string;
    strMeal: string;
    strMealAlternate: string;
    strCategory: string;
    strArea: American;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    [key: `strIngredient${number}`]: string | undefined;
    [key: `strMeasure${number}`]: string | undefined;
    strSource: string;
    strImageSource: null | string;
    strCreativeCommonsConfirmed: null | string;
    dateModified: null | string;
}
export interface SingleMeal {
    meals: SingleMealDetalie[];
}
export interface MealByCategory {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface MealByCategoryData {
    meals: MealByCategory[];
}

export interface MealsError {
    meals?: string | null;
}
