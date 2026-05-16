/**
 * EDITORIAL MAGAZINE — Vogue/Harper's Bazaar inspired layout.
 * Magazine cover intro, two-column editorial sections, pull quotes,
 * mixed typography scales, editorial photo framing.
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Check, X } from "lucide-react";

const COVER_PHOTO =
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80";
const PORTRAIT_PHOTO =
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80";

const CONFIRM = "Pozdrav, potvrđujem dolazak na venčanje Katarine i Jovana.";
const DECLINE = "Pozdrav, nažalost neću moći da dođem na venčanje Katarine i Jovana.";

type Intent = "confirm" | "decline";

const ACCENT = "#C9765A";  // terracotta-peach editorial accent
const RULE = "#D4C4B0";

/* ─── Root ─── */

export default function EditorialTemplate() {
  const [coverRead, setCoverRead] = useState(false);

  useEffect(() => {
    document.body.style.background = "#FAF7F2";
    document.body.style.color = "#1A1A1A";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    if (coverRead) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [coverRead]);

  if (!coverRead) return <MagazineCover onOpen={() => setCoverRead(true)} />;
  return <Magazine />;
}

/* ─── Magazine Cover ─── */

function MagazineCover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="template-page"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: "100vh",
        background: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Masthead */}
      <div className="mobile-sticky-header" style={{
        borderBottom: `1px solid ${RULE}`,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", textTransform: "uppercase" }}>
          Maj 2025
        </span>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.6rem",
          letterSpacing: "0.15em",
          fontWeight: 700,
          color: "#1A1A1A",
          textTransform: "uppercase",
          textAlign: "center",
        }}>
          Say Yes
        </p>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", textTransform: "uppercase" }}>
          No. 1
        </span>
      </div>

      {/* Cover layout */}
      <div className="mobile-stack mobile-section-tight" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.4fr", maxWidth: 900, margin: "0 auto", width: "100%", padding: "2rem" }}>
        {/* Left — cover text */}
        <div style={{ padding: "2rem 2rem 2rem 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, marginBottom: "1.5rem" }}
            >
              Ekskluzivno
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 0.9,
                color: "#1A1A1A",
                marginBottom: "1.5rem",
                fontWeight: 400,
              }}
            >
              Katarina<br /><em style={{ fontSize: "0.75em" }}>&amp;</em><br />Jovan
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ height: 2, background: "#1A1A1A", marginBottom: "1.5rem", transformOrigin: "left" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#555", maxWidth: 260 }}
            >
              Jedno venčanje. Jedna ljubavna priča. Jedno posebno jutro — 7. septembra.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#AAA", marginBottom: "0.5rem" }}>
              Unutra
            </p>
            {["Tok dana", "Lokacije", "Potvrda dolaska"].map((item) => (
              <p key={item} style={{ fontSize: "0.8rem", color: "#333", borderTop: `1px solid ${RULE}`, padding: "0.4rem 0" }}>
                {item}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Right — cover photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <img
            src={COVER_PHOTO}
            alt="Katarina i Jovan"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Issue label on photo */}
          <div style={{
            position: "absolute", bottom: "1.5rem", left: "1.5rem",
            background: "rgba(250,247,242,0.9)", backdropFilter: "blur(8px)",
            padding: "0.5rem 1rem", borderLeft: `3px solid ${ACCENT}`,
          }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }}>
              7. septembra 2025
            </p>
          </div>
        </motion.div>
      </div>

      {/* Open CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ padding: "1.5rem", borderTop: `1px solid ${RULE}`, textAlign: "center" }}
      >
        <button
          className="mobile-button"
          onClick={onOpen}
          style={{
            background: "#1A1A1A", color: "#FAF7F2",
            border: "none", cursor: "pointer",
            padding: "0.9rem 3rem",
            fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Otvori pozivnicu →
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Magazine interior ─── */

function Magazine() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="template-page"
      style={{ background: "#FAF7F2", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}
    >
      {/* Running header */}
      <div className="mobile-sticky-header" style={{
        position: "sticky", top: 0, zIndex: 40,
        background: "#FAF7F2", borderBottom: `1px solid ${RULE}`,
        padding: "0.75rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#AAA", textTransform: "uppercase" }}>
          Katarina &amp; Jovan
        </span>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase" }}>
          Say Yes
        </p>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#AAA", textTransform: "uppercase" }}>
          7. sep. 2025
        </span>
      </div>

      <LetterSpread />
      <PullQuoteSection />
      <ScheduleSpread />
      <LocationSpread />
      <RsvpSpread />
      <EditorialFooter />
    </motion.div>
  );
}

/* ─── Letter spread ─── */

function LetterSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-stack mobile-section" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "3rem", alignItems: "start" }}>
      {/* Left column — letter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, marginBottom: "1.5rem" }}>
          Dragi naši
        </p>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
          lineHeight: 1.3,
          color: "#1A1A1A",
          marginBottom: "2rem",
        }}>
          „Svaki trenutak koji smo proveli zajedno doveo nas je do ovog dana."
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#4A4A4A", marginBottom: "1.5rem" }}>
          Sa velikom radošću i uz toplo srce, pozivamo vas da budete deo naše svečanosti. 7. septembra, u prisustvu svih koji su nam dragi, izgovorićemo reči koje menjaju sve.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#4A4A4A" }}>
          Vaše prisustvo znači nam više od svake dekoracije i svakog aranžmana.
        </p>

        <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ height: 2, width: 30, background: ACCENT }} />
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "#1A1A1A",
          }}>
            Katarina &amp; Jovan
          </p>
        </div>
      </motion.div>

      {/* Vertical rule */}
      <div className="mobile-hidden" style={{ background: RULE, alignSelf: "stretch" }} />

      {/* Right column — portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={PORTRAIT_PHOTO}
            alt="Katarina i Jovan"
            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "1rem",
            background: "linear-gradient(to top, rgba(250,247,242,0.9), transparent)",
          }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#666" }}>
              Foto: Lazar Nikolić
            </p>
          </div>
        </div>
        {/* Small editorial fact box */}
        <div className="mobile-card" style={{ marginTop: "1.5rem", padding: "1rem", border: `1px solid ${RULE}`, borderLeft: `3px solid ${ACCENT}` }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.5rem" }}>Datum</p>
          <p style={{ fontSize: "1.1rem", color: "#1A1A1A" }}>Subota, 7. septembra 2025.</p>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Pull quote section ─── */

function PullQuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ background: "#1A1A1A", padding: "5rem 2rem", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ height: 2, background: ACCENT, maxWidth: 80, margin: "0 auto 2rem" }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.9 }}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
          color: "#FAF7F2",
          maxWidth: 700,
          margin: "0 auto",
          lineHeight: 1.3,
        }}
      >
        „Rekla je da. Sada je red na ostatku sveta."
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ height: 2, background: ACCENT, maxWidth: 80, margin: "2rem auto 0" }}
      />
    </section>
  );
}

