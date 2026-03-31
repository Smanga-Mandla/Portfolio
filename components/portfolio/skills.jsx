"use client";
import { useState } from "react";
const skillCategories = [
    {
        name: "Frontend",
        skills: [
            { name: "HTML", level: 95 },
            { name: "CSS", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 80 },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "Python", level: 90 },
            { name: "Java", level: 85 },
            { name: "PHP", level: 75 },
            { name: "REST APIs", level: 85 },
        ],
    },
    {
        name: "Database",
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "MySQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Firebase", level: 80 },
        ],
    },
    {
        name: "Other",
        skills: [
            { name: "AI/ML", level: 80 },
            { name: "IoT", level: 75 },
            { name: "System Design", level: 80 },
            { name: "SDLC", level: 85 },
        ],
    },
];
const allSkills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Java", "PHP",
    "PostgreSQL", "Firebase", "MySQL", "MongoDB", "Artificial Intelligence",
    "IoT", "REST APIs", "System Design", "SDLC", "Automation", "GitHub",
    "SAP (basic)", "Microsoft Office"
];
export function Skills() {
    const [activeCategory, setActiveCategory] = useState("Frontend");
    return (<section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"/>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Skill Categories with Progress Bars */}
          <div className="glass-card rounded-2xl p-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillCategories.map((category) => (<button key={category.name} onClick={() => setActiveCategory(category.name)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === category.name
                ? "bg-primary text-primary-foreground"
                : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"}`}>
                  {category.name}
                </button>))}
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              {skillCategories
            .find((c) => c.name === activeCategory)
            ?.skills.map((skill, idx) => (<div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out" style={{
                width: `${skill.level}%`,
                animationDelay: `${idx * 0.1}s`,
            }}/>
                    </div>
                  </div>))}
            </div>
          </div>

          {/* All Skills Tags */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">All Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill, idx) => (<span key={skill} className="px-4 py-2 glass rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default hover:-translate-y-1" style={{ animationDelay: `${idx * 0.05}s` }}>
                  {skill}
                </span>))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "7+", label: "Projects Completed" },
            { value: "4+", label: "Programming Languages" },
            { value: "5+", label: "Database Technologies" },
            { value: "1+", label: "Years Experience" },
        ].map((stat, idx) => (<div key={idx} className="glass-card rounded-2xl p-6 text-center group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>))}
        </div>
      </div>
    </section>);
}
