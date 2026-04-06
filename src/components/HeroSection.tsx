import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
  >
    <div className="max-w-2xl space-y-6 animate-fade-in">
      <p className="text-sm tracking-widest uppercase text-muted-foreground">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
        Suman NG
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto">
        Aspiring Software Engineer passionate about building clean, efficient solutions with Java & Python.
      </p>
      <div className="flex gap-4 justify-center pt-4">
        <Button asChild>
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4" /> Get in Touch
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#projects">View Projects</a>
        </Button>
      </div>
      <a
        href="#about"
        className="inline-block mt-12 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </div>
  </section>
);

export default HeroSection;
