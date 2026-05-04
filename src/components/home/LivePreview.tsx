const DEMO_URL = "/ivana-dimitrije";

export default function LivePreview() {
  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-ivory py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,#fbf2e2_0%,#fbf7f1_60%,#fbf7f1_100%)]" />
        <div className="absolute -top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Live demo
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            Pogledaj kako može
            <span className="italic text-gold"> izgledati</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Klikni i vidi kako bi tvoja pozivnica izgledala.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-[28px] bg-white/60 p-2 shadow-[0_30px_80px_-30px_rgba(60,40,15,0.35),0_10px_30px_-15px_rgba(0,0,0,0.15)] ring-1 ring-champagne/40 backdrop-blur-sm">

            {/* Browser chrome — URL bar */}
            <div className="flex items-center gap-1.5 px-4 pt-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-champagne" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-soft/70" />
              <div className="ml-3 flex-1 truncate rounded-md bg-ivory-deep px-3 py-1 text-[11px] tracking-wide text-ink-soft">
                sayyesinvites.com/ivana-dimitrije
              </div>
            </div>

            {/* Live iframe */}
            <div className="overflow-hidden rounded-[22px]">
              <iframe
                src={DEMO_URL}
                title="Demo pozivnica — Ivana & Dimitrije"
                className="w-full"
                style={{ height: "620px", border: "none", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA below mockup */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full bg-ink px-10 py-4 text-sm font-semibold tracking-[0.14em] uppercase text-ivory shadow-[0_18px_45px_-12px_rgba(42,35,32,0.75)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-12px_rgba(42,35,32,0.85)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-full ring-1 ring-gold/50" />
              <span className="absolute inset-0 rounded-full ring-2 ring-gold/0 transition-all group-hover:ring-gold/40 group-hover:ring-offset-2 group-hover:ring-offset-ivory" />
              Isprobaj demo
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
