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
          Počni od jedne poruke.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:hello@sayyesinvites.com"
            className="group relative inline-flex min-h-[3.25rem] w-full max-w-sm items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-ivory shadow-[0_22px_60px_-22px_rgba(42,35,32,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-22px_rgba(42,35,32,0.9)] active:scale-[0.98] sm:w-auto sm:px-10 sm:tracking-[0.12em]"
          >
            <span className="absolute inset-0 rounded-full ring-1 ring-gold/40 opacity-0 transition-opacity group-hover:opacity-100" />
            Zatraži svoju pozivnicu
            <span className="ml-3 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-ink-soft">Odgovor u roku od 24h.</p>
      </div>
    </section>
  );
}
