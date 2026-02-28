"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

export default function SkillTree() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary">
            Your Skill Tree
          </h2>
          <p className="text-text-secondary mt-2">
            Interactive growth paths for tomorrow&apos;s technology
          </p>
        </FadeIn>
        <StaggerContainer
          stagger={0.25}
          className="relative h-80 md:h-150 w-full max-w-5xl mx-auto"
        >
          {/* Tree trunk */}
          <div className="absolute left-1/2 bottom-0 w-4 h-1/2 bg-linear-to-t from-slate-400 to-accent/50 -translate-x-1/2 rounded-full"></div>

          {/* AI & ML */}
          <StaggerItem
            direction="right"
            className="absolute bottom-1/3 left-1/2 w-64 h-64 -translate-x-full -translate-y-12 group cursor-pointer"
          >
            <div className="relative w-full h-full border-b-2 border-l-2 border-accent/30 rounded-bl-[100px] transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,210,170,0.3)_inset]">
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 glass-card p-4 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-accent">
                  smart_toy
                </span>
                <h4 className="font-bold text-text-primary mt-2">
                  AI &amp; ML
                </h4>
              </div>
            </div>
          </StaggerItem>

          {/* Cloud Computing */}
          <StaggerItem
            direction="left"
            className="absolute bottom-1/2 left-1/2 w-48 h-48 translate-x-0 -translate-y-8 group cursor-pointer"
          >
            <div className="relative w-full h-full border-b-2 border-r-2 border-blue-400/30 rounded-br-[80px] transition-all duration-500 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.3)_inset]">
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 glass-card p-4 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-blue-400">
                  cloud_queue
                </span>
                <h4 className="font-bold text-text-primary mt-2">
                  Cloud Computing
                </h4>
              </div>
            </div>
          </StaggerItem>

          {/* Robotics */}
          <StaggerItem
            direction="right"
            className="absolute top-20 left-1/2 w-40 h-40 -translate-x-full group cursor-pointer"
          >
            <div className="relative w-full h-full border-t-2 border-l-2 border-purple-400/30 rounded-tl-[60px] transition-all duration-500 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.3)_inset]">
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 glass-card p-4 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-purple-400">
                  precision_manufacturing
                </span>
                <h4 className="font-bold text-text-primary mt-2">
                  Robotics
                </h4>
              </div>
            </div>
          </StaggerItem>

          <div className="absolute bottom-10 w-full text-center">
            <p className="text-sm text-slate-500 animate-bounce">
              Click on branches to explore curriculum
            </p>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
