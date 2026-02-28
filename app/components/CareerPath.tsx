"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

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
        <div className="relative max-w-4xl mx-auto h-150">
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
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <path
              className="animate-pulse"
              d="M200,0 C200,100 100,150 100,250 C100,350 300,400 300,500 C300,550 200,600 200,600"
            />
          </svg>
          <StaggerContainer stagger={0.3}>
            {milestones.map((m) => (
              <StaggerItem key={m.num}>
                <div
                  className={`absolute -translate-x-1/2 p-3 rounded-full w-12 h-12 flex items-center justify-center border-2 border-accent shadow-glow glass-panel ${m.bounce ? "animate-bounce" : ""}`}
                  style={{ top: m.top, left: m.left }}
                >
                  <span className="font-bold text-accent">{m.num}</span>
                </div>
                <div
                  className="absolute p-2 rounded text-xs glass-card text-text-primary font-medium"
                  style={{ top: m.top, left: m.labelLeft }}
                >
                  {m.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
