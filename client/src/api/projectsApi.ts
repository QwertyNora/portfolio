import axiosInstance from "./axiosInstance";
import type { Project } from "../types/project";

export const getProjects = async (): Promise<Project[]> => {
    const response = await axiosInstance.get("/projects");
    return response.data;
};

export const getProjectById = async (id: number): Promise<Project> => {
    const response = await axiosInstance.get(`/projects/${id}`);
    return response.data;
};
