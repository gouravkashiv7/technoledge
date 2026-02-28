"use client";

import { FadeIn, SlideIn, ScaleIn } from "./MotionWrappers";

export default function BridgingGap() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-16">
            Bridging the Gap
          </h2>
        </FadeIn>
        <div className="relative h-[400px] w-full flex items-center justify-center">
          <SlideIn
            from="left"
            className="absolute left-[10%] top-1/2 -translate-y-1/2 w-48 h-32 bg-slate-200 dark:bg-slate-800 rounded-[50%] shadow-xl flex items-center justify-center z-10 animate-float"
            style={{ transform: "rotateX(60deg)" }}
          >
            <div
              className="-translate-y-8"
              style={{ transform: "rotateX(-60deg)" }}
            >
              <span className="material-symbols-outlined text-6xl text-slate-500">
                school
              </span>
              <h4 className="font-bold mt-2 dark:text-white">Academia</h4>
            </div>
          </SlideIn>

          <ScaleIn className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-4 bg-gradient-to-r from-slate-300 via-[#00d2aa] to-slate-300 dark:from-slate-700 dark:via-[#00d2aa] dark:to-slate-700 rounded-full shadow-glow z-0" />

          <SlideIn
            from="right"
            className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-32 bg-slate-200 dark:bg-slate-800 rounded-[50%] shadow-xl flex items-center justify-center z-10 animate-float-delayed"
            style={{ transform: "rotateX(60deg)" }}
          >
            <div
              className="-translate-y-8"
              style={{ transform: "rotateX(-60deg)" }}
            >
              <span className="material-symbols-outlined text-6xl text-slate-500">
                apartment
              </span>
              <h4 className="font-bold mt-2 dark:text-white">Industry</h4>
            </div>
          </SlideIn>

          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#00d2aa] rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
}
