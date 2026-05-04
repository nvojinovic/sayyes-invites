export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-[260px] sm:w-[290px] md:w-[310px] aspect-[9/19] animate-float-slow"
      aria-hidden="true"
    >
      <div className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(201,169,106,0.28),transparent_70%)] blur-2xl" />

      <div className="relative h-full w-full rounded-[44px] bg-gradient-to-b from-[#1a1714] to-[#0d0b09] p-[6px] shadow-[0_30px_80px_-20px_rgba(60,40,15,0.45),0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/30">
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-ivory">
          <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,#fbf2e2_0%,#fbf7f1_55%,#f5eee2_100%)]" />

          <div
            className="absolute inset-x-6 top-6 h-44 rounded-[18px] bg-[linear-gradient(160deg,#e9d9b8_0%,#f0e3c6_45%,#e8d4cf_100%)] shadow-inner ring-1 ring-white/40 overflow-hidden"
          >
            <svg
              viewBox="0 0 200 180"
              className="absolute inset-0 h-full w-full opacity-70"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="pm-light" cx="50%" cy="20%" r="70%">
                  <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#e9d9b8" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="200" height="180" fill="url(#pm-light)" />
              <g stroke="#b48a4a" strokeWidth="0.6" fill="none" opacity="0.55">
                <path d="M40 130 C 60 90, 80 90, 100 120 S 140 150, 160 110" />
                <path d="M50 140 C 70 100, 90 100, 110 130 S 150 160, 170 120" opacity="0.5" />
                <circle cx="100" cy="70" r="14" />
                <circle cx="100" cy="70" r="20" opacity="0.5" />
              </g>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Pozivnica
              </p>
              <p className="font-serif text-[22px] leading-tight text-ink mt-2">
                Ivana
              </p>
              <p className="font-serif italic text-[14px] text-gold -mt-1">
                &amp;
              </p>
              <p className="font-serif text-[22px] leading-tight text-ink -mt-1">
                Dimitrije
              </p>
            </div>
          </div>

          <div className="absolute inset-x-6 top-[12.5rem] flex flex-col items-center text-center">
            <div className="h-px w-10 bg-gold/60" />
            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-ink-soft">
              Sa ljubavlju Vas pozivaju
            </p>
            <p className="mt-3 font-serif text-[15px] leading-snug text-ink">
              na proslavu njihovog venčanja
            </p>
          </div>

          <div className="absolute inset-x-6 top-[17rem] grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-white/60 backdrop-blur-sm py-2 ring-1 ring-champagne/60">
              <p className="text-[8px] uppercase tracking-widest text-gold">Subota</p>
              <p className="font-serif text-[16px] text-ink leading-none mt-1">14</p>
              <p className="text-[8px] uppercase tracking-widest text-ink-soft mt-1">Jun</p>
            </div>
            <div className="rounded-lg bg-white/60 backdrop-blur-sm py-2 ring-1 ring-champagne/60">
              <p className="text-[8px] uppercase tracking-widest text-gold">Vreme</p>
              <p className="font-serif text-[16px] text-ink leading-none mt-1">17h</p>
              <p className="text-[8px] uppercase tracking-widest text-ink-soft mt-1">2026</p>
            </div>
            <div className="rounded-lg bg-white/60 backdrop-blur-sm py-2 ring-1 ring-champagne/60">
              <p className="text-[8px] uppercase tracking-widest text-gold">Mesto</p>
              <p className="font-serif text-[12px] text-ink leading-none mt-1.5">Beograd</p>
              <p className="text-[8px] uppercase tracking-widest text-ink-soft mt-1">Srbija</p>
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-6">
            <button
              type="button"
              className="w-full rounded-full bg-ink py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase text-ivory shadow-md"
            >
              Potvrdi dolazak
            </button>
            <p className="mt-2 text-center text-[9px] tracking-[0.3em] uppercase text-ink-soft">
              sayyes.rs / ivana-dimitrije
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-24 h-1 w-1 rounded-full bg-gold/70 shadow-[0_0_10px_rgba(180,138,74,0.7)]" />
      <div className="absolute -left-2 bottom-32 h-1.5 w-1.5 rounded-full bg-rose/80 shadow-[0_0_10px_rgba(232,212,207,0.9)]" />
    </div>
  );
}
