"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./MotionWrappers";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-20 pb-12 overflow-hidden"
      id="home"
    >
      {/* Background blurs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-200 h-200 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-150 h-150 bg-accent-dark/10 dark:bg-accent-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"
        />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content - staggered */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="px-4 py-1.5 rounded-full border-accent/20 bg-surface/50 backdrop-blur-sm gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-bold text-accent tracking-widest uppercase">
                The Future of EdTech
              </span>
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-display font-bold leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-text-primary via-text-secondary to-text-primary">
              Multi-disciplinary
            </span>
            <br />
            <motion.span
              className="text-accent drop-shadow-sm inline-block relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Research &amp; Excellence
              <motion.div
                className="absolute inset-x-0 -bottom-1 h-1 shadow-accent-glow bg-accent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-lg leading-relaxed"
          >
            Experience the synergy of innovation and education. We bridge the
            gap between academic theory and industrial reality through
            cutting-edge smart labs and mentorship.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full h-14 px-8 bg-accent hover:bg-accent-dark text-text-inverse font-bold shadow-glow group border-none"
              >
                Explore Offerings
                <motion.span
                  className="ml-2 material-icons-round"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  arrow_forward
                </motion.span>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 glass-card border-white/10 text-text-primary font-bold hover:bg-surface-alt group"
              >
                <span className="mr-2 material-icons-round text-accent group-hover:scale-120 transition-transform">
                  play_circle
                </span>
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right 3D orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-87.5 md:h-150 w-full flex items-center justify-center perspective-1000"
        >
          <div
            className="absolute w-60 h-60 md:w-125 md:h-125 border border-accent/20 rounded-full animate-spin-slow"
            style={{ transform: "rotateX(70deg)" }}
          ></div>
          <div
            className="absolute w-48 h-48 md:w-100 md:h-100 border border-accent/40 rounded-full animate-spin-slow"
            style={{
              animationDirection: "reverse",
              transform: "rotateX(70deg)",
            }}
          ></div>

          <Magnetic strength={0.15}>
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full bg-linear-to-br from-white/10 to-accent/30 dark:from-white/5 dark:to-accent/20 backdrop-blur-md shadow-2xl border border-white/40 dark:border-white/10 animate-float flex items-center justify-center overflow-hidden z-20">
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent opacity-50"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="w-40 h-40 rounded-full bg-linear-to-br from-accent to-accent-dark shadow-accent-lg flex items-center justify-center"
              >
                <span className="material-icons-round text-6xl text-white animate-pulse">
                  science
                </span>
              </motion.div>
              <div className="absolute top-10 left-10 w-20 h-10 bg-white/30 rounded-full blur-xl transform -rotate-45"></div>
            </div>
          </Magnetic>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-10 right-4 md:right-20 glass-card p-3 rounded-2xl animate-float-delayed z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="material-icons-round text-blue-500">
                  school
                </span>
              </div>
              <div>
                <p className="text-xs text-text-muted">Students</p>
                <p className="font-bold text-text-primary">12k+</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-40 left-10 glass-card p-3 rounded-2xl animate-float z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="material-icons-round text-purple-500">
                  rocket_launch
                </span>
              </div>
              <div>
                <p className="text-xs text-text-muted">Projects</p>
                <p className="font-bold text-text-primary">450+</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
