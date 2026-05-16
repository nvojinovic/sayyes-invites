/**
 * CINEMATIC DARK — deep black, full-screen photo sections, movie-trailer feel.
 * No envelope. Dramatic text reveals. Parallax scrolling.
 */

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Clock, Check, X, ChevronDown } from "lucide-react";

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1920&q=80";
const VENUE_PHOTO =
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80";
const STORY_PHOTO =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

const PHONE = "381600000000";
const CONFIRM = "Pozdrav, potvrđujem dolazak na venčanje Milene i Aleksandra.";
const DECLINE = "Pozdrav, nažalost neću moći da dođem na venčanje Milene i Aleksandra.";

type Intent = "confirm" | "decline";

/* ─── Root ─── */

export default function CinematicTemplate() {
  useEffect(() => {
    document.body.style.background = "#060606";
    document.body.style.color = "#EDE3D0";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="template-page" style={{ background: "#060606", color: "#EDE3D0" }}>
      <HeroSection />
      <StorySection />
      <ScheduleSection />
      <LocationSection />
      <RsvpSection />
      <CinematicFooter />
    </main>
  );
}

/* ─── Hero ─── */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax photo */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={HERO_PHOTO}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        {/* Film-style label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ color: "#C9952A", fontSize: "0.65rem", textTransform: "uppercase", marginBottom: "2rem" }}
        >
          &mdash;&nbsp;Digitalna pozivnica&nbsp;&mdash;
        </motion.p>

        {/* Names — cinematic title treatment */}
        <div style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3rem, 12vw, 9rem)",
              lineHeight: 0.95,
              color: "#F5EBD8",
              textShadow: "0 0 80px rgba(201,149,42,0.3)",
            }}
          >
            Milena
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ color: "#C9952A", fontSize: "1.5rem", letterSpacing: "0.2em", margin: "0.75rem 0" }}
        >
          &amp;
        </motion.p>

        <div style={{ overflow: "hidden", marginBottom: "2.5rem" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3rem, 12vw, 9rem)",
              lineHeight: 0.95,
              color: "#F5EBD8",
              textShadow: "0 0 80px rgba(201,149,42,0.3)",
            }}
          >
            Aleksandar
          </motion.h1>
        </div>

        {/* Date tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            border: "1px solid rgba(201,149,42,0.5)",
            padding: "0.6rem 1.8rem",
            borderRadius: "2px",
          }}
        >
          <span style={{ width: 32, height: 1, background: "#C9952A", display: "block" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9952A" }}>
            12. oktobra
          </span>
          <span style={{ width: 32, height: 1, background: "#C9952A", display: "block" }} />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown style={{ color: "#C9952A", width: 24, height: 24 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Story ─── */

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="mobile-section"
      style={{ background: "#0E0C09", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative vertical gold line */}
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, #C9952A22, transparent)" }} />

      <div className="mobile-stack" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          <div style={{
            position: "absolute", inset: "-12px", border: "1px solid #C9952A33", borderRadius: 2,
            transform: "rotate(-1deg)",
          }} />
          <img
            src={STORY_PHOTO}
            alt="Milena i Aleksandar"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              objectFit: "cover",
              display: "block",
              filter: "grayscale(20%) contrast(1.05)",
            }}
          />
          {/* Caption tag */}
          <div className="mobile-bleed-caption" style={{
            position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
            background: "#C9952A", padding: "0.5rem 1.2rem",
          }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#060606", fontWeight: 600 }}>
              2021 — Beograd
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9952A", marginBottom: "1.5rem" }}>
            Naša priča
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.1,
            color: "#F5EBD8",
            marginBottom: "2rem",
          }}>
            Dragi naši,
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#C4B99A", marginBottom: "1.5rem" }}>
            Sa izuzetnim zadovoljstvom vas pozivamo da budete deo dana koji smo oduvek zamišljali. Dana koji počinje tamo gde sve počinje — sa vama.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#C4B99A" }}>
            Vaše prisustvo učinilo bi ovaj trenutak potpunim.
          </p>

          <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ height: 1, width: 40, background: "#C9952A" }} />
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "#C9952A",
            }}>
              Milena &amp; Aleksandar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Schedule — horizontal cinematic cards ─── */

