import type { ExperienceItem } from "../types/experience";
import Badge from "./ui/Badge";

type ExperienceCardProps = {
    experience: ExperienceItem;
    isLast: boolean;
};

const formatDate = (e: ExperienceItem) => {
    if (e.isCurrentPosition) return `${e.startDate} - Current`;
    if (e.endDate) return `${e.startDate} - ${e.endDate}`;
    return e.startDate;
};

const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => (
    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 ${!isLast ? "border-b border-(--border)" : ""}`}>
        {/* Date + type */}
        <div className="sm:w-36 shrink-0">
            <p className="font-mono text-[12px] text-(--text-muted) leading-relaxed">{formatDate(experience)}</p>
            <Badge label={experience.type} />
        </div>

        {/* Content */}
        <div className="flex-1">
            <h3 className="text-[14.5px] font-medium text-(--text-primary) mb-1">{experience.role}</h3>
            <p className="text-[13px] text-(--accent) mb-2">{experience.company}</p>
            <p className="text-[13px] text-(--text-secondary) leading-[1.65]">{experience.description}</p>
        </div>
    </div>
);

export default ExperienceCard;
