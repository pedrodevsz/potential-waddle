import { Reveal } from "@/components/reveal";
import type { PortfolioContent } from "@/types/portfolio";

type AboutProps = PortfolioContent["about"];

export function About({ text, technologies }: AboutProps) {
  return (
    <Reveal
      as="section"
      id="sobre"
      className="about"
      aria-labelledby="about-title"
    >
      <h2 id="about-title" className="sr-only">
        Sobre mim
      </h2>
      <p>{text}</p>
      <ul className="technology-list" aria-label="Tecnologias">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </Reveal>
  );
}
