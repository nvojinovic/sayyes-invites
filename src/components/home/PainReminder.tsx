const QUESTIONS = [
  "Gde je venčanje?",
  "Kada počinje?",
  "Kako da potvrdim dolazak?",
];

export default function PainReminder() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(232,212,207,0.45),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
          Koliko puta ćeš odgovarati
          <span className="italic text-gold"> na ista pitanja</span>?
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {QUESTIONS.map((q) => (
            <span
              key={q}
              className="rounded-full border border-champagne bg-white/70 px-4 py-2 text-[13px] text-ink-soft backdrop-blur-sm"
            >
              {q}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-sm text-base leading-relaxed text-ink">
          Sa jednom digitalnom pozivnicom —
          <span className="font-medium text-ink"> sve je rešeno.</span>
        </p>
      </div>
    </section>
  );
}
