export interface MuscleGroup {
    _id: string;
    name: string;
}

export interface MusclesResponse {
    message: string;
    musclesGroup: MuscleGroup[];
}

export interface Muscle {
    _id: string;
    name: string;
    image: string;
}

export interface MuscleGroupDetailsResponse {
    message: string;
    muscleGroup: MuscleGroup;
    muscles: Muscle[];
}

export interface ErrorResponse {
    message: string;
}

export interface ApiError {
    message: string;
    statusCode?: number;
    data?: ErrorResponse;
}
