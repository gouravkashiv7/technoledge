"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
  // LIGHT THEMES
  {
    id: "light",
    label: "Light",
    icon: "light_mode",
    swatch: "#f8fafc",
    accent: "#00d2aa",
    isDark: false,
  },
  {
    id: "sunset",
    label: "Sunset",
    icon: "wb_twilight",
    swatch: "#fdf6f0",
    accent: "#f97316",
    isDark: false,
  },
  {
    id: "lavender",
    label: "Lavender",
    icon: "spa",
    swatch: "#f5f0ff",
    accent: "#8b5cf6",
    isDark: false,
  },
  // DARK THEMES
  {
    id: "dark",
    label: "Dark",
    icon: "dark_mode",
    swatch: "#18181b",
    accent: "#6366f1",
    isDark: true,
  },
  {
    id: "ocean",
    label: "Ocean",
    icon: "water",
    swatch: "#0a192f",
    accent: "#64ffda",
    isDark: true,
  },
  {
    id: "forest",
    label: "Forest",
    icon: "forest",
    swatch: "#1a2e1a",
    accent: "#4ade80",
    isDark: true,
  },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>("light");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeId | null;
    if (stored && THEMES.some((t) => t.id === stored)) {
      applyTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    }
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const applyTheme = (id: ThemeId) => {
    const html = document.documentElement;
    // Remove all theme classes
    THEMES.forEach((t) => html.classList.remove(t.id));
    // Add selected theme (skip "light" since it's the default :root)
    if (id !== "light") {
      html.classList.add(id);
    }
    setTheme(id);
    localStorage.setItem("theme", id);
  };

  const current = THEMES.find((t) => t.id === theme)!;

  return (
    <div className="relative" ref={ref}>
      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border transition-colors"
        style={{
          backgroundColor: current.swatch,
          borderColor: current.accent + "40",
        }}
        aria-label="Change theme"
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: current.accent }}
        />
        <span
          className="material-icons-round text-sm"
          style={{ color: current.isDark ? "#fff" : "#333" }}
        >
          palette
        </span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 p-3 rounded-2xl shadow-2xl border z-50 min-w-55"
            style={{
              backgroundColor: "var(--bg-surface, #fff)",
              borderColor: "var(--glass-border)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-wider mb-3 px-1"
              style={{ color: "var(--text-muted)" }}
            >
              Choose Theme
            </p>
            <div className="grid grid-cols-3 gap-2">
              {THEMES.map((t) => (
                <motion.button
                  key={t.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    applyTheme(t.id);
                    setOpen(false);
                  }}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all"
                  style={{
                    backgroundColor:
                      theme === t.id ? t.accent + "20" : "transparent",
                    border:
                      theme === t.id
                        ? `2px solid ${t.accent}`
                        : "2px solid transparent",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-md relative"
                    style={{ backgroundColor: t.swatch }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: t.accent }}
                    />
                    {theme === t.id && (
                      <motion.div
                        layoutId="theme-check"
                        className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: t.accent }}
                      >
                        <span className="text-white text-[8px] font-bold">
                          ✓
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
