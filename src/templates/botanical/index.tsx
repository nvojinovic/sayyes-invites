/**
 * BOTANICAL NATURE — Lush, immersive, forest wedding.
 * Full-bleed nature photography from Unsplash (copyright-free).
 * Deep forest green palette. Text overlaid directly on photos.
 * Vertical parallax sections. Leaf animations.
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { MapPin, Check, X, ChevronDown, Clock } from "lucide-react";

/* ── Unsplash nature photos (free license) ── */
const HERO_IMG    = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80";
const FOREST_IMG  = "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80";
const FLOWERS_IMG = "https://images.unsplash.com/photo-1490750967868-88df5691cc13?auto=format&fit=crop&w=1200&q=80";
const FERN_IMG    = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80";

const CONFIRM = "Pozdrav, potvrđujem dolazak na venčanje Tanje i Boška.";
const DECLINE = "Pozdrav, nažalost neću moći da dođem na venčanje Tanje i Boška.";

type Intent = "confirm" | "decline";

const FOREST_GREEN = "#1C3A2A";
const LEAF = "#2D5A3D";
const GOLD = "#C4A355";
const CREAM = "#F5EDD8";
const CREAM_DIM = "rgba(245,237,216,0.7)";

/* ─── Root ─── */

export default function BotanicalTemplate() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.background = FOREST_GREEN;
    document.body.style.color = CREAM;
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    if (entered) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [entered]);

  return (
    <div className="template-page" style={{ background: FOREST_GREEN }}>
      <AnimatePresence mode="wait">
        {!entered ? (
          <ForestGate key="gate" onEnter={() => setEntered(true)} />
        ) : (
          <BotanicalContent key="content" />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Leaf SVG scattered around ─── */

function FloatingLeaf({ style, duration = 10 }: { style?: React.CSSProperties; duration?: number }) {
  return (
    <motion.svg
      viewBox="0 0 60 100"
      fill="none"
      aria-hidden="true"
      style={{ ...style, position: "absolute", pointerEvents: "none" }}
      animate={{
        rotate: ["0deg", "5deg", "-3deg", "0deg"],
        y: [0, -15, 5, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M30 5 C 30 30, 30 70, 30 95" stroke="rgba(160,200,150,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {[15, 30, 48, 65, 80].map((y, i) => (
        <g key={i}>
          <path d={`M30 ${y} C 12 ${y-8}, 4 ${y-2}, 2 ${y+8} C 16 ${y+6}, 26 ${y+4}, 30 ${y+4}`} fill="rgba(100,170,120,0.6)" />
          <path d={`M30 ${y+5} C 48 ${y-3}, 56 ${y+5}, 58 ${y+15} C 44 ${y+13}, 34 ${y+11}, 30 ${y+11}`} fill="rgba(80,150,100,0.5)" />
        </g>
      ))}
    </motion.svg>
  );
}

/* ─── Forest gate intro ─── */

function ForestGate({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Hero photo */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={HERO_IMG} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,58,42,0.3) 0%, rgba(28,58,42,0.65) 50%, rgba(28,58,42,0.9) 100%)" }} />
      </div>

      {/* Scattered leaves */}
      <FloatingLeaf duration={10} style={{ top: "5%", left: "2%", width: 40, height: 70, opacity: 0.5, transform: "rotate(-30deg)" }} />
      <FloatingLeaf duration={13} style={{ top: "10%", right: "3%", width: 50, height: 85, opacity: 0.4, transform: "rotate(20deg) scaleX(-1)" }} />
      <FloatingLeaf duration={12} style={{ bottom: "15%", left: "5%", width: 35, height: 60, opacity: 0.4, transform: "rotate(10deg)" }} />
      <FloatingLeaf duration={14} style={{ bottom: "10%", right: "6%", width: 45, height: 75, opacity: 0.35, transform: "rotate(-15deg) scaleX(-1)" }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "2rem" }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: "0.6rem", letterSpacing: "0.5em", textTransform: "uppercase", color: GOLD, marginBottom: "1.5rem" }}
        >
          Pozivnica
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            color: CREAM,
            lineHeight: 0.9,
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            marginBottom: "0.25rem",
          }}
        >
          Tanja
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ color: GOLD, fontSize: "2rem", margin: "0.3rem 0" }}
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            color: CREAM,
            lineHeight: 0.9,
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            marginBottom: "2.5rem",
          }}
        >
          Boško
        </motion.h1>

        {/* Botanical ornament line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", marginBottom: "1rem" }}
        >
          <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
            <path d="M12 2 C 12 7, 17 10, 22 10 C 17 10, 12 15, 12 22 C 12 15, 7 10, 2 10 C 7 10, 12 7, 12 2" />
          </svg>
          <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ color: CREAM_DIM, fontSize: "0.9rem", letterSpacing: "0.25em", marginBottom: "3rem" }}
        >
          14. juna · Fruškogorski manastir
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          onClick={onEnter}
          className="mobile-button"
          style={{
            background: "rgba(196,163,85,0.15)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${GOLD}`,
            color: GOLD,
            padding: "1rem 2.5rem",
            fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Uđi u šumu
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: "absolute", bottom: "2rem" }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown style={{ color: GOLD, width: 22, height: 22 }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Botanical content ─── */

function BotanicalContent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <ParallaxSection img={FOREST_IMG} height="70vh">
        <LetterContent />
      </ParallaxSection>
      <ScheduleSection />
      <ParallaxSection img={FLOWERS_IMG} height="60vh">
        <LocationOverlay />
      </ParallaxSection>
      <ParallaxSection img={FERN_IMG} height="80vh">
        <RsvpOverlay />
      </ParallaxSection>
      <BotanicalFooter />
    </motion.div>
  );
}

