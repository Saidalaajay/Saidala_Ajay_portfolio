import GlassCard from "./GlassCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "PHP"],
      color: "neon-cyan",
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "Node.js", "React", "TypeScript"],
      color: "neon-purple",
    },
    {
      title: "IoT & Hardware",
      skills: ["Arduino", "MicroPython", "Sensor Integration", "Embedded Systems"],
      color: "neon-pink",
    },
    {
      title: "Cloud & Data",
      skills: ["AWS", "MySQL", "Data Visualization", "Cloud Technologies"],
      color: "neon-blue",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard 
              key={category.title} 
              className="p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold text-neon-${category.color} mb-2`}>
                  {category.title}
                </h3>
                <div className={`w-12 h-1 bg-neon-${category.color} mx-auto rounded-full`}></div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill} 
                    className="flex items-center justify-between p-3 rounded-lg bg-gradient-glass hover:bg-glass/30 transition-all duration-300 group"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-card-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                    <div className={`w-2 h-2 bg-neon-${category.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;