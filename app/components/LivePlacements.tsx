"use client";

import { FadeIn, SlideIn } from "./MotionWrappers";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function LivePlacements() {
  const placements = [
    { salary: "₹ 12 LPA", name: "Rohan K.", company: "Google" },
    { salary: "₹ 8 LPA", name: "Priya S.", company: "Accenture" },
    { salary: "₹ 18 LPA", name: "Amit V.", company: "Amazon" },
  ];

  return (
    <section className="py-12 bg-surface-alt border-y border-slate-200 dark:border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <SlideIn from="left" className="md:w-1/4">
          <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            Live Placements
          </h3>
          <p className="text-sm text-text-muted">Real-time hiring updates</p>
        </SlideIn>
        <FadeIn className="md:w-3/4 h-16 relative overflow-hidden mask-linear-fade">
          <motion.div
            animate={{ y: [0, -80, -160, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col gap-4"
          >
            {[...placements, ...placements].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center gap-4 bg-surface/40 backdrop-blur-sm p-3 rounded-xl border border-white/5 mx-2"
              >
                <Badge className="bg-accent text-text-inverse border-none font-bold">
                  {p.salary}
                </Badge>
                <span className="text-text-primary font-medium">{p.name}</span>
                <span className="text-text-muted text-sm hidden sm:inline">
                  placed at
                </span>
                <span className="font-bold text-accent">{p.company}</span>
              </div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
