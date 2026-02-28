"use client";

import { motion } from "framer-motion";
import { SlideIn, FadeIn } from "./MotionWrappers";

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
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
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
          <div className="glass-card p-8 rounded-3xl shadow-2xl animate-float border-t border-l border-white/50 relative">
            <div className="absolute -right-4 top-10 w-2 h-20 bg-surface-alt rounded-full overflow-hidden">
              <div className="w-full h-1/2 bg-accent animate-pulse"></div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    First Name
                  </label>
                  <input
                    className="w-full rounded-lg bg-surface/50 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow p-3"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Last Name
                  </label>
                  <input
                    className="w-full rounded-lg bg-surface/50 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow p-3"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Email Address
                </label>
                <input
                  className="w-full rounded-lg bg-surface/50 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow p-3"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg bg-surface/50 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow p-3"
                  rows={4}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r from-accent to-accent-dark text-white font-bold rounded-xl shadow-glow"
                type="button"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
