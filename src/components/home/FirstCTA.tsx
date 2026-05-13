export default function FirstCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf7f1_0%,#f0e3c6_100%)]" />
        <div className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(180,138,74,0.22),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-[2.75rem] leading-[0.98] text-ink sm:text-6xl md:text-7xl">
          Pozivnica koja
          <br className="hidden sm:block" />
          izgleda
          <span className="italic text-gold"> kao vi.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-xl leading-8 text-ink-soft">
          Počni od jedne poruke. Za 24–48h imaš gotov link.
        </p>

        {/* urgency — shown above the button */}
        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-gold">
          ◆ &nbsp;Mesečno radimo sa ograničenim brojem parova&nbsp; ◆
        </p>

        <div className="mt-4 flex justify-center">
          <a
            href="mailto:hello@sayyesinvites.com"
            className="group relative inline-flex min-h-[3.25rem] w-full max-w-sm items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-ivory shadow-[0_22px_60px_-22px_rgba(42,35,32,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-22px_rgba(42,35,32,0.9)] active:scale-[0.98] sm:w-auto sm:px-10 sm:tracking-[0.12em]"
          >
            <span className="absolute inset-0 rounded-full ring-1 ring-gold/40 opacity-0 transition-opacity group-hover:opacity-100" />
            Zatraži svoju pozivnicu
            <span className="ml-3 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <p className="mt-5 text-sm text-ink-soft">Bez obaveze · Odgovor u roku od 24h.</p>

        {/* what happens next */}
        <div className="mx-auto mt-10 max-w-sm rounded-[1.75rem] bg-white/60 px-6 py-5 ring-1 ring-champagne/50 text-left backdrop-blur-sm">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-gold">Šta se dešava posle</p>
          <ol className="space-y-3">
            {[
              "Šalješ nam informacije o venčanju",
              "Za 24–48h dobijaš gotovu pozivnicu",
              "Pošalješ link — RSVP stiže automatski",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-0.5 shrink-0 font-serif text-base leading-none text-gold">
                  {`0${i + 1}`}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
