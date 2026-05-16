/**
 * ART DECO GATSBY — 1920s glamour. Jet black, 24-karat gold.
 * Geometric border frames on every section. Curtain-reveal intro.
 * Symmetrical, opulent, formal.
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, X, MapPin, Clock } from "lucide-react";

const GOLD = "#C9952A";
const GOLD_LIGHT = "#E8C46A";
const GOLD_DIM = "#7A5A1A";
const CREAM = "#F5E8C8";
const BLACK = "#080604";
const DARK = "#100E08";

const PHONE = "381600000000";
const CONFIRM = "Pozdrav, potvrđujem dolazak na venčanje Isidore i Filipa.";
const DECLINE = "Pozdrav, nažalost neću moći da dođem na venčanje Isidore i Filipa.";

type Intent = "confirm" | "decline";

/* ─── Geometric frame SVG ─── */

function ArtDecoFrame({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="mobile-art-frame" style={{ position: "relative", ...style }}>
      {/* Corner ornaments */}
      {[
        { top: 0, left: 0, transform: "none" },
        { top: 0, right: 0, transform: "scaleX(-1)" },
        { bottom: 0, left: 0, transform: "scaleY(-1)" },
        { bottom: 0, right: 0, transform: "scale(-1,-1)" },
      ].map((pos, i) => (
        <svg
          key={i}
          width="40" height="40"
          viewBox="0 0 40 40"
          style={{ position: "absolute", ...pos }}
          fill={GOLD}
          aria-hidden="true"
        >
          <path d="M0 0 L40 0 L40 4 L4 4 L4 40 L0 40 Z" opacity="0.8" />
          <path d="M8 8 L20 8 L20 10 L10 10 L10 20 L8 20 Z" opacity="0.6" />
          <circle cx="6" cy="6" r="2" opacity="0.9" />
        </svg>
      ))}
      <div style={{ padding: "2.5rem" }}>{children}</div>
    </div>
  );
}

/* ─── Art Deco divider ─── */

function DecoDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center", margin: "1.5rem 0" }}>
      <div style={{ height: 1, flex: 1, background: `linear-gradient(to right, transparent, ${GOLD_DIM})` }} />
      <svg width="60" height="20" viewBox="0 0 60 20" fill={GOLD} aria-hidden="true">
        <polygon points="30,2 38,10 30,18 22,10" opacity="0.9" />
        <polygon points="30,5 36,10 30,15 24,10" fill="none" stroke={GOLD} strokeWidth="0.5" />
        <line x1="0" y1="10" x2="18" y2="10" stroke={GOLD_DIM} strokeWidth="1" />
        <line x1="42" y1="10" x2="60" y2="10" stroke={GOLD_DIM} strokeWidth="1" />
        <circle cx="10" cy="10" r="2" opacity="0.6" />
        <circle cx="50" cy="10" r="2" opacity="0.6" />
      </svg>
      <div style={{ height: 1, flex: 1, background: `linear-gradient(to left, transparent, ${GOLD_DIM})` }} />
    </div>
  );
}

/* ─── Root ─── */

export default function GatsbyTemplate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [open]);

  return (
    <div className="template-page" style={{ background: BLACK, color: CREAM, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <AnimatePresence>
        {!open && <CurtainIntro key="curtain" onOpen={() => setOpen(true)} />}
      </AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <GatsbyHero />
          <LetterSection />
          <TimelineSection />
          <LocationSection />
          <GatsbyRsvp />
          <GatsbyFooter />
        </motion.div>
      )}
    </div>
  );
}

/* ─── Curtain reveal intro ─── */

