const DEMO_URL = "/ivana-dimitrije";

export default function LivePreview() {
  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-ivory-deep py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,#fbf2e2_0%,#fbf7f1_60%,#fbf7f1_100%)]" />
        <div className="absolute -top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2.5rem] leading-[1.02] text-ink sm:text-5xl md:text-6xl">
            Prava pozivnica.
            <span className="italic text-gold"> Pravi osećaj.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <div className="group rounded-[2rem] bg-white/60 p-1.5 shadow-[0_35px_100px_-45px_rgba(60,40,15,0.55),0_14px_34px_-18px_rgba(0,0,0,0.18)] ring-1 ring-champagne/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_120px_-45px_rgba(60,40,15,0.65)] sm:p-2">

            <div className="flex items-center gap-1.5 px-3 pb-2 pt-2 sm:px-4 sm:pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-champagne" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-soft/70" />
              <div className="ml-2 flex-1 truncate rounded-full bg-ivory-deep px-3 py-1.5 text-[11px] tracking-wide text-ink-soft sm:ml-3">
                sayyesinvites.com/ivana-dimitrije
              </div>
            </div>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Isprobaj demo pozivnicu Ivane i Dimitrija"
              className="group relative block overflow-hidden rounded-[18px] sm:rounded-[22px]"
            >
              <iframe
                src={DEMO_URL}
                title="Demo pozivnica — Ivana i Dimitrije"
                className="pointer-events-none block h-[460px] w-full border-0 sm:h-[640px]"
                loading="lazy"
                tabIndex={-1}
              />
              <span className="absolute bottom-5 left-1/2 inline-flex min-h-12 -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full bg-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-ivory shadow-[0_18px_45px_-12px_rgba(42,35,32,0.75)] transition-all group-hover:-translate-y-0.5">
                Isprobaj demo
                <span className="ml-2">→</span>
              </span>
            </a>
          </div>
          <p className="mt-5 text-center text-sm text-ink-soft">Otvori za 2 sekunde.</p>
        </div>
      </div>
    </section>
  );
}
