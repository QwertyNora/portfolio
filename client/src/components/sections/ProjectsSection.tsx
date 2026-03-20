import { useState, useEffect } from "react";
import { getProjects } from "../../api/projectsApi";
import type { Project } from "../../types/project";
import ProjectCard from "../ProjectCard";
import ProjectCardSkeleton from "../ui/ProjectCardSkeleton";

const ProjectsSection = () => {
    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setFeaturedProjects(data.filter(p => p.isFeatured));
            } catch {
                console.error("Could not load projects");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="mx-auto max-w-230 px-6 py-14 border-t border-(--border)">
            <h2 className="text-[22px] font-normal text-(--text-primary) mb-7">Featured projects</h2>

            {loading ? (
                <p className="font-mono text-[13px] text-(--text-muted)">// loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {loading
                        ? Array.from({ length: 2 }).map((_, i) => <ProjectCardSkeleton key={i} />)
                        : featuredProjects.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
