export default function MidCTA() {
  return (
    <section className="relative overflow-hidden bg-ivory-deep py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-6">
        <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />

        <h2 className="font-serif text-[1.8rem] leading-[1.12] text-ink sm:text-3xl md:text-4xl">
          Želiš nešto ovakvo za
          <span className="italic text-gold"> svoje venčanje</span>?
        </h2>

        <div className="mt-8 flex justify-center">
          <a
            href="#kontakt"
            className="group inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-ivory shadow-[0_15px_40px_-15px_rgba(42,35,32,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(42,35,32,0.7)] sm:w-auto sm:px-9 sm:tracking-[0.12em]"
          >
            Započni svoju pozivnicu
            <span className="ml-3 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          Bez obaveze • Odgovor u roku od 24h
        </p>
      </div>
    </section>
  );
}
