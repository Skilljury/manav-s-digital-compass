import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Stratos Air Taxi Services",
    tag: "Service Design",
    grade: "5/5",
    desc: "Service blueprint, customer journey map, and value proposition canvas for an urban air taxi concept.",
    link: "/pdfs/stratos-air-taxi.pdf",
    type: "pdf",
  },
  {
    title: "Honda Supply Chain Analysis",
    tag: "Supply Chain",
    grade: "3/5",
    desc: "Multi-country procurement network mapping with TQM, DMAIC, and JIT quality evaluation.",
    link: "/pdfs/honda-supply-chain.pdf",
    type: "pdf",
  },
  {
    title: "Coco Treat HR System",
    tag: "HR Management",
    grade: "5/5",
    desc: "Recruitment pipeline with competency-based interviews and KPI-based appraisal system.",
    link: "/pdfs/coco-treat-hr.pdf",
    type: "pdf",
  },
  {
    title: "Fazer Export Strategy",
    tag: "International Business",
    grade: "4/5",
    desc: "SWOT/PESTEL analysis and Incoterms 2020 logistics framework for Finland-to-India export.",
    link: "/pdfs/fazer-export-strategy.pdf",
    type: "pdf",
  },
  {
    title: "TapLock & Kouvola Smart City",
    tag: "Innovation",
    grade: "4/5",
    desc: "NFC smart access prototype and smart city innovation roadmap for Kouvola.",
    link: "/pdfs/taplock-kouvola-smartcity.pdf",
    type: "pdf",
  },
  {
    title: "Chicago Narcotics Crime Analysis",
    tag: "Data Visualisation",
    grade: null,
    desc: "Large-scale crime dataset analysis with pivot tables and 3D Maps geo-visualisations.",
    link: "#",
    type: "video",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="pill">{project.tag}</span>
                {project.grade && (
                  <span className="text-xs font-semibold text-accent">{project.grade}</span>
                )}
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                {project.type === "pdf" ? <FileText size={14} /> : <ExternalLink size={14} />}
                {project.type === "pdf" ? "View PDF" : "Watch Video"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
