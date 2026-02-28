export default function SuccessGallery() {
  const items = [
    {
      tag: "Placement",
      tagColor: "text-[#00d2aa]",
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
      title: "Tech Summit 2023",
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
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
      id="gallery"
    >
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white text-center">
          Success Gallery
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 animate-float w-[200%]"
          style={{ animationDuration: "20s" }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className={`w-80 h-96 flex-shrink-0 glass-card rounded-2xl p-2 transform hover:scale-105 transition-transform duration-300 ${item.extra}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={item.title}
                className="w-full h-3/5 object-cover rounded-xl mb-4"
                src={item.image}
              />
              <div className="px-2">
                <span
                  className={`text-xs font-bold ${item.tagColor} uppercase`}
                >
                  {item.tag}
                </span>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
