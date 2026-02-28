"use client";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-panel bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2aa] to-emerald-600 flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-800 dark:text-white">
              Technoledge
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              className="text-slate-600 dark:text-slate-300 hover:text-[#00d2aa] dark:hover:text-[#00d2aa] font-medium transition"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-slate-600 dark:text-slate-300 hover:text-[#00d2aa] dark:hover:text-[#00d2aa] font-medium transition"
              href="#solutions"
            >
              Solutions
            </a>
            <a
              className="text-slate-600 dark:text-slate-300 hover:text-[#00d2aa] dark:hover:text-[#00d2aa] font-medium transition"
              href="#careers"
            >
              Careers
            </a>
            <a
              className="text-slate-600 dark:text-slate-300 hover:text-[#00d2aa] dark:hover:text-[#00d2aa] font-medium transition"
              href="#labs"
            >
              Labs
            </a>
            <button className="bg-[#00d2aa] hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-[#00d2aa]/30 transition-all transform hover:-translate-y-0.5">
              Get Started
            </button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
