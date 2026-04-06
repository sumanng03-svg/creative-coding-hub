const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-primary">About Me</h2>
      <div className="h-1 w-12 bg-primary rounded" />
      <p className="text-muted-foreground leading-relaxed">
        I'm Suman NG, a Computer Science student with a strong interest in software development.
        I enjoy solving problems and building applications using Java and Python. I'm always eager
        to learn new technologies and improve my skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-medium text-foreground">suman.ng03@gmail.com</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Phone</p>
          <p className="font-medium text-foreground">+91 7676308583</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Field</p>
          <p className="font-medium text-foreground">Computer Science</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Location</p>
          <p className="font-medium text-foreground">India</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
