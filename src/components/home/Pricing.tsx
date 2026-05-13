import { motion } from "framer-motion";
import { useRevealVariants, VIEWPORT_ONCE } from "./_motion";

const PLANS = [
  {
    name: "Standard",
    price: "od €199",
    note: "Sve što vam treba za savršen dan",
    features: [
      "Digitalna pozivnica po meri",
      "Sve informacije o venčanju",
      "Galerija fotografija",
      "Potvrda dolaska (RSVP)",
      "Mapa i navigacija do mesta",
      "Personalizovan dizajn",
    ],
    highlighted: true,
    cta: "Počni svoju pozivnicu",
  },
  {
    name: "Premium",
    price: "od €399",
    note: "Za nezaboravan prvi utisak",
    features: [
      "Sve iz Standard paketa",
      "Naprednije animacije",
      "Višejezična verzija",
      "Posebni detalji po meri",
      "Prioritetna izrada (do 24h)",
    ],
    highlighted: false,
    cta: "Zatraži ponudu",
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
  const { fadeUpBlur, fadeUp, container } = useRevealVariants();

  return (
    <section
      id="cene"
      className="relative overflow-hidden bg-ivory py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.14),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={container({ stagger: 0.12 })}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUpBlur}
            className="font-serif text-[2.5rem] leading-[1.02] text-ink sm:text-5xl md:text-6xl"
          >
            Premium pozivnica,
            <span className="italic text-gold"> jasna cena</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-md text-lg leading-8 text-ink-soft"
          >
            Bez pretplate. Bez skrivenih troškova.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container({ stagger: 0.18, delay: 0.1 })}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12 mx-auto grid max-w-2xl gap-5 sm:grid-cols-2 sm:items-stretch"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={[
                "relative flex flex-col rounded-[2rem] p-7 transition-all duration-500",
                plan.highlighted
                  ? "bg-ink text-ivory shadow-[0_40px_100px_-35px_rgba(42,35,32,0.7)] ring-1 ring-gold/40 hover:-translate-y-1 hover:shadow-[0_48px_120px_-35px_rgba(42,35,32,0.8)]"
                  : "bg-white/70 ring-1 ring-champagne/50 backdrop-blur-sm hover:-translate-y-1 hover:ring-gold/40 hover:shadow-[0_30px_75px_-35px_rgba(42,35,32,0.3)]",
              ].join(" ")}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory shadow-md">
                    Najpopularniji
                  </span>
                </div>
              )}

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
                    "mt-4 font-serif text-5xl",
                    plan.highlighted ? "text-ivory" : "text-ink",
                  ].join(" ")}
                >
                  {plan.price}
                </p>
                <p
                  className={[
                    "mt-2 text-sm",
                    plan.highlighted ? "text-ivory/60" : "text-ink-soft",
                  ].join(" ")}
                >
                  {plan.note}
                </p>
              </div>

              <div
                className={[
                  "my-6 h-px",
                  plan.highlighted ? "bg-white/10" : "bg-champagne/60",
                ].join(" ")}
              />

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

              <a
                href="#kontakt"
                className={[
                  "mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-4 py-3 text-center text-[12px] font-medium uppercase tracking-[0.14em] transition-all duration-200 active:scale-[0.97] sm:tracking-[0.18em]",
                  plan.highlighted
                    ? "bg-gold text-ivory shadow-[0_8px_20px_-8px_rgba(180,138,74,0.7)] hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_12px_28px_-8px_rgba(180,138,74,0.8)]"
                    : "border border-ink/15 bg-white/60 text-ink hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:shadow-[0_8px_20px_-8px_rgba(42,35,32,0.15)]",
                ].join(" ")}
              >
                {plan.cta}
                <span className="ml-2 text-[13px]">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-10 text-center text-sm text-ink-soft"
        >
          Finalna cena zavisi od obima i detalja pozivnice.
        </motion.p>
      </div>
    </section>
  );
}
