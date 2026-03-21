import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Bot, Crown, Gamepad2 } from "lucide-react";

const interests = [
  { icon: Plane, label: "Aviation", sub: "86 logged hours, Cessna 172" },
  { icon: Bot, label: "AI & Automation", sub: null },
  { icon: Crown, label: "Chess", sub: null },
  { icon: Gamepad2, label: "Gaming", sub: null },
];

const Interests = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Interests</span>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card px-5 py-4 flex items-center gap-3"
            >
              <item.icon size={18} className="text-primary" />
              <div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                {item.sub && <p className="text-xs text-muted-foreground">{item.sub}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
