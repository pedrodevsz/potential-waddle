export type NavigationItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

export type ProjectVariant = "finance" | "editorial";

export type ContactHref =
  | `https://${string}`
  | `mailto:${string}`
  | `tel:${string}`;

export type Project = {
  id: string;
  title: string;
  description: string;
  variant: ProjectVariant;
  previewBrand: string;
  previewTitle: string;
};

export type SocialLink =
  | { label: "LinkedIn" | "GitHub"; href: `https://${string}` }
  | { label: "E-mail"; href: `mailto:${string}` };

export type PortfolioContent = {
  identity: string;
  navigation: NavigationItem[];
  hero: { eyebrow: string; title: [string, string, string] };
  about: { text: string; technologies: string[] };
  projects: { heading: [string, string]; items: Project[] };
  footer: {
    heading: string;
    contactLabel: string;
    contactHref?: ContactHref;
    contactNote?: string;
    socialLinks?: SocialLink[];
    signature?: string;
  };
};
