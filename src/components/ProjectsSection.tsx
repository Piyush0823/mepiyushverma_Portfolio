import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Used Car Price Predictor",
    description:
      "A machine learning web application that predicts the market value of used cars based on dataset analysis.",
    tech: ["Python", "Streamlit", "HTML", "CSS"],
    features: ["User input form", "Real-time price prediction", "ML model integration"],
  },
  {
    title: "Netflix UI Clone",
    description:
      "A front-end recreation of Netflix's user interface to practice modern layout techniques and animations.",
    tech: ["HTML", "CSS"],
    features: ["Responsive UI", "Netflix-style animations", "Modern layout design"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-secondary/20">
    <div className="container mx-auto">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        My <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="glass p-6 md:p-8 group hover:glow-sm transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <h3 className="font-display font-semibold text-xl mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-1 mb-6">
              {p.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                <ExternalLink size={14} /> Live Demo
              </a>
              <a href="#" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition">
                <Github size={14} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
