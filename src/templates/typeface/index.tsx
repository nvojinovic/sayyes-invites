/**
 * TYPEFACE — Typography IS the design.
 * No photos. No ornaments. Pure typographic composition.
 * Oversized display type. Word-by-word reveals.
 * Brutalist-minimal. Black on white.
 * Every section is a typographic "moment".
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, X } from "lucide-react";

const CONFIRM = "Pozdrav, potvrđujem dolazak na venčanje Ane i Marka.";
const DECLINE = "Pozdrav, nažalost neću moći da dođem na venčanje Ane i Marka.";

type Intent = "confirm" | "decline";

/* ─── Word-by-word reveal animation ─── */

function RevealWords({ text, delay = 0, style }: { text: string; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const words = text.split(" ");

  return (
    <span ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: "0.25em", ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: delay + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─── Root ─── */

export default function TypefaceTemplate() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.background = opened ? "#0A0A0A" : "#FFFFFF";
    document.body.style.color = opened ? "#FFFFFF" : "#0A0A0A";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, [opened]);

  useEffect(() => {
    if (opened) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [opened]);

  return (
    <div className="template-page" style={{ background: "#FFFFFF", color: "#0A0A0A", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>
      <AnimatePresence mode="wait">
        {!opened ? (
          <TypeCover key="cover" onOpen={() => setOpened(true)} />
        ) : (
          <TypeContent key="content" />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Typographic cover ─── */

function TypeCover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
      className="mobile-type-cover"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: "2rem", position: "relative", overflow: "hidden" }}
    >
      {/* Top bar */}
      <div className="type-cover-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #0A0A0A", paddingBottom: "1rem", marginBottom: "4rem" }}>
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase" }}
        >
          Digitalna pozivnica
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase" }}
        >
          2025
        </motion.span>
      </div>

      {/* Giant name display */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ overflow: "hidden", lineHeight: 0.85 }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(5rem, 22vw, 18rem)",
              fontWeight: 400,
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
              margin: 0,
            }}
          >
            Ana
          </motion.h1>
        </div>

        {/* Horizontal rule between names */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ height: "1.5px", background: "#0A0A0A", transformOrigin: "left", margin: "0.5rem 0" }}
        />

        <div style={{ overflow: "hidden", lineHeight: 0.85 }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(5rem, 22vw, 18rem)",
              fontWeight: 400,
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
              margin: 0,
            }}
          >
            Marko
          </motion.h1>
        </div>
      </div>

      {/* Bottom info row */}
      <motion.div
        className="type-cover-bottom"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1.5px solid #0A0A0A", paddingTop: "1rem", marginTop: "4rem" }}
      >
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#666", marginBottom: "0.25rem" }}>Datum</p>
          <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>26. aprila 2025</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#666", marginBottom: "0.25rem" }}>Lokacija</p>
          <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>Beograd</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            className="mobile-button"
            onClick={onOpen}
            style={{
              background: "#0A0A0A", color: "#FFFFFF",
              border: "none", cursor: "pointer",
              padding: "0.8rem 1.8rem",
              fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Otvori →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main typographic content ─── */

function TypeContent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Sticky minimal header */}
      <div className="mobile-sticky-header" style={{ position: "sticky", top: 0, zIndex: 40, background: "#FFFFFF", borderBottom: "1.5px solid #0A0A0A", padding: "0.75rem 2rem", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 600 }}>Ana &amp; Marko</span>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#666" }}>26.04.2025</span>
      </div>

      <LetterSection />
      <DateSection />
      <ProgramSection />
      <LocationSection />
      <RsvpSection />
      <TypeFooter />
    </motion.div>
  );
}

/* ─── Letter — giant italic serif paragraph ─── */

function LetterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "6rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#666", marginBottom: "2rem" }}
      >
        01 — Dragi naši
      </motion.p>

      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontStyle: "italic",
        fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
        lineHeight: 1.15,
        color: "#0A0A0A",
      }}>
        <RevealWords text="Sa velikom radošću vas" delay={0.1} />
        <RevealWords text="pozivamo da proslavite" delay={0.2} />
        <RevealWords text="početak našeg zajedničkog" delay={0.3} />
        <RevealWords text="života zajedno s nama." delay={0.4} />
      </div>

      <motion.div
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.8, duration: 0.8 }}
        style={{ height: 1, background: "#0A0A0A", transformOrigin: "left", margin: "2.5rem 0" }}
      />

      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}
        style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#444", maxWidth: 550 }}
      >
        Vaše prisustvo učinilo bi ovaj dan potpunim. Bez vas, ovo je samo datum. Sa vama — ovo je početak svega.
      </motion.p>
    </section>
  );
}

