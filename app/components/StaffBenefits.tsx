"use client";

import { SlideIn, FadeIn, ScaleIn } from "./MotionWrappers";

export default function StaffBenefits() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f172a] relative" id="staff">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <SlideIn from="left">
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Financial Stability for Staff
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We believe in growing together. Our unique compensation model
            ensures placement officers and faculty share in the success of every
            student placed, represented by this ever-growing crystal of
            prosperity.
          </p>
        </SlideIn>
        <SlideIn
          from="right"
          className="relative h-[400px] flex items-center justify-center"
        >
          <ScaleIn>
            <div className="relative w-40 h-40 transform-style-3d animate-spin-slow">
              <div
                className="absolute inset-0 bg-emerald-400/30 backdrop-blur-md transform rotate-45 border border-white/40 shadow-glow"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="absolute inset-0 bg-emerald-300/20 backdrop-blur-md transform rotate-45 scale-75 border border-white/40"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="absolute inset-0 bg-white/40 transform rotate-45 scale-50 animate-pulse"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
            </div>
          </ScaleIn>
          <FadeIn delay={0.4} className="absolute bottom-10 flex gap-8">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-emerald-500">+45%</h4>
              <p className="text-xs text-slate-500">Avg. Increment</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-emerald-500">100%</h4>
              <p className="text-xs text-slate-500">Medical Cover</p>
            </div>
          </FadeIn>
        </SlideIn>
      </div>
    </section>
  );
}
