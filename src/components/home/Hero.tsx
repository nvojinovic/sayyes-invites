import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grain overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#fbf2e2_0%,#fbf7f1_45%,#f5eee2_100%)]" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(232,212,207,0.45),transparent_70%)] blur-3xl" />
      </div>

      <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-10 sm:py-5">
        <a href="/" className="shrink-0 font-serif text-lg tracking-wide text-ink sm:text-xl">
          SayYes<span className="text-gold">.</span>
        </a>
        <a
          href="#kako-funkcionise"
          className="hidden text-xs uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors sm:inline-block"
        >
          Kako funkcioniše
        </a>
      </nav>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:gap-14 sm:px-10 md:grid-cols-2 md:gap-10">
        <div className="text-center md:text-left">
          <p className="animate-fade-in text-[10px] uppercase tracking-[0.32em] text-gold sm:text-[11px] sm:tracking-[0.4em]">
            Digitalne pozivnice za venčanje
          </p>

          <h1 className="animate-fade-up delay-100 mx-auto mt-4 max-w-[21rem] font-serif text-[2.35rem] leading-[1.06] text-ink sm:max-w-none sm:text-5xl md:mx-0 md:text-[3.6rem] lg:text-6xl">
            Prvi utisak tvog
            <br className="hidden sm:block" />
            <span className="italic text-gold"> venčanja </span>
            počinje<br className="hidden sm:block" /> jednim linkom.
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-lg sm:leading-relaxed md:mx-0 md:mt-6">
            Sve informacije na jednom mestu — manje zvanja gostiju, lakše
            organizovanje i potvrda dolaska bez poruka napred-nazad.
          </p>

          <p className="animate-fade-up delay-200 mt-4 mx-auto md:mx-0 max-w-md text-[13px] italic leading-relaxed text-ink-soft">
            Manje stresa oko organizacije, više vremena da uživaš u svom danu.
          </p>

          <p className="animate-fade-up delay-200 mt-5 text-[12px] leading-6 tracking-wide text-ink sm:text-[13px]">
            <span className="text-gold">●</span> Gotovo za 24–48h
            <span className="mx-2 text-gold/60">•</span>
            Bez komplikacija
          </p>

          <div className="animate-fade-up delay-300 mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <a
              href="/ivana-dimitrije"
              className="group inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-ivory shadow-[0_10px_30px_-12px_rgba(42,35,32,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(42,35,32,0.55)]"
            >
              Otvori demo pozivnicu
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white/40 px-7 py-3.5 text-sm font-medium tracking-wide text-ink backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-white/70"
            >
              Javi se za svoju
            </a>
          </div>

          <p className="animate-fade-in delay-500 mt-4 text-center md:text-left text-[12px] tracking-wide text-ink-soft">
            Bez obaveze • Odgovor u roku od 24h
          </p>

          <div className="animate-fade-in delay-500 mt-7 flex items-center justify-center gap-3 md:justify-start">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="text-gold"
              aria-hidden="true"
            >
              <path
                d="M7 1l1.7 3.9L13 5.5l-3.2 2.9.9 4.3L7 10.5 3.3 12.7l.9-4.3L1 5.5l4.3-.6L7 1z"
                fill="currentColor"
              />
            </svg>
            <p className="max-w-[16rem] text-[10px] uppercase leading-5 tracking-[0.24em] text-ink-soft sm:max-w-none sm:text-[11px] sm:tracking-[0.3em]">
              Već korišćeno za stvarna venčanja
            </p>
          </div>
        </div>

        <div className="animate-fade-up delay-200 relative mt-1 sm:mt-0">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
