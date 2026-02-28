export default function ServicesGrid() {
  const services = [
    {
      icon: "science",
      title: "Centre of Excellence",
      description:
        "State-of-the-art labs equipped with industry-standard hardware and software.",
      gradient: "from-[#00d2aa] to-emerald-600",
      linkColor: "text-[#00d2aa]",
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
    <section className="py-24 bg-white dark:bg-[#0f172a]" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#00d2aa] font-semibold tracking-wider uppercase text-sm">
            Core Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-2">
            Integrated Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group perspective-1000 h-80">
              <div className="rotate-3d-card relative w-full h-full bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden group-hover:shadow-glow transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-icons-round text-9xl text-[#00d2aa]">
                    {service.icon}
                  </span>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:-translate-y-2 transition-transform`}
                  >
                    <span className="material-icons-round text-3xl text-white">
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
