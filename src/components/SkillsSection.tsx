import { Code2, Database, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: ["Java", "Python"],
  },
  {
    title: "Web Development",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Technologies",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["Git", "VS Code", "Linux"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto space-y-10">
      <div>
        <h2 className="text-3xl font-bold text-primary">Skills</h2>
        <div className="h-1 w-12 bg-primary rounded mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <Card key={cat.title} className="bg-background">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                {cat.icon}
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
