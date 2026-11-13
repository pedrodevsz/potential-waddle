import type { CSSProperties } from "react";
import type { PortfolioContent } from "@/types/portfolio";

type AnimatedWordProps = { word: string; className?: string };

function AnimatedWord({ word, className }: AnimatedWordProps) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from(word).map((letter, index) => (
        <span
          className="hero-letter"
          style={{ "--letter-index": index } as CSSProperties}
          key={letter}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

type HeroProps = PortfolioContent["hero"];

export function Hero({ eyebrow, title }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="hero-title" className="hero-title">
        <span className="sr-only">{title}</span>
        <AnimatedWord word="Pedro" className="hero-line hero-name" />
        <span className="hero-line hero-dev" aria-hidden="true">
          <span className="outline-letter outline-d">d</span>
          <AnimatedWord word="dev" className="dev-word" />
          <span className="outline-letter outline-e">e</span>
        </span>
        <span className="hero-line hero-web" aria-hidden="true">
          <AnimatedWord word="web" />
          <span className="outline-letter outline-w">w</span>
        </span>
      </h1>
    </section>
  );
}
