"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServicesGrid() {
  const services = [
    {
      icon: "science",
      title: "Centre of Excellence",
      description:
        "State-of-the-art labs equipped with industry-standard hardware and software.",
      gradient: "from-accent to-accent-dark",
      linkColor: "text-accent",
    },
    {
      icon: "school",
      title: "Training & Dev",
      description:
        "Comprehensive curriculum designed by industry experts for students and faculty.",
      gradient: "from-blue-400 to-blue-600",
      linkColor: "text-blue-500",
    },
    {
      icon: "business_center",
      title: "Placement Assistance",
      description:
        "Connecting skilled talent with top-tier corporate partners globally.",
      gradient: "from-purple-400 to-purple-600",
      linkColor: "text-purple-500",
    },
    {
      icon: "search",
      title: "Research",
      description:
        "Fostering innovation through dedicated R&D facilities and funding support.",
      gradient: "from-orange-400 to-orange-600",
      linkColor: "text-orange-500",
    },
    {
      icon: "psychology",
      title: "Mentorship",
      description:
        "1-on-1 guidance from industry veterans to shape future careers.",
      gradient: "from-pink-400 to-pink-600",
      linkColor: "text-pink-500",
    },
    {
      icon: "hub",
      title: "Innovation Hub",
      description:
        "A collaborative space for startups and students to build next-gen products.",
      gradient: "from-teal-400 to-teal-600",
      linkColor: "text-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-primary" id="services">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Core Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mt-2">
            Integrated Solutions
          </h2>
        </FadeIn>
        <StaggerContainer
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div whileHover={{ y: -10 }} className="h-full group">
                <Card className="relative h-full bg-surface/50 backdrop-blur-md border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-glow group-hover:bg-surface/80">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-icons-round text-8xl text-accent">
                      {service.icon}
                    </span>
                  </div>

                  <CardHeader className="relative z-10 p-8 pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6`}
                    >
                      <span className="material-icons-round text-3xl text-white">
                        {service.icon}
                      </span>
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 p-8 pt-0 flex flex-col justify-between h-[calc(100%-144px)]">
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Button
                      variant="ghost"
                      className={`p-0 h-auto hover:bg-transparent justify-start ${service.linkColor} font-bold text-sm group/btn`}
                    >
                      Learn More
                      <motion.span
                        className="material-icons-round text-sm ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        arrow_forward
                      </motion.span>
                    </Button>
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
