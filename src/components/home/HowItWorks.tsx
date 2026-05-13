const STEPS = [
  {
    n: "01",
    title: "Pošalješ podatke",
    desc: "Imena, datum, lokacija, slike.",
  },
  {
    n: "02",
    title: "Mi oblikujemo pozivnicu",
    desc: "Dizajn, tekst, sekcije, potvrda dolaska.",
  },
  {
    n: "03",
    title: "Ti pošalješ link",
    desc: "WhatsApp, Viber, SMS ili Instagram.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="kako-funkcionise"
      className="relative overflow-hidden bg-ivory py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,#fbf2e2_0%,#fbf7f1_70%,#fbf7f1_100%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2.5rem] leading-[1.02] text-ink sm:text-5xl md:text-6xl">
            Od ideje do linka,
            <span className="italic text-gold"> bez cimanja.</span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className="group relative min-h-[220px] overflow-hidden rounded-[2rem] bg-white/60 p-7 ring-1 ring-champagne/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:ring-gold/40 hover:shadow-[0_30px_80px_-35px_rgba(60,40,15,0.45)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-125" />
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl text-gold/80">{step.n}</span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" className="hidden text-2xl text-gold/40 md:block">
                    →
                  </span>
                )}
              </div>

              <h3 className="mt-9 font-serif text-2xl leading-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-ink-soft">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
