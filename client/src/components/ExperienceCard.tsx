import type { ExperienceItem } from "../types/experience";

type ExperienceCardProps = {
    experience: ExperienceItem;
};

const formatDate = (e: ExperienceItem) => {
    if (e.isCurrentPosition) return `${e.startDate} – Present`;
    if (e.endDate) return `${e.startDate} – ${e.endDate}`;
    return e.startDate;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
    <div className="relative pl-8 pb-8 last:pb-0 border-l border-(--border)">
        <div
            className={`absolute -left-1.25 top-0.75 w-2.5 h-2.5 rounded-full border-2 border-(--accent) ${experience.isCurrentPosition ? "bg-(--accent)" : "bg-(--bg-primary)"}`}
        />

        <p className="font-mono text-[11px] text-(--text-muted) mb-1">{formatDate(experience)}</p>
        <h3 className="text-[14.5px] font-medium text-(--text-primary) mb-1">{experience.role}</h3>
        <p className="text-[13px] text-(--accent) mb-2">{experience.company}</p>
        <p className="text-[13px] text-(--text-secondary) leading-[1.65] mb-2">{experience.description}</p>
        <span className="font-mono text-[11px] bg-(--accent-bg) text-(--accent) px-2 py-0.5 rounded">
            {experience.type}
        </span>
    </div>
);

export default ExperienceCard;
