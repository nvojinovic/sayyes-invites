import { useRef, type FC } from "react";
import { motion, useInView } from "framer-motion";

/* ── Mini preview scenes ─────────────────────────────────────────── */

const PreviewClassic: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(155deg,#f9f4ec 0%,#ede5d2 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Georgia,serif",
      padding: "24px",
      boxSizing: "border-box",
    }}
  >
    <p
      style={{
        fontSize: "7px",
        letterSpacing: "0.5em",
        color: "#8fa882",
        textTransform: "uppercase",
        marginBottom: "14px",
      }}
    >
      POZIVAJU VAS
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
      <div style={{ width: "28px", height: "1px", background: "#c9a96a" }} />
      <svg width="9" height="9" viewBox="0 0 10 10">
        <path d="M5 0l1.2 3.5H10L6.9 5.7l1.2 3.5L5 7l-3.1 2.2 1.2-3.5L0 3.5h3.8L5 0z" fill="#c9a96a" />
      </svg>
      <div style={{ width: "28px", height: "1px", background: "#c9a96a" }} />
    </div>
    <h3
      style={{
        fontSize: "26px",
        color: "#2a231e",
        lineHeight: 1.2,
        textAlign: "center",
        margin: 0,
        fontStyle: "italic",
      }}
    >
      Ivana
      <br />
      &amp;
      <br />
      Dimitrije
    </h3>
    <div style={{ width: "1px", height: "20px", background: "#c9a96a", margin: "14px 0" }} />
    <p style={{ fontSize: "7px", letterSpacing: "0.35em", color: "#6b5f53", textTransform: "uppercase" }}>
      14. JUNA · BEOGRAD
    </p>
  </div>
);

const PreviewCinematic: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#060606",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Georgia,serif",
      padding: "24px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(201,149,42,0.18), transparent)",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        opacity: 0.05,
      }}
    />
    <p
      style={{
        fontSize: "7px",
        letterSpacing: "0.55em",
        color: "#C9952A",
        textTransform: "uppercase",
        position: "relative",
        marginBottom: "18px",
      }}
    >
      UNA PRODUKCIJA
    </p>
    <h3
      style={{
        fontSize: "24px",
        color: "#f5f0e8",
        lineHeight: 1.15,
        textAlign: "center",
        margin: 0,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        position: "relative",
      }}
    >
      MILENA
      <br />
      <span style={{ fontSize: "12px", letterSpacing: "0.45em", color: "#C9952A" }}>&amp;</span>
      <br />
      ALEKSANDAR
    </h3>
    <div style={{ width: "40px", height: "1px", background: "#C9952A", margin: "16px 0", position: "relative" }} />
    <p
      style={{
        fontSize: "7px",
        letterSpacing: "0.5em",
        color: "rgba(245,240,232,0.45)",
        textTransform: "uppercase",
        position: "relative",
      }}
    >
      12. OKTOBRA · 2025
    </p>
  </div>
);

const PreviewEditorial: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        background: "#0a0a0a",
        padding: "10px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: "13px", color: "#fff", fontFamily: "Georgia,serif", fontStyle: "italic" }}>
        Say Yes
      </span>
      <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.35em", textTransform: "uppercase" }}>
        No. 1 · 2025
      </span>
    </div>
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      <div
        style={{
          flex: 1,
          padding: "14px 12px",
          borderRight: "1px solid #e8e2da",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia,serif",
        }}
      >
        <div>
          <p style={{ fontSize: "6px", letterSpacing: "0.45em", color: "#C9765A", textTransform: "uppercase", margin: "0 0 10px" }}>
            POZIVNICA SEZONE
          </p>
          <h3 style={{ fontSize: "20px", color: "#0a0a0a", lineHeight: 1.1, margin: 0, fontStyle: "italic" }}>
            Katarina
            <br />&amp;<br />
            Jovan
          </h3>
        </div>
        <p style={{ fontSize: "6px", letterSpacing: "0.3em", color: "rgba(10,10,10,0.5)", textTransform: "uppercase", margin: 0 }}>
          7. SEPT. 2025
        </p>
      </div>
      <div
        style={{
          width: "42%",
          background: "linear-gradient(160deg,#f0ebe3,#ddd5c8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(201,118,90,0.15)",
            border: "1px solid rgba(201,118,90,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Georgia,serif",
          }}
        >
          <span style={{ fontSize: "18px", color: "#C9765A", fontStyle: "italic" }}>K</span>
        </div>
      </div>
    </div>
  </div>
);

