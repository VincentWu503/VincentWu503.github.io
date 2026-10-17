import type { Project } from "../../types";
import ProjectItem from "../ProjectItem/ProjectItem";
// @ts-expect-error CSS side-effect imports are handled by the bundler.
import "./ProjectList.css";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="project-lists">
      {projects.map((project, index) => (
        <ProjectItem key={`${project.title}-${index}`} project={project} index={index} />
      ))}
    </div>
  );
}
