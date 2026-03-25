const Footer = () => (
    <footer className="border-t border-(--border)">
        <div className="mx-auto max-w-230 px-6 py-7">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-5 border-b border-(--border) mb-4">
                <div>
                    <p className="font-mono text-[15px] font-semibold text-(--accent) mb-1.5">nora.dev</p>
                    <p className="text-[12px] text-(--text-muted) leading-relaxed max-w-55">
                        Building things with .NET and React. Always open to interesting projects.
                    </p>
                </div>
                <div className="flex gap-2">
                    <a
                        href="https://github.com/QwertyNora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-(--bg-secondary) border border-(--border) rounded-md px-3.5 py-1.5 font-mono text-[12px] text-(--text-secondary) no-underline hover:border-(--accent) hover:text-(--accent) transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nora-silfver-371847147/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-(--bg-secondary) border border-(--border) rounded-md px-3.5 py-1.5 font-mono text-[12px] text-(--text-secondary) no-underline hover:border-(--accent) hover:text-(--accent) transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between items-center">
                <span className="font-mono text-[11px] text-(--text-muted)">
                    Made With Love © {new Date().getFullYear()} Nora Silfver
                </span>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--green) inline-block" />
                    <span className="font-mono text-[11px] text-(--green)">open to work</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
