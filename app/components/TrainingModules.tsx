"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

export default function TrainingModules() {
  const modules = [
    {
      icon: "code",
      gradient: "from-blue-500 to-cyan-500",
      title: "Technical Mastery",
      description: "Full-stack, DevOps, and Data Science bootcamps.",
    },
    {
      icon: "groups",
      gradient: "from-purple-500 to-pink-500",
      title: "Leadership & Soft Skills",
      description: "Emotional intelligence and agile management.",
    },
    {
      icon: "strategy",
      gradient: "from-orange-500 to-red-500",
      title: "Executive Strategy",
      description: "Digital transformation workshops for C-Suite.",
    },
  ];

  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
      id="training"
    >
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">
            Corporate Training Modules
          </h2>
        </FadeIn>
        <StaggerContainer
          stagger={0.2}
          className="grid md:grid-cols-3 gap-8 perspective-1000"
        >
          {modules.map((mod, i) => (
            <StaggerItem
              key={mod.title}
              className={i === 1 ? "mt-8 md:mt-0" : ""}
            >
              <motion.div
                whileHover={{ y: -16, rotateX: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-8 rounded-3xl group"
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  className={`w-16 h-16 bg-linear-to-br ${mod.gradient} rounded-2xl shadow-lg mb-6 flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-white text-3xl">
                    {mod.icon}
                  </span>
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {mod.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {mod.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
