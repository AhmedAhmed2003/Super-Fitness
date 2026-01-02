import ErrorHandle from "@lib/utils/ErrorHandle";
import axios from "axios";

const MUSCLE_BASE_URL = "https://fitness.elevateegy.com/api/v1";

export async function fetchClassesGroup(lang: string): Promise<MusclesGroupesResponse> {
    try {
        const { data } = await axios.get(`${MUSCLE_BASE_URL}/muscles`, {
            headers: {
                "accept-language": lang || "en",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (error: unknown) {
        throw ErrorHandle(error);
    }
}

export async function fetchMuscleById(id: string, lang: string): Promise<MuscleByIdResponse> {
    try {
        const { data } = await axios.get(`${MUSCLE_BASE_URL}/musclesGroup/${id}`, {
            headers: {
                "accept-language": lang || "en",
            },
        });
        return data;
    } catch (error: unknown) {
        throw ErrorHandle(error);
    }
}