/* ─── Parallax section wrapper ─── */

function ParallaxSection({ img, height, children }: { img: string; height: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="mobile-parallax-section" style={{ position: "relative", height, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div style={{ y, position: "absolute", inset: "-20%", zIndex: 0 }}>
        <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </motion.div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,58,42,0.55), rgba(28,58,42,0.72))", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 700, padding: "2rem" }}>
        {children}
      </div>
    </section>
  );
}

function LetterContent() {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>Dragi naši</p>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: CREAM, lineHeight: 1.3, marginBottom: "1.5rem" }}>
        „Neka naš dan bude kao šuma — pun tišine, svetlosti i čuda."
      </h2>
      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${GOLD}80, transparent)`, marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "1rem", lineHeight: 1.9, color: CREAM_DIM, marginBottom: "1rem" }}>
        Pozivamo vas da proslavite sa nama venčanje u okrilju prirode i mira. Dan koji je stvoren za ljubav, smeeh i zajednička sećanja.
      </p>
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.3rem", color: GOLD }}>
        Tanja &amp; Boško
      </p>
    </div>
  );
}

/* ─── Schedule ─── */

const schedule = [
  { time: "11:00", title: "Crkvena ceremonija", place: "Fruškogorski manastir Krušedol" },
  { time: "13:00", title: "Svečani ručak", place: "Etno restoran Fruška" },
  { time: "16:00", title: "Šetnja & fotografisanje", place: "Park Fruška gora" },
  { time: "19:00", title: "Večera & ples", place: "Etno restoran Fruška" },
];

function ScheduleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ background: FOREST_GREEN, padding: "5rem 1.5rem" }}>
      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ textAlign: "center", fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}
      >
        Program
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
        style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 4rem)", color: CREAM, marginBottom: "3.5rem", fontWeight: 400 }}
      >
        14. juna
      </motion.h2>

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        {/* Vertical line */}
        <div className="mobile-schedule-line" style={{ position: "absolute", left: "2rem", top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, ${LEAF}, transparent)` }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {schedule.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}
              className="mobile-schedule-item"
              style={{ display: "flex", gap: "2.5rem", padding: "1.5rem 0 1.5rem 5rem", position: "relative" }}
            >
              {/* Node */}
              <div className="mobile-schedule-node" style={{
                position: "absolute", left: "calc(2rem - 6px)", top: "50%", transform: "translateY(-50%)",
                width: 13, height: 13,
                borderRadius: "50%",
                background: LEAF,
                border: `2px solid ${GOLD}`,
                boxShadow: `0 0 12px ${GOLD}44`,
              }} />

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <Clock style={{ width: 13, height: 13, color: GOLD }} />
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase" }}>{item.time}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.4rem", color: CREAM, marginBottom: "0.3rem", fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(196,163,85,0.6)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <MapPin style={{ width: 11, height: 11 }} />
                  {item.place}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Locations overlay on photo ─── */

