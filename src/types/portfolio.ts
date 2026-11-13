export type NavigationItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

export type ProjectVariant = "finance" | "editorial";

export type Project = {
  id: string;
  title: string;
  description: string;
  variant: ProjectVariant;
  previewBrand: string;
  previewTitle: string;
};

export type PortfolioContent = {
  identity: string;
  navigation: NavigationItem[];
  hero: { eyebrow: string; title: string };
  about: { text: string; technologies: string[] };
  projects: { heading: [string, string]; items: Project[] };
  footer: {
    heading: string;
    contactLabel: string;
    contactNote: string;
    signature: string;
  };
};
