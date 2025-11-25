import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "PrintYourGifts",
      description: "A modern e-commerce platform for personalized gifts built with React. Features include product browsing, cart management, and responsive design for seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=500&fit=crop",
      tags: ["React", "JavaScript", "E-commerce", "Responsive Design"],
      liveLink: "https://printyourgifts-2f1ed675.vercel.app",
      githubLink: "https://github.com/bhanuvangala",
    },
    {
      title: "AI Resume Analyser",
      description: "An intelligent application that analyzes resumes using AI to provide insights, suggestions, and matching scores. Helps job seekers optimize their resumes for better opportunities.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
      tags: ["AI", "React", "NLP", "Data Analysis"],
      liveLink: "https://ai-resume-analyser-1p5hld7kz-vangala-bhanus-projects.vercel.app",
      githubLink: "https://github.com/bhanuvangala",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="animate-fade-in-up">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glass group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <Button asChild size="sm" className="rounded-full">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
