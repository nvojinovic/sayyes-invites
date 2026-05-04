import { useState } from "react";

const TABS = [
  { id: "pozivnica", label: "Pozivnica" },
  { id: "detalji", label: "Detalji" },
  { id: "potvrda", label: "Potvrda dolaska" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const DEMO_URL = "/ivana-dimitrije";

export default function LivePreview() {
  const [tab, setTab] = useState<TabId>("pozivnica");

  const openDemo = () => {
    window.location.href = DEMO_URL;
  };

  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-ivory py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,#fbf2e2_0%,#fbf7f1_60%,#fbf7f1_100%)]" />
        <div className="absolute -top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Live demo
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            Pogledaj kako može
            <span className="italic text-gold"> izgledati</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Interaktivni primer pozivnice za par Ivana &amp; Dimitrije.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div
            role="link"
            tabIndex={0}
            aria-label="Otvori demo pozivnicu Ivana i Dimitrije"
            onClick={openDemo}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openDemo();
              }
            }}
            className="group relative cursor-pointer rounded-[28px] bg-white/60 p-2 shadow-[0_30px_80px_-30px_rgba(60,40,15,0.35),0_10px_30px_-15px_rgba(0,0,0,0.15)] ring-1 ring-champagne/40 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_40px_100px_-30px_rgba(60,40,15,0.45),0_15px_40px_-15px_rgba(0,0,0,0.2)] hover:ring-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ivory opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              Klikni za demo
              <span>→</span>
            </div>

            <div className="flex items-center gap-1.5 px-4 pt-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-champagne" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-soft/70" />
              <div className="ml-3 flex-1 truncate rounded-md bg-ivory-deep px-3 py-1 text-[11px] tracking-wide text-ink-soft">
                sayyes.rs / ivana-dimitrije
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#fbf2e2_0%,#fbf7f1_45%,#f5eee2_100%)]">
              <div className="flex justify-center gap-1 px-4 pt-5">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTab(t.id);
                    }}
                    className={[
                      "relative rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-all",
                      tab === t.id
                        ? "bg-ink text-ivory shadow-md"
                        : "text-ink-soft hover:text-ink",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="px-6 pb-10 pt-8 sm:px-12">
                {tab === "pozivnica" && <PanelInvitation />}
                {tab === "detalji" && <PanelDetails />}
                {tab === "potvrda" && <PanelConfirm />}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={DEMO_URL}
              className="group relative inline-flex items-center justify-center rounded-full bg-ink px-10 py-4 text-sm font-semibold tracking-[0.14em] uppercase text-ivory shadow-[0_18px_45px_-12px_rgba(42,35,32,0.75)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-12px_rgba(42,35,32,0.85)]"
            >
              <span className="absolute inset-0 rounded-full ring-1 ring-gold/50" />
              <span className="absolute inset-0 rounded-full ring-2 ring-gold/0 transition-all group-hover:ring-gold/40 group-hover:ring-offset-2 group-hover:ring-offset-ivory" />
              Otvori demo
              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft">
              Otvara se u istom prozoru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelInvitation() {
  return (
    <div className="text-center animate-fade-in">
      <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
        Sa ljubavlju Vas pozivaju
      </p>
      <h3 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-5xl">
        Ivana
      </h3>
      <p className="font-serif italic text-xl text-gold sm:text-2xl">&amp;</p>
      <h3 className="font-serif text-3xl leading-tight text-ink sm:text-5xl">
        Dimitrije
      </h3>
      <p className="mt-5 font-serif text-base italic text-ink-soft">
        na proslavu njihovog venčanja
      </p>

      <div className="mx-auto mt-8 grid max-w-xs grid-cols-3 gap-2">
        <DateBlock top="Subota" mid="14" bottom="Jun" />
        <DateBlock top="Vreme" mid="17h" bottom="2026" />
        <DateBlock top="Mesto" mid="Beograd" bottom="Srbija" small />
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.35em] text-ink-soft">
        <span className="h-px w-6 bg-gold/50" />
        Spremamo se za vas
        <span className="h-px w-6 bg-gold/50" />
      </div>
    </div>
  );
}

function PanelDetails() {
  return (
    <div className="animate-fade-in">
      <div className="grid gap-3 sm:grid-cols-2">
        <DetailCard label="Ceremonija" title="Crkva Sv. Marka" sub="Beograd · 17:00" />
        <DetailCard label="Proslava" title="Restoran Vidikovac" sub="Beograd · 20:00" />
        <DetailCard label="Dress code" title="Black tie" sub="Elegantna garderoba" />
        <DetailCard label="Smeštaj" title="Hotel Moskva" sub="Posebna cena za goste" />
      </div>
      <p className="mt-6 text-center text-[11px] tracking-wide text-ink-soft">
        Sve informacije, mapa i program — na jednom mestu.
      </p>
    </div>
  );
}

function PanelConfirm() {
  return (
    <div className="animate-fade-in mx-auto max-w-sm">
      <p className="text-center text-[10px] uppercase tracking-[0.35em] text-gold">
        Potvrda dolaska
      </p>
      <p className="mt-3 text-center font-serif text-xl text-ink">
        Hoćeš li biti sa nama?
      </p>

      <div className="mt-6 space-y-3">
        <div className="rounded-xl bg-white/70 px-4 py-3 ring-1 ring-champagne/50">
          <p className="text-[10px] uppercase tracking-widest text-ink-soft">
            Ime i prezime
          </p>
          <p className="mt-1 font-serif text-base text-ink">Marko Marković</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-full bg-ink px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory shadow-md transition-transform hover:-translate-y-0.5"
          >
            Dolazim
          </button>
          <button
            type="button"
            className="rounded-full border border-ink/15 bg-white/60 px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:border-gold/60 hover:text-ink"
          >
            Ne mogu
          </button>
        </div>
        <div className="rounded-xl bg-white/70 px-4 py-3 ring-1 ring-champagne/50">
          <p className="text-[10px] uppercase tracking-widest text-ink-soft">
            Broj pratilaca
          </p>
          <p className="mt-1 font-serif text-base text-ink">+ 1</p>
        </div>
      </div>

      <p className="mt-5 text-center text-[10px] tracking-wide text-ink-soft">
        Bez zvanja i poruka — sve potvrde stižu na jedno mesto.
      </p>
    </div>
  );
}

function DateBlock({
  top,
  mid,
  bottom,
  small = false,
}: {
  top: string;
  mid: string;
  bottom: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white/70 py-3 ring-1 ring-champagne/60 backdrop-blur-sm">
      <p className="text-[9px] uppercase tracking-widest text-gold">{top}</p>
      <p
        className={[
          "mt-1 font-serif leading-none text-ink",
          small ? "text-base" : "text-2xl",
        ].join(" ")}
      >
        {mid}
      </p>
      <p className="mt-1 text-[9px] uppercase tracking-widest text-ink-soft">
        {bottom}
      </p>
    </div>
  );
}

function DetailCard({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl bg-white/70 px-4 py-4 ring-1 ring-champagne/50 backdrop-blur-sm">
      <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{label}</p>
      <p className="mt-1.5 font-serif text-lg text-ink">{title}</p>
      <p className="mt-0.5 text-[12px] text-ink-soft">{sub}</p>
    </div>
  );
}
