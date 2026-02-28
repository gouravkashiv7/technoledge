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
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #0f172a, #1e293b, #0f172a)",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2
            className="text-4xl font-display font-bold"
            style={{ color: "#ffffff" }}
          >
            Sustainable Career Path
          </h2>
          <p className="mt-2" style={{ color: "#94a3b8" }}>
            A journey that grows with you
          </p>
        </FadeIn>
        <div className="relative max-w-4xl mx-auto h-[600px]">
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
                <stop offset="0%" stopColor="#00d2aa" />
                <stop offset="100%" stopColor="#1e293b" />
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
                  className={`absolute -translate-x-1/2 p-3 rounded-full w-12 h-12 flex items-center justify-center ${m.bounce ? "animate-bounce" : ""}`}
                  style={{
                    top: m.top,
                    left: m.left,
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                    border: "2px solid #00d2aa",
                    boxShadow: "0 0 20px rgba(0, 210, 170, 0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span className="font-bold" style={{ color: "#00d2aa" }}>
                    {m.num}
                  </span>
                </div>
                <div
                  className="absolute p-2 rounded text-xs"
                  style={{
                    top: m.top,
                    left: m.labelLeft,
                    backgroundColor: "#1e293b",
                    color: "#ffffff",
                  }}
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
