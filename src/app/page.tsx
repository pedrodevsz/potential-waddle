import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { About } from "@/components/sections/About/About";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { portfolioContent } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="page-shell">
      <Header
        identity={portfolioContent.identity}
        navigation={portfolioContent.navigation}
      />
      <main id="inicio">
        <Hero {...portfolioContent.hero} />
        <About {...portfolioContent.about} />
        <Projects
          heading={portfolioContent.projects.heading}
          projects={portfolioContent.projects.items}
        />
      </main>
      <Footer {...portfolioContent.footer} />
    </div>
  );
}
