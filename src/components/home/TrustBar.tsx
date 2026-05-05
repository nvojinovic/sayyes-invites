const STATS = [
  {
    value: "20+",
    label: "napravljenih pozivnica",
  },
  {
    value: "< 10s",
    label: "da gost potvrdi dolazak",
  },
  {
    value: "1 link",
    label: "sve informacije na jednom mestu",
  },
] as const;

export default function TrustBar() {
  return (
    <section className="relative bg-ivory py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <p className="mb-7 text-center text-[10px] uppercase tracking-[0.32em] text-gold sm:mb-10 sm:text-[11px] sm:tracking-[0.4em]">
          Parovi već koriste SayYes
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white/60 px-6 py-6 text-center ring-1 ring-champagne/50 backdrop-blur-sm sm:py-7"
            >
              <span className="font-serif text-3xl text-ink sm:text-4xl">{s.value}</span>
              <span className="text-[12px] leading-snug text-ink-soft">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
