export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Background blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00d2aa]/10 dark:bg-[#00d2aa]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 border border-[#00d2aa]/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d2aa] animate-pulse"></span>
            <span className="text-sm font-semibold text-[#00d2aa] tracking-wide uppercase">
              The Future of EdTech
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400">
            Multi-disciplinary <br />
            <span className="text-[#00d2aa] drop-shadow-sm">
              Research &amp; Excellence
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Experience the synergy of innovation and education. We bridge the
            gap between academic theory and industrial reality through
            cutting-edge smart labs and mentorship.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#00d2aa] text-white rounded-full font-bold shadow-glow hover:bg-emerald-500 transition-all flex items-center gap-2 group">
              Explore Offerings
              <span className="material-icons-round group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button className="px-8 py-4 glass-card text-slate-700 dark:text-white rounded-full font-bold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all flex items-center gap-2">
              <span className="material-icons-round text-[#00d2aa]">
                play_circle
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right 3D orb */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
          <div
            className="absolute w-[500px] h-[500px] border border-[#00d2aa]/20 rounded-full animate-spin-slow"
            style={{ transform: "rotateX(70deg)" }}
          ></div>
          <div
            className="absolute w-[400px] h-[400px] border border-[#00d2aa]/40 rounded-full animate-spin-slow"
            style={{
              animationDirection: "reverse",
              transform: "rotateX(70deg)",
            }}
          ></div>

          <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/10 to-[#00d2aa]/30 dark:from-white/5 dark:to-[#00d2aa]/20 backdrop-blur-md shadow-2xl border border-white/40 dark:border-white/10 animate-float flex items-center justify-center overflow-hidden z-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50"></div>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00d2aa] to-emerald-600 shadow-[0_0_60px_rgba(0,210,170,0.6)] flex items-center justify-center">
              <span className="material-icons-round text-6xl text-white animate-pulse">
                science
              </span>
            </div>
            <div className="absolute top-10 left-10 w-20 h-10 bg-white/30 rounded-full blur-xl transform -rotate-45"></div>
          </div>

          {/* Floating cards */}
          <div className="absolute top-20 right-20 glass-card p-3 rounded-2xl animate-float-delayed z-30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="material-icons-round text-blue-500">
                  school
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Students
                </p>
                <p className="font-bold text-slate-800 dark:text-white">12k+</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-40 left-10 glass-card p-3 rounded-2xl animate-float z-30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="material-icons-round text-purple-500">
                  rocket_launch
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Projects
                </p>
                <p className="font-bold text-slate-800 dark:text-white">450+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
