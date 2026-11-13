import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro | Desenvolvedor web",
  description: "Portfólio de Pedro, desenvolvedor web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
