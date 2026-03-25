import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";

const Home = () => (
    <div className="bg-(--bg-primary) text-(--text-primary)">
        <div className="spotlight" />
        <div className="relative z-10">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </div>
    </div>
);

export default Home;
