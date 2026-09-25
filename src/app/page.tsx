import { Spotlight } from "@/components/spotlight";
import Contact from "@/widgets/contact";
import Experience from "@/widgets/experience";
import Hero from "@/widgets/hero";
import Nav from "@/widgets/nav";
import Skills from "@/widgets/skills";

export default function Home() {
  return (
    <>
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Skills className="scroll-mt-16" />
        <Experience className="scroll-mt-16" />
      </main>
      <Contact className="scroll-mt-16" />
    </>
  );
}
