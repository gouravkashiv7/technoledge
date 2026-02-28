"use client";

import { FadeIn } from "./MotionWrappers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SuccessGallery() {
  const items = [
    {
      tag: "Placement",
      tagColor: "text-accent",
      title: "Adobe Hiring Drive",
      desc: "20 students placed with 15LPA package.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnL7VbnaYISaio3Z7V0X0uUwfZzn2kRCPtwNACU5HF3G0KRC9BKhZqtGMM02waBrSEnSTiMl6XAX_bTw3ZeF33XD9Kn036WkRl_LemDmb5ZSl8Iauh8ja5sgxNoyJh6CFc25virMS-WYhyAPGcwy2yJdi8a3yG_1jub8NTs03gjn3kCN9CEvcJqOkOPvb8SuQQwhkE2DSrBaFcOuAfi3tVYmAvm-0rdfQYDLNW-L7TXIbBa87AR3a2WTBCCdCHYkUxUF7lqqBO-Wt8",
      extra: "",
    },
    {
      tag: "Lab Setup",
      tagColor: "text-blue-500",
      title: "IoT Lab at IIT Delhi",
      desc: "Advanced sensor technology lab inaugurated.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYruoR1YC1GC5tCAIudk3kBbk5E-xy0M1jNmMyV3XMh78gFYwynLdIUQR93xPUqEf-UBGH9W0fHxgDC_kVGhbNqck_58Oq-YcAKxyx4L6qCJcre6F5IHR6nqzOKkVvl6evPWzeyxGbWLOp43jA1b1zNwD4dG2sdE0bqWnJdjFqwd1nXR1qUvLoIlVyo9eRDz91-PNrTO0UaIupaEbwGXVfOMXdCbgA5n4e8DNQd02rc1pGHYOXmlbRkPd1_KnZVXlVL9lrb_qPF3OA",
      extra: "mt-12",
    },
    {
      tag: "Training",
      tagColor: "text-purple-500",
      title: "AI Workshop Series",
      desc: "5-day intensive boot camp for faculty.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJM81TUQ2ZRxK1JiPQeyFHoXAPbJ3D-t-iAvZXonRnm7cWSh5zW_cHlhN3pDlqwRrLR0UHUK0z4uiZgf_SBCQ4UjWSWYzf-JPoTzWO20MpVEyr_Pz8tVfFMuhH0TRNicFlD96rySbLFy0Ca3cDonPG68y2aO_ZWzDqeT2ALC-aihpOfC3FdlvfVXwKyo1kVbaQ2mKw7pVUG7wrTVEMpKyH--Wj8v34OhoVJD_9ekUdaOCkPVxsKwTwSs6t1KPwENPiXzo1tVu-UaU",
      extra: "",
    },
    {
      tag: "Event",
      tagColor: "text-orange-500",
      title: `Tech Summit ${new Date().getFullYear()}`,
      desc: "Bringing industry leaders together.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCg9m6hGEazcYPrGt296P26q_5gU8qF9z6CL5p0-5sUz_lf15ShnCpW1hnDqT7U0dOjReujapE4eNurakKY4YeSWy3KHt-MyoQbHd87r60WW88nSOVAfdVWkqXoqg9CHc2qRqXIP5aEtKNHD_vdfgLJzHjgruVRvf30v6MRBapq1r0nq-55wYUcrn1IluMgSqBfwwmkuHVHB3ax11lLGw4Jp_fkRsLCJ0rU8xnxTuYjYowDAF1NdaYFq3XO7i7NrGznaIPc3Gxza3gq",
      extra: "mt-12",
    },
    {
      tag: "Innovation",
      tagColor: "text-pink-500",
      title: "Annual Hackathon",
      desc: "48 hours of non-stop coding.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpyWD-n5Y9aYUgRGYASg8b6RlGctJ3YmX4hJGZ6kszf49Xkua_jTW5Y1oD-v4i-eOsKRav7a60KdVa1n08XiIdwCMY6fVUn7o_H_zCk3bYj5QrUTnDBTZzOKCLPgTWtmRpUPOsQJpbJsiM6bDoo3kKtJqno63ruFrAGQBo65vb03wpHU54qW3NyiQ1DLZKW6ja408GdPWZ5iWa3Z0B8ONMmGeDjysIFNUh20pxEBi9wilQ-p3fbYE7oSr-MNuZ4UNpTc0-AQ1sYVZl",
      extra: "",
    },
  ];

  return (
    <section className="py-24 bg-primary overflow-hidden" id="gallery">
      <FadeIn className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-display font-bold text-text-primary text-center">
          Success Gallery
        </h2>
      </FadeIn>
      <FadeIn>
        <div className="relative w-full overflow-x-auto pb-8 mask-linear-fade no-scrollbar">
          <div
            className="flex gap-6 w-max px-4 md:animate-float"
            style={{ animationDuration: "20s" }}
          >
            {items.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10, rotateZ: 1 }}
                className={`w-72 md:w-80 shrink-0 ${item.extra}`}
              >
                <Card className="h-full glass-card border-none overflow-hidden rounded-2xl p-2 bg-surface/30 backdrop-blur-md">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      src={item.image}
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <Badge
                      variant="secondary"
                      className={`${item.tagColor} bg-accent/10 border-none w-fit text-[10px] tracking-widest uppercase`}
                    >
                      {item.tag}
                    </Badge>
                    <h4 className="text-lg font-bold text-text-primary mt-2">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="px-4 pb-6">
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
