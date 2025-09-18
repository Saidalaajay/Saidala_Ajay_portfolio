import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "./GlassCard";

const Projects = () => {
  const projects = [
    {
      title: "3-Phase Transmission Line Fault Detection",
      description: "IoT-based system for real-time monitoring and fault detection in electrical transmission lines using Arduino and sensor networks.",
      tech: ["Arduino", "MicroPython", "Sensors", "IoT"],
      gradient: "from-neon-cyan to-neon-blue",
    },
    {
      title: "Laravel-Based URL Shortener",
      description: "Full-stack web application for URL shortening with analytics, user management, and custom short links.",
      tech: ["Laravel", "PHP", "MySQL", "Web Dev"],
      gradient: "from-neon-purple to-neon-pink",
    },
    {
      title: "Blogging Platform with User Management",
      description: "Complete blogging platform with user authentication, content management, and responsive design.",
      tech: ["Web Development", "User Auth", "CMS"],
      gradient: "from-neon-pink to-neon-cyan",
    },
    {
      title: "Advanced DataTable",
      description: "Feature-rich data table component built with React, TypeScript, and PrimeReact for complex data visualization.",
      tech: ["React", "TypeScript", "PrimeReact"],
      gradient: "from-neon-blue to-neon-purple",
    },
    {
      title: "Full Stack Donation & Rewards Web App",
      description: "Comprehensive donation platform with reward system, payment integration, and user dashboard.",
      tech: ["Full Stack", "Payment Gateway", "React"],
      gradient: "from-neon-cyan to-neon-purple",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my notable work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard 
              key={project.title} 
              className="p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-card-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs bg-gradient-glass border border-glass-border/30 rounded-full text-card-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="neon" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="glass" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;