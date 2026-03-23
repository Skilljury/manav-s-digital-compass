import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Plane, GraduationCap, FolderOpen } from "lucide-react";

const stats = [
  { icon: Plane, value: 86, label: "Flight Hours", suffix: "" },
  { icon: GraduationCap, value: 110, label: "ECTS Credits", suffix: "" },
  { icon: FolderOpen, value: 7, label: "Projects", suffix: "" },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span>{count}</span>;
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">About</span>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            BBA student in Digital International Business at XAMK, Finland. I work at the intersection of strategy and data, applying frameworks like SWOT, PESTEL, DMAIC, and the Kraljic Matrix to real business problems. Former flight student with 86 logged hours on a Cessna 172. Aviation taught me precision, checklists, and calm decision-making under pressure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon size={20} className="text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <Counter target={stat.value} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
