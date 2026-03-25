import { useNavigate } from "react-router-dom";
import type { Project } from "../types/project";
import BrowserCard from "./ui/BrowserCard";
import Badge from "./ui/Badge";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const navigate = useNavigate();
    const filename = `${project.slug}.sln`;

    return (
        <BrowserCard filename={filename} dotSize="sm" hoverable>
            <div className="flex flex-col sm:flex-row">
                {/* Image & Thumbnails */}
                <div className="w-full sm:w-64 shrink-0 border-b sm:border-b-0 sm:border-r border-(--border)">
                    <div className="h-48 bg-(--bg-tertiary) flex items-center justify-center text-(--text-muted) font-mono text-[11px]">
                        {project.imageUrl ? (
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                            "// no image"
                        )}
                    </div>
                    <div className="flex gap-1.5 p-2 border-t border-(--border) bg-(--bg-tertiary)">
                        <div className="w-8 h-6 rounded border border-(--accent) bg-(--bg-primary)" />
                        <div className="w-8 h-6 rounded border border-(--border) bg-(--bg-primary)" />
                        <div className="w-8 h-6 rounded border border-(--border) bg-(--bg-primary)" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-3">
                        <h3 className="text-[15px] font-medium text-(--text-primary)">{project.title}</h3>
                        <button
                            onClick={() => navigate(`/projects/${project.slug}`)}
                            className="font-mono text-[11px] text-(--accent) border border-[rgba(167,139,250,0.3)] rounded px-2 py-1 bg-transparent cursor-pointer hover:border-(--accent) whitespace-nowrap shrink-0"
                        >
                            View project →
                        </button>
                    </div>
                    <p className="text-[13px] text-(--text-secondary) leading-[1.65] flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map(tech => (
                            <Badge key={tech} label={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </BrowserCard>
    );
};

export default ProjectCard;
