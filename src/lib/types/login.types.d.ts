export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    age: number;
    weight: number;
    height: number;
    activityLevel: string;
    goal: string;
    photo: string;
    createdAt: string;
}

export interface LoginResponse {
    message: string;
    user: User;
    token: string;
}

export interface LoginError {
    error: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}
