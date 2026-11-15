import type { CSSProperties } from "react";
import type { PortfolioContent } from "@/types/portfolio";

type AnimatedWordProps = { word: string; className?: string };

function AnimatedWord({ word, className }: AnimatedWordProps) {
  const occurrences = new Map<string, number>();
  const letters = Array.from(word, (letter) => {
    const occurrence = (occurrences.get(letter) ?? 0) + 1;
    occurrences.set(letter, occurrence);
    return { letter, id: `${letter}-${occurrence}` };
  });

  return (
    <span className={className} aria-hidden="true">
      {letters.map(({ letter, id }, index) => (
        <span
          className="hero-letter"
          style={{ "--letter-index": index } as CSSProperties}
          key={id}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

type HeroProps = PortfolioContent["hero"];

export function Hero({ eyebrow, title }: HeroProps) {
  const [name, development, web] = title;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="hero-title" className="hero-title">
        <span className="sr-only">{title.join(" ")}</span>
        <AnimatedWord word={name} className="hero-line hero-name" />
        <span className="hero-line hero-dev" aria-hidden="true">
          <span className="outline-letter outline-d">{development[0]}</span>
          <AnimatedWord word={development} className="dev-word" />
          <span className="outline-letter outline-e">{development[1]}</span>
        </span>
        <span className="hero-line hero-web" aria-hidden="true">
          <AnimatedWord word={web} />
          <span className="outline-letter outline-w">{web[0]}</span>
        </span>
      </h1>
    </section>
  );
}
