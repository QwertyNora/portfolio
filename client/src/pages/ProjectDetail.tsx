import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useProject } from "../hooks/useProject";

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { project, loading, error } = useProject(slug!);
    const images = project?.imageUrls ?? [];
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const heroImage = images[activeImageIndex];

    useEffect(() => {
        setActiveImageIndex(0);
    }, [project?.slug]);

    if (loading)
        return (
            <div className="mx-auto max-w-230 px-6 py-14">
                <p className="font-mono text-[13px] text-(--text-muted)">// loading...</p>
            </div>
        );

    if (error || !project)
        return (
            <div className="mx-auto max-w-230 px-6 py-14">
                <p className="font-mono text-[13px] text-red-400">// project not found</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 font-mono text-[13px] text-(--accent) bg-transparent border-none cursor-pointer"
                >
                    ← back to home
                </button>
            </div>
        );

    return (
        <div className="bg-(--bg-primary) text-(--text-primary) min-h-screen">
            <div className="mx-auto max-w-230 px-6 py-14">
                {/* Back */}
                <button
                    onClick={() => navigate("/")}
                    className="font-mono text-[13px] text-(--text-muted) bg-transparent border-none cursor-pointer mb-8 hover:text-(--accent) transition-colors"
                >
                    ← back
                </button>

                {/* Header */}
                <div className="mb-10">
                    <p className="font-mono text-[12px] text-(--accent) mb-2">// {project.slug}</p>
                    <h1 className="text-[clamp(28px,4vw,40px)] font-normal text-(--text-primary) mb-4">
                        {project.title}
                    </h1>
                    <p className="text-[15px] text-(--text-secondary) leading-[1.75] max-w-2xl">
                        {project.description}
                    </p>
                </div>

                {heroImage && (
                    <div className="mb-10 border border-(--border) rounded-[10px] overflow-hidden bg-(--bg-tertiary)">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.img
                                key={`${project.slug}-${activeImageIndex}`}
                                src={heroImage}
                                alt={project.title}
                                className="w-full h-auto max-h-[440px] object-cover"
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.985 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </AnimatePresence>
                    </div>
                )}

                {images.length > 0 && (
                    <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {images.map((image, index) => (
                            <button
                                key={`${project.slug}-image-${index}`}
                                type="button"
                                onClick={() => setActiveImageIndex(index)}
                                className={`overflow-hidden rounded-[10px] border bg-(--bg-tertiary) cursor-pointer transition-all ${activeImageIndex === index ? "border-(--accent) ring-1 ring-(--accent)" : "border-(--border) hover:border-(--accent)"}`}
                                aria-label={`Show ${project.title} image ${index + 1}`}
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="h-40 w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map(tech => (
                        <span
                            key={tech}
                            className="font-mono text-[12px] bg-(--accent-bg) text-(--accent) px-3 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mb-14 pb-10 border-b border-(--border)">
                    {project.gitHubUrl && (
                        <a
                            href={project.gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[13px] text-(--accent) no-underline hover:underline"
                        >
                            → GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[13px] text-(--accent) no-underline hover:underline"
                        >
                            → Live demo
                        </a>
                    )}
                </div>

                {/* Placeholder för detaljerat innehåll */}
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-(--bg-secondary) border border-(--border) rounded-[10px] p-6">
                        <h2 className="text-[16px] font-medium text-(--text-primary) mb-3">About the project</h2>
                        <article className="markdown-readme">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {project.aboutMarkdown || "More details coming soon..."}
                            </ReactMarkdown>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
