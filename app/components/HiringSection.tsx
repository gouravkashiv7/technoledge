export default function HiringSection() {
  return (
    <section
      className="py-24 bg-white dark:bg-[#0f172a] relative overflow-hidden"
      id="hiring"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left visual */}
        <div className="lg:w-1/2 perspective-1000">
          <div className="relative w-full h-[500px] glass-card rounded-3xl border border-[#00d2aa]/20 overflow-hidden flex items-center justify-center transform-style-3d rotate-3d-card">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00d2aa]/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
              <div
                className="absolute top-0 left-1/2 w-4 h-4 bg-[#00d2aa] rounded-full shadow-neon animate-network-pulse"
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
                className="absolute bottom-1/3 left-20 w-3 h-3 bg-emerald-400 rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 w-5 h-5 bg-[#00d2aa] rounded-full shadow-neon animate-network-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none stroke-[#00d2aa]/40"
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
              <span className="text-xs font-bold text-[#00d2aa] uppercase tracking-wider">
                AI-Powered Matching
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Analyzing 50+ parameters for perfect cultural &amp; technical
                fit
              </p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 space-y-6">
          <span className="text-[#00d2aa] font-semibold tracking-wider uppercase text-sm">
            Recruitment Revolution
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Soul-Driven Hiring
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Beyond resumes and keywords. Our proprietary 3D neural network
            analyzes soft skills, cognitive aptitude, and long-term potential to
            connect the right soul to the right role. We don&apos;t just fill
            positions; we fulfill potential.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#00d2aa]">
                psychology
              </span>
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Psychometric Profiling
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#00d2aa]">
                diversity_3
              </span>
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Cultural Alignment Scoring
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#00d2aa]">
                trending_up
              </span>
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Long-term Growth Prediction
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
