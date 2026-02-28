"use client";

import { SlideIn, FadeIn } from "./MotionWrappers";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ProjectOutsourcing() {
  return (
    <section
      className="py-24 bg-primary relative overflow-hidden"
      id="outsourcing"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <SlideIn from="left" className="md:w-1/2">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Global Delivery
          </span>
          <h2 className="text-4xl font-display font-bold text-text-primary mt-2">
            Project Outsourcing
          </h2>
          <p className="text-lg text-text-secondary mt-6">
            Our self-assembling teams adapt to your architectural needs. We
            visualize your project blueprint and deploy the exact expertise
            required to build it, from microservices to monoliths.
          </p>
        </SlideIn>
        <SlideIn
          from="right"
          className="md:w-1/2 h-80 md:h-125 relative flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-100">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-72 h-72 md:w-80 md:h-80"
            >
              <Card className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 border-blue-500/30 rounded-2xl backdrop-blur-md z-10 flex flex-col items-center justify-center text-blue-500 shadow-lg">
                <span className="material-icons-round text-2xl mb-1">api</span>
                <span className="font-mono text-[10px] font-bold">API</span>
              </Card>
              <Card className="absolute top-10 right-0 w-28 h-28 bg-green-500/10 border-green-500/30 rounded-2xl backdrop-blur-md z-20 flex flex-col items-center justify-center text-green-500 shadow-xl">
                <span className="material-icons-round text-3xl mb-1">
                  storage
                </span>
                <span className="font-mono text-[10px] font-bold">
                  DATABASE
                </span>
              </Card>
              <Card className="absolute bottom-4 left-10 w-36 h-20 bg-purple-500/10 border-purple-500/30 rounded-2xl backdrop-blur-md z-30 flex flex-col items-center justify-center text-purple-500 shadow-2xl">
                <span className="material-icons-round text-2xl mb-1">
                  design_services
                </span>
                <span className="font-mono text-[10px] font-bold uppercase">
                  Interface
                </span>
              </Card>

              {/* Connection lines */}
              <div className="absolute top-12 left-20 w-32 h-0.5 bg-linear-to-r from-blue-500/30 to-green-500/30 -rotate-12 blur-[1px]"></div>
              <div className="absolute top-24 right-24 w-0.5 h-32 bg-linear-to-b from-green-500/30 to-purple-500/30 blur-[1px]"></div>

              {/* Floating nodes */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full shadow-neon"
              ></motion.div>
            </motion.div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
