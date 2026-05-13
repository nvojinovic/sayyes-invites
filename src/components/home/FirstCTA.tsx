export default function FirstCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden py-16 sm:py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf7f1_0%,#f0e3c6_100%)]" />
        <div className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(180,138,74,0.22),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-6">
        <div className="mx-auto mb-6 h-px w-12 bg-gold/60" />

        <h2 className="font-serif text-[2rem] leading-[1.1] text-ink sm:text-4xl md:text-5xl">
          Spreman da tvoje venčanje
          <br className="hidden sm:block" />
          počne
          <span className="italic text-gold"> drugačije</span>?
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-ink-soft sm:text-lg sm:leading-relaxed">
          Pošalji nam poruku i za 24–48h imaš pozivnicu koja radi sve
          umesto tebe.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@sayyesinvites.com"
            className="group relative inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-ivory shadow-[0_15px_40px_-15px_rgba(42,35,32,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-15px_rgba(42,35,32,0.8)] active:scale-[0.98] sm:w-auto sm:px-10 sm:tracking-[0.12em]"
          >
            <span className="absolute inset-0 rounded-full ring-1 ring-gold/40 opacity-0 transition-opacity group-hover:opacity-100" />
            Pošalji upit
            <span className="ml-3 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://wa.me/381000000000?text=Zdravo%2C%20zanima%20me%20digitalna%20pozivnica%20za%20ven%C4%8Danje."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2.5 rounded-full border border-ink/15 bg-white/40 px-8 py-4 text-sm font-medium tracking-wide text-ink backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-white/70 sm:w-auto sm:px-8"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Urgency + trust */}
        <div className="mt-8 flex flex-col items-center gap-2.5">
          <p className="text-[10px] uppercase leading-5 tracking-[0.28em] text-ink-soft sm:text-[11px] sm:tracking-[0.35em]">
            Bez obaveze • Odgovor u roku od 24h
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            <p className="max-w-xs text-[10px] uppercase leading-5 tracking-[0.22em] text-gold sm:max-w-none sm:text-[11px] sm:tracking-[0.3em]">
              Radimo ograničen broj projekata mesečno da bismo zadržali kvalitet
            </p>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
