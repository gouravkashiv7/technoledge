"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

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
              <div className="group perspective-1000 h-80">
                <motion.div
                  whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-full bg-surface-alt rounded-3xl p-8 shadow-lg border border-white/10 overflow-hidden group-hover:shadow-glow transition-shadow duration-500"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons-round text-9xl text-accent">
                      {service.icon}
                    </span>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <motion.div
                      whileHover={{ y: -8 }}
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6`}
                    >
                      <span className="material-icons-round text-3xl text-white">
                        {service.icon}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {service.description}
                      </p>
                    </div>
                    <div
                      className={`mt-4 flex items-center ${service.linkColor} font-bold text-sm`}
                    >
                      Learn More{" "}
                      <span className="material-icons-round text-sm ml-1">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
