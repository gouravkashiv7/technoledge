"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function AudienceCards() {
  const audiences = [
    {
      icon: "account_balance",
      title: "Institutes",
      description:
        "Upgrade infrastructure and curriculum to meet modern industry standards.",
      borderColor: "bg-accent-light",
      bgColor: "bg-accent/10",
      iconColor: "text-accent-light",
    },
    {
      icon: "school",
      title: "Students",
      description:
        "Gain practical skills, mentorship, and direct placement opportunities.",
      borderColor: "bg-accent",
      bgColor: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: "apartment",
      title: "Corporates",
      description:
        "Access job-ready talent and collaborate on research and development.",
      borderColor: "bg-accent-dark",
      bgColor: "bg-accent/10",
      iconColor: "text-accent-dark",
    },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mt-2">
            Empowering Everyone
          </h2>
        </FadeIn>
        <StaggerContainer
          stagger={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {audiences.map((a) => (
            <StaggerItem key={a.title}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full group"
              >
                <Card className="h-full bg-surface/30 backdrop-blur-md rounded-3xl border-white/10 text-center relative overflow-hidden transition-all duration-500 hover:bg-surface/50 group-hover:shadow-glow">
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 ${a.borderColor}`}
                  ></div>

                  <CardHeader className="pt-12 pb-6">
                    <div className="w-28 h-28 mx-auto relative group-hover:scale-110 transition-transform duration-500">
                      <div
                        className={`w-full h-full ${a.bgColor} rounded-full flex items-center justify-center relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span
                          className={`material-icons-round text-5xl ${a.iconColor}`}
                        >
                          {a.icon}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-text-primary mt-6">
                      {a.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-8 pb-12">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {a.description}
                    </p>
                    <div className="mt-8">
                      <Badge
                        variant="outline"
                        className="border-accent/20 text-accent font-bold text-[10px] tracking-widest uppercase py-1 px-3"
                      >
                        View More
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
