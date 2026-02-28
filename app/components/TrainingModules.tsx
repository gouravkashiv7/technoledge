export default function TrainingModules() {
  const modules = [
    {
      icon: "code",
      gradient: "from-blue-500 to-cyan-500",
      title: "Technical Mastery",
      description: "Full-stack, DevOps, and Data Science bootcamps.",
      extra: "",
    },
    {
      icon: "groups",
      gradient: "from-purple-500 to-pink-500",
      title: "Leadership & Soft Skills",
      description: "Emotional intelligence and agile management.",
      extra: "mt-8 md:mt-0",
    },
    {
      icon: "strategy",
      gradient: "from-orange-500 to-red-500",
      title: "Executive Strategy",
      description: "Digital transformation workshops for C-Suite.",
      extra: "",
    },
  ];

  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
      id="training"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-slate-900 dark:text-white mb-16">
          Corporate Training Modules
        </h2>
        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className={`glass-card p-8 rounded-3xl transform hover:-translate-y-4 hover:[transform:rotateX(6deg)] transition-all duration-500 group ${mod.extra}`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${mod.gradient} rounded-2xl shadow-lg mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform`}
              >
                <span className="material-symbols-outlined text-white text-3xl">
                  {mod.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {mod.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
