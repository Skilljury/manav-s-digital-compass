import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Attract and Engage Customers with Digital Marketing", issuer: "Google, Coursera", link: "https://coursera.org/share/b43b11fc9d2f0d85d097bd3b4aaa2bf9" },
  { title: "Foundations of Digital Marketing and E-commerce", issuer: "Google, Coursera", link: "https://coursera.org/share/ee54186bcc0e0a3b49c87d2a150ff356" },
  { title: "Introduction to Google SEO", issuer: "UC Davis, Coursera", link: "https://coursera.org/share/10858ad46c738262a0f86ec98896f9eb" },
  { title: "Basics of Digital Marketing", issuer: "Coursera", link: "https://coursera.org/share/52a43fede0e1250b34df053e2ccaf58c" },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic Education", link: "https://verify.skilljar.com/c/f7t35d652c2y" },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Credentials</h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card-hover p-5 flex items-start gap-4"
            >
              <Award size={18} className="text-primary mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors shrink-0"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
