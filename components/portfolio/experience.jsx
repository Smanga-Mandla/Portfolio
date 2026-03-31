"use client";
import { Building2, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
const experiences = [
    {
        title: "Software Developer Intern",
        company: "Kayise IT",
        period: "Jan 2026 – Present",
        location: "South Africa",
        responsibilities: [
            "Gather and analyze client requirements to define project scope",
            "Design system prototypes and user interface mockups",
            "Develop scalable applications using modern frameworks",
            "Build AI-powered solutions and train machine learning models",
            "Develop mobile and web applications for diverse clients",
        ],
        technologies: ["Python", "React", "Node.js", "AI/ML", "Mobile Dev"],
        current: true,
    },
];
export function Experience() {
    return (<section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"/>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world solutions and gaining hands-on experience in professional software development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (<div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"/>
              
              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-8 md:ml-20 hover:border-primary/40 transition-all duration-300 group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block animate-pulse-glow"/>
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Building2 className="h-5 w-5"/>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4"/>
                      <span>{exp.period}</span>
                    </div>
                    {exp.current && (<span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        Current
                      </span>)}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (<li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"/>
                        <span>{resp}</span>
                      </li>))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (<span key={idx} className="px-3 py-1 text-xs font-medium glass rounded-full text-primary border border-primary/20">
                      {tech}
                    </span>))}
                </div>

                {/* Arrow indicator */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-6 w-6 text-primary"/>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
