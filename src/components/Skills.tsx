import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Business & Strategy",
    skills: ["Supply Chain Analysis", "Market Research", "SWOT", "PESTEL", "DMAIC", "Kraljic Matrix"],
  },
  {
    category: "Data & Tools",
    skills: ["Excel (Advanced)", "Power BI", "ERP Fundamentals", "KPI Development"],
  },
  {
    category: "Operations",
    skills: ["Lean", "5S", "Kaizen", "Performance Measurement", "Process Improvement"],
  },
  {
    category: "Marketing & Digital",
    skills: ["SEO", "Google Analytics", "Google Ads", "Email Marketing", "Canva", "Shopify"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Toolkit</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
