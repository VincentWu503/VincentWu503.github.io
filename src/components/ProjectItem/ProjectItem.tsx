import { Fragment } from "react";
import type { Project } from "../../types";
import { assetUrl } from "../../utils/assetUrl";
import "./ProjectItem.css";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const { title, description, contributions, techstacks, imagePaths, sourceCodeLink } = project;

  return (
    <div className="project-list">
      <div>
        <h3>
          {title}
        </h3>
      </div>
      <div className="project-list-content">
        <div className="project-content-text">
          <div>
            <p>{description}</p>
            <p>My Contributions:</p>
            <ul>
              {contributions.map((item, i) => (
                <li key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="techstack-tag-container">
            {techstacks.map((tech) => (
              <Fragment key={tech}>
                <span className="techstack-tag">#{tech}</span>{" "}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="image-container">
          {/* will be changed to caurosel in the future */}
          {imagePaths.map((path) => (
            <img
              key={path}
              src={assetUrl(path)}
              alt={`${title} screenshot`}
              className="image border-shadow"
            />
          ))}
          {sourceCodeLink && (
            <span className="project-link">
              <a href={sourceCodeLink} target="_blank" rel="noreferrer">
                Source code
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