const PreviewGatsby: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#080604",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Georgia,serif",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(201,149,42,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(201,149,42,0.06) 1px,transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
    {/* Corner ornaments */}
    {(
      [
        { top: "8px", left: "8px", rotate: "0deg" },
        { top: "8px", right: "8px", rotate: "90deg" },
        { bottom: "8px", left: "8px", rotate: "-90deg" },
        { bottom: "8px", right: "8px", rotate: "180deg" },
      ] as const
    ).map((pos, i) => (
      <svg
        key={i}
        width="22"
        height="22"
        viewBox="0 0 24 24"
        style={{ position: "absolute", ...pos, transform: `rotate(${pos.rotate})` }}
      >
        <path d="M0 0 L13 0 L13 2 L2 2 L2 13 L0 13 Z" fill="#C9952A" opacity="0.75" />
      </svg>
    ))}
    <svg width="52" height="58" viewBox="0 0 52 58" style={{ marginBottom: "12px", position: "relative" }}>
      <polygon
        points="26,2 50,15 50,43 26,56 2,43 2,15"
        fill="none"
        stroke="#C9952A"
        strokeWidth="1"
        opacity="0.75"
      />
      <text
        x="26"
        y="34"
        textAnchor="middle"
        fill="#C9952A"
        fontFamily="Georgia,serif"
        fontSize="18"
        fontStyle="italic"
      >
        IF
      </text>
    </svg>
    <h3
      style={{
        fontSize: "14px",
        color: "#f5f0e8",
        letterSpacing: "0.28em",
        textAlign: "center",
        textTransform: "uppercase",
        margin: "0 0 12px",
        lineHeight: 1.5,
        position: "relative",
      }}
    >
      ISIDORA
      <br />
      &amp; FILIP
    </h3>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
      <div style={{ width: "18px", height: "1px", background: "#C9952A" }} />
      <div style={{ width: "6px", height: "6px", background: "#C9952A", transform: "rotate(45deg)" }} />
      <div style={{ width: "18px", height: "1px", background: "#C9952A" }} />
    </div>
    <p style={{ fontSize: "7px", letterSpacing: "0.4em", color: "rgba(201,149,42,0.55)", textTransform: "uppercase", marginTop: "10px", position: "relative" }}>
      XVIII · X · MMXXV
    </p>
  </div>
);

const PreviewWatercolor: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#fef6f8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Georgia,serif",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "-15%",
        left: "-20%",
        width: "65%",
        height: "65%",
        borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
        background: "rgba(255,182,193,0.5)",
        filter: "blur(22px)",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "-15%",
        right: "-20%",
        width: "60%",
        height: "60%",
        borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
        background: "rgba(197,176,223,0.45)",
        filter: "blur(20px)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "15%",
        right: "-12%",
        width: "45%",
        height: "45%",
        borderRadius: "70% 30% 40% 60%",
        background: "rgba(167,218,197,0.35)",
        filter: "blur(18px)",
      }}
    />
    <div style={{ position: "relative", textAlign: "center" }}>
      <p style={{ fontSize: "7px", letterSpacing: "0.4em", color: "rgba(120,70,95,0.7)", textTransform: "uppercase", marginBottom: "12px" }}>
        VAS POZIVAJU
      </p>
      <h3 style={{ fontSize: "26px", color: "#3d1f2f", lineHeight: 1.2, margin: "0 0 12px", fontStyle: "italic" }}>
        Luna &amp; Vuk
      </h3>
      <div style={{ width: "28px", height: "1px", background: "rgba(180,110,140,0.5)", margin: "0 auto 12px" }} />
      <p style={{ fontSize: "7px", letterSpacing: "0.35em", color: "rgba(80,45,65,0.6)", textTransform: "uppercase" }}>
        3. AVGUSTA
      </p>
    </div>
  </div>
);

