export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    aboutMarkdown: string;
    technologies: string[];
    gitHubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    imageUrls?: string[];
    isFeatured: boolean;
}
