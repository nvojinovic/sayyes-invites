import { motion } from "framer-motion";
import { useRevealVariants, VIEWPORT_ONCE } from "./_motion";

const STATS = [
  {
    value: "Bez aplikacije",
    label: "otvara se iz poruke",
  },
  {
    // Was `< 10s` — visually read like "< IOS". Spelled out for clarity.
    value: "10 sekundi",
    label: "do potvrde dolaska",
  },
  {
    value: "Dijaspora",
    label: "radi svuda",
  },
] as const;

export default function TrustBar() {
  const { fadeUp, container } = useRevealVariants();

  return (
    <section className="relative overflow-hidden bg-ivory-deep py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.14),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={container({ stagger: 0.14, delay: 0.05 })}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex min-h-[170px] flex-col items-center justify-center gap-3 rounded-[2rem] bg-white/60 px-6 py-8 text-center ring-1 ring-champagne/50 backdrop-blur-sm"
            >
              <span className="font-serif text-4xl leading-tight text-ink">{s.value}</span>
              <span className="text-base leading-snug text-ink-soft">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
