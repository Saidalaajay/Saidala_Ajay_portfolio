import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import GlassCard from "./GlassCard";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-glow">
            Saidala Ajay
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            Aspiring Software & IoT Developer
          </h2>
        </div>
        
        <GlassCard className="p-6 max-w-2xl mx-auto" hover>
          <p className="text-lg text-card-foreground leading-relaxed">
            B.Tech IT student passionate about software development, full-stack projects, 
            IoT, and embedded systems. Experienced in hackathons, cloud, and data technologies.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:saidalaajay2003@gmail.com">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </Button>
          <Button variant="neon" size="lg" asChild>
            <a href="https://github.com/SaidalaAjay" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="https://linkedin.com/in/saidalaajay2003" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-accent" />
        </button>
      </div>
    </section>
  );
};

export default Hero;