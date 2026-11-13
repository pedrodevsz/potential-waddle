import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = { heading: [string, string]; projects: Project[] };

export function Projects({ heading, projects }: ProjectsProps) {
  return (
    <section
      id="projetos"
      className="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="projects-heading">
        {heading[0]}
        <br />
        {heading[1]}
      </h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            revealDelay={index * 90}
          />
        ))}
      </div>
    </section>
  );
}
