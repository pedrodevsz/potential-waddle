import { Reveal } from "@/components/reveal";
import type { PortfolioContent } from "@/types/portfolio";

type FooterProps = PortfolioContent["footer"];

export function Footer({
  heading,
  contactLabel,
  contactHref,
  contactNote,
  socialLinks = [],
  signature,
}: FooterProps) {
  const note = contactNote?.trim();

  return (
    <Reveal
      as="footer"
      id="contato"
      className="footer"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">{heading}</h2>
      {contactHref ? (
        <a className="contact-label" href={contactHref}>
          {contactLabel} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <p className="contact-unavailable">{contactLabel}</p>
      )}
      {socialLinks.length > 0 ? (
        <ul className="social-links" aria-label="Contatos">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("https://") ? "_blank" : undefined}
                rel={
                  href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  {label === "LinkedIn" ? (
                    <>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
                      <circle cx="7" cy="7" r="0.6" fill="currentColor" />
                    </>
                  ) : label === "GitHub" ? (
                    <path d="M9 19c-4.3 1.3-4.3-2-6-2m12 5v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 18.8 5a4.9 4.9 0 0 0-.1-3.6S17.5 1 15 2.8a13.4 13.4 0 0 0-6 0C6.5 1 5.3 1.4 5.3 1.4A4.9 4.9 0 0 0 5.2 5a5.3 5.3 0 0 0-1.5 3.6c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 9 18.1V22" />
                  ) : (
                    <>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 6 10 7L22 6" />
                    </>
                  )}
                </svg>
                {label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        note && <p className="contact-note">{note}</p>
      )}
      {signature?.trim() && <p className="signature">{signature}</p>}
    </Reveal>
  );
}
