"use client";

import { FadeIn, SlideIn } from "./MotionWrappers";

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
          <p className="text-sm text-text-muted">
            Real-time hiring updates
          </p>
        </SlideIn>
        <FadeIn className="md:w-3/4 h-20 relative overflow-hidden mask-linear-fade">
          <div className="flex flex-col gap-4 animate-float">
            {placements.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 bg-surface/60 p-2 rounded-lg border border-white/10"
              >
                <span className="font-bold text-accent">{p.salary}</span>
                <span className="text-text-primary">{p.name}</span>
                <span className="text-text-muted">
                  placed at
                </span>
                <span className="font-bold text-text-primary">
                  {p.company}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
