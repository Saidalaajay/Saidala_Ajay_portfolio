import GlassCard from "./GlassCard";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know more about my journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8" hover>
            <h3 className="text-2xl font-semibold text-accent mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 hover:border-accent transition-colors">
                <h4 className="text-lg font-semibold text-foreground">B.Tech in Information Technology</h4>
                <p className="text-muted-foreground">Expected 2025 | CGPA: 8.5/10</p>
                <p className="text-sm text-card-foreground mt-2">
                  Focused on software development, data structures, and emerging technologies.
                </p>
              </div>
              <div className="border-l-2 border-neon-cyan pl-6 hover:border-accent transition-colors">
                <h4 className="text-lg font-semibold text-foreground">Diploma in Electrical & Electronics Engineering</h4>
                <p className="text-muted-foreground">2023 | CGPA: 8.0/10</p>
                <p className="text-sm text-card-foreground mt-2">
                  Strong foundation in electronics and embedded systems.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8" hover>
            <h3 className="text-2xl font-semibold text-accent mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-neon-purple pl-6 hover:border-accent transition-colors">
                <h4 className="text-lg font-semibold text-foreground">CNC Training</h4>
                <p className="text-muted-foreground">Shiva CNC Technologies | 6 Months</p>
                <p className="text-sm text-card-foreground mt-2">
                  Hands-on experience with Computer Numerical Control systems and precision manufacturing.
                </p>
              </div>
              <div className="border-l-2 border-neon-pink pl-6 hover:border-accent transition-colors">
                <h4 className="text-lg font-semibold text-foreground">Hackathon Participant</h4>
                <p className="text-muted-foreground">Multiple Events</p>
                <p className="text-sm text-card-foreground mt-2">
                  Active participant in BITS Pilani Techccelerate, VISAI 2025, Hacksavvy MGIT, and Specathon SPEC.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-8 mt-8" hover>
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-gradient-glass">
              <p className="font-medium text-foreground">ISRO Remote Sensing</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-glass">
              <p className="font-medium text-foreground">ISRO GNSS</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-glass">
              <p className="font-medium text-foreground">Google Skill Boost</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-glass">
              <p className="font-medium text-foreground">SQL Certification</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-glass">
              <p className="font-medium text-foreground">And More...</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;