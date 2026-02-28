"use client";

import { SlideIn, FadeIn } from "./MotionWrappers";

export default function SmartLab() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f172a] relative" id="labs">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Server rack visual */}
        <SlideIn
          from="left"
          className="order-2 lg:order-1 relative h-150 perspective-1000 group"
        >
          <div className="relative w-80 mx-auto h-full bg-slate-800 rounded-xl border border-slate-700 shadow-2xl transform-style-3d transition-transform duration-700 group-hover:transform-[rotateY(12deg)]">
            <div className="absolute top-4 left-4 right-4 h-2 bg-[#00d2aa]/50 rounded-full shadow-neon animate-pulse"></div>
            <div className="absolute top-10 bottom-10 left-4 right-4 flex flex-col gap-2">
              <div className="h-12 bg-slate-700/50 rounded border border-slate-600 flex items-center px-2 gap-2 hover:bg-slate-600 transition-colors cursor-pointer group/server">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <div className="w-full h-1 bg-green-500/20 rounded">
                  <div className="h-full bg-green-500/50 w-2/3 group-hover/server:w-full transition-all duration-1000"></div>
                </div>
              </div>
              <div className="h-12 bg-slate-700/50 rounded border border-slate-600 flex items-center px-2 gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-full h-1 bg-green-500/20 rounded"></div>
              </div>
              <div className="h-12 bg-slate-700/50 rounded border border-slate-600 flex items-center px-2 gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="w-full h-1 bg-yellow-500/20 rounded"></div>
              </div>
              <div className="h-12 bg-slate-700/50 rounded border border-slate-600 flex items-center px-2 gap-2 mt-auto">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] text-slate-400">QUANTUM UNIT</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px] border border-white/10 rounded-xl transform origin-left transition-transform duration-1000 group-hover:transform-[rotateY(-110deg)]"></div>
          </div>
        </SlideIn>

        {/* Right content */}
        <SlideIn from="right" className="order-1 lg:order-2">
          <FadeIn>
            <span className="text-[#00d2aa] font-semibold tracking-wider uppercase text-sm">
              Hardware &amp; Infrastructure
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Smart Lab Ecosystem
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Step into the future with our turn-key Smart Labs. From
              high-performance computing clusters to IoT sensor arrays, we
              provide the physical backbone for digital innovation.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-2xl text-[#00d2aa]">10Gbps</h4>
                <p className="text-sm text-slate-500">Fiber Backbone</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-2xl text-blue-500">Tier 3</h4>
                <p className="text-sm text-slate-500">Data Center Standard</p>
              </div>
            </div>
          </FadeIn>
        </SlideIn>
      </div>
    </section>
  );
}
