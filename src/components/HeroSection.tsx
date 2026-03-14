import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/piyushverma4355", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/piyush0823", label: "GitHub" },
  { icon: Mail, href: "mailto:Piyushverma4355@gmail.com", label: "Email" },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[100px] animate-pulse-glow" />

    <div className="container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 py-32">
      {/* Text */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-display font-medium mb-2 tracking-wider text-sm uppercase">
          Hello, I'm
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Piyush <span className="gradient-text">Verma</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-3 font-display">
          Computer Science Engineer · ML Enthusiast · Full-Stack Developer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
          Motivated and detail-oriented final year Computer Science Engineering student with a
          strong foundation in programming, data structures, Python, Data Science, and web
          development. Passionate about solving real-world problems using technology.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-sm">
            View Portfolio
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-glass text-foreground hover:bg-secondary transition">
            Contact Me
          </a>
          <a
            href="/Piyush_Verma_CV.pdf"
            download
            className="px-6 py-3 rounded-lg border border-glass text-foreground hover:bg-secondary transition flex items-center gap-2"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 justify-center lg:justify-start">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
              aria-label={s.label}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-xl" />
          <img
            src={profileImg}
            alt="Piyush Verma"
            className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover object-top border-2 border-glass glow-md"
          />
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
