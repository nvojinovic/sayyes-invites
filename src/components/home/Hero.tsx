import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grain overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#fbf2e2_0%,#fbf7f1_45%,#f5eee2_100%)]" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(232,212,207,0.45),transparent_70%)] blur-3xl" />
      </div>

      <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="font-serif text-xl tracking-wide text-ink">
          SayYes<span className="text-gold">.</span>
        </a>
        <a
          href="#kontakt"
          className="hidden text-xs uppercase tracking-[0.25em] text-ink-soft transition-colors hover:text-ink sm:inline-block"
        >
          Zatraži pozivnicu
        </a>
      </nav>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-9 px-6 sm:px-10 md:grid-cols-2 md:gap-10">
        <div className="text-center md:text-left">
          <p className="animate-reveal-blur text-[10px] uppercase tracking-[0.32em] text-gold sm:text-[11px] sm:tracking-[0.4em]">
            Digitalne pozivnice za venčanje
          </p>

          <h1 className="animate-reveal-blur delay-100 mx-auto mt-4 max-w-[23rem] font-serif text-[2.75rem] leading-[0.98] text-ink sm:max-w-none sm:text-6xl md:mx-0 md:text-[4rem] lg:text-7xl">
            Jedan link.
            <br className="hidden sm:block" />
            <span className="italic text-gold"> Ceo doživljaj.</span>
          </h1>

          <p className="animate-reveal-blur delay-200 mx-auto mt-5 max-w-lg text-lg leading-8 text-ink-soft sm:text-xl sm:leading-9 md:mx-0 md:mt-6">
            Premium digitalna pozivnica sa informacijama, mapom i potvrdom dolaska.
          </p>

          <div className="animate-reveal-blur delay-300 mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <a
              href="#kontakt"
              className="group inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium tracking-wide text-ivory shadow-[0_18px_45px_-18px_rgba(42,35,32,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-18px_rgba(42,35,32,0.75)]"
            >
              Zatraži svoju pozivnicu
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="/ivana-dimitrije"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-ink/15 bg-white/50 px-8 py-4 text-sm font-medium tracking-wide text-ink backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-white/80"
            >
              Isprobaj demo
            </a>
          </div>

          <div className="animate-reveal-blur delay-500 mx-auto mt-8 grid max-w-md grid-cols-3 overflow-hidden rounded-[1.75rem] border border-champagne/70 bg-white/45 text-center backdrop-blur-md md:mx-0">
            {["Pošalješ podatke", "Mi napravimo", "Gosti otvore"].map((item) => (
              <div key={item} className="border-r border-champagne/60 px-3 py-3 last:border-r-0">
                <p className="text-[11px] leading-4 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-200 relative -mt-1 sm:mt-0">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
