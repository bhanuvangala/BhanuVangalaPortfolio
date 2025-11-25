import { Download, Linkedin, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Download",
      description: "Please upload your resume PDF to enable downloads. Contact the developer to add your resume file.",
      variant: "default",
    });
  };

  const contactInfo = [
    { label: "Location", value: "Hyderabad, Telangana, India" },
    { label: "Email", value: "bhanuvangala23568@gmail.com" },
    { label: "Phone", value: "+91-7901556049" },
  ];

  return (
    <section id="resume" className="section-container bg-muted/30">
      <div className="animate-fade-in-up">
        <h2 className="section-title">Resume</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-glass text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                <FileText className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Download My Resume
              </h3>
              <p className="text-muted-foreground">
                Get a detailed overview of my experience, skills, and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-sm font-semibold text-foreground">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDownload}
                className="btn-primary"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF Resume
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2"
              >
                <a
                  href="https://www.linkedin.com/in/bhanu-vangala-947a81307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  View LinkedIn Profile
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Also available on professional platforms:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/bhanuvangala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/bhanu-vangala-947a81307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
