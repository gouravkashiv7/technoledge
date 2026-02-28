"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrappers";

export default function InnovationLabs() {
  const labs = [
    {
      title: "IoT Lab Launch",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYruoR1YC1GC5tCAIudk3kBbk5E-xy0M1jNmMyV3XMh78gFYwynLdIUQR93xPUqEf-UBGH9W0fHxgDC_kVGhbNqck_58Oq-YcAKxyx4L6qCJcre6F5IHR6nqzOKkVvl6evPWzeyxGbWLOp43jA1b1zNwD4dG2sdE0bqWnJdjFqwd1nXR1qUvLoIlVyo9eRDz91-PNrTO0UaIupaEbwGXVfOMXdCbgA5n4e8DNQd02rc1pGHYOXmlbRkPd1_KnZVXlVL9lrb_qPF3OA",
      extra: "",
    },
    {
      title: "AI Center",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJM81TUQ2ZRxK1JiPQeyFHoXAPbJ3D-t-iAvZXonRnm7cWSh5zW_cHlhN3pDlqwRrLR0UHUK0z4uiZgf_SBCQ4UjWSWYzf-JPoTzWO20MpVEyr_Pz8tVfFMuhH0TRNicFlD96rySbLFy0Ca3cDonPG68y2aO_ZWzDqeT2ALC-aihpOfC3FdlvfVXwKyo1kVbaQ2mKw7pVUG7wrTVEMpKyH--Wj8v34OhoVJD_9ekUdaOCkPVxsKwTwSs6t1KPwENPiXzo1tVu-UaU",
      extra: "mt-12",
    },
    {
      title: "Robotics Wing",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnL7VbnaYISaio3Z7V0X0uUwfZzn2kRCPtwNACU5HF3G0KRC9BKhZqtGMM02waBrSEnSTiMl6XAX_bTw3ZeF33XD9Kn036WkRl_LemDmb5ZSl8Iauh8ja5sgxNoyJh6CFc25virMS-WYhyAPGcwy2yJdi8a3yG_1jub8NTs03gjn3kCN9CEvcJqOkOPvb8SuQQwhkE2DSrBaFcOuAfi3tVYmAvm-0rdfQYDLNW-L7TXIbBa87AR3a2WTBCCdCHYkUxUF7lqqBO-Wt8",
      extra: "",
    },
    {
      title: "Cloud Hub",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpyWD-n5Y9aYUgRGYASg8b6RlGctJ3YmX4hJGZ6kszf49Xkua_jTW5Y1oD-v4i-eOsKRav7a60KdVa1n08XiIdwCMY6fVUn7o_H_zCk3bYj5QrUTnDBTZzOKCLPgTWtmRpUPOsQJpbJsiM6bDoo3kKtJqno63ruFrAGQBo65vb03wpHU54qW3NyiQ1DLZKW6ja408GdPWZ5iWa3Z0B8ONMmGeDjysIFNUh20pxEBi9wilQ-p3fbYE7oSr-MNuZ4UNpTc0-AQ1sYVZl",
      extra: "mt-12",
    },
  ];

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <FadeIn className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-display font-bold text-center text-text-primary">
          Innovation Labs Inauguration
        </h2>
      </FadeIn>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the array for seamless loop */}
          {[...labs, ...labs].map((lab, i) => (
            <div
              key={`${lab.title}-${i}`}
              className={`w-80 h-96 glass-card p-2 rounded-2xl transform hover:scale-105 transition duration-300 shrink-0 ${lab.extra}`}
            >
              <div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={lab.title}
                  className="object-cover w-full h-full"
                  src={lab.image}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                  <h4 className="text-white font-bold">{lab.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
