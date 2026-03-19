export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export interface AdminContactMessage {
    id: number;
    name: string;
    email: string;
    message: string;
    sentAt: string;
    isRead: boolean;
}
