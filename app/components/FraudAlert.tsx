"use client";

import { ScaleIn } from "./MotionWrappers";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FraudAlert() {
  return (
    <section className="py-12 relative z-20">
      <div className="container mx-auto px-4">
        <ScaleIn>
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-1 bg-linear-to-r from-red-500/20 via-orange-500/20 to-red-500/20">
            <div className="bg-white/90 dark:bg-surface-alt/90 rounded-[20px] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
              <div className="relative shrink-0 w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                <span className="material-icons-round text-6xl text-red-500 relative z-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  gpp_maybe
                </span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
                  FRAUD ALERT: Stay Vigilant
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Technoledge does not ask for money for job offers. Be aware of
                  impersonators. Verify all communications through our official
                  channels. Stay safe in the digital space.
                </p>
              </div>
              <Button
                variant="outline"
                className="px-6 py-2 border-white/10 hover:bg-red-500/10 hover:text-red-500 dark:hover:bg-red-500/10 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap group"
              >
                Verify Source
                <motion.span
                  className="ml-2 material-icons-round text-sm"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  verified_user
                </motion.span>
              </Button>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
