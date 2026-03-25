import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "../ProjectCard";
import ProjectCardSkeleton from "../ui/ProjectCardSkeleton";

const ProjectsSection = () => {
    const { projects, loading } = useProjects();
    const featuredProjects = projects.filter(p => p.isFeatured);

    return (
        <section id="projects" className="mx-auto max-w-230 px-6 py-14 border-t border-(--border)">
            <h2 className="text-[22px] font-normal text-(--text-primary) mb-7">Featured projects</h2>

            <div className="flex flex-col gap-12">
                {loading
                    ? Array.from({ length: 2 }).map((_, i) => <ProjectCardSkeleton key={i} />)
                    : featuredProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    );
};

export default ProjectsSection;
