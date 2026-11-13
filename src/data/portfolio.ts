import type { PortfolioContent } from "@/types/portfolio";


export const portfolioContent = {
  identity: "Pedro",
  navigation: [
    { id: "about", label: "Sobre", href: "#sobre" },
    { id: "projects", label: "Projetos", href: "#projetos" },
    { id: "contact", label: "Vamos conversar ↗", href: "#contato" },
  ],
  hero: { eyebrow: "Desenvolvedor web", title: "Pedro dev web" },
  about: {
    text: "Olá, sou Pedro. Transformo ideias em experiências digitais com atenção aos detalhes, clareza e vontade de fazer bem-feito.",
    technologies: ["JavaScript", "Next.js", "Java", "Spring Boot",],
  },
  projects: {
    heading: ["Projetos", "selecionados"],
    items: [
      {
        id: "demonstrative-finance",
        title: "Projeto demonstrativo 01",
        description: "Aplicação web · Conceito",
        variant: "finance",
        previewBrand: "Finanças",
        previewTitle: "Controle suas finanças com simplicidade",
      },
      {
        id: "demonstrative-editorial",
        title: "Projeto demonstrativo 02",
        description: "Website · Conceito",
        variant: "editorial",
        previewBrand: "Caderno",
        previewTitle: "Lugares, histórias e perspectivas",
      },
    ],
  },
  footer: {
    heading: "Vamos criar algo juntos?",
    contactLabel: "Entre em contato ↗",
  },
} satisfies PortfolioContent;
