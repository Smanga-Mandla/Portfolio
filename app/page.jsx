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
        href="whatsapp://send?phone=27790377217"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[9999] inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/40 transition-all hover:bg-green-800"
        aria-label="Chat with me on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Chat with me</span>
      </Link>
    </main>);
}
