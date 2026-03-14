import { motion } from "framer-motion";
import { Globe, Brain, BarChart3, Palette, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    items: ["Full-stack web applications", "Responsive website development", "MERN stack solutions"],
  },
  {
    icon: Brain,
    title: "ML Solutions",
    items: ["Predictive modeling", "Data-driven applications", "ML model deployment"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    items: ["Data cleaning & visualization", "Insight generation", "Statistical analysis"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    items: ["Modern interface design", "Interactive web experiences", "User-centric layouts"],
  },
  {
    icon: Server,
    title: "API Development",
    items: ["REST API development", "Backend integration", "Scalable architecture"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        My <span className="gradient-text">Services</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="glass p-6 hover:glow-sm transition-shadow duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-3">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
