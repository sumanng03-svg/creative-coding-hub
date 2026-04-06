import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-xl mx-auto text-center space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
        <div className="h-1 w-12 bg-primary rounded mt-3 mx-auto" />
        <p className="text-muted-foreground mt-4">
          Feel free to reach out. I'd love to hear from you!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <a href="mailto:suman.ng03@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> suman.ng03@gmail.com
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="tel:+917676308583">
            <Phone className="mr-2 h-4 w-4" /> +91 7676308583
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
