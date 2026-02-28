export default function StatsSection() {
  const stats = [
    { value: "200+", label: "Industry Partners" },
    { value: "100+", label: "Academic Ties" },
    { value: "50+", label: "Labs Set Up" },
    { value: "10k+", label: "Students Impacted" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00d2aa] to-emerald-700 dark:to-emerald-400 drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="h-1 w-12 mx-auto bg-slate-300 dark:bg-slate-700 rounded-full my-4 group-hover:w-24 group-hover:bg-[#00d2aa] transition-all"></div>
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                {stat.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
