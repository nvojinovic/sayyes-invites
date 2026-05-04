const STEPS = [
  {
    n: "01",
    title: "Pošalješ nam informacije i slike",
    desc: "Imena, datum, mesto, par fotografija — sve preko poruke ili mejla.",
  },
  {
    n: "02",
    title: "Mi napravimo tvoju pozivnicu",
    desc: "Dizajniramo stranicu po meri i pripremimo potvrdu dolaska gostiju.",
  },
  {
    n: "03",
    title: "Ti pošalješ link gostima",
    desc: "Jedan link kroz Viber, WhatsApp ili SMS — i sve potvrde stižu na jedno mesto.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="kako-funkcionise"
      className="relative overflow-hidden bg-ivory py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,#fbf2e2_0%,#fbf7f1_70%,#fbf7f1_100%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Kako funkcioniše
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            Tri jednostavna
            <span className="italic text-gold"> koraka</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Bez aplikacija, bez naloga — sve radimo umesto vas.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className="group relative rounded-2xl bg-white/60 p-7 ring-1 ring-champagne/40 backdrop-blur-sm transition-all hover:-translate-y-1 hover:ring-gold/40 hover:shadow-[0_20px_50px_-25px_rgba(60,40,15,0.35)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl text-gold">{step.n}</span>
                <span className="h-px flex-1 bg-gold/30" />
              </div>

              <h3 className="mt-5 font-serif text-xl leading-snug text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.desc}
              </p>

              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gold/40 text-xl"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-center gap-3">
          <a
            href="#kontakt"
            className="inline-flex items-center text-sm font-medium tracking-wide text-ink underline-offset-[6px] decoration-gold/50 hover:decoration-gold transition-all"
          >
            <span className="border-b border-gold/40 pb-1 hover:border-gold transition-colors">
              Spremni za svoju pozivnicu? Javi se.
            </span>
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