/* ─── Schedule spread ─── */

const scheduleItems = [
  { time: "10:30", label: "Venčanje", place: "Crkva Sv. Marka, Beograd", note: "Molimo dođite 15 min ranije" },
  { time: "12:00", label: "Koktel", place: "Hotel Metropol Palace", note: "Terasa, 1. sprat" },
  { time: "14:00", label: "Svečana večera", place: "Hotel Metropol Palace", note: "Velika sala" },
];

function ScheduleSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
      <div className="mobile-row-stack" style={{ borderTop: `2px solid #1A1A1A`, paddingTop: "2rem", marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A1A1A", fontWeight: 400 }}>
          Program
        </h2>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#AAA" }}>
          7. septembra
        </span>
      </div>

      <div className="mobile-stack-compact" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {scheduleItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            style={{
              borderTop: `1px solid ${RULE}`,
              borderRight: i < scheduleItems.length - 1 ? `1px solid ${RULE}` : "none",
              padding: "2rem",
            }}
          >
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.75rem" }}>
              {item.time}
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.8rem", color: "#1A1A1A", fontWeight: 400, marginBottom: "0.5rem" }}>
              {item.label}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "0.35rem" }}>{item.place}</p>
            <p style={{ fontSize: "0.75rem", color: "#AAA", fontStyle: "italic" }}>{item.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Location spread ─── */

function LocationSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mobile-section" style={{ background: "#F0EBE2", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="mobile-stack" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "4rem", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, marginBottom: "1rem" }}>
              Glavna lokacija
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A1A1A", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Hotel<br />Metropol<br />Palace
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#555", marginBottom: "2rem" }}>
              Bulevar Kralja Aleksandra 69, Beograd. Jedna od najelegancijih lokacija u gradu, idealna za ovaj nezaboravan dan.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Metropol+Palace+Beograd"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                color: "#1A1A1A", textDecoration: "none",
                fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
                borderBottom: `1px solid #1A1A1A`, paddingBottom: "0.2rem",
              }}
            >
              <MapPin style={{ width: 13, height: 13 }} />
              Otvori mapu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <img
                src={COVER_PHOTO}
                alt="Hotel Metropol"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Offset caption box */}
            <div className="mobile-bleed-caption" style={{
              position: "absolute", bottom: "-1.5rem", right: "2rem",
              background: "#FAF7F2", padding: "1rem 1.5rem",
              border: `1px solid ${RULE}`,
            }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }}>
                Beograd · Srbija
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── RSVP ─── */

