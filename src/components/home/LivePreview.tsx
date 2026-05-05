const DEMO_URL = "/ivana-dimitrije";

export default function LivePreview() {
  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-ivory py-16 sm:py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,#fbf2e2_0%,#fbf7f1_60%,#fbf7f1_100%)]" />
        <div className="absolute -top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Live demo
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>

          <h2 className="font-serif text-[2rem] leading-[1.1] text-ink sm:text-4xl md:text-5xl">
            Pogledaj kako može
            <span className="italic text-gold"> izgledati</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-relaxed">
            Klikni i vidi kako bi tvoja pozivnica izgledala.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="mx-auto mt-9 max-w-2xl sm:mt-12">
          <div className="rounded-[22px] bg-white/60 p-1.5 shadow-[0_24px_65px_-32px_rgba(60,40,15,0.35),0_10px_30px_-15px_rgba(0,0,0,0.15)] ring-1 ring-champagne/40 backdrop-blur-sm sm:rounded-[28px] sm:p-2">

            {/* Browser chrome — URL bar */}
            <div className="flex items-center gap-1.5 px-3 pb-2 pt-2 sm:px-4 sm:pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-champagne" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-soft/70" />
              <div className="ml-2 flex-1 truncate rounded-md bg-ivory-deep px-2.5 py-1.5 text-[11px] tracking-wide text-ink-soft sm:ml-3 sm:px-3 sm:py-1">
                sayyesinvites.com/ivana-dimitrije
              </div>
            </div>

            {/* Live iframe */}
            <div className="overflow-hidden rounded-[18px] sm:rounded-[22px]">
              <iframe
                src={DEMO_URL}
                title="Demo pozivnica — Ivana & Dimitrije"
                className="block h-[500px] w-full border-0 sm:h-[620px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA below mockup */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:items-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-ivory shadow-[0_18px_45px_-12px_rgba(42,35,32,0.75)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-12px_rgba(42,35,32,0.85)] active:scale-[0.98] sm:px-10 sm:tracking-[0.14em]"
            >
              <span className="absolute inset-0 rounded-full ring-1 ring-gold/50" />
              <span className="absolute inset-0 rounded-full ring-2 ring-gold/0 transition-all group-hover:ring-gold/40 group-hover:ring-offset-2 group-hover:ring-offset-ivory" />
              Otvori celu demo pozivnicu
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft">
              Otvori za 2 sekunde
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
