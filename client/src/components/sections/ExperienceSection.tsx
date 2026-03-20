import { useState, useEffect } from "react";
import { getExperiences } from "../../api/experienceApi";
import type { ExperienceItem } from "../../types/experience";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
    const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const data = await getExperiences();
                setExperiences(data);
            } catch {
                console.error("Could not load experiences");
            } finally {
                setLoading(false);
            }
        };
        fetchExperiences();
    }, []);

    return (
        <section id="experience" className="mx-auto max-w-230 px-6 py-14 border-t border-(--border)">
            <h2 className="text-[22px] font-normal text-(--text-primary) mb-7">Experience</h2>

            {loading ? (
                <p className="font-mono text-[13px] text-(--text-muted)">// loading...</p>
            ) : (
                <div className="flex flex-col">
                    {experiences.map((e, index) => (
                        <ExperienceCard key={e.id} experience={e} isLast={index === experiences.length - 1} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ExperienceSection;
