import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", pct: 90 },
      { name: "JavaScript", pct: 85 },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Data Science", pct: 80 },
      { name: "Machine Learning", pct: 85 },
      { name: "Web Development", pct: 90 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", pct: 85 },
      { name: "Node.js", pct: 80 },
      { name: "Express.js", pct: 78 },
      { name: "TensorFlow", pct: 75 },
      { name: "Scikit-Learn", pct: 80 },
      { name: "PyTorch", pct: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", pct: 85 },
      { name: "MongoDB", pct: 80 },
      { name: "Streamlit", pct: 75 },
      { name: "AWS", pct: 65 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Technical <span className="gradient-text">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="glass p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg mb-5 gradient-text">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