function CurtainIntro({ onOpen }: { onOpen: () => void }) {
  const [pulling, setPulling] = useState(false);

  function handleOpen() {
    if (pulling) return;
    setPulling(true);
    setTimeout(onOpen, 1800);
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: BLACK, overflow: "hidden",
      }}
    >
      {/* Left curtain */}
      <motion.div
        animate={pulling ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{
          position: "absolute", inset: "0 50% 0 0",
          background: `linear-gradient(to right, ${DARK}, #1A1408)`,
          borderRight: `1px solid ${GOLD_DIM}`,
          display: "flex", flexDirection: "column",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,149,42,0.04) 40px, rgba(201,149,42,0.04) 41px)",
        }}
      />
      {/* Right curtain */}
      <motion.div
        animate={pulling ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{
          position: "absolute", inset: "0 0 0 50%",
          background: `linear-gradient(to left, ${DARK}, #1A1408)`,
          borderLeft: `1px solid ${GOLD_DIM}`,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,149,42,0.04) 40px, rgba(201,149,42,0.04) 41px)",
        }}
      />

      {/* Center reveal content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Outer geometric ring */}
          <svg width="160" height="160" viewBox="0 0 160 160" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -120px)" }} aria-hidden="true">
            <polygon points="80,8 152,44 152,116 80,152 8,116 8,44" fill="none" stroke={GOLD_DIM} strokeWidth="1" />
            <polygon points="80,20 140,52 140,108 80,140 20,108 20,52" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.5" />
          </svg>

          <div style={{ marginBottom: "2rem", paddingTop: "6rem" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.6em", textTransform: "uppercase", color: GOLD, marginBottom: "0.75rem" }}>
              Pozivnica
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 8vw, 4rem)",
              fontWeight: 400,
              color: CREAM,
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}>
              Isidora
            </h2>
            <p style={{ color: GOLD, fontSize: "1.5rem", margin: "0.3rem 0" }}>&amp;</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 8vw, 4rem)",
              fontWeight: 400,
              color: CREAM,
              letterSpacing: "0.05em",
              lineHeight: 1.1,
            }}>
              Filip
            </h2>
          </div>

          <DecoDivider />

          <button
            className="mobile-button"
            onClick={handleOpen}
            style={{
              background: "none", border: `1px solid ${GOLD}`, color: GOLD, cursor: "pointer",
              padding: "0.9rem 2.5rem", fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif", marginTop: "1.5rem",
              transition: "all 0.3s",
            }}
          >
            Otvori pozivnicu
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Hero ─── */