function RsvpSpread() {
  const [intent, setIntent] = useState<Intent | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const waLink = (msg: string) => `https://wa.me/?text=${encodeURIComponent(msg)}`;
  const vbLink = (msg: string) => `viber://forward?text=${encodeURIComponent(msg)}`;

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "5rem 2rem", borderTop: `2px solid #1A1A1A` }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, marginBottom: "1rem" }}>
            Potvrda dolaska
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#1A1A1A", fontWeight: 400, marginBottom: "1.5rem" }}>
            Dolazite li?
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Potvrdite dolazak do <strong style={{ color: "#1A1A1A" }}>25. avgusta</strong>. Klikom ispod otvara se WhatsApp ili Viber sa unapred pripremljenom porukom.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setIntent("confirm")}
              className="mobile-button"
              style={{
                background: "#1A1A1A", color: "#FAF7F2",
                border: "none", cursor: "pointer",
                padding: "1rem 2.5rem",
                fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              <Check style={{ width: 15, height: 15 }} />
              Potvrđujem
            </button>
            <button
              onClick={() => setIntent("decline")}
              className="mobile-button"
              style={{
                background: "transparent", color: "#1A1A1A",
                border: `1px solid ${RULE}`, cursor: "pointer",
                padding: "1rem 2.5rem",
                fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              <X style={{ width: 14, height: 14 }} />
              Ne dolazim
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {intent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIntent(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 60,
              background: "rgba(26,26,26,0.6)", backdropFilter: "blur(4px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
            }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mobile-modal"
              style={{
                background: "#FAF7F2", padding: "3rem", maxWidth: 400, width: "100%",
                textAlign: "center", border: `1px solid ${RULE}`,
              }}
            >
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.5rem" }}>
                Pošalji poruku
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", color: "#1A1A1A", marginBottom: "2rem" }}>
                Otvori u aplikaciji
              </h3>
              <div className="mobile-modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <a href={waLink(intent === "confirm" ? CONFIRM : DECLINE)} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", border: `1px solid ${RULE}`, textDecoration: "none", color: "#1A1A1A" }}>
                  <span style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                    <WhatsAppIcon />
                  </span>
                  <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>WhatsApp</span>
                </a>
                <a href={vbLink(intent === "confirm" ? CONFIRM : DECLINE)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", border: `1px solid ${RULE}`, textDecoration: "none", color: "#1A1A1A" }}>
                  <span style={{ width: 44, height: 44, background: "#7360F2", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                    <ViberIcon />
                  </span>
                  <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>Viber</span>
                </a>
              </div>
              <button onClick={() => setIntent(null)} style={{ background: "none", border: "none", color: "#AAA", cursor: "pointer", fontSize: "0.8rem" }}>
                Zatvori
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function EditorialFooter() {
  return (
    <footer style={{
      background: "#FAF7F2", borderTop: `2px solid #1A1A1A`,
      padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
    }}>
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontStyle: "italic", color: "#1A1A1A" }}>
        Katarina &amp; Jovan · 7. septembra 2025.
      </p>
      <a href="https://sayyesinvites.com" target="_blank" rel="noopener noreferrer"
        style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#AAA", textDecoration: "none" }}>
        SayYesInvites.com
      </a>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "white" }} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}
function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6 2 11c0 2.4.9 4.6 2.5 6.2L3 21l3.9-1.3C8.4 20.5 10.1 21 12 21c5.5 0 10-4 10-9s-4.5-10-10-10z" fill="white" />
      <path d="M9 8.5c.2.8.5 1.5.9 2.2l.7-.7c.2-.2.5-.3.7-.1.4.3.8.5 1.3.7.3.1.4.4.3.7l-.4 1.2c-.1.3-.4.5-.7.4C9.5 13 7 10.5 7 7.8c0-.3.2-.6.4-.7l1.2-.4c.3-.1.6.1.7.3.2.5.4 1 .7 1.3.2.2.1.5-.1.7l-.7.7z" fill="#7360F2" />
    </svg>
  );
}
