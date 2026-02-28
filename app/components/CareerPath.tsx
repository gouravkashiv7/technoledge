"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function CareerPath() {
  const milestones = [
    {
      num: "1",
      label: "Internship",
      top: "10%",
      left: "50%",
      labelLeft: "55%",
    },
    {
      num: "2",
      label: "Junior Dev",
      top: "40%",
      left: "25%",
      labelLeft: "10%",
    },
    {
      num: "3",
      label: "Tech Lead",
      top: "80%",
      left: "75%",
      labelLeft: "80%",
      bounce: true,
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary via-surface-alt to-primary opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary">
            Sustainable Career Path
          </h2>
          <p className="text-text-muted mt-2">A journey that grows with you</p>
        </FadeIn>
        {/* Desktop Curve Layout (Hidden on mobile) */}
        <div className="relative max-w-4xl mx-auto h-100 md:h-150 hidden md:block">
          <svg
            className="absolute inset-0 w-full h-full"
            fill="none"
            preserveAspectRatio="none"
            stroke="url(#roadGradient)"
            strokeDasharray="10 10"
            strokeWidth="4"
            viewBox="0 0 400 600"
          >
            <defs>
              <linearGradient
                id="roadGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-dark)" />
              </linearGradient>
            </defs>
            <path
              className="animate-pulse opacity-30"
              d="M200,0 C200,100 100,150 100,250 C100,350 300,400 300,500 C300,550 200,600 200,600"
            />
          </svg>
          <StaggerContainer stagger={0.3}>
            {milestones.map((m) => (
              <StaggerItem key={m.num}>
                <div
                  className={`absolute -translate-x-1/2 p-3 rounded-full w-12 h-12 flex items-center justify-center border-2 border-accent shadow-glow bg-surface group hover:scale-125 transition-transform duration-500 z-20 ${m.bounce ? "animate-float" : ""}`}
                  style={{ top: m.top, left: m.left }}
                >
                  <span className="font-bold text-accent">{m.num}</span>
                </div>
                <Badge
                  variant="secondary"
                  className="absolute p-3 rounded-xl glass-card text-text-primary font-bold shadow-lg border-white/10 z-10"
                  style={{ top: m.top, left: m.labelLeft }}
                >
                  {m.label}
                </Badge>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile Vertical Layout (Shown only on mobile) */}
        <div className="md:hidden space-y-12 relative before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-accent/20">
          <StaggerContainer stagger={0.2}>
            {milestones.map((m) => (
              <StaggerItem key={m.num}>
                <div className="flex items-center gap-6 relative pl-12">
                  <div className="absolute left-0 w-12 h-12 rounded-full border-2 border-accent bg-surface flex items-center justify-center font-bold text-accent shadow-glow z-10">
                    {m.num}
                  </div>
                  <Card className="flex-1 p-6 bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl">
                    <h4 className="font-bold text-text-primary text-xl">
                      {m.label}
                    </h4>
                    <p className="text-text-secondary text-sm mt-2">
                      Specialized training and placement support to accelerate
                      your growth at this stage.
                    </p>
                  </Card>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