/* ─── Date — enormous typographic display ─── */

function DateSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="mobile-section-tight" style={{ background: "#0A0A0A", padding: "4rem 2rem", overflow: "hidden" }}>
      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#666", marginBottom: "1.5rem" }}
      >
        02 — Datum
      </motion.p>

      {/* Giant date number */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0", overflow: "hidden" }}>
        <div style={{ overflow: "hidden" }}>
          <motion.span
            initial={{ y: "100%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "block",
              fontSize: "clamp(6rem, 30vw, 25rem)",
              fontWeight: 700,
              lineHeight: 0.85,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
            }}
          >
            26
          </motion.span>
        </div>
        <div style={{ overflow: "hidden", marginLeft: "0.05em" }}>
          <motion.span
            initial={{ y: "100%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "block",
              fontSize: "clamp(6rem, 30vw, 25rem)",
              fontWeight: 700,
              lineHeight: 0.85,
              color: "#333",
              letterSpacing: "-0.04em",
            }}
          >
            .04
          </motion.span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", borderTop: "1px solid #222", paddingTop: "1.5rem" }}>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", color: "#999" }}>
          Subota
        </p>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#555" }}>
          Beograd, Srbija
        </p>
      </div>
    </section>
  );
}

/* ─── Program — tabular typographic layout ─── */

const events = [
  { num: "01", time: "14:00", label: "Venčanje", place: "Crkva Sv. Marka" },
  { num: "02", time: "16:00", label: "Koktel", place: "Hotel Moskva" },
  { num: "03", time: "18:00", label: "Večera", place: "Hotel Moskva, Sala" },
  { num: "04", time: "22:00", label: "Ples", place: "Hotel Moskva, Terasa" },
];

function ProgramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "6rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#666", marginBottom: "3rem" }}
      >
        03 — Program
      </motion.p>

      {events.map((ev, i) => (
        <motion.div
          key={ev.num}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="mobile-program-row"
          style={{
            display: "grid",
            gridTemplateColumns: "3rem 1fr 1fr",
            gap: "2rem",
            alignItems: "baseline",
            padding: "1.5rem 0",
            borderTop: "1px solid #E0E0E0",
          }}
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#BBB", fontWeight: 600 }}>{ev.num}</span>
          <div>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", display: "block", marginBottom: "0.3rem" }}>
              {ev.time}
            </span>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: "#0A0A0A",
            }}>
              {ev.label}
            </span>
          </div>
          <span style={{ fontSize: "0.9rem", color: "#666", textAlign: "right" }}>
            {ev.place}
          </span>
        </motion.div>
      ))}
      <div style={{ borderTop: "1px solid #E0E0E0" }} />
    </section>
  );
}

/* ─── Location — text-only, no images ─── */

