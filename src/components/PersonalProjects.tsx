import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Sparkles, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PersonalProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [detailOpen, setDetailOpen] = useState(false);

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
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">SkillJury</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              A discovery and review platform for AI agent skills. Indexes 4,274+ skills across 23 agents (Claude Code, Cursor, Codex, Cline, and more) with security audits (GEN/SOCKET/SNYK checks), leaderboard rankings, install context, and source tracking from 784 GitHub repositories.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://skilljury.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                Visit Live Site
                <ExternalLink size={15} />
              </a>
              <button
                onClick={() => setDetailOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                <ChevronRight size={14} />
                Read More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-w-xl bg-background border-border">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full bg-accent/15 text-accent border border-accent/25">
                <Sparkles size={12} />
                Personal Project
              </span>
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              SkillJury
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <span className="block">
              SkillJury is a platform I built to solve a real problem: there was no easy way to discover, compare, and evaluate skills (also called MCPs or tools) across different AI coding agents.
            </span>
            <span className="block">
              The platform indexes over 4,274 skills from 23 different AI agents including Claude Code, Cursor, Codex, Cline, and others. Each skill is tracked with its source repository, install instructions, and compatibility information.
            </span>
            <span className="block">
              One of the key features is the security audit system. Every skill gets scanned using multiple security tools (GEN, SOCKET, and SNYK checks) so developers can make informed decisions before installing anything. There is also a leaderboard ranking system and source tracking that pulls data from 784 GitHub repositories.
            </span>
            <span className="block">
              The goal was to create a trusted, centralized place where developers can find the right tools for their AI workflows without worrying about security risks or compatibility issues.
            </span>
          </DialogDescription>
          <div className="pt-2">
            <a
              href="https://skilljury.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={14} />
              Visit Live Site
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PersonalProjects;
