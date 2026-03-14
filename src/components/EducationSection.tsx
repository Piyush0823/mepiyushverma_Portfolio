import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "K.K. College of Engineering and Management, Dhanbad",
    period: "2022 – 2026",
    score: "CGPA: 7.2",
  },
  {
    icon: BookOpen,
    degree: "Intermediate (12th)",
    institution: "St. Thomas School, Topchanchi, Dhanbad",
    period: "2020 – 2022",
    score: "Score: 63%",
  },
  {
    icon: School,
    degree: "Matriculation (10th)",
    institution: "Dwarika Memorial Foundation Academy, Dhanbad",
    period: "2019 – 2020",
    score: "Score: 64%",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        My <span className="gradient-text">Education</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-8">
          {education.map((e, i) => (
            <motion.div
              key={i}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                <e.icon size={20} className="text-primary" />
              </div>

              {/* Card */}
              <div className="glass p-6 flex-1">
                <span className="text-xs text-primary font-medium">{e.period}</span>
                <h3 className="font-display font-semibold text-lg mt-1">{e.degree}</h3>
                <p className="text-muted-foreground text-sm mt-1">{e.institution}</p>
                <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {e.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
