import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { FuturePlans } from "@/components/future-plans";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <FuturePlans />
        <Contact />
      </main>
    </>
  );
}
