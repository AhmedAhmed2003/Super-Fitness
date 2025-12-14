import type { ErrorResponse, MusclesResponse, MuscleGroupDetailsResponse, ApiError } from "@lib/types/workout.types";
import axios, { type AxiosError } from "axios";

const BASE_URL = "https://fitness.elevateegy.com/api/v1";

// Create axios instance with default config
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // 10 seconds timeout
    headers: {
        "Content-Type": "application/json",
    },
});

// Centralized error handler
function handleApiError(error: unknown, defaultMessage: string): never {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        const errData = axiosError.response?.data;

        const apiError: ApiError = {
            message: errData?.message || axiosError.message || defaultMessage,
            statusCode: axiosError.response?.status,
            data: errData,
        };
        throw apiError;
    }

    throw {
        message: `Network error: ${defaultMessage}`,
    } as ApiError;
}

export async function fetchMuscleGroups(): Promise<MusclesResponse> {
    try {
        const { data } = await apiClient.get<MusclesResponse>("/muscles");
        return data;
    } catch (error) {
        handleApiError(error, "Failed to fetch muscle groups");
    }
}

export async function fetchMuscleGroupById(id: string): Promise<MuscleGroupDetailsResponse> {
    try {
        const { data } = await apiClient.get<MuscleGroupDetailsResponse>(`/musclesGroup/${id}`);
        return data;
    } catch (error) {
        handleApiError(error, "Failed to fetch muscle group details");
    }
}
