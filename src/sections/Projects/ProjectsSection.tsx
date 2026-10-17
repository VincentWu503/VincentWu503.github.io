import Section from "../../components/Section/Section";
import ProjectList from "../../components/ProjectList/ProjectList";
// @ts-expect-error CSS side-effect imports are handled by the bundler.
import "./ProjectsSection.css";
import { Projects } from "../../data/projects";
import type { Project } from "../../types";

export default function ProjectsSection() {
  const projects: Project[] = Projects;
  return (
    <Section id="projects" title="Projects">
      <p>Here are some of my proudest projects yet that I've worked on with my group friends.</p>
      <ProjectList projects={projects} />
    </Section>
  );
}
