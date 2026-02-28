"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      className="py-24 bg-primary relative overflow-hidden"
      id="training"
    >
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary">
            Corporate Training Modules
          </h2>
        </FadeIn>
        <StaggerContainer
          stagger={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {modules.map((mod, i) => (
            <StaggerItem key={mod.title} className={i === 1 ? "md:mt-0" : ""}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full group"
              >
                <Card className="h-full glass-card border-none rounded-3xl p-8 relative overflow-hidden bg-surface/40 backdrop-blur-md transition-all duration-500 group-hover:bg-surface/60">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${mod.gradient} opacity-5 blur-3xl`}
                  ></div>

                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`w-16 h-16 bg-linear-to-br ${mod.gradient} rounded-2xl shadow-lg mb-6 flex items-center justify-center relative z-10`}
                  >
                    <span className="material-icons-round text-white text-3xl">
                      {mod.icon}
                    </span>
                  </motion.div>

                  <CardHeader className="p-0 mb-3 relative z-10">
                    <CardTitle className="text-2xl font-bold text-text-primary">
                      {mod.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 relative z-10">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {mod.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Enroll Content{" "}
                      <span className="material-icons-round text-xs">
                        arrow_forward
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
