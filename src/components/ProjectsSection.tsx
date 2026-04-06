import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project Coming Soon",
    description:
      "I'm currently working on exciting projects. Stay tuned for updates!",
    tech: ["Java", "Python"],
  },
  {
    title: "Portfolio Website",
    description:
      "This personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase my skills and projects.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-4xl mx-auto space-y-10">
      <div>
        <h2 className="text-3xl font-bold text-primary">Projects</h2>
        <div className="h-1 w-12 bg-primary rounded mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="bg-background hover:shadow-md transition-shadow">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="text-primary p-0 h-auto" disabled>
                <ExternalLink className="mr-1 h-3 w-3" /> View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
