"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navLinks = ["Home", "Solutions", "Careers", "Labs"];

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isMobile && isScrolledDown && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed w-full z-50 top-0 glass-panel bg-white/70 dark:bg-surface-alt/70 border-b border-white/20 dark:border-slate-700/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <motion.div
              className="shrink-0 flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent to-accent-dark flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-text-primary">
                Technoledge
              </span>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -2, color: "var(--accent)" }}
                  className="text-slate-600 dark:text-slate-300 font-medium transition"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </motion.a>
              ))}
              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent-dark text-text-inverse font-bold shadow-glow border-none group px-8"
              >
                Get Started
              </Button>
              <ThemeSwitcher />
            </div>

            {/* Mobile: theme switcher + hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeSwitcher />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-surface-alt transition-colors"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={
                    mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="block w-5 h-0.5 bg-slate-700 dark:bg-slate-200 origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-0.5 bg-slate-700 dark:bg-slate-200"
                />
                <motion.span
                  animate={
                    mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="block w-5 h-0.5 bg-slate-700 dark:bg-slate-200 origin-center"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
          style={{ scaleX }}
        />

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-surface-alt/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="block text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-accent transition-colors py-2 border-b border-slate-100 dark:border-white/10"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <Button
                  size="lg"
                  className="w-full h-14 bg-accent hover:bg-accent-dark text-text-inverse font-bold rounded-full shadow-glow"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Action Bar (Mobile only) */}
      <AnimatePresence>
        {isMobile && isScrolledDown && !mobileOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed bottom-6 left-4 right-4 z-[60] glass-card rounded-3xl flex justify-between items-center px-6 py-3 border border-white/20 bg-surface/90 backdrop-blur-2xl shadow-2xl"
          >
            {[
              { icon: "home", label: "Home", href: "#home" },
              { icon: "grid_view", label: "Offerings", href: "#services" },
              { icon: "school", label: "Labs", href: "#labs" },
              { icon: "call", label: "Contact", href: "#contact" },
            ].map((item) => (
              <motion.a
                key={item.label}
                whileTap={{ scale: 0.9 }}
                href={item.href}
                className="flex flex-col items-center gap-1 text-text-secondary hover:text-accent transition-colors"
              >
                <span className="material-icons-round text-[22px]">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold tracking-wide uppercase">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
