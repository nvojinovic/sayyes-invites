const PLANS = [
  {
    name: "Basic",
    price: "od €99",
    note: "Idealno za jednostavne proslave",
    features: [
      "Digitalna pozivnica",
      "Osnovne informacije",
      "Potvrda dolaska",
    ],
    highlighted: false,
    cta: "Pošalji upit",
  },
  {
    name: "Standard",
    price: "od €199",
    note: "Najpopularniji izbor",
    features: [
      "Sve iz Basic paketa",
      "Više sekcija",
      "Galerija slika",
      "Personalizovan dizajn",
    ],
    highlighted: true,
    cta: "Započni svoju pozivnicu",
  },
  {
    name: "Premium",
    price: "od €399",
    note: "Za nezaboravan utisak",
    features: [
      "Sve iz Standard paketa",
      "Poseban stil",
      "Animacije",
      "Višejezična verzija",
    ],
    highlighted: false,
    cta: "Pošalji upit",
  },
] as const;

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-gold"
    >
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" />
      <path
        d="M4.5 7l1.8 1.8L9.5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="cene"
      className="relative overflow-hidden bg-ivory-deep py-16 sm:py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.14),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Cene
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>

          <h2 className="font-serif text-[2rem] leading-[1.1] text-ink sm:text-4xl md:text-5xl">
            Jednostavne cene,
            <span className="italic text-gold"> bez iznenađenja</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-relaxed">
            Sve je uključeno — nema skrivenih troškova, nema pretplate.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative flex flex-col rounded-2xl p-6 transition-all duration-300 sm:p-7",
                plan.highlighted
                  ? "bg-ink text-ivory shadow-[0_30px_70px_-25px_rgba(42,35,32,0.55)] ring-1 ring-gold/40 lg:z-10 lg:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_36px_80px_-25px_rgba(42,35,32,0.7)]"
                  : "bg-white/70 ring-1 ring-champagne/50 backdrop-blur-sm hover:-translate-y-1 hover:ring-gold/40 hover:shadow-[0_24px_55px_-20px_rgba(42,35,32,0.22)]",
              ].join(" ")}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gold px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory shadow-md">
                    Najpopularniji
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div>
                <p
                  className={[
                    "text-[11px] uppercase tracking-[0.35em]",
                    plan.highlighted ? "text-gold" : "text-gold",
                  ].join(" ")}
                >
                  {plan.name}
                </p>
                <p
                  className={[
                    "mt-3 font-serif text-[2.35rem] leading-none sm:text-4xl",
                    plan.highlighted ? "text-ivory" : "text-ink",
                  ].join(" ")}
                >
                  {plan.price}
                </p>
                <p
                  className={[
                    "mt-2 text-[13px] leading-5",
                    plan.highlighted ? "text-ivory/60" : "text-ink-soft",
                  ].join(" ")}
                >
                  {plan.note}
                </p>
              </div>

              {/* Divider */}
              <div
                className={[
                  "my-6 h-px",
                  plan.highlighted ? "bg-white/10" : "bg-champagne/60",
                ].join(" ")}
              />

              {/* Features */}
              <ul className="flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    {plan.highlighted ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-gold"
                      >
                        <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.4" />
                        <path
                          d="M4.5 7l1.8 1.8L9.5 5"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <Check />
                    )}
                    <span
                      className={[
                        "text-sm leading-6",
                        plan.highlighted ? "text-ivory/80" : "text-ink-soft",
                      ].join(" ")}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                className={[
                  "mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-4 py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.14em] transition-all duration-200 active:scale-[0.97] sm:tracking-[0.18em]",
                  plan.highlighted
                    ? "bg-gold text-ivory shadow-[0_8px_20px_-8px_rgba(180,138,74,0.7)] hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_12px_28px_-8px_rgba(180,138,74,0.8)]"
                    : "border border-ink/15 bg-white/60 text-ink hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:shadow-[0_8px_20px_-8px_rgba(42,35,32,0.15)]",
                ].join(" ")}
              >
                {plan.cta}
                <span className="ml-2 text-[13px]">→</span>
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xs text-center text-[10px] uppercase leading-5 tracking-[0.24em] text-ink-soft sm:mt-10 sm:max-w-none sm:text-[11px] sm:tracking-[0.3em]">
          Cene su orijentacione · Finalna cena zavisi od zahteva
        </p>
      </div>
    </section>
  );
}