const schedule = [
  { time: "15:00", title: "Crkveno venčanje", place: "Saborna crkva, Beograd", num: "01" },
  { time: "17:00", title: "Svečana večera", place: "Splendid Conference & Spa, Beograd", num: "02" },
  { time: "19:00", title: "Ples & proslava", place: "Splendid Conference & Spa", num: "03" },
];

function ScheduleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "6rem 1.5rem", background: "#060606", position: "relative" }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{ textAlign: "center", fontSize: "0.65rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9952A", marginBottom: "1rem" }}
      >
        Raspored
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          color: "#F5EBD8",
          marginBottom: "3.5rem",
        }}
      >
        12. oktobra
      </motion.h2>

      {/* Card strip */}
      <div className="mobile-stack-compact" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#C9952A22" }}>
        {schedule.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-card"
            style={{ background: "#0E0C09", padding: "3rem 2rem", position: "relative" }}
          >
            <span style={{
              position: "absolute", top: "1.5rem", right: "1.5rem",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "4rem", color: "#C9952A0D", lineHeight: 1, fontWeight: 700,
            }}>
              {item.num}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Clock style={{ width: 14, height: 14, color: "#C9952A" }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#C9952A", textTransform: "uppercase" }}>
                {item.time}
              </span>
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.5rem",
              color: "#F5EBD8",
              marginBottom: "0.75rem",
            }}>
              {item.title}
            </h3>
            <p style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "#7A6E5A" }}>
              <MapPin style={{ width: 13, height: 13, color: "#C9952A", flexShrink: 0 }} />
              {item.place}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Location — full-bleed with overlay ─── */

function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-parallax-section" style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <img src={VENUE_PHOTO} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.5) 50%, rgba(6,6,6,0.1) 100%)" }} />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="mobile-card"
        style={{ position: "relative", zIndex: 10, padding: "4rem 2.5rem", maxWidth: 600 }}
      >
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9952A", marginBottom: "1.5rem" }}>
          Mesto proslave
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          color: "#F5EBD8",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Splendid Conference & Spa
        </h2>
        <p style={{ color: "#C4B99A", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Bulevar Mihajla Pupina, Beograd — elegantno i nezaboravno.
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Splendid+Conference+Spa+Beograd"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-button"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            border: "1px solid #C9952A", color: "#C9952A",
            padding: "0.8rem 1.8rem", fontSize: "0.75rem",
            letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
            transition: "all 0.3s",
          }}
        >
          <MapPin style={{ width: 14, height: 14 }} />
          Otvori mapu
        </a>
      </motion.div>
    </section>
  );
}

/* ─── RSVP ─── */

