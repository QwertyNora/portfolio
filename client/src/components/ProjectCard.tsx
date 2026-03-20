import type { Project } from "../types/project";
import BrowserCard from "./ui/BrowserCard";
import Badge from "./ui/Badge";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const filename = `${project.title.toLowerCase().replace(/\s+/g, "-")}.sln`;

    return (
        <BrowserCard filename={filename} dotSize="sm" hoverable>
            <div className="p-5">
                <h3 className="text-[14.5px] font-medium text-(--text-primary) mb-1.5">{project.title}</h3>
                <p className="text-[13px] text-(--text-secondary) leading-[1.65] mb-4">{project.description}</p>
                <div className={`flex flex-wrap gap-1.5 ${project.gitHubUrl ? "mb-4" : ""}`}>
                    {project.technologies.map(tech => (
                        <Badge key={tech} label={tech} />
                    ))}
                </div>
                {project.gitHubUrl && (
                    <a
                        href={project.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-(--accent) font-mono no-underline hover:underline"
                    >
                        → GitHub
                    </a>
                )}
            </div>
        </BrowserCard>
    );
};

export default ProjectCard;
