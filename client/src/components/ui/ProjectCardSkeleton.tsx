const ProjectCardSkeleton = () => (
    <div className="bg-(--bg-secondary) border border-(--border) rounded-[10px] overflow-hidden">
        {/* Browser header — identisk med ProjectCard */}
        <div className="bg-(--bg-tertiary) border-b border-(--border) px-3 py-2.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57] inline-block" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e] inline-block" />
            <span className="w-2 h-2 rounded-full bg-[#28c840] inline-block" />
            <div className="ml-1.5 h-2 w-20 rounded bg-(--border) animate-pulse" />
        </div>

        {/* Card body — samma padding som ProjectCard */}
        <div className="p-5">
            <div className="h-3 w-2/5 rounded bg-(--border) animate-pulse mb-3" />
            <div className="h-2.5 w-full rounded bg-(--border) animate-pulse mb-2" />
            <div className="h-2.5 w-3/4 rounded bg-(--border) animate-pulse mb-4" />

            {/* Badges */}
            <div className="flex gap-1.5 mb-4">
                <div className="h-5 w-10 rounded bg-(--border) animate-pulse" />
                <div className="h-5 w-12 rounded bg-(--border) animate-pulse" />
                <div className="h-5 w-10 rounded bg-(--border) animate-pulse" />
            </div>

            {/* Terminal cursor */}
            <div className="flex items-center gap-1.5">
                <span className="font-mono text-[12px] text-(--accent)">❯</span>
                <div className="h-3.5 w-1.5 rounded-sm bg-(--accent) animate-pulse" />
            </div>
        </div>
    </div>
);

export default ProjectCardSkeleton;
