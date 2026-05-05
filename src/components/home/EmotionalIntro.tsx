export default function EmotionalIntro() {
  return (
    <section className="relative overflow-hidden bg-ivory-deep py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
        <div className="mx-auto mb-6 flex items-center justify-center gap-3 sm:mb-8">
          <span className="h-px w-10 bg-gold/50" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Atmosfera
          </span>
          <span className="h-px w-10 bg-gold/50" />
        </div>

        <h2 className="font-serif text-[2rem] leading-[1.12] text-ink sm:text-4xl md:text-5xl">
          Pozivnica nije samo
          <span className="italic text-gold"> informacija</span>.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink-soft sm:mt-7 sm:text-xl sm:leading-relaxed">
          To je prvi trenutak kada gosti osete atmosferu vašeg dana.
        </p>

        <div className="mt-10">
          <a
            href="#preview"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink underline-offset-[6px] decoration-gold/50 hover:decoration-gold transition-all hover:text-gold"
          >
            <span className="border-b border-gold/40 pb-1 group-hover:border-gold transition-colors">
              Pogledaj kako izgleda u praksi
            </span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <svg
            width="120"
            height="20"
            viewBox="0 0 120 20"
            className="text-gold/70"
            aria-hidden="true"
          >
            <path
              d="M0 10 Q 30 0, 60 10 T 120 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="60" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
