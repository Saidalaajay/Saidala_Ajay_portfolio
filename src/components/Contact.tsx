import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import GlassCard from "./GlassCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saidalaajay2003@gmail.com",
      link: "mailto:saidalaajay2003@gmail.com",
      color: "neon-cyan",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9505264456",
      link: "tel:+919505264456",
      color: "neon-purple",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SaidalaAjay",
      link: "https://github.com/SaidalaAjay",
      color: "neon-pink",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/saidalaajay2003",
      link: "https://linkedin.com/in/saidalaajay2003",
      color: "neon-blue",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">Let's connect and build something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <GlassCard 
                key={contact.label} 
                className="p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={contact.link} 
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 group-hover:text-accent transition-colors"
                >
                  <div className={`p-3 rounded-lg bg-neon-${contact.color}/10 border border-neon-${contact.color}/20`}>
                    <IconComponent className={`w-6 h-6 text-neon-${contact.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{contact.label}</h3>
                    <p className="text-card-foreground text-sm">{contact.value}</p>
                  </div>
                </a>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="p-8 text-center">
          <h3 className="text-2xl font-semibold text-accent mb-4">Ready to collaborate?</h3>
          <p className="text-card-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:saidalaajay2003@gmail.com">
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </Button>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;