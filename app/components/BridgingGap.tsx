"use client";

import { FadeIn, SlideIn, ScaleIn } from "./MotionWrappers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function BridgingGap() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-text-primary mb-16">
            Bridging the Gap
          </h2>
        </FadeIn>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-10">
          <SlideIn
            from="left"
            className="w-48 h-32 md:h-40 glass-card rounded-[50%] shadow-xl flex items-center justify-center z-10 animate-float bg-surface/40 backdrop-blur-md border-white/10"
          >
            <div className="flex flex-col items-center">
              <span className="material-icons-round text-5xl md:text-6xl text-text-muted group-hover:text-accent transition-colors">
                school
              </span>
              <h4 className="font-bold mt-2 text-text-primary">Academia</h4>
            </div>
          </SlideIn>

          <ScaleIn className="flex-1 w-full md:w-auto h-16 md:h-2 flex items-center justify-center relative min-w-12.5">
            <div className="w-full h-1 md:h-2 bg-accent/20 rounded-full relative overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-accent to-transparent"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Badge className="bg-accent text-text-inverse border-none px-4 py-1.5 shadow-glow animate-pulse text-[10px] tracking-widest uppercase">
                The Bridge
              </Badge>
            </div>
          </ScaleIn>

          <SlideIn
            from="right"
            className="w-48 h-32 md:h-40 glass-card rounded-[50%] shadow-xl flex items-center justify-center z-10 animate-float-delayed bg-surface/40 backdrop-blur-md border-white/10"
          >
            <div className="flex flex-col items-center">
              <span className="material-icons-round text-5xl md:text-6xl text-text-muted group-hover:text-accent transition-colors">
                apartment
              </span>
              <h4 className="font-bold mt-2 text-text-primary">Industry</h4>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
