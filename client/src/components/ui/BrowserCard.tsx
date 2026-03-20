import type { ReactNode } from "react";

type BrowserCardProps = {
    filename: string;
    children: ReactNode;
    dotSize?: "sm" | "md";
};

const BrowserCard = ({ filename, children, dotSize = "sm" }: BrowserCardProps) => {
    const dot = dotSize === "md" ? "w-2.25 h-2.25" : "w-1.5 h-1.5";

    return (
        <div className="bg-(--bg-secondary) border border-(--border) rounded-[10px] overflow-hidden">
            <div className="bg-(--bg-tertiary) border-b border-(--border) px-4 py-2.5 flex items-center gap-1.5">
                <span className={`${dot} rounded-full bg-[#ff5f57] inline-block`} />
                <span className={`${dot} rounded-full bg-[#febc2e] inline-block`} />
                <span className={`${dot} rounded-full bg-[#28c840] inline-block`} />
                <span className="ml-2 font-mono text-[11px] text-(--text-muted)">{filename}</span>
            </div>
            {children}
        </div>
    );
};

export default BrowserCard;
