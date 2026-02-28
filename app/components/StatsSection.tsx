"use client";

import {
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  FadeIn,
} from "./MotionWrappers";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: 200, suffix: "+", label: "Industry Partners" },
    { value: 100, suffix: "+", label: "Academic Ties" },
    { value: 50, suffix: "+", label: "Labs Set Up" },
    { value: 10, suffix: "k+", label: "Students Impacted" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <StaggerContainer
          stagger={0.15}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group p-6 rounded-3xl bg-surface/30 border border-white/5 hover:border-accent/20 transition-all duration-500 hover:shadow-glow"
              >
                <div className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-linear-to-b from-accent to-accent-dark drop-shadow-md">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="h-1 w-8 mx-auto bg-accent/20 rounded-full my-4 group-hover:w-16 group-hover:bg-accent transition-all duration-500"></div>
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted group-hover:text-text-primary transition-colors">
                  {stat.label}
                </h4>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
