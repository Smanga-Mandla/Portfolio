"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "smangamandla05@gmail.com",
        href: "mailto:smangamandla05@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "079 037 7217",
        href: "tel:+27790377217",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "South Africa",
        href: null,
    },
];
const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/Smanga-Mandla",
        username: "@Smanga-Mandla",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mandla-tivane-7501a6326",
        username: "Mandla Tivane",
    },
];
export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this to a backend
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };
    return (<section id="contact" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"/>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"/>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {`I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (<div key={idx} className="glass-card rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300">
                  {info.href ? (<Link href={info.href} className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="h-6 w-6"/>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors break-words">
                          {info.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </Link>) : (<div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <info.icon className="h-6 w-6"/>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>)}
                </div>))}
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Connect on Social Media</h3>
              <div className="space-y-3">
                {socialLinks.map((social, idx) => (<Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-colors group">
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                    <div className="flex-1">
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </Link>))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            {isSubmitted ? (<div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="p-4 rounded-full bg-primary/20 text-primary mb-4">
                  <CheckCircle className="h-8 w-8"/>
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>) : (<form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="bg-background/50 border-border/50 focus:border-primary" required/>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="bg-background/50 border-border/50 focus:border-primary" required/>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={5} placeholder="Tell me about your project..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" required/>
                </div>
                
                <Button type="submit" size="lg" className="w-full glow">
                  <Send className="mr-2 h-5 w-5"/>
                  Send Message
                </Button>
              </form>)}
          </div>
        </div>
      </div>
    </section>);
}
