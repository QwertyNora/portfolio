import { useState, useEffect } from "react";
import { getProjects } from "../api/projectsApi";
import type { Project } from "../types/project";

const Home = () => {
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
        <div>
            {/* Hero */}
            <section>
                <h1>Hi, I'm Nora 👋</h1>
                <p>Full-stack developer with a passion for clean code and great user experiences.</p>
            </section>

            {/* Om mig */}
            <section>
                <h2>About me</h2>
                <p>
                    I'm currently studying at SALT and building modern web applications with .NET and React. I enjoy
                    solving problems and learning new things.
                </p>
            </section>

            {/* Featured Projects */}
            <section>
                <h2>Featured projects</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    featuredProjects.map(p => (
                        <div key={p.id}>
                            <h3>{p.title}</h3>
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
                        </div>
                    ))
                )}
            </section>

            {/* Kontakt CTA */}
            <section>
                <h2>Want to work together?</h2>
                <p>I'm always open to new opportunities and exciting projects.</p>
                <a href="/contact">Contact me</a>
            </section>
        </div>
    );
};

export default Home;