function LocationOverlay() {
  return (
    <div className="mobile-location-overlay" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
      {[
        { label: "Manastir Krušedol", desc: "Ceremonija · 11:00", map: "https://www.google.com/maps/search/?api=1&query=Manastir+Kruseol+Fruska+Gora" },
        { label: "Etno restoran Fruška", desc: "Proslava · 13:00", map: "https://www.google.com/maps/search/?api=1&query=Fruska+Gora+etno+restoran" },
      ].map((loc) => (
        <div
          key={loc.label}
          className="mobile-card"
          style={{
            background: "rgba(28,58,42,0.7)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${GOLD}44`,
            padding: "1.5rem",
          }}
        >
          <MapPin style={{ width: 18, height: 18, color: GOLD, marginBottom: "0.75rem" }} />
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: "0.4rem" }}>{loc.desc}</p>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", color: CREAM, marginBottom: "1rem", fontWeight: 400 }}>
            {loc.label}
          </h3>
          <a href={loc.map} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: GOLD, textDecoration: "none", borderBottom: `1px solid ${GOLD}44` }}>
            Otvori mapu →
          </a>
        </div>
      ))}
    </div>
  );
}

/* ─── RSVP overlay on photo ─── */

function RsvpOverlay() {
  const [intent, setIntent] = useState<Intent | null>(null);

  const waLink = (msg: string) => `https://wa.me/?text=${encodeURIComponent(msg)}`;
  const vbLink = (msg: string) => `viber://forward?text=${encodeURIComponent(msg)}`;

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}>Potvrda dolaska</p>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 4rem)", color: CREAM, fontWeight: 400, marginBottom: "1rem" }}>
        Dolazite?
      </h2>
      <p style={{ color: CREAM_DIM, fontSize: "0.9rem", marginBottom: "2rem" }}>
        Potvrdite do <span style={{ color: GOLD }}>1. juna</span>
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", alignItems: "center" }}>
        <button
          onClick={() => setIntent("confirm")}
          className="mobile-button"
          style={{
            background: GOLD, color: FOREST_GREEN, border: "none", cursor: "pointer",
            padding: "1rem 2.5rem", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
          }}
        >
          <Check style={{ width: 15, height: 15 }} /> Dolazim
        </button>
        <button
          onClick={() => setIntent("decline")}
          className="mobile-button"
          style={{
            background: "rgba(28,58,42,0.6)", backdropFilter: "blur(8px)",
            border: `1px solid ${GOLD}44`, color: CREAM_DIM, cursor: "pointer",
            padding: "0.9rem 2.5rem", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
          }}
        >
          <X style={{ width: 13, height: 13 }} /> Ne dolazim
        </button>
      </div>

      <AnimatePresence>
        {intent && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIntent(null)}
            style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(28,58,42,0.75)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mobile-modal"
              style={{ background: FOREST_GREEN, border: `1px solid ${GOLD}44`, padding: "2.5rem", maxWidth: 380, width: "100%", textAlign: "center" }}
            >
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}>Pošalji poruku</p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.6rem", color: CREAM, marginBottom: "2rem", fontWeight: 400 }}>Otvori u</h3>
              <div className="mobile-modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <a href={waLink(intent === "confirm" ? CONFIRM : DECLINE)} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", border: `1px solid ${LEAF}`, textDecoration: "none", color: CREAM }}>
                  <span style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center" }}><WhatsAppIcon /></span>
                  <span style={{ fontSize: "0.8rem" }}>WhatsApp</span>
                </a>
                <a href={vbLink(intent === "confirm" ? CONFIRM : DECLINE)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", border: `1px solid ${LEAF}`, textDecoration: "none", color: CREAM }}>
                  <span style={{ width: 44, height: 44, background: "#7360F2", borderRadius: "50%", display: "grid", placeItems: "center" }}><ViberIcon /></span>
                  <span style={{ fontSize: "0.8rem" }}>Viber</span>
                </a>
              </div>
              <button onClick={() => setIntent(null)} style={{ background: "none", border: "none", color: `${GOLD}66`, cursor: "pointer", fontSize: "0.8rem" }}>Zatvori</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BotanicalFooter() {
  return (
    <footer style={{ background: "#111F18", padding: "2.5rem 1.5rem", textAlign: "center", borderTop: `1px solid ${LEAF}` }}>
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.4rem", color: GOLD, marginBottom: "0.3rem" }}>Tanja &amp; Boško</p>
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: `${GOLD}55` }}>14. juna · Fruška gora</p>
      <a href="https://sayyesinvites.com" target="_blank" rel="noopener noreferrer"
        style={{ display: "block", marginTop: "1.5rem", fontSize: "0.6rem", letterSpacing: "0.2em", color: `${LEAF}`, textDecoration: "none" }}>
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
