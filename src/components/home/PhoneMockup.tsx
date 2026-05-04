const DEMO_URL = "/ivana-dimitrije";

export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto aspect-[9/19] w-[260px] animate-float-slow sm:w-[290px] md:w-[310px]"
      aria-hidden="true"
    >
      <div className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(201,169,106,0.28),transparent_70%)] blur-2xl" />

      <div className="relative h-full w-full rounded-[44px] bg-gradient-to-b from-[#1a1714] to-[#0d0b09] p-[6px] shadow-[0_30px_80px_-20px_rgba(60,40,15,0.45),0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/30">
        <div className="absolute left-1/2 top-2 z-30 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#faf7f2]">
          <iframe
            src={DEMO_URL}
            title="Ivana i Dimitrije demo pozivnica"
            className="pointer-events-none h-full w-full border-0"
            loading="lazy"
            tabIndex={-1}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-[38px] ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      <div className="absolute -right-3 top-24 h-1 w-1 rounded-full bg-gold/70 shadow-[0_0_10px_rgba(180,138,74,0.7)]" />
      <div className="absolute -left-2 bottom-32 h-1.5 w-1.5 rounded-full bg-rose/80 shadow-[0_0_10px_rgba(232,212,207,0.9)]" />
    </div>
  );
}
