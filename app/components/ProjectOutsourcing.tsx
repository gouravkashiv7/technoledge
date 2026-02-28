"use client";

import { SlideIn, FadeIn } from "./MotionWrappers";

export default function ProjectOutsourcing() {
  return (
    <section
      className="py-24 bg-primary relative overflow-hidden"
      id="outsourcing"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <SlideIn from="left" className="md:w-1/2">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Global Delivery
          </span>
          <h2 className="text-4xl font-display font-bold text-text-primary mt-2">
            Project Outsourcing
          </h2>
          <p className="text-lg text-text-secondary mt-6">
            Our self-assembling teams adapt to your architectural needs. We
            visualize your project blueprint and deploy the exact expertise
            required to build it, from microservices to monoliths.
          </p>
        </SlideIn>
        <SlideIn
          from="right"
          className="md:w-1/2 h-64 md:h-100 relative perspective-1000 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
          <div className="relative w-64 h-64 transform-style-3d rotate-3d-card animate-float">
            <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/20 border border-blue-500 rounded-lg backdrop-blur-sm animate-pulse z-10 flex items-center justify-center text-blue-500 font-mono text-xs">
              API
            </div>
            <div
              className="absolute top-10 right-0 w-24 h-24 bg-green-500/20 border border-green-500 rounded-lg backdrop-blur-sm animate-pulse z-20 flex items-center justify-center text-green-500 font-mono text-xs"
              style={{ animationDelay: "75ms" }}
            >
              DB
            </div>
            <div
              className="absolute bottom-0 left-10 w-32 h-16 bg-purple-500/20 border border-purple-500 rounded-lg backdrop-blur-sm animate-pulse z-30 flex items-center justify-center text-purple-500 font-mono text-xs"
              style={{ animationDelay: "150ms" }}
            >
              UI/UX
            </div>
            <div className="absolute top-10 left-20 w-20 h-0.5 bg-slate-300 dark:bg-slate-600 -rotate-12"></div>
            <div className="absolute top-20 right-20 w-0.5 h-20 bg-slate-300 dark:bg-slate-600"></div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
