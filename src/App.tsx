// Import order = CSS order. Sections (Section.css) load before Footer/PillButton
// so `.pill` still overrides `.content *` like in the original style.css.
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./sections/About/AboutSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import EducationSection from "./sections/Education/EducationSection";
import Footer from "./components/Footer/Footer";
import { navLinks } from "./data/navLinks";
import { contactLinks } from "./data/contacts";

export default function App() {
  return (
    <>
      <Navbar brand="Vincent" links={navLinks} />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer owner="Vincent" contacts={contactLinks} />
    </>
  );
}
