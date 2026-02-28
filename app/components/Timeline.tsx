"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

export default function Timeline() {
  const events = [
    {
      year: "2018",
      title: "Inception",
      description:
        "Technoledge founded with a vision to bridge the academia-industry gap.",
      side: "left",
    },
    {
      year: "2020",
      title: "Expansion Phase",
      description:
        "Launched 50+ Smart Labs across India, partnering with top institutions.",
      side: "right",
    },
    {
      year: "2024",
      title: "Global Excellence",
      description:
        "Recognized as the leader in multi-disciplinary research infrastructure.",
      side: "left",
    },
  ];

  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50 relative"
      id="about"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00d2aa]/30 to-transparent -translate-x-1/2"></div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="text-[#00d2aa] font-semibold tracking-wider uppercase text-sm">
            Our Evolution
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-2">
            The Genome of Innovation
          </h2>
        </FadeIn>
        <StaggerContainer stagger={0.3} className="space-y-24 relative">
          {events.map((event) => (
            <StaggerItem
              key={event.year}
              direction={event.side === "left" ? "right" : "left"}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {event.side === "left" ? (
                  <>
                    <div className="w-full md:w-1/2 text-right md:pr-12 order-2 md:order-1">
                      <h3 className="text-6xl font-display font-bold text-slate-200 dark:text-slate-700/50 absolute -mt-10 -z-10">
                        {event.year}
                      </h3>
                      <div className="glass-card p-6 rounded-2xl inline-block text-left hover:scale-105 transition-transform duration-300 border-l-4 border-l-[#00d2aa]">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {event.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#00d2aa] border-4 border-white dark:border-slate-900 shadow-[0_0_20px_rgba(0,210,170,0.5)] z-10 hidden md:block"></div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-12 opacity-0 md:opacity-100"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 order-2 md:order-1 opacity-0 md:opacity-100"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-[#00d2aa] shadow-[0_0_20px_rgba(0,210,170,0.5)] z-10 hidden md:block"></div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-12">
                      <h3 className="text-6xl font-display font-bold text-slate-200 dark:text-slate-700/50 absolute -mt-10 -z-10">
                        {event.year}
                      </h3>
                      <div className="glass-card p-6 rounded-2xl inline-block text-left hover:scale-105 transition-transform duration-300 border-r-4 border-r-[#00d2aa]">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {event.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
