"use client";
import { useState } from "react";
import { ExternalLink, Github, Brain, FileText, Heart, Dumbbell, Database, Globe, Shield, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const projects = [
    {
        id: 1,
        title: "Mental Health Tracking System",
        description: "AI-powered mental health platform featuring emotion tracking, intelligent chatbot support, and seamless appointment booking system.",
        icon: Brain,
        technologies: ["Python", "Deep Learning", "TensorFlow", "NLP"],
        features: ["Emotion Detection", "AI Chatbot", "Appointment Booking", "Progress Analytics"],
        gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
        borderColor: "hover:border-blue-500/50",
        iconBg: "bg-blue-500/20 text-blue-400",
        featured: true,
        size: "large",
    },
    {
        id: 2,
        title: "Quality Management System",
        description: "Enterprise-grade document management platform with deadline tracking, reporting dashboards, and collaborative workflows.",
        icon: FileText,
        technologies: ["Python", "Django", "PostgreSQL", "REST API"],
        features: ["Document Sharing", "Deadline Tracking", "Analytics", "Reports"],
        gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
        borderColor: "hover:border-purple-500/50",
        iconBg: "bg-purple-500/20 text-purple-400",
        featured: true,
        size: "medium",
    },
    {
        id: 3,
        title: "Charity Donation Application",
        description: "Full-stack donation platform with integrated payment gateway for seamless charitable contributions.",
        icon: Heart,
        technologies: ["Jakarta EE", "Java", "MySQL", "Payment API"],
        features: ["Secure Payments", "Donation Tracking", "Organization Profiles"],
        gradient: "from-rose-500/20 via-red-500/20 to-orange-500/20",
        borderColor: "hover:border-rose-500/50",
        iconBg: "bg-rose-500/20 text-rose-400",
        featured: false,
        size: "medium",
    },
    {
        id: 4,
        title: "Fitness Tracker App",
        description: "Mobile fitness application for tracking workouts, monitoring progress, and achieving fitness goals.",
        icon: Dumbbell,
        technologies: ["Kotlin", "Android", "Firebase", "Room DB"],
        features: ["Workout Logging", "Progress Charts", "Goal Setting", "Reminders"],
        gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
        borderColor: "hover:border-green-500/50",
        iconBg: "bg-green-500/20 text-green-400",
        featured: false,
        size: "small",
    },
    {
        id: 5,
        title: "Information Systems Platform",
        description: "Multi-database architecture platform showcasing proficiency in various database technologies and integrations.",
        icon: Database,
        technologies: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
        features: ["Multi-DB Support", "Data Sync", "API Integration", "Analytics"],
        gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
        borderColor: "hover:border-orange-500/50",
        iconBg: "bg-orange-500/20 text-orange-400",
        featured: false,
        size: "small",
    },
    {
        id: 6,
        title: "Multimedia Website",
        description: "Interactive multimedia presentation platform with rich content delivery and engaging user experiences.",
        icon: Globe,
        technologies: ["HTML", "CSS", "JavaScript", "Web APIs"],
        features: ["Interactive UI", "Media Gallery", "Responsive Design"],
        gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
        borderColor: "hover:border-indigo-500/50",
        iconBg: "bg-indigo-500/20 text-indigo-400",
        featured: false,
        size: "small",
    },
    {
        id: 7,
        title: "IoT & Cybersecurity Projects",
        description: "Collection of IoT device integrations and cybersecurity implementations demonstrating security best practices.",
        icon: Shield,
        technologies: ["IoT", "Security", "Python", "Networking"],
        features: ["Device Integration", "Security Protocols", "Threat Analysis"],
        gradient: "from-slate-500/20 via-zinc-500/20 to-gray-500/20",
        borderColor: "hover:border-slate-400/50",
        iconBg: "bg-slate-500/20 text-slate-400",
        featured: false,
        size: "small",
    },
];
export function Projects() {
    const [hoveredId, setHoveredId] = useState(null);
    return (<section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"/>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"/>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, AI integration, and problem-solving capabilities.
          </p>
        </div>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Project - Mental Health System (Large) */}
          <div className={`lg:col-span-2 lg:row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[0].borderColor}`} onMouseEnter={() => setHoveredId(1)} onMouseLeave={() => setHoveredId(null)}>
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              {/* Featured badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                Featured Project
              </div>
              
              <div className={`p-4 rounded-2xl ${projects[0].iconBg} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Brain className="h-8 w-8"/>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {projects[0].title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {projects[0].description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {projects[0].features.map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"/>
                    {feature}
                  </div>))}
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].technologies.map((tech, idx) => (<span key={idx} className="px-3 py-1 text-xs font-medium glass rounded-full text-foreground border border-border/50">
                    {tech}
                  </span>))}
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="glass-card hover:bg-primary/10">
                  <Github className="h-4 w-4 mr-2"/>
                  View Code
                </Button>
                <Button size="sm" className="glow">
                  <ExternalLink className="h-4 w-4 mr-2"/>
                  Live Demo
                </Button>
              </div>
            </div>
            
            {/* Hover arrow */}
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-6 w-6 text-primary"/>
            </div>
          </div>

          {/* Quality Management System */}
          <div className={`lg:col-span-2 glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[1].borderColor}`} onMouseEnter={() => setHoveredId(2)} onMouseLeave={() => setHoveredId(null)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${projects[1].iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <FileText className="h-6 w-6"/>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"/>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[1].title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {projects[1].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[1].technologies.slice(0, 3).map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs glass rounded-full text-muted-foreground">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>

          {/* Charity Donation */}
          <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[2].borderColor}`} onMouseEnter={() => setHoveredId(3)} onMouseLeave={() => setHoveredId(null)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[2].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${projects[2].iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <Heart className="h-6 w-6"/>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"/>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[2].title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {projects[2].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[2].technologies.slice(0, 2).map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs glass rounded-full text-muted-foreground">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>

          {/* Fitness Tracker */}
          <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[3].borderColor}`} onMouseEnter={() => setHoveredId(4)} onMouseLeave={() => setHoveredId(null)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[3].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${projects[3].iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <Dumbbell className="h-6 w-6"/>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"/>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[3].title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {projects[3].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[3].technologies.slice(0, 2).map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs glass rounded-full text-muted-foreground">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>

          {/* Information Systems */}
          <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[4].borderColor}`} onMouseEnter={() => setHoveredId(5)} onMouseLeave={() => setHoveredId(null)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[4].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${projects[4].iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <Database className="h-6 w-6"/>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"/>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[4].title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {projects[4].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[4].technologies.slice(0, 2).map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs glass rounded-full text-muted-foreground">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>

          {/* Multimedia Website */}
          <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[5].borderColor}`} onMouseEnter={() => setHoveredId(6)} onMouseLeave={() => setHoveredId(null)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[5].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${projects[5].iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <Globe className="h-6 w-6"/>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"/>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[5].title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {projects[5].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[5].technologies.slice(0, 2).map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs glass rounded-full text-muted-foreground">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>

          {/* IoT & Cybersecurity */}
          <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 ${projects[6].borderColor}`} onMouseEnter={() => setHoveredId(7)} onMouseLeave={() => setHoveredId(null)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[6].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${projects[6].iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <Shield className="h-6 w-6"/>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"/>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[6].title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {projects[6].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[6].technologies.slice(0, 2).map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs glass rounded-full text-muted-foreground">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="glass-card hover:bg-primary/10">
            <a href="https://github.com/Smanga-Mandla" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5"/>
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>);
}
