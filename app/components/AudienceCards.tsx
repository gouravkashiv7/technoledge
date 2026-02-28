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
      borderColor: "bg-accent-light",
      bgColor: "bg-accent/10",
      iconColor: "text-accent-light",
    },
    {
      icon: "school",
      title: "Students",
      description:
        "Gain practical skills, mentorship, and direct placement opportunities.",
      borderColor: "bg-accent",
      bgColor: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: "apartment",
      title: "Corporates",
      description:
        "Access job-ready talent and collaborate on research and development.",
      borderColor: "bg-accent-dark",
      bgColor: "bg-accent/10",
      iconColor: "text-accent-dark",
    },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mt-2">
            Empowering Everyone
          </h2>
        </FadeIn>
        <StaggerContainer stagger={0.2} className="grid md:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <StaggerItem key={a.title}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-linear-to-b from-surface to-surface-alt rounded-3xl p-8 border border-white/10 text-center relative overflow-hidden group"
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
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {a.title}
                </h3>
                <p className="text-text-secondary text-sm">{a.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
