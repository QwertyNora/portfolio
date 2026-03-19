export interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    description: string;
    startDate: string;
    endDate?: string;
    isCurrentPosition: boolean;
    type: "Work" | "Education";
}
