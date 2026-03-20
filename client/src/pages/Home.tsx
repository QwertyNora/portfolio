import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => (
    <div className="bg-(--bg-primary) text-(--text-primary)">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
    </div>
);

export default Home;
