import axiosInstance from "./axiosInstance";
import type { Project } from "../types/project";

const normalizeImages = (project: Project): Project => ({
    ...project,
    imageUrls: project.imageUrls?.length ? project.imageUrls : project.imageUrl ? [project.imageUrl] : [],
});

export const getProjects = async (): Promise<Project[]> => {
    const response = await axiosInstance.get("/projects");
    return response.data.map(normalizeImages);
};

export const getProjectById = async (id: number): Promise<Project> => {
    const response = await axiosInstance.get(`/projects/${id}`);
    return normalizeImages(response.data);
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
    const response = await axiosInstance.get(`/projects/${slug}`);
    return normalizeImages(response.data);
};
