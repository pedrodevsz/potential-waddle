import { Reveal } from "@/components/reveal";
import type { PortfolioContent } from "@/types/portfolio";

type FooterProps = PortfolioContent["footer"];

export function Footer({
  heading,
  contactLabel,
  contactNote,
  signature,
}: FooterProps) {
  return (
    <Reveal
      as="footer"
      id="contato"
      className="footer"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">{heading}</h2>
      <p className="contact-label">{contactLabel}</p>
      <p className="contact-note">{contactNote}</p>
      <p className="signature">{signature}</p>
    </Reveal>
  );
}
