"use client";

import { motion } from "framer-motion";
import { SlideIn, FadeIn } from "./MotionWrappers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-dark/20 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        {/* Contact info */}
        <SlideIn from="left" className="w-full md:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Whether you are an institution looking to upgrade or a student
            seeking guidance, we are here to help. Reach out today.
          </p>
          <div className="space-y-4">
            {[
              { icon: "email", text: "contact@technoledge.in" },
              { icon: "phone", text: "+91 98765 43210" },
              { icon: "location_on", text: "Noida, Uttar Pradesh, India" },
            ].map((item, i) => (
              <FadeIn key={item.icon} delay={i * 0.15}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-text-inverse transition-all duration-300">
                    <span className="material-icons-round">{item.icon}</span>
                  </div>
                  <span className="text-text-secondary group-hover:text-accent transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </SlideIn>

        {/* Contact form */}
        <SlideIn from="right" className="w-full md:w-1/2 perspective-1000">
          <Card className="glass-card p-6 md:p-8 rounded-3xl shadow-2xl animate-float border-white/10 relative bg-surface/40 backdrop-blur-xl">
            <div className="absolute -right-4 top-10 w-2 h-20 bg-surface-alt rounded-full overflow-hidden hidden md:block">
              <div className="w-full h-1/2 bg-accent animate-pulse"></div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-text-secondary"
                  >
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="bg-surface/50 border-white/10 focus:ring-accent focus:border-accent transition-all duration-300 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="bg-surface/50 border-white/10 focus:ring-accent focus:border-accent transition-all duration-300 h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-text-secondary"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-surface/50 border-white/10 focus:ring-accent focus:border-accent transition-all duration-300 h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-text-secondary"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="bg-surface/50 border-white/10 focus:ring-accent focus:border-accent transition-all duration-300 min-h-30"
                />
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full h-14 bg-accent hover:bg-accent-dark text-text-inverse font-bold rounded-xl shadow-glow transition-all duration-300 group"
                >
                  Send Message
                  <motion.span
                    className="ml-2 material-icons-round text-sm"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    send
                  </motion.span>
                </Button>
              </motion.div>
            </form>
          </Card>
        </SlideIn>
      </div>
    </section>
  );
}
