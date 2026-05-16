/**
 * WATERCOLOR DREAM — Soft, organic, painterly.
 * Animated CSS blob background that slowly shifts like wet ink.
 * Cards reveal like watercolor paint washing in.
 * No hard edges anywhere. Everything floats.
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Heart, MapPin, Clock, Check, X, ChevronDown } from "lucide-react";

const PHONE = "381600000000";
const CONFIRM = "Pozdrav, potvrđujem dolazak na venčanje Lune i Vuka.";
const DECLINE = "Pozdrav, nažalost neću moći da dođem na venčanje Lune i Vuka.";

type Intent = "confirm" | "decline";

/* ─── Animated blob background ─── */

function BlobBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="blur-blob">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>
      </svg>
      {/* Blob 1 — rose */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-10%", left: "-10%",
          width: "60vw", height: "60vw",
          borderRadius: "60% 40% 50% 70% / 50% 60% 40% 50%",
          background: "rgba(230, 170, 170, 0.5)",
          filter: "blur(80px)",
        }}
      />
      {/* Blob 2 — lavender */}
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 80, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute", top: "30%", right: "-15%",
          width: "55vw", height: "55vw",
          borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%",
          background: "rgba(190, 170, 230, 0.45)",
          filter: "blur(80px)",
        }}
      />
      {/* Blob 3 — mint/sage */}
      <motion.div
        animate={{
          x: [0, 40, -80, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        style={{
          position: "absolute", bottom: "-10%", left: "20%",
          width: "50vw", height: "50vw",
          borderRadius: "50% 50% 30% 70% / 40% 70% 30% 60%",
          background: "rgba(160, 210, 185, 0.4)",
          filter: "blur(80px)",
        }}
      />
      {/* Blob 4 — peach */}
      <motion.div
        animate={{
          x: [0, -30, 60, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        style={{
          position: "absolute", top: "60%", left: "5%",
          width: "40vw", height: "40vw",
          borderRadius: "70% 30% 60% 40% / 50% 60% 40% 50%",
          background: "rgba(240, 190, 150, 0.35)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

/* ─── Root ─── */

export default function WatercolorTemplate() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.background = "#FEF9F7";
    document.body.style.color = "rgba(80,50,80,0.85)";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    if (opened) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [opened]);

  return (
    <div className="template-page" style={{ background: "#FEF9F7", minHeight: "100vh", position: "relative" }}>
      <BlobBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {!opened ? (
            <InkRevealIntro key="intro" onOpen={() => setOpened(true)} />
          ) : (
            <WatercolorContent key="content" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Ink wash intro ─── */

function InkRevealIntro({ onOpen }: { onOpen: () => void }) {
  const [painting, setPainting] = useState(false);

  function handleOpen() {
    if (painting) return;
    setPainting(true);
    setTimeout(onOpen, 1800);
  }

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6 } }}
      style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "2rem",
      }}
    >
      {/* Circular watercolor reveal */}
      <div style={{ position: "relative", marginBottom: "3rem" }}>
        <motion.div
          animate={{
            scale: [1, 1.08, 0.96, 1.04, 1],
            rotate: [0, 3, -2, 1, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 200, height: 200,
            borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
            background: "radial-gradient(circle at 40% 40%, rgba(230,170,170,0.7), rgba(190,170,230,0.5), rgba(160,210,185,0.6))",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
            boxShadow: "inset 0 0 60px rgba(255,255,255,0.4), 0 20px 60px rgba(190,150,170,0.25)",
          }}
        >
          <motion.p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.8rem",
              color: "rgba(80,50,80,0.8)",
              userSelect: "none",
            }}
          >
            L &amp; V
          </motion.p>
        </motion.div>

        {/* Drips/splashes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
            style={{
              position: "absolute",
              width: 12 + i * 4, height: 12 + i * 4,
              borderRadius: "50% 60% 40% 70%",
              background: ["rgba(230,170,170,0.5)", "rgba(190,170,230,0.5)", "rgba(160,210,185,0.5)", "rgba(240,190,150,0.5)", "rgba(200,160,200,0.5)", "rgba(170,200,220,0.5)"][i],
              top: `${[10, 80, 60, -10, 40, 90][i]}%`,
              left: `${[90, 90, -10, 30, -15, 20][i]}%`,
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(150,100,130,0.7)", marginBottom: "1rem" }}
      >
        Pozivnica
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          color: "rgba(80,50,80,0.85)",
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}
      >
        Luna &amp; Vuk
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "0.9rem", color: "rgba(120,90,110,0.7)", marginBottom: "3rem" }}
      >
        3. avgusta
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={painting ? { scale: 10, opacity: 0 } : { opacity: 1, scale: 1 }}
        transition={painting
          ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          : { delay: 1.2, duration: 0.5 }
        }
        onClick={handleOpen}
        style={{
          background: "rgba(190,150,180,0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(190,150,180,0.4)",
          color: "rgba(100,60,90,0.85)",
          padding: "1rem 2.5rem",
          borderRadius: "50px",
          fontSize: "0.8rem",
          cursor: "pointer",
          letterSpacing: "0.15em",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Otvori pozivnicu
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: "2rem" }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ChevronDown style={{ width: 20, height: 20, color: "rgba(150,100,130,0.5)" }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main content ─── */

function WatercolorContent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <HeroSection />
      <LetterSection />
      <ScheduleSection />
      <LocationSection />
      <RsvpSection />
      <WatercolorFooter />
    </motion.div>
  );
}

/* ─── Floating card helper ─── */

function FloatingCard({ children, delay = 0, tilt = 0 }: { children: React.ReactNode; delay?: number; tilt?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: tilt - 2 }}
      animate={inView ? { opacity: 1, y: 0, rotate: tilt } : {}}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: tilt * 0.5 }}
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow: "0 20px 60px -10px rgba(160,100,140,0.18), 0 4px 20px rgba(255,255,255,0.8) inset",
        padding: "2.5rem",
      }}
      className="watercolor-card mobile-card"
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero ─── */

