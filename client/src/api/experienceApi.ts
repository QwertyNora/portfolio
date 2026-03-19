import axiosInstance from "./axiosInstance";
import type { ExperienceItem } from "../types/experience";

export const getExperiences = async (): Promise<ExperienceItem[]> => {
    const response = await axiosInstance.get("/experience");
    return response.data;
};

export const getExperienceById = async (id: number): Promise<ExperienceItem> => {
    const response = await axiosInstance.get(`/experience/${id}`);
    return response.data;
};
