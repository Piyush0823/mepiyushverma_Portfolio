import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle } from "lucide-react";

const info = [
  { icon: Mail, label: "Piyushverma4355@gmail.com", href: "mailto:Piyushverma4355@gmail.com" },
  { icon: Phone, label: "9508137060", href: "tel:9508137060" },
  { icon: MapPin, label: "Dhanbad, Jharkhand, India", href: "#" },
  { icon: Linkedin, label: "piyushverma4355", href: "https://linkedin.com/in/piyushverma4355" },
  { icon: Github, label: "piyush0823", href: "https://github.com/piyush0823" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'RkeuJr7RHwRIPe0Ul');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_oboxp9f',
        'template_rx0642r',
        formRef.current!,
        'RkeuJr7RHwRIPe0Ul'
      );
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            className="glass p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-5">
              {info.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass p-6 md:p-8 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input type="hidden" name="to_name" value="Piyush Verma" />
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Name</label>
              <input
                type="text"
                name="from_name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass text-foreground focus:border-primary focus:outline-none transition text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
              <input
                type="email"
                name="from_email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass text-foreground focus:border-primary focus:outline-none transition text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass text-foreground focus:border-primary focus:outline-none transition text-sm resize-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition glow-sm"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

