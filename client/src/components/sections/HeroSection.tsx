import BrowserCard from "../ui/BrowserCard";
import Button from "../ui/Button";

const HeroSection = () => (
    <section id="home" className="mx-auto max-w-230 px-6 pt-20 pb-16 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: text */}
        <div className="flex-[1.1]">
            <p className="font-mono text-[12px] text-(--accent) tracking-wide mb-2">// hello, world</p>
            <h1 className="text-[clamp(32px,5vw,44px)] font-normal leading-[1.12] text-(--text-primary) mb-3">
                Hi, I'm Nora
                <br />
                <span className="text-(--accent)">Fullstack Developer</span>
            </h1>
            <p className="text-(--text-secondary) text-[15px] leading-[1.75] mb-8 max-w-95">
                Building modern web applications with .NET and React. Passionate about clean code and great user
                experiences.
            </p>
            <div className="flex gap-10">
                <Button
                    variant="primary"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                    View projects
                </Button>
                <Button
                    variant="outline"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                    Contact me
                </Button>
            </div>
        </div>

        {/* Right: C# code card */}
        <div className="flex-1 font-mono text-[13px]">
            <BrowserCard filename="profile.cs" dotSize="md">
                <div className="px-6 py-5 leading-[1.9] text-(--text-secondary)">
                    <span className="text-(--accent-dark)">public class</span>{" "}
                    <span className="text-(--accent)">Developer</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-(--accent-dark)">string</span> Name ={" "}
                    <span className="text-(--green)">"Nora Silfver"</span>;<br />
                    &nbsp;&nbsp;<span className="text-(--accent-dark)">string</span> Role ={" "}
                    <span className="text-(--green)">"Fullstack Dev"</span>;<br />
                    &nbsp;&nbsp;<span className="text-(--accent-dark)">string[]</span> Stack = {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-(--green)">"C#"</span>,{" "}
                    <span className="text-(--green)">"React"</span>,{" "}
                    <span className="text-(--green)">"TypeScript"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-(--green)">"PostgreSQL"</span>,{" "}
                    <span className="text-(--green)">"Azure"</span>
                    <br />
                    &nbsp;&nbsp;{"}"};<br />
                    &nbsp;&nbsp;<span className="text-(--accent-dark)">bool</span> OpenToWork ={" "}
                    <span className="text-orange-400">true</span>;<br />
                    {"}"}
                </div>
            </BrowserCard>
        </div>
    </section>
);

export default HeroSection;
