
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

