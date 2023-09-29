import React from "react";
import { projects } from "../assets/data/Data";
export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <article>
        <h2>projects</h2>
      </article>
      <article>
        {projects.map((project, index) => {
          return (
            <div key={`project-${index}`}>
              <h3>
                <a href={project.link} target="_blank">
                  {project.name}
                </a>
              </h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map((entry, index) => {
                  return <li key={`project-description-${index}`}>{entry}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </article>
    </section>
  );
};
