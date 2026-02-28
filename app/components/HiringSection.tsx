"use client";

import {
  SlideIn,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "./MotionWrappers";

export default function HiringSection() {
  return (
    <section
      className="py-24 bg-primary relative overflow-hidden"
      id="hiring"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left visual */}
        <SlideIn from="left" className="lg:w-1/2 perspective-1000">
          <div className="relative w-full h-72 md:h-125 glass-card rounded-3xl border border-accent/20 overflow-hidden flex items-center justify-center transform-style-3d rotate-3d-card">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-accent/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
              <div
                className="absolute top-0 left-1/2 w-4 h-4 bg-accent rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute top-1/3 left-10 w-3 h-3 bg-blue-400 rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/3 right-10 w-3 h-3 bg-purple-400 rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-20 w-3 h-3 bg-accent-dark rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 w-5 h-5 bg-accent rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none stroke-accent/40"
                style={{ filter: "drop-shadow(0 0 2px rgba(0,210,170,0.5))" }}
              >
                <line
                  className="animate-pulse"
                  strokeWidth="1"
                  x1="50%"
                  y1="0%"
                  x2="12%"
                  y2="33%"
                />
                <line
                  className="animate-pulse"
                  strokeWidth="1"
                  x1="50%"
                  y1="0%"
                  x2="88%"
                  y2="33%"
                />
                <line
                  className="animate-pulse"
                  strokeWidth="1"
                  x1="12%"
                  y1="33%"
                  x2="25%"
                  y2="66%"
                />
                <line
                  className="animate-pulse"
                  strokeWidth="1"
                  x1="88%"
                  y1="33%"
                  x2="50%"
                  y2="100%"
                />
                <line
                  className="animate-pulse"
                  strokeWidth="1"
                  x1="25%"
                  y1="66%"
                  x2="50%"
                  y2="100%"
                />
              </svg>
            </div>
            <div className="absolute bottom-8 left-8 right-8 glass-panel p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                AI-Powered Matching
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Analyzing 50+ parameters for perfect cultural &amp; technical
                fit
              </p>
            </div>
          </div>
        </SlideIn>

        {/* Right content */}
        <SlideIn from="right" className="lg:w-1/2">
          <div className="space-y-6">
            <FadeIn>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Recruitment Revolution
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary">
                Soul-Driven Hiring
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed">
                Beyond resumes and keywords. Our proprietary 3D neural network
                analyzes soft skills, cognitive aptitude, and long-term
                potential to connect the right soul to the right role. We
                don&apos;t just fill positions; we fulfill potential.
              </p>
            </FadeIn>
            <StaggerContainer stagger={0.15} delay={0.3}>
              {[
                { icon: "psychology", text: "Psychometric Profiling" },
                { icon: "diversity_3", text: "Cultural Alignment Scoring" },
                { icon: "trending_up", text: "Long-term Growth Prediction" },
              ].map((item) => (
                <StaggerItem key={item.text}>
                  <li className="flex items-center gap-3 py-1">
                    <span className="material-symbols-outlined text-accent">
                      {item.icon}
                    </span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                      {item.text}
                    </span>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
