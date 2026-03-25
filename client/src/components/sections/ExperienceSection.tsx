import { useExperiences } from "../../hooks/useExperiences";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
    const { experiences, loading } = useExperiences();

    return (
        <section id="experience" className="mx-auto max-w-230 px-6 py-14 border-t border-(--border)">
            <h2 className="text-[22px] font-normal text-(--text-primary) mb-7">Experience</h2>

            {loading ? (
                <p className="font-mono text-[13px] text-(--text-muted)">// loading...</p>
            ) : (
                <div className="ml-1.5">
                    {experiences.map(e => (
                        <ExperienceCard key={e.id} experience={e} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ExperienceSection;
