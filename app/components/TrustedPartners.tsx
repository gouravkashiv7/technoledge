export default function TrustedPartners() {
  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Intel",
    "Cisco",
    "IBM",
    "Adobe",
    "Oracle",
    "Salesforce",
    "Dell",
    "Google",
    "Microsoft",
  ];

  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Trusted By Leaders
        </p>
      </div>
      <div className="relative w-full overflow-hidden mask-linear-fade">
        <div
          className="flex space-x-12 animate-spin-slow w-max items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          style={{ animationDuration: "20s" }}
        >
          {partners.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-2xl font-display font-bold text-slate-400 hover:text-slate-800 dark:hover:text-white whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
