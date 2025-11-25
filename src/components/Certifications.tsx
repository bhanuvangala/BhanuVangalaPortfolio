import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI Certification",
      issuer: "GUVI",
      date: "2024",
      description: "Comprehensive training in generative AI technologies, models, and practical applications in modern software development.",
      skills: ["Generative AI", "LLMs", "AI Integration", "Prompt Engineering"],
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
      credentialUrl: "#",
    },
    {
      title: "Python Programming Certification",
      issuer: "Google (Coursera)",
      date: "2024",
      description: "Advanced Python programming concepts, data structures, algorithms, and best practices for building robust applications.",
      skills: ["Python", "Data Structures", "Algorithms", "Best Practices"],
      logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=200&h=200&fit=crop",
      credentialUrl: "#",
    },
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="animate-fade-in-up">
        <h2 className="section-title">Certifications</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-glass group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all duration-300">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-lg text-primary font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
