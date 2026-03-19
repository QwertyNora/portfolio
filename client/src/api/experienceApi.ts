import axiosInstance from "./axiosInstance";
import type { Experience } from "../types/experience";

export const getExperiences = async (): Promise<Experience[]> => {
    const response = await axiosInstance.get("/experience");
    return response.data;
};

export const getExperienceById = async (id: number): Promise<Experience> => {
    const response = await axiosInstance.get(`/experience/${id}`);
    return response.data;
};
