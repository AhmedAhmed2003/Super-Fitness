declare type MuscleClass = {
    _id: string;
    name: string;
};

declare type MusclesGroupesResponse = {
    message: string;
    musclesGroup: MuscleClass[];
};

declare type muscles = {
    _id: string;
    name: string;
    image: string;
};

declare interface MuscleByIdResponse {
    message: string;
    muscleGroup: MuscleClass;
    muscles: muscles[];
}