function HeroSection() {
  return (
    <section className="mobile-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem", textAlign: "center" }}>
      <div style={{ maxWidth: 600 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <FloatingCard>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(150,100,130,0.7)", marginBottom: "1.5rem" }}
            >
              Sa ljubavlju vas pozivamo
            </motion.p>

            <motion.div
              animate={{ rotate: [0, 5, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ marginBottom: "1rem" }}
            >
              <Heart style={{ width: 28, height: 28, color: "rgba(210,140,160,0.7)", fill: "rgba(210,140,160,0.7)", margin: "0 auto" }} />
            </motion.div>

            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 0.95,
              color: "rgba(80,50,80,0.85)",
              marginBottom: "0.5rem",
            }}>
              Luna
            </h1>
            <p style={{ color: "rgba(190,140,180,0.7)", fontSize: "2rem", margin: "0.25rem 0" }}>&amp;</p>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 0.95,
              color: "rgba(80,50,80,0.85)",
              marginBottom: "2rem",
            }}>
              Vuk
            </h1>

            <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(190,140,180,0.4), transparent)", marginBottom: "1.5rem" }} />

            <p style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "rgba(140,100,120,0.7)" }}>
              3. avgusta · Beograd
            </p>
          </FloatingCard>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ marginTop: "3rem" }}
        >
          <ChevronDown style={{ width: 22, height: 22, color: "rgba(150,100,130,0.5)", margin: "0 auto" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Letter ─── */

function LetterSection() {
  return (
    <section className="mobile-section-tight" style={{ padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 650, margin: "0 auto" }}>
        <FloatingCard tilt={-1}>
          <p style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.6rem", color: "rgba(80,50,80,0.85)", marginBottom: "1.5rem" }}>
            Dragi naši,
          </p>
          <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(210,160,190,0.5), transparent)", marginBottom: "1.5rem" }} />
          <p style={{ textAlign: "center", fontSize: "1rem", lineHeight: 1.9, color: "rgba(100,70,90,0.75)", marginBottom: "1.5rem" }}>
            Kao što akvarelske boje klize jedna u drugu i stvaraju nešto potpuno novo, tako smo i mi — Luna i Vuk — pronašli jedan drugog i postali nešto više.
          </p>
          <p style={{ textAlign: "center", fontSize: "1rem", lineHeight: 1.9, color: "rgba(100,70,90,0.75)" }}>
            Budite deo ovog čarobnog dana i podeli ste ga sa nama.
          </p>
          <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(210,160,190,0.5), transparent)", margin: "1.5rem 0" }} />
          <p style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.3rem", color: "rgba(160,100,140,0.8)" }}>
            Luna &amp; Vuk
          </p>
        </FloatingCard>
      </div>
    </section>
  );
}

/* ─── Schedule ─── */

