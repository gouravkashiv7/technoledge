"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrappers";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Arjun Mehta",
      role: "Dean, MIT Engineering",
      quote:
        "The CoE setup by Technoledge has transformed our research capabilities. Students are now working on real-world industry problems.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuApibJ8lslGDRlScnq7zMAyt1J62gkiWTI2Zk1i5HjdGKhVE-2Y5a0_DKWok3egsFt4V5_GUrSYXn-KZnsavcVUy4NQcQszzSJWE-gykPiWAeOME6dn2_uH8SMtH4SC5WBPtqBctHTrtOr7ZBHX9II5cl4Qv-lwtJ5NAtD7zWXk2DUjGgy8axJb0xtdYWoqk69Z0Yp3vgs3eXX8iL4fZ6_aMBfVrVt4eTjD0uOxF6s--GighTpeMTwjTVGS7jmjAmWMd6JzZi9Lak1D",
      extra: "mt-8",
    },
    {
      name: "Sarah Jenkins",
      role: "B.Tech Student",
      quote:
        "I got placed at a top MNC thanks to the specialized training program. The mentorship was invaluable.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvg2aCWJ-PYitBGzKIWqk0pj5lzZdNIYfX6y_ysdK96qXzxrXZmO6sC7iQP7DJVi2tMhvoYoYaMXBq3-tjC1HSK-KPlawlrGXxlNc4bX955tWCfduoOB9i57GOzfXQowXpSGhVfcqtNT1rhMCQRevNYmC1jP-d5D1e-Y6Ys50vvRcVnf6HnDCzWcs5wVOGEuMYzZXto4q25IWxg-FR3x60x2RI_thOST0UBnD6F8lETYbxqNqpE8l5G1tuNeLNZl4p6bIGUzSZuIWy",
      extra: "mt-8 md:mt-0 lg:mt-16",
    },
    {
      name: "Vikram Singh",
      role: "HR Director, TechCorp",
      quote:
        "Technoledge bridges the talent gap effectively. We have hired over 50 graduates from their partner colleges.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBhMjXeZoS4-DXgBa1Ld0lk0BY06c9lFC3ZdffWXTadkuemwcJF-IyE6CFf3Go5oyKxjsmUivUK7QThrOxH_8BmXl-mq4uPB6wnLCFZi0RJJ9aDfNU5QdR_wIilkt0-b-tcGd5RrjetOGqaX89Zl4PUpi_6GAgV2RDtidkHWCVYemEk6vdtCV6yT2FQkQKe9mm0I36-iFMuPpe0CP-N-HuKaPqFiSAMGlmUhWuXuPEu50i7t6ajr1NAvwncNUZjwwzxX64pMGmeKjmI",
      extra: "mt-8",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-[#00d2aa]/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-center text-slate-900 dark:text-white mb-16">
            Voices of Trust
          </h2>
        </FadeIn>
        <StaggerContainer
          stagger={0.2}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`glass-card p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl relative ${t.extra}`}
              >
                <div className="absolute -top-8 left-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-white dark:border-slate-800 object-cover shadow-lg"
                    src={t.image}
                  />
                </div>
                <div className="mt-8">
                  <span className="text-4xl text-[#00d2aa]/30 font-serif leading-none absolute top-4 right-4">
                    &ldquo;
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <h5 className="font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h5>
                  <p className="text-xs text-[#00d2aa] font-semibold">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
