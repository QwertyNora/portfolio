import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    const navLinks = ["home", "projects", "experience", "contact"];

    return (
        <nav className="sticky top-0 z-100 bg-(--bg-primary)/70 backdrop-blur-xs border-b border-(--border)">
            <div className="flex items-center justify-between h-14 px-8">
                {/* Logo */}
                <span className="font-mono text-[15px] font-medium text-(--accent)">nora.dev</span>

                {/* Desktop links */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map(section => (
                        <button
                            key={section}
                            onClick={() => scrollTo(section)}
                            className="bg-transparent border-none text-(--text-secondary) text-[14px] cursor-pointer py-1 font-sans hover:text-(--text-primary) transition-colors"
                        >
                            {section}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-1.5 bg-(--bg-secondary) border border-(--border) rounded-full px-3 py-1.5 text-[13px] text-(--text-secondary) cursor-pointer"
                    >
                        <span>{isDark ? "☀️" : "🌙"}</span>
                        <span>{isDark ? "light" : "dark"}</span>
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="flex md:hidden flex-col gap-1.25 p-1 bg-transparent border-none cursor-pointer"
                    >
                        <span
                            className={`block w-5.5 h-[1.5px] bg-(--text-primary) transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
                        />
                        <span
                            className={`block w-5.5 h-[1.5px] bg-(--text-primary) transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-5.5 h-[1.5px] bg-(--text-primary) transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="flex md:hidden flex-col border-t border-(--border) px-8 py-2">
                    {navLinks.map(section => (
                        <button
                            key={section}
                            onClick={() => scrollTo(section)}
                            className="bg-transparent border-none border-b border-(--border) text-(--text-secondary) text-[15px] cursor-pointer py-3.5 text-left w-full font-sans"
                        >
                            {section}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
