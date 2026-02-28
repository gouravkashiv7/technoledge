"use client";

import { SlideIn, FadeIn, ScaleIn } from "./MotionWrappers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function StaffBenefits() {
  return (
    <section className="py-24 bg-primary relative" id="staff">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <SlideIn from="left">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-6">
            Financial Stability for Staff
          </h2>
          <p className="text-lg text-text-secondary">
            We believe in growing together. Our unique compensation model
            ensures placement officers and faculty share in the success of every
            student placed, represented by this ever-growing crystal of
            prosperity.
          </p>
        </SlideIn>
        <SlideIn
          from="right"
          className="relative h-100 flex flex-col items-center justify-center p-6"
        >
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-accent-dark/5 rounded-full blur-[100px] group-hover:bg-accent-dark/10 transition-colors"></div>
            <ScaleIn>
              <div className="relative w-48 h-48 md:w-56 md:h-56 transform-style-3d animate-spin-slow group-hover:scale-110 transition-transform duration-700">
                <div
                  className="absolute inset-0 bg-accent-dark/40 backdrop-blur-md transform rotate-45 border border-white/20 shadow-glow"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 bg-accent-dark/30 backdrop-blur-md transform rotate-45 scale-75 border border-white/30"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 bg-white/40 transform rotate-45 scale-50 animate-pulse"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                ></div>
              </div>
            </ScaleIn>
          </div>

          <FadeIn delay={0.4} className="mt-8 flex gap-8">
            <Card className="text-center p-6 bg-surface/30 backdrop-blur-md border-white/10 rounded-2xl hover:border-accent-dark/50 transition-colors">
              <h4 className="text-3xl font-display font-bold text-accent-dark">
                +45%
              </h4>
              <p className="text-xs text-text-muted font-bold tracking-widest uppercase mt-1">
                Avg. Increment
              </p>
            </Card>
            <Card className="text-center p-6 bg-surface/30 backdrop-blur-md border-white/10 rounded-2xl hover:border-accent-dark/50 transition-colors">
              <h4 className="text-3xl font-display font-bold text-accent-dark">
                100%
              </h4>
              <p className="text-xs text-text-muted font-bold tracking-widest uppercase mt-1">
                Medical Cover
              </p>
            </Card>
          </FadeIn>
        </SlideIn>
      </div>
    </section>
  );
}