const schedule = [
  { time: "11:00", title: "Venčanje", place: "Crkva Sv. Petke, Beograd" },
  { time: "13:00", title: "Svečani ručak", place: "Vila Mala, Beograd" },
  { time: "17:00", title: "Ples & proslava", place: "Vila Mala, Beograd" },
];

function ScheduleSection() {
  return (
    <section className="mobile-section-tight" style={{ padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 750, margin: "0 auto" }}>
        <FloatingCard tilt={0.5}>
          <p style={{ textAlign: "center", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(150,100,130,0.7)", marginBottom: "0.5rem" }}>
            Raspored
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "2.5rem", color: "rgba(80,50,80,0.85)", marginBottom: "2rem" }}>
            Tok dana
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {schedule.map((item, i) => (
              <div
                key={item.title}
                  className="mobile-row-stack"
                  style={{
                  display: "flex", alignItems: "center", gap: "1.5rem",
                  padding: "1.25rem 0",
                  borderTop: i > 0 ? "1px solid rgba(210,160,190,0.2)" : "none",
                }}
              >
                {/* Time blob */}
                <div style={{
                  width: 56, height: 56, flexShrink: 0,
                  borderRadius: "50% 40% 60% 50%",
                  background: `rgba(${[230, 190, 170][i]}, ${[170, 170, 210][i]}, ${[200, 230, 185][i]}, 0.4)`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                }}>
                  <Clock style={{ width: 12, height: 12, color: "rgba(100,60,90,0.6)", marginBottom: "2px" }} />
                  <span style={{ fontSize: "0.65rem", color: "rgba(80,50,80,0.7)", fontWeight: 600 }}>{item.time}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.3rem", color: "rgba(80,50,80,0.85)", marginBottom: "0.25rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(140,100,120,0.65)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <MapPin style={{ width: 11, height: 11 }} />
                    {item.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}

/* ─── Locations ─── */

function LocationSection() {
  return (
    <section className="mobile-section-tight" style={{ padding: "4rem 1.5rem" }}>
      <div className="mobile-stack" style={{ maxWidth: 750, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {[
          { label: "Crkva Sv. Petke", desc: "Ceremonija", time: "11:00", tilt: -1.5, color: "rgba(230,170,170,0.35)", map: "https://www.google.com/maps/search/?api=1&query=Crkva+Sv+Petke+Beograd" },
          { label: "Vila Mala", desc: "Proslava", time: "13:00", tilt: 1, color: "rgba(190,170,230,0.35)", map: "https://www.google.com/maps/search/?api=1&query=Vila+Beograd" },
        ].map((loc) => (
          <FloatingCard key={loc.label} tilt={loc.tilt}>
            <div style={{ width: 48, height: 48, borderRadius: "50% 40% 60% 50%", background: loc.color, display: "grid", placeItems: "center", marginBottom: "1.25rem" }}>
              <MapPin style={{ width: 18, height: 18, color: "rgba(100,60,90,0.6)" }} />
            </div>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(150,100,130,0.65)", marginBottom: "0.4rem" }}>{loc.time} · {loc.desc}</p>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", color: "rgba(80,50,80,0.85)", marginBottom: "1.25rem" }}>{loc.label}</h3>
            <a href={loc.map} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.75rem", color: "rgba(150,100,130,0.8)", textDecoration: "none", letterSpacing: "0.1em", borderBottom: "1px solid rgba(150,100,130,0.3)", paddingBottom: "0.15rem" }}>
              Otvori mapu →
            </a>
          </FloatingCard>
        ))}
      </div>
    </section>
  );
}

/* ─── RSVP ─── */

function RsvpSection() {
  const [intent, setIntent] = useState<Intent | null>(null);

  const waLink = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  const vbLink = (msg: string) => `viber://forward?text=${encodeURIComponent(msg)}`;

  return (
    <section className="mobile-section" style={{ padding: "4rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <FloatingCard tilt={-0.5}>
          <p style={{ textAlign: "center", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(150,100,130,0.7)", marginBottom: "0.5rem" }}>
            Potvrda dolaska
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "2.5rem", color: "rgba(80,50,80,0.85)", marginBottom: "0.75rem" }}>
            Dolazite li?
          </h2>
          <p style={{ textAlign: "center", fontSize: "0.9rem", color: "rgba(140,100,120,0.65)", marginBottom: "2rem" }}>
            Potvrdite do <span style={{ color: "rgba(170,110,150,0.85)" }}>20. jula</span>
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", alignItems: "center" }}>
            <button
              onClick={() => setIntent("confirm")}
              className="mobile-button"
              style={{
                width: "100%", maxWidth: 320,
                background: "linear-gradient(135deg, rgba(210,160,180,0.7), rgba(190,160,220,0.7))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(210,180,210,0.5)",
                color: "rgba(60,30,60,0.9)",
                padding: "1rem 2rem", borderRadius: "50px",
                fontSize: "0.8rem", cursor: "pointer", letterSpacing: "0.15em",
                fontFamily: "'Inter', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              }}
            >
              <Check style={{ width: 16, height: 16 }} /> Potvrđujem dolazak
            </button>
            <button
              onClick={() => setIntent("decline")}
              className="mobile-button"
              style={{
                background: "transparent",
                border: "1px solid rgba(200,170,190,0.4)",
                color: "rgba(150,110,130,0.7)",
                padding: "0.9rem 2rem", borderRadius: "50px",
                fontSize: "0.8rem", cursor: "pointer", letterSpacing: "0.15em",
                fontFamily: "'Inter', sans-serif",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              <X style={{ width: 14, height: 14 }} /> Ne dolazim
            </button>
          </div>
        </FloatingCard>
      </div>

      <AnimatePresence>
        {intent && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIntent(null)}
            style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(80,50,80,0.4)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          >
            <motion.div
              initial={{ y: 40, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mobile-modal"
              style={{ background: "rgba(255,250,255,0.85)", backdropFilter: "blur(20px)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 30px 80px rgba(150,80,130,0.25)", padding: "2.5rem", maxWidth: 380, width: "100%", textAlign: "center" }}
            >
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(150,100,130,0.7)", marginBottom: "0.5rem" }}>Pošalji poruku</p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.6rem", color: "rgba(80,50,80,0.85)", marginBottom: "2rem" }}>Otvori u</h3>
              <div className="mobile-modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <a href={waLink(intent === "confirm" ? CONFIRM : DECLINE)} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.25rem", borderRadius: "16px", border: "1px solid rgba(200,180,210,0.4)", textDecoration: "none", color: "rgba(80,50,80,0.85)", background: "rgba(255,255,255,0.6)" }}>
                  <span style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center" }}><WhatsAppIcon /></span>
                  <span style={{ fontSize: "0.8rem" }}>WhatsApp</span>
                </a>
                <a href={vbLink(intent === "confirm" ? CONFIRM : DECLINE)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.25rem", borderRadius: "16px", border: "1px solid rgba(200,180,210,0.4)", textDecoration: "none", color: "rgba(80,50,80,0.85)", background: "rgba(255,255,255,0.6)" }}>
                  <span style={{ width: 44, height: 44, background: "#7360F2", borderRadius: "50%", display: "grid", placeItems: "center" }}><ViberIcon /></span>
                  <span style={{ fontSize: "0.8rem" }}>Viber</span>
                </a>
              </div>
              <button onClick={() => setIntent(null)} style={{ background: "none", border: "none", color: "rgba(150,100,130,0.6)", cursor: "pointer", fontSize: "0.8rem" }}>Zatvori</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function WatercolorFooter() {
  return (
    <footer style={{ textAlign: "center", padding: "2rem 1.5rem 3rem" }}>
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.3rem", color: "rgba(150,100,130,0.6)", marginBottom: "0.3rem" }}>Luna &amp; Vuk</p>
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(150,100,130,0.4)" }}>3. avgusta · Beograd</p>
      <a href="https://sayyesinvites.com" target="_blank" rel="noopener noreferrer"
        style={{ display: "block", marginTop: "1.5rem", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(150,100,130,0.3)", textDecoration: "none" }}>
        SayYesInvites.com
      </a>
    </footer>
  );
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "white" }} aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" /></svg>;
}
function ViberIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" aria-hidden="true"><path d="M12 2C6.5 2 2 6 2 11c0 2.4.9 4.6 2.5 6.2L3 21l3.9-1.3C8.4 20.5 10.1 21 12 21c5.5 0 10-4 10-9s-4.5-10-10-10z" fill="white" /><path d="M9 8.5c.2.8.5 1.5.9 2.2l.7-.7c.2-.2.5-.3.7-.1.4.3.8.5 1.3.7.3.1.4.4.3.7l-.4 1.2c-.1.3-.4.5-.7.4C9.5 13 7 10.5 7 7.8c0-.3.2-.6.4-.7l1.2-.4c.3-.1.6.1.7.3.2.5.4 1 .7 1.3.2.2.1.5-.1.7l-.7.7z" fill="#7360F2" /></svg>;
}
