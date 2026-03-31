import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
export default function Portfolio() {
    return (<main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Link
        href="https://wa.me/27790377217"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[9999] inline-flex items-center gap-2 rounded-full bg-green-700 p-3 text-white shadow-lg shadow-green-900/45 transition-all hover:bg-green-800 md:px-4 md:py-3 md:text-sm"
        aria-label="Chat with me on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline">Chat with me</span>
      </Link>
    </main>);
}