const PreviewBotanical: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#1C3A2A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Georgia,serif",
    }}
  >
    <svg
      width="70"
      height="80"
      viewBox="0 0 70 80"
      style={{ position: "absolute", top: "-12px", right: "-12px", opacity: 0.22 }}
    >
      <path d="M60 8 C60 8 35 12 12 36 C-4 55 8 75 24 68 C42 60 66 44 60 8Z" fill="#5a9a6a" />
      <line x1="60" y1="8" x2="24" y2="68" stroke="#3a7a4a" strokeWidth="2" />
      <path d="M40 20 C40 20 25 18 18 30 C14 40 22 46 30 42 C38 38 42 28 40 20Z" fill="#4a8a5a" opacity="0.6" />
    </svg>
    <svg
      width="55"
      height="65"
      viewBox="0 0 70 80"
      style={{
        position: "absolute",
        bottom: "-8px",
        left: "-10px",
        opacity: 0.18,
        transform: "rotate(155deg)",
      }}
    >
      <path d="M60 8 C60 8 35 12 12 36 C-4 55 8 75 24 68 C42 60 66 44 60 8Z" fill="#5a9a6a" />
      <line x1="60" y1="8" x2="24" y2="68" stroke="#3a7a4a" strokeWidth="2" />
    </svg>
    <p style={{ fontSize: "7px", letterSpacing: "0.45em", color: "#C4A355", textTransform: "uppercase", position: "relative", marginBottom: "14px" }}>
      VENČANJE
    </p>
    <h3 style={{ fontSize: "22px", color: "#f5eedc", lineHeight: 1.2, textAlign: "center", margin: "0 0 14px", position: "relative", fontStyle: "italic" }}>
      Tanja &amp; Boško
    </h3>
    <div style={{ display: "flex", alignItems: "center", gap: "6px", position: "relative" }}>
      <div style={{ width: "22px", height: "1px", background: "#C4A355" }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <path d="M4 0C2 2 0 4 4 8C8 4 6 2 4 0Z" fill="#C4A355" />
      </svg>
      <div style={{ width: "22px", height: "1px", background: "#C4A355" }} />
    </div>
    <p style={{ fontSize: "7px", letterSpacing: "0.38em", color: "rgba(196,163,85,0.55)", textTransform: "uppercase", position: "relative", marginTop: "12px" }}>
      14. JUNA 2025
    </p>
  </div>
);

