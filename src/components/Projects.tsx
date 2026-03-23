import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, FileText, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Stratos Air Taxi Services",
    tag: "Service Design",
    grade: "5/5",
    desc: "Service blueprint, customer journey map, and value proposition canvas for an urban air taxi concept.",
    detail: "Designed a full service concept for an urban air taxi startup called Stratos. Created a detailed service blueprint mapping out every touchpoint from booking to landing. Developed a customer journey map highlighting pain points and opportunities in the urban commute experience. Built a value proposition canvas to align the service with real customer needs like time savings, reliability, and safety. The project also included competitor benchmarking against existing mobility services and a pricing strategy proposal.",
    link: "/pdfs/stratos-air-taxi.pdf",
    type: "pdf",
  },
  {
    title: "Honda Supply Chain Analysis",
    tag: "Supply Chain",
    grade: "3/5",
    desc: "Multi-country procurement network mapping with TQM, DMAIC, and JIT quality evaluation.",
    detail: "Analyzed Honda's global supply chain network across multiple countries, focusing on how they manage procurement and logistics at scale. Mapped out their supplier tiers and evaluated their use of Total Quality Management (TQM) principles. Applied the DMAIC framework to identify inefficiencies in their production flow. Reviewed their Just-In-Time (JIT) inventory system and assessed how it reduces waste while maintaining production speed. Included recommendations for improving supplier relationship management.",
    link: "/pdfs/honda-supply-chain.pdf",
    type: "pdf",
  },
  {
    title: "Coco Treat HR System",
    tag: "HR Management",
    grade: "5/5",
    desc: "Recruitment pipeline with competency-based interviews and KPI-based appraisal system.",
    detail: "Built a complete HR management system for a fictional company called Coco Treat. Designed the full recruitment pipeline from job posting to onboarding, including structured competency-based interview frameworks. Created a performance appraisal system using KPIs tailored to different roles within the organization. Developed employee development plans with training recommendations and career progression paths. The project also covered compensation benchmarking and employee retention strategies.",
    link: "/pdfs/coco-treat-hr.pdf",
    type: "pdf",
  },
  {
    title: "Fazer Export Strategy",
    tag: "International Business",
    grade: "4/5",
    desc: "SWOT/PESTEL analysis and Incoterms 2020 logistics framework for Finland-to-India export.",
    detail: "Developed an export strategy for Fazer, a well-known Finnish food company, targeting the Indian market. Conducted a comprehensive SWOT analysis of Fazer's competitive position and a PESTEL analysis of the Indian business environment covering political, economic, social, and cultural factors. Designed a logistics framework using Incoterms 2020, selecting the most cost-effective shipping and delivery terms. Addressed regulatory requirements, tariff structures, and market entry barriers specific to the food industry in India.",
    link: "/pdfs/fazer-export-strategy.pdf",
    type: "pdf",
  },
  {
    title: "TapLock & Kouvola Smart City",
    tag: "Innovation",
    grade: "4/5",
    desc: "NFC smart access prototype and smart city innovation roadmap for Kouvola.",
    detail: "This project had two parts. First, designed TapLock, an NFC-based smart access system prototype that replaces traditional keys with contactless technology. Mapped out the user experience, technical architecture, and go-to-market strategy for the product. Second, created a smart city innovation roadmap for the city of Kouvola, identifying opportunities in transportation, energy management, and public services. Proposed actionable initiatives that could be implemented in phases, with cost-benefit analysis for each.",
    link: "/pdfs/taplock-kouvola-smartcity.pdf",
    type: "pdf",
  },
  {
    title: "Chicago Narcotics Crime Analysis",
    tag: "Data Visualisation",
    grade: null,
    desc: "Large-scale crime dataset analysis with pivot tables and 3D Maps geo-visualisations.",
    detail: "Worked with a large dataset of narcotics-related crime records from Chicago. Cleaned and organized the data using Excel, then built pivot tables to identify trends by neighborhood, time of day, and season. Created 3D Maps geo-visualizations to show crime hotspots across the city, making patterns easy to understand at a glance. The analysis revealed correlations between crime frequency and socioeconomic factors in different areas. Presented findings with clear charts and actionable insights for policy recommendations.",
    link: "#",
    type: "video",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              className="glass-card-hover p-6 flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="pill">{project.tag}</span>
                {project.grade && (
                  <span className="text-xs font-semibold text-accent">{project.grade}</span>
                )}
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.desc}</p>

              <div className="flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
                <ChevronRight size={14} />
                View Details
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-xl bg-background border-border">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <span className="pill">{selectedProject?.tag}</span>
              {selectedProject?.grade && (
                <span className="text-xs font-semibold text-accent">{selectedProject.grade}</span>
              )}
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            {selectedProject?.detail}
          </DialogDescription>
          <div className="pt-2">
            <a
              href={selectedProject?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
            >
              {selectedProject?.type === "pdf" ? <FileText size={14} /> : <ExternalLink size={14} />}
              {selectedProject?.type === "pdf" ? "View PDF" : "Watch Video"}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
