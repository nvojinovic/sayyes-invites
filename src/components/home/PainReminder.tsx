import { motion } from "framer-motion";
import { useRevealVariants, VIEWPORT_ONCE } from "./_motion";

const QUESTIONS = [
  "Gde je venčanje?",
  "Kada počinje?",
  "Kako da potvrdim dolazak?",
  "Koliko gostiju dolazi?",
];

export default function PainReminder() {
  const { fadeUpBlur, bubble, container, fadeUp } = useRevealVariants();

  return (
    <section className="relative overflow-hidden bg-ivory-deep py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(232,212,207,0.45),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.h2
          variants={fadeUpBlur}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-2xl text-center font-serif text-[2.5rem] leading-[1.02] text-ink sm:text-5xl md:text-left md:text-6xl"
        >
          Jedan link umesto
          <span className="italic text-gold"> deset poruka.</span>
        </motion.h2>

        <motion.div
          variants={container({ stagger: 0.18, delay: 0.1 })}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="space-y-3"
        >
          {QUESTIONS.map((q) => (
            <motion.div
              key={q}
              variants={bubble}
              className="rounded-[1.5rem] border border-champagne/70 bg-white/65 px-5 py-4 text-base text-ink shadow-[0_18px_45px_-30px_rgba(60,40,15,0.35)] backdrop-blur-sm"
            >
              {q}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="text-center text-xl leading-8 text-ink md:col-span-2"
        >
          Sve važno stoji na jednom mestu. Gosti sami pronađu detalje i potvrde dolazak.
        </motion.p>
      </div>
    </section>
  );
}
