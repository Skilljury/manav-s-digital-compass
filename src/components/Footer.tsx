import { Mail, Linkedin, Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">
        Manav Joshi · Kouvola, Finland · 2026
      </p>
      <div className="flex items-center gap-5">
        <a href="https://www.linkedin.com/in/manavjoshi1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="mailto:jmanav2000@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={16} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Globe size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