const PreviewTypeface: FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      padding: "14px 16px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Georgia,serif",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "-30px",
        left: "-12px",
        fontSize: "130px",
        color: "#0A0A0A",
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: "-0.05em",
        userSelect: "none",
        opacity: 0.9,
      }}
    >
      A
    </div>
    <div style={{ position: "relative", width: "100%" }}>
      <div style={{ width: "100%", height: "1px", background: "#0A0A0A", marginBottom: "8px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "6px", letterSpacing: "0.45em", color: "rgba(10,10,10,0.75)", textTransform: "uppercase", margin: "0 0 2px" }}>
            ANA &amp; MARKO
          </p>
          <p style={{ fontSize: "6px", letterSpacing: "0.35em", color: "rgba(10,10,10,0.4)", textTransform: "uppercase", margin: 0 }}>
            26. APRILA
          </p>
        </div>
        <p style={{ fontSize: "6px", letterSpacing: "0.25em", color: "rgba(10,10,10,0.35)", textTransform: "uppercase", margin: 0 }}>
          2025
        </p>
      </div>
    </div>
  </div>
);

/* ── Template data ───────────────────────────────────────────────── */

interface TemplateItem {
  id: string;
  path: string;
  label: string;
  couple: string;
  tag?: string;
  Preview: FC;
}

const TEMPLATES: TemplateItem[] = [
  {
    id: "classic",
    path: "/ivana-dimitrije",
    label: "Klasična elegancija",
    couple: "Ivana & Dimitrije",
    tag: "Original",
    Preview: PreviewClassic,
  },
  {
    id: "cinematic",
    path: "/template-cinematic",
    label: "Cinematično",
    couple: "Milena & Aleksandar",
    Preview: PreviewCinematic,
  },
  {
    id: "editorial",
    path: "/template-editorial",
    label: "Editorijal",
    couple: "Katarina & Jovan",
    Preview: PreviewEditorial,
  },
  {
    id: "gatsby",
    path: "/template-gatsby",
    label: "Art Deco",
    couple: "Isidora & Filip",
    Preview: PreviewGatsby,
  },
  {
    id: "watercolor",
    path: "/template-watercolor",
    label: "Akvarel",
    couple: "Luna & Vuk",
    Preview: PreviewWatercolor,
  },
  {
    id: "botanical",
    path: "/template-botanical",
    label: "Botanika",
    couple: "Tanja & Boško",
    Preview: PreviewBotanical,
  },
  {
    id: "typeface",
    path: "/template-typeface",
    label: "Tipografija",
    couple: "Ana & Marko",
    Preview: PreviewTypeface,
  },
];

/* ── Card component ──────────────────────────────────────────────── */

function Card({ tpl, index }: { tpl: TemplateItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px", amount: 0.15 });
  const { Preview } = tpl;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      <a
        href={tpl.path}
        target="_blank"
        rel="noopener noreferrer"
        className="group block active:scale-[0.985] transition-transform duration-150"
      >
        {/* Preview frame */}
        <div
          className="relative overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-[0_24px_70px_-20px_rgba(0,0,0,0.9)]"
          style={{ outline: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* 16:10 aspect ratio */}
          <div style={{ paddingBottom: "62.5%", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <Preview />
            </div>
          </div>

          {/* Tag pill — always visible, top-left */}
          {tpl.tag && (
            <span
              className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                color: "#C9952A",
                letterSpacing: "0.08em",
              }}
            >
              {tpl.tag}
            </span>
          )}

          {/* Desktop hover overlay (hidden on touch) */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40 md:flex">
            <span className="translate-y-3 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold tracking-wide text-ink opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Pogledaj demo →
            </span>
          </div>
        </div>

        {/* Card info — arrow always visible (mobile-friendly CTA) */}
        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="min-w-0">
            <p
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "rgba(245,240,232,0.92)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tpl.couple}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.4)",
                marginTop: "3px",
              }}
            >
              {tpl.label}
            </p>
          </div>
          <span
            className="flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "#C9952A", letterSpacing: "0.16em" }}
          >
            Otvori
            <span aria-hidden>→</span>
          </span>
        </div>
      </a>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */

export default function TemplateShowcase() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-40px" });

  return (
    <section
      id="templates"
      style={{ background: "#0c0a08" }}
      className="relative overflow-hidden py-20 sm:py-28 md:py-32"
    >
      {/* Fade in from ivory above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ivory to-transparent" />
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,149,42,0.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-10">
        {/* Heading */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 32 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center sm:mb-20"
        >
          <div
            className="mx-auto mb-6 flex items-center justify-center gap-3"
          >
            <span style={{ width: "36px", height: "1px", background: "#C9952A", opacity: 0.5 }} />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.48em",
                color: "#C9952A",
                textTransform: "uppercase",
              }}
            >
              Stilovi
            </span>
            <span style={{ width: "36px", height: "1px", background: "#C9952A", opacity: 0.5 }} />
          </div>

          <h2
            style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(1.75rem,4vw,2.75rem)",
              color: "#f5f0e8",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Svaki par je jedinstven.
            <br />
            <em style={{ color: "#C9952A" }}>Tvoja pozivnica</em> — takođe.
          </h2>

          <p
            style={{
              marginTop: "18px",
              fontSize: "15px",
              color: "rgba(245,240,232,0.5)",
              maxWidth: "460px",
              margin: "18px auto 0",
              lineHeight: 1.7,
            }}
          >
            Odaberi stil koji govori o vama — svaki dizajn je prilagodljiv
            tvojim bojama, tekstu i sadržaju.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {TEMPLATES.map((tpl, i) => (
            <Card key={tpl.id} tpl={tpl} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Ne vidiš stil koji ti odgovara?
          </p>
          <a
            href="#kontakt"
            style={{
              display: "inline-block",
              marginTop: "10px",
              fontSize: "14px",
              color: "#C9952A",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Napravi custom dizajn →
          </a>
        </motion.div>
      </div>

      {/* Fade out to ivory below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
