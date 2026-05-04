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
        <div className="mx-auto mb-6 h-px w-12 bg-gold/60" />

        <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
          Želiš ovakvu
          <span className="italic text-gold"> pozivnicu</span>?
        </h2>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
          Pošalji nam poruku i napravićemo pozivnicu po meri vašeg dana.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#kontakt-forma"
            className="group relative inline-flex items-center justify-center rounded-full bg-ink px-9 py-4 text-sm font-medium tracking-[0.12em] uppercase text-ivory shadow-[0_15px_40px_-15px_rgba(42,35,32,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(42,35,32,0.7)]"
          >
            <span className="absolute inset-0 rounded-full ring-1 ring-gold/40 transition-opacity opacity-0 group-hover:opacity-100" />
            Javi se za detalje
            <span className="ml-3 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-ink-soft">
          Bez obaveze · Odgovor u roku od 24h
        </p>
      </div>
    </section>
  );
}