function RsvpSection() {
  const [intent, setIntent] = useState<Intent | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const waLink = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  const vbLink = (msg: string) => `viber://forward?text=${encodeURIComponent(msg)}`;

  return (
    <section ref={ref} className="mobile-section" style={{ background: "#0E0C09", padding: "6rem 1.5rem", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ maxWidth: 700, margin: "0 auto" }}
      >
        {/* Large ornamental ampersand */}
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "8rem", lineHeight: 0.8,
          color: "#C9952A0A",
          marginBottom: "-3rem",
          userSelect: "none",
        }}>
          &amp;
        </p>

        <p style={{ fontSize: "0.65rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9952A", marginBottom: "1rem" }}>
          Potvrda dolaska
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          color: "#F5EBD8",
          marginBottom: "1.5rem",
        }}>
          Dolazite li?
        </h2>
        <p style={{ color: "#7A6E5A", fontSize: "1rem", marginBottom: "2.5rem" }}>
          Potvrdite dolazak do <span style={{ color: "#C4B99A" }}>1. oktobra</span>.
        </p>

        {/* Thin gold divider */}
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, #C9952A66, transparent)", marginBottom: "2.5rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={() => setIntent("confirm")}
            className="mobile-button"
            style={{
              background: "#C9952A", color: "#060606", border: "none", cursor: "pointer",
              padding: "1rem 3rem", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase",
              fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.6rem",
              transition: "all 0.3s",
            }}
          >
            <Check style={{ width: 16, height: 16 }} />
            Potvrđujem dolazak
          </button>
          <button
            onClick={() => setIntent("decline")}
            className="mobile-button"
            style={{
              background: "transparent", color: "#7A6E5A", border: "1px solid #3A3228", cursor: "pointer",
              padding: "1rem 3rem", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase",
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
            }}
          >
            <X style={{ width: 14, height: 14 }} />
            Ne dolazim
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {intent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIntent(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 60,
              background: "rgba(6,6,6,0.85)", backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
            }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mobile-modal"
              style={{ background: "#0E0C09", border: "1px solid #3A3228", padding: "2.5rem", maxWidth: 420, width: "100%", textAlign: "center" }}
            >
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9952A", marginBottom: "1rem" }}>
                Pošalji poruku
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.8rem", color: "#F5EBD8", marginBottom: "2rem" }}>
                Otvori u
              </h3>
              <div className="mobile-modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <a
                  href={waLink(intent === "confirm" ? CONFIRM : DECLINE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
                    padding: "1.5rem", border: "1px solid #2A2520", textDecoration: "none",
                    color: "#F5EBD8", transition: "border-color 0.3s",
                  }}
                >
                  <span style={{ width: 48, height: 48, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                    <WhatsAppIcon style={{ width: 24, height: 24 }} />
                  </span>
                  <span style={{ fontSize: "0.85rem" }}>WhatsApp</span>
                </a>
                <a
                  href={vbLink(intent === "confirm" ? CONFIRM : DECLINE)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
                    padding: "1.5rem", border: "1px solid #2A2520", textDecoration: "none",
                    color: "#F5EBD8",
                  }}
                >
                  <span style={{ width: 48, height: 48, background: "#7360F2", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                    <ViberIcon style={{ width: 24, height: 24 }} />
                  </span>
                  <span style={{ fontSize: "0.85rem" }}>Viber</span>
                </a>
              </div>
              <button onClick={() => setIntent(null)} style={{ background: "none", border: "none", color: "#4A4238", cursor: "pointer", fontSize: "0.8rem" }}>
                Zatvori
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Footer ─── */

function CinematicFooter() {
  return (
    <footer style={{ background: "#060606", padding: "3rem 1.5rem", textAlign: "center", borderTop: "1px solid #1A1712" }}>
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", color: "#C9952A", marginBottom: "0.5rem" }}>
        Milena &amp; Aleksandar
      </p>
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: "#3A3228", textTransform: "uppercase" }}>
        12. oktobra • Beograd
      </p>
      <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #1A1712" }}>
        <a href="https://sayyesinvites.com" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "0.65rem", color: "#4A4238", textDecoration: "none" }}>
          Digitalna pozivnica — SayYesInvites.com
        </a>
      </div>
    </footer>
  );
}

/* ─── SVG icons ─── */

function WhatsAppIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={{ ...style, fill: "white" }} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}

function ViberIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" style={style} fill="none" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6 2 11c0 2.4.9 4.6 2.5 6.2L3 21l3.9-1.3C8.4 20.5 10.1 21 12 21c5.5 0 10-4 10-9s-4.5-10-10-10z" fill="white" />
      <path d="M9 8.5c.2.8.5 1.5.9 2.2l.7-.7c.2-.2.5-.3.7-.1.4.3.8.5 1.3.7.3.1.4.4.3.7l-.4 1.2c-.1.3-.4.5-.7.4C9.5 13 7 10.5 7 7.8c0-.3.2-.6.4-.7l1.2-.4c.3-.1.6.1.7.3.2.5.4 1 .7 1.3.2.2.1.5-.1.7l-.7.7z" fill="#7360F2" />
    </svg>
  );
}