function GatsbyHero() {
  return (
    <section className="mobile-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "4rem 2rem", textAlign: "center" }}>
      {/* Background deco pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,149,42,0.06) 0%, transparent 60%)",
        backgroundSize: "200px 200px",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(201,149,42,0.05) 59px, rgba(201,149,42,0.05) 60px),
          repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(201,149,42,0.05) 59px, rgba(201,149,42,0.05) 60px)
        `,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
        <ArtDecoFrame>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.6em", textTransform: "uppercase", color: GOLD, marginBottom: "2rem" }}>
            Sa ponosom objavljujemo
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 400,
              color: CREAM,
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              textShadow: `0 0 60px ${GOLD}33`,
              marginBottom: "0.5rem",
            }}
          >
            Isidora
          </motion.h1>

          <p style={{ color: GOLD, fontSize: "2rem", margin: "0.5rem 0" }}>&amp;</p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 400,
              color: CREAM,
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              textShadow: `0 0 60px ${GOLD}33`,
              marginBottom: "2.5rem",
            }}
          >
            Filip
          </motion.h1>

          <DecoDivider />

          <p style={{ fontSize: "0.75rem", letterSpacing: "0.4em", textTransform: "uppercase", color: GOLD_LIGHT, marginTop: "1.5rem" }}>
            18 · Oktobra · 2025
          </p>
        </ArtDecoFrame>
      </div>
    </section>
  );
}

/* ─── Letter ─── */

function LetterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ background: DARK, padding: "5rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ maxWidth: 700, margin: "0 auto" }}
      >
        <ArtDecoFrame style={{ borderTop: `1px solid ${GOLD_DIM}`, borderBottom: `1px solid ${GOLD_DIM}` }}>
          <p style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.8rem", color: CREAM, marginBottom: "1.5rem" }}>
            Dragi naši,
          </p>
          <DecoDivider />
          <p style={{ textAlign: "center", fontSize: "1rem", lineHeight: 1.9, color: "#C4B08A", marginBottom: "1.5rem" }}>
            Ast večeras se nevesta ukazuje u svom sjaju, a mladoženja je čeka. Sa ponosom i radošću pozivamo vas da budete svedoci ovog trenutka koji će zauvek ostati ugraviran u našim srcima.
          </p>
          <p style={{ textAlign: "center", fontSize: "1rem", lineHeight: 1.9, color: "#C4B08A" }}>
            Vaše prisustvo naš je najveći poklon.
          </p>
          <DecoDivider />
          <p style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", color: GOLD }}>
            Isidora &amp; Filip
          </p>
        </ArtDecoFrame>
      </motion.div>
    </section>
  );
}

/* ─── Timeline — art deco styled ─── */

const events = [
  { time: "14:00", label: "Crkvena ceremonija", place: "Crkva Uspenja, Beograd", num: "I" },
  { time: "16:00", label: "Koktel prijem", place: "Grand Hyatt Beograd", num: "II" },
  { time: "18:00", label: "Svečana večera", place: "Grand Hyatt Beograd", num: "III" },
];

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.6rem", letterSpacing: "0.6em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}
      >
        Program svečanosti
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: CREAM, marginBottom: "3rem", fontWeight: 400 }}
      >
        Tok dana
      </motion.h2>

      <div className="mobile-stack-compact" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: GOLD_DIM }}>
        {events.map((ev, i) => (
          <motion.div
            key={ev.num}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            style={{ background: DARK, padding: "3rem 2rem", position: "relative", textAlign: "center" }}
          >
            {/* Roman numeral decoration */}
            <div style={{
              position: "absolute", top: "1rem", left: "50%", transform: "translateX(-50%)",
              fontSize: "0.65rem", letterSpacing: "0.3em", color: GOLD_DIM, fontWeight: 600,
            }}>
              {ev.num}
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ height: 1, width: 20, background: GOLD_DIM }} />
                <Clock style={{ width: 13, height: 13, color: GOLD }} />
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.25em", color: GOLD }}>{ev.time}</span>
                <div style={{ height: 1, width: 20, background: GOLD_DIM }} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", color: CREAM, fontWeight: 400, marginBottom: "0.6rem" }}>
                {ev.label}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#7A6840" }}>{ev.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Location ─── */

function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ background: DARK, padding: "5rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ maxWidth: 700, margin: "0 auto" }}
      >
        <ArtDecoFrame>
          <p style={{ textAlign: "center", fontSize: "0.6rem", letterSpacing: "0.5em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Mesta proslave
          </p>
          <DecoDivider />
          <div className="mobile-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "2rem", marginTop: "1.5rem" }}>
            {[
              { label: "Crkva Uspenja", time: "14:00", place: "Bulevar Oslobođenja, Beograd" },
              { label: "Grand Hyatt", time: "16:00", place: "Rančićeva 10, Beograd" },
            ].map((loc, i) => (
              i === 1 ? (
                <>
                  <div key="rule" className="mobile-hidden" style={{ background: GOLD_DIM }} />
                  <div key={loc.label} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "0.6rem" }}>{loc.time}</p>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: CREAM, fontWeight: 400, marginBottom: "0.5rem" }}>{loc.label}</h3>
                    <p style={{ fontSize: "0.8rem", color: "#7A6840", marginBottom: "1rem" }}>{loc.place}</p>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.label + " Beograd")}`}
                      target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", border: `1px solid ${GOLD_DIM}`, padding: "0.5rem 1rem" }}>
                      <MapPin style={{ width: 12, height: 12 }} /> Mapa
                    </a>
                  </div>
                </>
              ) : (
                <div key={loc.label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "0.6rem" }}>{loc.time}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: CREAM, fontWeight: 400, marginBottom: "0.5rem" }}>{loc.label}</h3>
                  <p style={{ fontSize: "0.8rem", color: "#7A6840", marginBottom: "1rem" }}>{loc.place}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.label + " Beograd")}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", border: `1px solid ${GOLD_DIM}`, padding: "0.5rem 1rem" }}>
                    <MapPin style={{ width: 12, height: 12 }} /> Mapa
                  </a>
                </div>
              )
            ))}
          </div>
        </ArtDecoFrame>
      </motion.div>
    </section>
  );
}

/* ─── RSVP ─── */

function GatsbyRsvp() {
  const [intent, setIntent] = useState<Intent | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const waLink = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  const vbLink = (msg: string) => `viber://forward?text=${encodeURIComponent(msg)}`;

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <ArtDecoFrame>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.6em", textTransform: "uppercase", color: GOLD, marginBottom: "0.75rem" }}>Potvrda dolaska</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: CREAM, fontWeight: 400, marginBottom: "0.75rem" }}>
            Čekamo vas
          </h2>
          <DecoDivider />
          <p style={{ fontSize: "0.9rem", color: "#7A6840", marginBottom: "2.5rem" }}>
            Potvrdite do <span style={{ color: GOLD_LIGHT }}>5. oktobra</span>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <button
              className="mobile-button"
              onClick={() => setIntent("confirm")}
              style={{
                background: GOLD, color: BLACK, border: "none", cursor: "pointer",
                padding: "1rem 2.5rem", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
              }}
            >
              <Check style={{ width: 15, height: 15 }} /> Potvrđujem dolazak
            </button>
            <button
              className="mobile-button"
              onClick={() => setIntent("decline")}
              style={{
                background: "transparent", color: GOLD_DIM, border: `1px solid ${GOLD_DIM}`, cursor: "pointer",
                padding: "0.9rem 2.5rem", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
              }}
            >
              <X style={{ width: 13, height: 13 }} /> Ne dolazim
            </button>
          </div>
        </ArtDecoFrame>
      </motion.div>

      <AnimatePresence>
        {intent && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIntent(null)}
            style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(8,6,4,0.9)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mobile-modal"
              style={{ background: DARK, maxWidth: 400, width: "100%", position: "relative" }}
            >
              <ArtDecoFrame>
                <p style={{ textAlign: "center", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}>Pošalji poruku</p>
                <h3 style={{ textAlign: "center", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", color: CREAM, fontWeight: 400, marginBottom: "2rem" }}>Otvori u</h3>
                <div className="mobile-modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: GOLD_DIM, marginBottom: "1.5rem" }}>
                  <a href={waLink(intent === "confirm" ? CONFIRM : DECLINE)} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", background: DARK, textDecoration: "none", color: CREAM }}>
                    <span style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                      <WhatsAppIcon />
                    </span>
                    <span style={{ fontSize: "0.8rem" }}>WhatsApp</span>
                  </a>
                  <a href={vbLink(intent === "confirm" ? CONFIRM : DECLINE)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", background: DARK, textDecoration: "none", color: CREAM }}>
                    <span style={{ width: 44, height: 44, background: "#7360F2", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                      <ViberIcon />
                    </span>
                    <span style={{ fontSize: "0.8rem" }}>Viber</span>
                  </a>
                </div>
                <button onClick={() => setIntent(null)} style={{ display: "block", margin: "0 auto", background: "none", border: "none", color: GOLD_DIM, cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                  Zatvori
                </button>
              </ArtDecoFrame>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GatsbyFooter() {
  return (
    <footer style={{ background: DARK, padding: "2.5rem 2rem", textAlign: "center", borderTop: `1px solid ${GOLD_DIM}` }}>
      <DecoDivider />
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.3rem", color: GOLD, margin: "1rem 0 0.25rem" }}>
        Isidora &amp; Filip
      </p>
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: GOLD_DIM, textTransform: "uppercase" }}>18. Oktobra 2025</p>
      <a href="https://sayyesinvites.com" target="_blank" rel="noopener noreferrer"
        style={{ display: "block", marginTop: "2rem", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#3A3020", textDecoration: "none" }}>
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
