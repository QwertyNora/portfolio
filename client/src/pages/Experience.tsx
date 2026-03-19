import { useState, useEffect } from "react";
import { getExperiences } from "../api/experienceApi";
import type { ExperienceItem } from "../types/experience";

const Experience = () => {
    const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const data = await getExperiences();
                setExperiences(data);
            } catch {
                setError("Could not load experiences");
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Experiences</h1>
            {experiences.map(e => (
                <div key={e.id}>
                    <h2>{e.role}</h2>
                    <p>{e.company}</p>
                    <p>{e.description}</p>
                    <p>
                        {e.startDate}
                        {e.isCurrentPosition ? " – Current" : e.endDate ? ` – ${e.endDate}` : ""}
                    </p>
                    <span>{e.type}</span>
                </div>
            ))}
        </div>
    );
};

export default Experience;
