import { Linkedin, Github, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/piyushverma4355" },
  { icon: Github, href: "https://github.com/piyush0823" },
  { icon: Mail, href: "mailto:Piyushverma4355@gmail.com" },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="font-display text-xl font-bold gradient-text">
        Piyush Verma
      </a>

      <div className="flex gap-6">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex gap-3">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
          >
            <s.icon size={16} />
          </a>
        ))}
      </div>
    </div>
    <p className="text-center text-xs text-muted-foreground mt-6">
      © 2026 Piyush Verma. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
