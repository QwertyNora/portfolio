import { useState, useEffect } from "react";
import { getProjects } from "../api/projectsApi";
import type { Project } from "../types/project";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch {
                setError("Could not load projects");
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    return { projects, loading, error };
};
