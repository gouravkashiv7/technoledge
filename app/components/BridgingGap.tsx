"use client";

import { FadeIn, SlideIn, ScaleIn } from "./MotionWrappers";

export default function BridgingGap() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-text-primary mb-16">
            Bridging the Gap
          </h2>
        </FadeIn>
        <div className="relative h-100 w-full flex items-center justify-center">
          <SlideIn
            from="left"
            className="absolute left-[10%] top-1/2 -translate-y-1/2 w-48 h-32 bg-surface-alt rounded-[50%] shadow-xl flex items-center justify-center z-10 animate-float"
          >
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-6xl text-slate-500">
                school
              </span>
              <h4 className="font-bold mt-2 text-text-primary">Academia</h4>
            </div>
          </SlideIn>

          <ScaleIn className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] z-0">
            <div className="h-4 bg-linear-to-r from-surface-alt via-accent to-surface-alt rounded-full shadow-glow"></div>
          </ScaleIn>

          <SlideIn
            from="right"
            className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-32 bg-surface-alt rounded-[50%] shadow-xl flex items-center justify-center z-10 animate-float-delayed"
          >
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-6xl text-slate-500">
                apartment
              </span>
              <h4 className="font-bold mt-2 text-text-primary">Industry</h4>
            </div>
          </SlideIn>

          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
}
