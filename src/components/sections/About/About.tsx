import { Reveal } from "@/components/reveal";
import type { PortfolioContent } from "@/types/portfolio";

type AboutProps = PortfolioContent["about"];

export function About({ text, flagAfter, technologies }: AboutProps) {
  const flagIndex = flagAfter ? text.indexOf(flagAfter) : -1;
  const flagPosition =
    flagIndex >= 0 ? flagIndex + (flagAfter?.length ?? 0) : -1;

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
      <p>
        {flagPosition >= 0 ? (
          <>
            {text.slice(0, flagPosition)}
            <span
              aria-hidden="true"
              style={{ fontSize: "0.75em", verticalAlign: "0.05em" }}
            >
              {"\u00a0"}🇧🇷
            </span>
            {text.slice(flagPosition)}
          </>
        ) : (
          text
        )}
      </p>
      <ul className="technology-list" aria-label="Tecnologias">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </Reveal>
  );
}
