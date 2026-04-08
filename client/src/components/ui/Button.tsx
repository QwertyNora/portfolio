type ButtonVariant = "primary" | "outline";

type ButtonProps = {
    variant?: ButtonVariant;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit";
    children: React.ReactNode;
};

const Button = ({ variant = "primary", onClick, disabled, type = "button", children }: ButtonProps) => {
    const base =
        "relative font-mono text-[13px] font-medium px-6 py-2.5 cursor-pointer border-none transition-all duration-200 group";

    const styles = {
        primary: "bg-(--accent) text-(--bg-primary) disabled:opacity-50 disabled:cursor-not-allowed",
        outline: "bg-transparent text-(--accent)",
    };

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles[variant]}`}>
            {/* brackets */}
            <span className="absolute -top-0.75 -left-0.75 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-(--accent) opacity-60 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5 group-hover:opacity-100" />
            <span className="absolute -top-0.75 -right-0.75 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-(--accent) opacity-60 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5 group-hover:opacity-100" />
            <span className="absolute -bottom-0.75 -left-0.75 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-(--accent) opacity-60 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5 group-hover:opacity-100" />
            <span className="absolute -bottom-0.75 -right-0.75 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-(--accent) opacity-60 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5 group-hover:opacity-100" />

            {/* hover glow */}
            {variant === "primary" && (
                <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm"
                    style={{ boxShadow: "0 0 16px 2px rgba(124,58,237,0.4)" }}
                />
            )}

            {/* text with letter spacing */}
            <span className="relative tracking-normal group-hover:tracking-wider transition-all duration-200">
                {children}
            </span>
        </button>
    );
};

export default Button;
