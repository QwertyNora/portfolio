import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            style={{
                background: "var(--bg-primary)",
                borderBottom: "0.5px solid var(--border)",
                position: "sticky",
                top: 0,
                zIndex: 100,
                padding: "0 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "56px",
            }}
        >
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--accent)",
                }}
            >
                nora.dev
            </span>

            <div style={{ display: "flex", gap: "2rem" }}>
                {["home", "projects", "experience", "contact"].map(section => (
                    <button
                        key={section}
                        onClick={() => scrollTo(section)}
                        style={{
                            background: "none",
                            border: "none",
                            color: "var(--text-secondary)",
                            fontSize: "14px",
                            cursor: "pointer",
                            padding: "4px 0",
                            fontFamily: "var(--font-sans)",
                        }}
                    >
                        {section}
                    </button>
                ))}
            </div>

            <button
                onClick={toggleTheme}
                style={{
                    background: "var(--bg-secondary)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    fontFamily: "var(--font-sans)",
                }}
            >
                <span>{isDark ? "☀️" : "🌙"}</span>
                <span>{isDark ? "light" : "dark"}</span>
            </button>
        </nav>
    );
};

export default Navbar;
