type BadgeProps = {
    label: string;
};

const Badge = ({ label }: BadgeProps) => (
    <span className="bg-(--accent-bg) text-(--accent) text-[11px] px-2 py-0.5 rounded font-mono">{label}</span>
);

export default Badge;
