"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

export default function AudienceCards() {
  const audiences = [
    {
      icon: "account_balance",
      title: "Institutes",
      description:
        "Upgrade infrastructure and curriculum to meet modern industry standards.",
      borderColor: "bg-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-500",
    },
    {
      icon: "school",
      title: "Students",
      description:
        "Gain practical skills, mentorship, and direct placement opportunities.",
      borderColor: "bg-[#00d2aa]",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      iconColor: "text-[#00d2aa]",
    },
    {
      icon: "apartment",
      title: "Corporates",
      description:
        "Access job-ready talent and collaborate on research and development.",
      borderColor: "bg-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <span className="text-[#00d2aa] font-semibold tracking-wider uppercase text-sm">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-2">
            Empowering Everyone
          </h2>
        </FadeIn>
        <StaggerContainer stagger={0.2} className="grid md:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <StaggerItem key={a.title}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 text-center relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-2 ${a.borderColor}`}
                ></div>
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-full h-full ${a.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <span
                      className={`material-icons-round text-6xl ${a.iconColor}`}
                    >
                      {a.icon}
                    </span>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {a.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {a.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
