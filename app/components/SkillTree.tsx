"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SkillTree() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary">
            Your Skill Tree
          </h2>
          <p className="text-text-secondary mt-2">
            Interactive growth paths for tomorrow&apos;s technology
          </p>
        </FadeIn>
        {/* Desktop Tree Layout (Hidden on mobile) */}
        <div className="hidden md:block relative h-150 w-full max-w-5xl mx-auto overflow-hidden">
          {/* Tree trunk */}
          <div className="absolute left-1/2 bottom-0 w-4 h-1/2 bg-linear-to-t from-slate-400/20 to-accent/50 -translate-x-1/2 rounded-full blur-[1px]"></div>

          {/* AI & ML */}
          <StaggerItem
            direction="right"
            className="absolute bottom-1/3 left-1/2 w-64 h-64 -translate-x-full -translate-y-12 group cursor-pointer"
          >
            <div className="relative w-full h-full border-b-2 border-l-2 border-accent/20 rounded-bl-[100px] transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,210,170,0.2)_inset]">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
              >
                <Card className="p-4 rounded-2xl bg-surface/50 backdrop-blur-md border-white/10 shadow-xl group-hover:border-accent/50 transition-colors">
                  <span className="material-icons-round text-3xl text-accent">
                    smart_toy
                  </span>
                  <h4 className="font-bold text-text-primary mt-2">
                    AI &amp; ML
                  </h4>
                  <Badge
                    variant="ghost"
                    className="p-0 text-[8px] uppercase tracking-tighter opacity-50"
                  >
                    Exploration
                  </Badge>
                </Card>
              </motion.div>
            </div>
          </StaggerItem>

          {/* Cloud Computing */}
          <StaggerItem
            direction="left"
            className="absolute bottom-1/2 left-1/2 w-48 h-48 translate-x-0 -translate-y-8 group cursor-pointer"
          >
            <div className="relative w-full h-full border-b-2 border-r-2 border-blue-400/20 rounded-br-[80px] transition-all duration-500 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.2)_inset]">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
              >
                <Card className="p-4 rounded-2xl bg-surface/50 backdrop-blur-md border-white/10 shadow-xl group-hover:border-blue-400/50 transition-colors">
                  <span className="material-icons-round text-3xl text-blue-400">
                    cloud_queue
                  </span>
                  <h4 className="font-bold text-text-primary mt-2">
                    Cloud Infrastructure
                  </h4>
                  <Badge
                    variant="ghost"
                    className="p-0 text-[8px] uppercase tracking-tighter opacity-50"
                  >
                    Advanced
                  </Badge>
                </Card>
              </motion.div>
            </div>
          </StaggerItem>

          {/* Robotics */}
          <StaggerItem
            direction="right"
            className="absolute top-20 left-1/2 w-40 h-40 -translate-x-full group cursor-pointer"
          >
            <div className="relative w-full h-full border-t-2 border-l-2 border-purple-400/20 rounded-tl-[60px] transition-all duration-500 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.2)_inset]">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
              >
                <Card className="p-4 rounded-2xl bg-surface/50 backdrop-blur-md border-white/10 shadow-xl group-hover:border-purple-400/50 transition-colors text-center">
                  <span className="material-icons-round text-3xl text-purple-400">
                    precision_manufacturing
                  </span>
                  <h4 className="font-bold text-text-primary mt-2">Robotics</h4>
                </Card>
              </motion.div>
            </div>
          </StaggerItem>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden grid grid-cols-1 gap-6 relative">
          <StaggerContainer stagger={0.15}>
            {[
              {
                icon: "smart_toy",
                color: "text-accent",
                title: "AI & ML",
                level: "Exploration",
              },
              {
                icon: "cloud_queue",
                color: "text-blue-400",
                title: "Cloud Computing",
                level: "Advanced",
              },
              {
                icon: "precision_manufacturing",
                color: "text-purple-400",
                title: "Robotics",
                level: "Core",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="p-6 bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-surface border border-white/5 flex items-center justify-center shadow-lg`}
                  >
                    <span
                      className={`material-icons-round text-3xl ${item.color}`}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-xl">
                      {item.title}
                    </h4>
                    <Badge
                      variant="secondary"
                      className="mt-1 text-[9px] uppercase tracking-widest bg-accent/10 text-accent border-none"
                    >
                      {item.level}
                    </Badge>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-12 w-full text-center">
          <p className="text-sm text-text-muted animate-pulse">
            Explore our curriculum paths
          </p>
        </div>
      </div>
    </section>
  );
}
