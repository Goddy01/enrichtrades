import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="section-x section-y-tight relative z-10 border-t border-bull/10 bg-[#F3E9DA]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <FadeIn delay={0} y={20}>
          <a href="#" className="inline-flex items-center transition-opacity hover:opacity-80">
            <img
              src="/enrichtrades-logo-no-bg.webp"
              alt="Enrich Trades"
              className="h-14 w-auto sm:h-16"
              draggable={false}
            />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} y={16}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-widest text-bull/65 sm:text-xs">
            <span>© 2026 ENRICH TRADES · ALL RIGHTS RESERVED</span>
            <span className="hidden text-bull/25 sm:inline" aria-hidden>
              ·
            </span>
            <div className="flex items-center gap-3">
              <a href="#privacy" className="transition-colors duration-300 hover:text-candle">
                Privacy
              </a>
              <span className="text-bull/25" aria-hidden>
                ·
              </span>
              <a href="#terms" className="transition-colors duration-300 hover:text-candle">
                Terms
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={12}>
          <p className="max-w-3xl text-xs font-light leading-relaxed text-bull/50 sm:text-sm">
            Options trading involves substantial risk of loss and is not suitable for all investors. Past
            performance is not indicative of future results. Enrich Trades is not a registered investment
            advisor. All content is for educational purposes only and does not constitute financial advice.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
