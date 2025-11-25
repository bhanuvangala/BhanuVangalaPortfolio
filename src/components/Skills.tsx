import { Code2, Database, Palette, GitBranch, Zap, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Palette className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Supabase", "MySQL", "REST APIs", "Server-side Logic"],
    },
    {
      category: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["JavaScript", "Python", "Java", "TypeScript"],
    },
    {
      category: "AI & Innovation",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Lovable AI", "Generative AI", "AI Integration", "Machine Learning"],
    },
    {
      category: "Tools & Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "Vercel"],
    },
    {
      category: "Core Competencies",
      icon: <Zap className="h-6 w-6" />,
      skills: ["Problem Solving", "Algorithms", "Data Structures", "UI/UX Design"],
    },
  ];

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="animate-fade-in-up">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glass group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies. Always eager to take on 
            challenging projects and expand my skill set.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
