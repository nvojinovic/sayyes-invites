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
    <section className="relative bg-ivory py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-10 text-center text-[11px] uppercase tracking-[0.4em] text-gold">
          Parovi već koriste SayYes
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white/60 px-6 py-7 text-center ring-1 ring-champagne/50 backdrop-blur-sm"
            >
              <span className="font-serif text-4xl text-ink">{s.value}</span>
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
