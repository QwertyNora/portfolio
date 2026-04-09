import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../types/project";
import BrowserCard from "./ui/BrowserCard";
import Badge from "./ui/Badge";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const navigate = useNavigate();
    const filename = `${project.slug}.sln`;
    const images = project.imageUrls ?? [];
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const previewImage = images[activeImageIndex];

    useEffect(() => {
        if (activeImageIndex > images.length - 1) {
            setActiveImageIndex(0);
        }
    }, [images.length, activeImageIndex]);

    return (
        <BrowserCard filename={filename} dotSize="sm" hoverable>
            <div className="flex flex-col sm:flex-row">
                {/* Image & Thumbnails */}
                <div className="w-full sm:w-64 shrink-0 border-b sm:border-b-0 sm:border-r border-(--border)">
                    <div className="relative h-48 overflow-hidden bg-(--bg-tertiary) flex items-center justify-center text-(--text-muted) font-mono text-[11px]">
                        {previewImage ? (
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={`${project.slug}-${activeImageIndex}`}
                                    className="relative h-full w-full"
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.985 }}
                                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <img
                                        src={previewImage}
                                        alt=""
                                        aria-hidden="true"
                                        className="absolute inset-0 h-full w-full object-cover scale-110 blur-xl opacity-35"
                                    />
                                    <div className="absolute inset-0 bg-[rgba(2,6,23,0.18)]" />
                                    <img
                                        src={previewImage}
                                        alt={project.title}
                                        className="relative z-10 h-full w-full object-contain p-2"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            "// no image"
                        )}
                    </div>
                    <div className="flex gap-1.5 p-2 border-t border-(--border) bg-(--bg-tertiary) overflow-x-auto">
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <button
                                    key={`${project.slug}-thumb-${index}`}
                                    type="button"
                                    onClick={() => setActiveImageIndex(index)}
                                    className={`shrink-0 rounded border overflow-hidden transition-all cursor-pointer ${activeImageIndex === index ? "border-(--accent) ring-1 ring-(--accent)" : "border-(--border) hover:border-(--accent)"}`}
                                    aria-label={`Show ${project.title} image ${index + 1}`}
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} thumbnail ${index + 1}`}
                                        className="w-8 h-6 bg-(--bg-primary) object-cover"
                                    />
                                </button>
                            ))
                        ) : (
                            <div className="w-full font-mono text-[10px] text-(--text-muted)">// no previews</div>
                        )}
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
