import { useState, useEffect } from "react";
import { getProjects } from "../api/projectsApi";
import type { Project } from "../types/project";

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch {
                setError("Could not load projects");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Projects</h1>
            {projects.map(p => (
                <div key={p.id}>
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                    <div>
                        {p.technologies.map(tech => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                    {p.gitHubUrl && (
                        <a href={p.gitHubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}
                    {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Projects;
