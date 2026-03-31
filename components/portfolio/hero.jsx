"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "ICT Graduate",
  "Aspiring Software Engineer",
  "Software Developer",
  "DevOps",
];

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2400);

    return () => clearInterval(intervalId);
  }, []);

    return (<section className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background gradient effects – desktop only */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"/>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"/>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"/>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
          {/* Content */}
          <div className="order-2 lg:order-1 w-full max-w-[42rem] text-center lg:max-w-none lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-primary mb-6 animate-fade-in-up opacity-0 stagger-1">
              <Sparkles className="h-4 w-4"/>
              <span>Available for opportunities</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2 lg:max-w-[16ch]">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-foreground">Mandla Tivane</span>
            </h1>

            <div className="relative mb-8 rounded-2xl px-4 py-4">
              <div className="hidden lg:block absolute inset-0 rounded-2xl bg-background/55"/>

              <p className="relative z-10 text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 stagger-3">
                <span className="role-slider-track mx-auto flex min-h-[2.5rem] items-center justify-center overflow-hidden text-primary font-bold lg:mx-0 lg:justify-start">
                  <span key={roles[currentRoleIndex]} className="role-slider-item animate-role-slide">
                    {roles[currentRoleIndex]}
                  </span>
                </span>
              </p>

              <p className="relative z-10 text-base md:text-lg text-muted-foreground max-w-2xl mb-0 leading-relaxed animate-fade-in-up opacity-0 stagger-4">
                Passionate about Artificial Intelligence and building solutions that automate 
                processes and solve real-world problems. Experienced in Agile environments 
                and developing scalable, efficient systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up opacity-0 stagger-5">
              <Button asChild size="lg" className="glow w-full sm:w-auto">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5"/>
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto glass-card hover:bg-primary/10">
                <Link href="#projects">
                  <Download className="mr-2 h-5 w-5"/>
                  View Projects
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 stagger-6">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <Link href="https://github.com/Smanga-Mandla" target="_blank" rel="noopener noreferrer" className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Github className="h-5 w-5"/>
              </Link>
              <Link href="https://www.linkedin.com/in/mandla-tivane-7501a6326" target="_blank" rel="noopener noreferrer" className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Linkedin className="h-5 w-5"/>
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 animate-fade-in-up opacity-0 stagger-4 flex flex-col items-center gap-8 relative z-0 lg:justify-self-end">
            <div className="relative">
              <div className="hidden lg:block absolute inset-0 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-2xl animate-pulse-glow"/>
              </div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full glass-card p-2 animate-float">
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  {!imageError ? (<Image src="/profile.jpeg" alt="Mandla Tivane" fill sizes="(max-width: 768px) 16rem, 20rem" className="object-cover rounded-full" onError={() => setImageError(true)}/>) : (<div className="text-6xl md:text-7xl font-bold gradient-text">MT</div>)}
                </div>
              </div>
              {/* Floating badges */}
              <div className="hidden sm:block absolute -top-4 -right-4 px-3 py-1 glass-card rounded-full text-xs text-primary animate-float" style={{ animationDelay: '0.5s' }}>
                AI Enthusiast
              </div>
              <div className="hidden sm:block absolute -bottom-2 -left-4 px-3 py-1 glass-card rounded-full text-xs text-primary animate-float" style={{ animationDelay: '1s' }}>
                Full Stack Dev
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator – desktop only */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="h-5 w-5"/>
          </Link>
        </div>
      </div>
    </section>);
}
