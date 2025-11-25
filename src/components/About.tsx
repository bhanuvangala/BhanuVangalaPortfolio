import { Code2, Sparkles, GraduationCap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Final Year IT Student passionate about technology and innovation",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Development",
      description: "Full-stack developer specializing in React, JavaScript, and modern web technologies",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Enthusiast",
      description: "Exploring artificial intelligence and building intelligent applications",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goals",
      description: "Creating impactful solutions that combine elegant code with user-centric design",
    },
  ];

  return (
    <section id="about" className="section-container bg-muted/30">
      <div className="animate-fade-in-up">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hi! I'm <span className="text-primary font-semibold">Bhanu Vangala</span>, a passionate web developer 
            and AI enthusiast from <span className="font-semibold">Hyderabad, India</span>. Currently pursuing my 
            final year in Information Technology , I'm dedicated to creating innovative digital solutions 
            that make a difference.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in tech is driven by curiosity and a love for problem-solving. Whether it's building 
            responsive web applications, exploring AI possibilities, or diving into new frameworks, I approach 
            every project with enthusiasm and attention to detail.
          </p>
          <p className="text-xl font-semibold mt-8 gradient-text italic">
            "Code with purpose, design with heart."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-glass group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