function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="mobile-section" style={{ background: "#F5F5F5", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#666", marginBottom: "3rem" }}
        >
          04 — Lokacije
        </motion.p>

        <div className="mobile-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          {[
            { place: "Crkva Sv. Marka", addr: "Takovska 9, Beograd", time: "14:00", map: "https://www.google.com/maps/search/?api=1&query=Crkva+Svetog+Marka+Beograd" },
            { place: "Hotel Moskva", addr: "Balkanska 1, Beograd", time: "16:00", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Moskva+Beograd" },
          ].map((loc, i) => (
            <motion.div
              key={loc.place}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
            >
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>{loc.time}</p>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                color: "#0A0A0A",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}>
                {loc.place}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem" }}>{loc.addr}</p>
              <a href={loc.map} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A0A0A", textDecoration: "none", borderBottom: "1px solid #0A0A0A", paddingBottom: "0.15rem" }}>
                Mapa →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RSVP ─── */

function RsvpSection() {
  const [intent, setIntent] = useState<Intent | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const waLink = (msg: string) => `https://wa.me/?text=${encodeURIComponent(msg)}`;
  const vbLink = (msg: string) => `viber://forward?text=${encodeURIComponent(msg)}`;

  return (
    <section ref={ref} className="mobile-section" style={{ padding: "6rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#666", marginBottom: "2rem" }}
      >
        05 — Potvrda dolaska
      </motion.p>

      <div className="mobile-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 5vw, 5rem)",
            lineHeight: 1,
            color: "#0A0A0A",
            marginBottom: "1.5rem",
          }}>
            Dolazite li?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#555" }}>
            Potvrdite dolazak do <strong>15. aprila</strong>. Klikom ispod otvoriće se WhatsApp ili Viber.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "1rem" }}
        >
          <button
            onClick={() => setIntent("confirm")}
            className="mobile-button"
            style={{
              background: "#0A0A0A", color: "#FFFFFF",
              border: "1.5px solid #0A0A0A", cursor: "pointer",
              padding: "1.1rem 2rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              display: "flex", alignItems: "center", gap: "0.6rem",
              transition: "all 0.2s",
            }}
          >
            <Check style={{ width: 16, height: 16 }} />
            Potvrđujem dolazak
          </button>
          <button
            onClick={() => setIntent("decline")}
            className="mobile-button"
            style={{
              background: "transparent", color: "#0A0A0A",
              border: "1.5px solid #0A0A0A", cursor: "pointer",
              padding: "1.1rem 2rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              display: "flex", alignItems: "center", gap: "0.6rem",
            }}
          >
            <X style={{ width: 14, height: 14 }} />
            Ne dolazim
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {intent && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIntent(null)}
            style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(10,10,10,0.7)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mobile-modal"
              style={{ background: "#FFFFFF", border: "1.5px solid #0A0A0A", padding: "3rem", maxWidth: 400, width: "100%", textAlign: "center" }}
            >
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>Pošalji poruku</p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "2rem", color: "#0A0A0A", marginBottom: "2rem" }}>Otvori u</h3>
              <div className="mobile-modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1.5px solid #0A0A0A", marginBottom: "1.5rem" }}>
                <a href={waLink(intent === "confirm" ? CONFIRM : DECLINE)} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", textDecoration: "none", color: "#0A0A0A", borderRight: "1px solid #0A0A0A" }}>
                  <span style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center" }}><WhatsAppIcon /></span>
                  <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>WhatsApp</span>
                </a>
                <a href={vbLink(intent === "confirm" ? CONFIRM : DECLINE)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem", textDecoration: "none", color: "#0A0A0A" }}>
                  <span style={{ width: 44, height: 44, background: "#7360F2", borderRadius: "50%", display: "grid", placeItems: "center" }}><ViberIcon /></span>
                  <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>Viber</span>
                </a>
              </div>
              <button onClick={() => setIntent(null)} style={{ background: "none", border: "none", color: "#BBB", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Zatvori
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TypeFooter() {
  return (
    <footer style={{ background: "#0A0A0A", color: "#FFFFFF", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem" }}>
          Ana &amp; Marko
        </p>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#444" }}>
          26.04.2025 · Beograd
        </p>
        <a href="https://sayyesinvites.com" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#333", textDecoration: "none" }}>
          SayYesInvites.com
        </a>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "white" }} aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" /></svg>;
}
function ViberIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" aria-hidden="true"><path d="M12 2C6.5 2 2 6 2 11c0 2.4.9 4.6 2.5 6.2L3 21l3.9-1.3C8.4 20.5 10.1 21 12 21c5.5 0 10-4 10-9s-4.5-10-10-10z" fill="white" /><path d="M9 8.5c.2.8.5 1.5.9 2.2l.7-.7c.2-.2.5-.3.7-.1.4.3.8.5 1.3.7.3.1.4.4.3.7l-.4 1.2c-.1.3-.4.5-.7.4C9.5 13 7 10.5 7 7.8c0-.3.2-.6.4-.7l1.2-.4c.3-.1.6.1.7.3.2.5.4 1 .7 1.3.2.2.1.5-.1.7l-.7.7z" fill="#7360F2" /></svg>;
}
