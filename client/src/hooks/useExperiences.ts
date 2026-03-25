import { useState, useEffect } from "react";
import { getExperiences } from "../api/experienceApi";
import type { ExperienceItem } from "../types/experience";

export const useExperiences = () => {
    const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getExperiences();
                setExperiences(data);
            } catch {
                setError("Could not load experiences");
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    return { experiences, loading, error };
};
