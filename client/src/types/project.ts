export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    gitHubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    isFeatured: boolean;
}
