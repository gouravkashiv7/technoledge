"use client";

import { FadeIn } from "./MotionWrappers";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function TrustedPartners() {
  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Intel",
    "Cisco",
    "IBM",
    "Adobe",
    "Oracle",
    "Salesforce",
    "Dell",
    "Google",
    "Microsoft",
  ];

  return (
    <section className="py-16 bg-surface-alt">
      <FadeIn className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-text-muted uppercase tracking-widest">
          Trusted By Leaders
        </p>
      </FadeIn>
      <FadeIn>
        <div className="relative w-full overflow-hidden mask-linear-fade">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex space-x-12 w-max items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {[...partners, ...partners].map((name, i) => (
              <Badge
                key={`${name}-${i}`}
                variant="outline"
                className="text-lg md:text-xl font-display font-medium text-slate-500 py-3 px-8 rounded-full border-white/5 bg-surface/30 backdrop-blur-sm whitespace-nowrap transition-all duration-500 hover:text-accent hover:border-accent group hover:scale-105"
              >
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                  {name}
                </span>
              </Badge>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
