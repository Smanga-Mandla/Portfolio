"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MessageCircle, Heart } from "lucide-react";
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];
export function Footer() {
    return (<footer className="py-12 border-t border-border/50 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"/>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#" className="text-2xl font-bold gradient-text mb-4 block">
              Mandla Tivane
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              ICT Graduate & Software Developer passionate about building 
              AI-powered solutions and scalable applications.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/Smanga-Mandla" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all" aria-label="GitHub Profile">
                <Github className="h-5 w-5"/>
              </Link>
              <Link href="https://www.linkedin.com/in/mandla-tivane-7501a6326" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5"/>
              </Link>
              <Link href="mailto:smangamandla05@gmail.com" className="p-2 glass rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all" aria-label="Send Email">
                <Mail className="h-5 w-5"/>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (<Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.label}
                </Link>))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary"/>
                <a href="mailto:smangamandla05@gmail.com" className="hover:text-primary transition-colors">
                  smangamandla05@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary"/>
                <span>079 037 7217</span>
                <a href="https://wa.me/27790377217" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors" aria-label="Chat on WhatsApp">
                  <MessageCircle className="h-4 w-4"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Mandla Tivane. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>);
}
