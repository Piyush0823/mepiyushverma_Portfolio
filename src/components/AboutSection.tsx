import { motion } from "framer-motion";
import { Code2, Brain, Globe, BarChart3, MapPin, BookOpen, Lightbulb } from "lucide-react";
import profileImg from "@/assets/profile-about.png";

const highlights = [
  { icon: Code2, label: "CS Engineering Student" },
  { icon: Brain, label: "ML Enthusiast" },
  { icon: Globe, label: "Full Stack Developer" },
  { icon: BarChart3, label: "Data Science Learner" },
];

const facts = [
  { icon: MapPin, text: "Dhanbad, Jharkhand, India" },
  { icon: BookOpen, text: "B.Tech CSE, 2022–2026" },
  { icon: Lightbulb, text: "Loves problem solving & open source" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
        A snapshot of who I am, what drives me, and where I'm headed.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass p-2 glow-sm">
            <img
              src={profileImg}
              alt="Piyush Verma"
              className="rounded-lg w-full max-w-sm object-cover"
            />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={item} className="text-muted-foreground leading-relaxed mb-6">
            I'm a passionate developer who thrives at the intersection of software engineering
            and data science. Currently in my final year of B.Tech in Computer Science, I spend
            my time building full-stack applications and training machine learning models to
            solve meaningful problems.
          </motion.p>
          <motion.p variants={item} className="text-muted-foreground leading-relaxed mb-8">
            My goal is to gain real-world experience through internships and entry-level roles
            where I can contribute to innovative solutions while growing as an engineer.
          </motion.p>

          {/* Highlights */}
          <motion.div variants={item} className="grid grid-cols-2 gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h.label} className="glass p-4 flex items-center gap-3">
                <h.icon size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{h.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick facts */}
          <motion.div variants={item} className="flex flex-col gap-3">
            {facts.map((f) => (
              <div key={f.text} className="flex items-center gap-3 text-muted-foreground">
                <f.icon size={16} className="text-primary" />
                <span className="text-sm">{f.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
