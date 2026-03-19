export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    gitHubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    isFeatured: boolean;
}
