import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SkillsMarquee from "@/components/SkillsMarquee";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black">
      {/* Hero / Scrollytelling Section */}
      <section className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Projects Grid Section (Selected Works) */}
      <Projects />

      {/* Services (What I Do) Section */}
      <Services />

      {/* Skills Marquee Section */}
      <SkillsMarquee />

      {/* About Me Section */}
      <About />

      {/* Footer */}
      <Footer />
    </main>
  );
}
