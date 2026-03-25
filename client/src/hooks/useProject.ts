import { useState, useEffect } from "react";
import { getProjectBySlug } from "../api/projectsApi";
import type { Project } from "../types/project";

export const useProject = (slug: string) => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getProjectBySlug(slug);
                setProject(data);
            } catch {
                setError("Could not load project");
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [slug]);

    return { project, loading, error };
};
