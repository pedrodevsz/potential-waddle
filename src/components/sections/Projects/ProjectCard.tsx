import { Reveal } from "@/components/reveal";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = { project: Project; revealDelay: number };

export function ProjectCard({ project, revealDelay }: ProjectCardProps) {
  return (
    <Reveal as="article" className="project-card" delay={revealDelay}>
      <div
        className={`project-visual project-visual-${project.variant}`}
        role="img"
        aria-label={`Placeholder substituível para ${project.title}`}
      >
        <div className="mock-browser" aria-hidden="true">
          <div className="mock-nav">
            <span>{project.previewBrand}</span>
            <i />
            <i />
            <i />
          </div>
          <strong>{project.previewTitle}</strong>
          <span className="mock-placeholder">Imagem do projeto a fornecer</span>
        </div>
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Reveal>
  );
}
