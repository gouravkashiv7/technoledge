"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Timeline() {
  const events = [
    {
      year: "2018",
      title: "Inception",
      description:
        "Technoledge founded with a vision to bridge the academia-industry gap.",
      side: "left",
    },
    {
      year: "2020",
      title: "Expansion Phase",
      description:
        "Launched 50+ Smart Labs across India, partnering with top institutions.",
      side: "right",
    },
    {
      year: "2024",
      title: "Global Excellence",
      description:
        "Recognized as the leader in multi-disciplinary research infrastructure.",
      side: "left",
    },
  ];

  return (
    <section className="py-24 bg-primary relative" id="about">
      <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-accent before:to-transparent before:-translate-x-1/2">
        <StaggerContainer stagger={0.3} className="relative">
          {events.map((event, idx) => (
            <StaggerItem key={event.year} className="relative">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                {/* Event Content */}
                <div
                  className={`w-full md:w-1/2 ${event.side === "left" ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left order-2 md:order-2"} pl-12 md:pl-0`}
                >
                  <motion.div whileHover={{ scale: 1.02 }} className="group">
                    <Card
                      className={`relative p-6 bg-surface/40 backdrop-blur-md rounded-2xl border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-glow ${event.side === "left" ? "md:border-r-4 md:border-r-accent border-l-4 border-l-accent md:border-l-white/10" : "border-l-4 border-l-accent"}`}
                    >
                      <Badge
                        variant="outline"
                        className="text-4xl md:text-6xl font-display font-bold text-slate-200 dark:text-slate-800 absolute -top-10 md:static bg-transparent border-none opacity-50 mb-2 p-0 group-hover:text-accent transition-colors"
                      >
                        {event.year}
                      </Badge>
                      <h4 className="text-xl font-bold text-text-primary mt-2">
                        {event.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed mt-2">
                        {event.description}
                      </p>
                    </Card>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-accent shadow-glow z-10 hidden sm:block">
                  <div className="w-full h-full rounded-full bg-accent animate-pulse opacity-20"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div
                  className={`hidden md:block w-1/2 ${event.side === "left" ? "order-2" : "order-1"}`}
                ></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
