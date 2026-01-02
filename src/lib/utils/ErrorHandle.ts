import type { ApiError, ErrorResponse } from "@lib/types/features/healthy.types";
import axios from "axios";

export default function ErrorHandle(error: unknown) {
    if (axios.isAxiosError(error)) {
        const errorData: ErrorResponse | undefined = error.request?.data;

        const apiError: ApiError = {
            message: errorData?.message || error.message || "Failed to fetch muscle by id",
            statusCode: error.response?.status,
            data: errorData,
        };
        return apiError;
    }
    return error;
}
