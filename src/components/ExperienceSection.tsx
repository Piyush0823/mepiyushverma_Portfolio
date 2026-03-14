import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Trainee",
    company: "Ardent Computech Pvt. Ltd., Kolkata",
    period: "Jul 2025 – Aug 2025",
    tasks: [
      "Built, trained, and deployed ML models using Scikit-Learn, TensorFlow & PyTorch.",
      "Developed APIs to expose ML models for production use.",
      "Deployed models on cloud platforms including AWS.",
      "Learned AI integration, cloud deployment, and DevOps practices.",
    ],
  },
  {
    role: "Software Developer",
    company: "GeeksforGeeks (Remote)",
    period: "Jun 2025 – Oct 2025",
    tasks: [
      "Developed full-stack web applications using the MERN stack.",
      "Built responsive front-end interfaces with React.js.",
      "Implemented backend server logic and database integration.",
      "Ensured seamless client-server communication.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Work <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="glass p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                <p className="text-muted-foreground text-sm">{exp.company}</p>
                <span className="text-xs text-primary">{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2 ml-14">
              {exp.tasks.map((t, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
