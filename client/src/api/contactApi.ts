import axiosInstance from "./axiosInstance";
import type { ContactMessage, AdminContactMessage } from "../types/contact";

export const sendContactMessage = async (message: ContactMessage): Promise<void> => {
    await axiosInstance.post("/contact", message);
};

export const getContactMessages = async (): Promise<AdminContactMessage[]> => {
    const response = await axiosInstance.get("/contact");
    return response.data;
};

export const markMessageAsRead = async (id: number): Promise<void> => {
    await axiosInstance.patch(`/contact/${id}/read`);
};
