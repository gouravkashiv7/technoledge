export default function CareerPath() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">
            Sustainable Career Path
          </h2>
          <p className="text-slate-400 mt-2">A journey that grows with you</p>
        </div>
        <div className="relative max-w-4xl mx-auto h-[600px]">
          <svg
            className="absolute inset-0 w-full h-full"
            fill="none"
            preserveAspectRatio="none"
            stroke="url(#roadGradient)"
            strokeDasharray="10 10"
            strokeWidth="4"
            viewBox="0 0 400 600"
          >
            <defs>
              <linearGradient
                id="roadGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00d2aa" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <path
              className="animate-pulse"
              d="M200,0 C200,100 100,150 100,250 C100,350 300,400 300,500 C300,550 200,600 200,600"
            />
          </svg>

          {/* Milestone 1 */}
          <div className="absolute top-[10%] left-[50%] -translate-x-1/2 glass-card p-3 rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#00d2aa] shadow-glow">
            <span className="font-bold text-[#00d2aa]">1</span>
          </div>
          <div className="absolute top-[10%] left-[55%] bg-slate-800 p-2 rounded text-xs">
            Internship
          </div>

          {/* Milestone 2 */}
          <div className="absolute top-[40%] left-[25%] -translate-x-1/2 glass-card p-3 rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#00d2aa] shadow-glow">
            <span className="font-bold text-[#00d2aa]">2</span>
          </div>
          <div className="absolute top-[40%] left-[10%] bg-slate-800 p-2 rounded text-xs text-right">
            Junior Dev
          </div>

          {/* Milestone 3 */}
          <div className="absolute top-[80%] left-[75%] -translate-x-1/2 glass-card p-3 rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#00d2aa] shadow-glow animate-bounce">
            <span className="font-bold text-[#00d2aa]">3</span>
          </div>
          <div className="absolute top-[80%] left-[80%] bg-slate-800 p-2 rounded text-xs">
            Tech Lead
          </div>
        </div>
      </div>
    </section>
  );
}
