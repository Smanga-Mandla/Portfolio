"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];
export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "glass py-3"
            : "bg-transparent py-5"}`}>
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-end md:justify-between">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (<Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"/>
            </Link>))}
        </div>

        {/* Social Links & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com/Smanga-Mandla" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5"/>
          </Link>
          <Link href="https://www.linkedin.com/in/mandla-tivane-7501a6326" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5"/>
          </Link>
          <Button asChild size="sm" className="glow">
            <Link href="/Mandla-Tivane-CV.pdf" download>
              Download CV
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (<div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 fixed left-0 right-0 top-16 z-40 max-h-96 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (<Link key={link.href} href={link.href} className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-3 rounded-lg transition-all font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>))}
            <div className="flex items-center justify-between gap-3 pt-5 border-t border-border/30 mt-3 px-3">
              <div className="flex items-center gap-3">
                <Link href="https://github.com/Smanga-Mandla" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Github className="h-5 w-5"/>
                </Link>
                <Link href="https://www.linkedin.com/in/mandla-tivane-7501a6326" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Linkedin className="h-5 w-5"/>
                </Link>
              </div>
              <Button asChild size="sm" className="glow">
                <Link href="/Mandla-Tivane-CV.pdf" download onClick={() => setIsMobileMenuOpen(false)}>
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>)}
    </header>);
}
