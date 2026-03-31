"use client";
import { GraduationCap, Briefcase, Brain, Users, Clock, Target, Lightbulb, MessageSquare } from "lucide-react";
const strengths = [
    { icon: Brain, label: "Problem Solving", description: "Analytical approach to complex challenges" },
    { icon: Lightbulb, label: "Analytical Thinking", description: "Data-driven decision making" },
    { icon: Users, label: "Team Collaboration", description: "Effective cross-functional teamwork" },
    { icon: MessageSquare, label: "Communication", description: "Clear technical & non-technical dialogue" },
    { icon: Target, label: "Adaptability", description: "Quick learner of new technologies" },
    { icon: Clock, label: "Time Management", description: "Efficient project delivery" },
];
const education = [
    {
        degree: "Advanced Diploma in ICT",
        institution: "University of Mpumalanga",
    year: "2025",
    status: "Completed",
    },
    {
        degree: "Diploma in ICT",
        institution: "University of Mpumalanga",
    year: "2024",
        status: "Completed",
    },
];
export function About() {
    return (<section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate ICT graduate with a strong foundation in software development and a drive to create impactful solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Professional Summary - Large Card */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Briefcase className="h-6 w-6"/>
              </div>
              <h3 className="text-xl font-semibold">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              ICT graduate with a strong foundation in software development, software engineering, 
              web development, and system design. Passionate about Artificial Intelligence and 
              building solutions that automate processes and solve real-world problems. 
              Experienced in Agile environments and developing scalable, efficient systems.
            </p>
          </div>

          {/* Education Card */}
          <div className="glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <GraduationCap className="h-6 w-6"/>
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (<div key={index} className="border-l-2 border-primary/30 pl-4">
                  <p className="font-medium text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-primary">{edu.year}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${edu.status === "Current"
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground"}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>))}
            </div>
          </div>

          {/* Core Strengths Grid */}
          {strengths.map((strength, index) => (<div key={index} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                  <strength.icon className="h-5 w-5"/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{strength.label}</h4>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
