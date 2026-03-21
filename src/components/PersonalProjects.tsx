import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

const PersonalProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="personal-projects" className="py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Featured</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Personal Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative group"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/50 via-accent/30 to-primary/50 opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative glass-card rounded-2xl p-8 md:p-10 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full bg-accent/15 text-accent border border-accent/25">
                <Sparkles size={12} />
                Personal Project
              </span>
              <span className="pill">AI Agent Skill Discovery</span>
              <span className="text-xs text-muted-foreground italic">Vibe-coded with Codex &amp; Claude</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">SkillJury</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              A discovery and review platform for AI agent skills. Indexes 4,274+ skills across 23 agents (Claude Code, Cursor, Codex, Cline, and more) with security audits (GEN/SOCKET/SNYK checks), leaderboard rankings, install context, and source tracking from 784 GitHub repositories.
            </p>

            <a
              href="https://skilljury.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              Visit Live Site
              <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalProjects;
