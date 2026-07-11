import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-bull/10 bg-bull px-5 py-12 sm:px-8 sm:py-14 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <FadeIn delay={0} y={20}>
          <a href="#" className="inline-flex items-center transition-opacity hover:opacity-80">
            <img
              src="/enrichtrades-website-logo.webp"
              alt="Enrich Trades"
              className="h-10 w-auto sm:h-11"
              draggable={false}
            />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} y={16}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-widest text-cream/70 sm:text-xs">
            <span>© 2026 ENRICH TRADES · ALL RIGHTS RESERVED</span>
            <span className="hidden text-cream/30 sm:inline" aria-hidden>
              ·
            </span>
            <div className="flex items-center gap-3">
              <a href="#privacy" className="transition-colors duration-300 hover:text-candle">
                Privacy
              </a>
              <span className="text-cream/30" aria-hidden>
                ·
              </span>
              <a href="#terms" className="transition-colors duration-300 hover:text-candle">
                Terms
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={12}>
          <p className="max-w-3xl text-xs font-light leading-relaxed text-cream/50 sm:text-sm">
            Options trading involves substantial risk of loss and is not suitable for all investors. Past
            performance is not indicative of future results. Enrich Trades is not a registered investment
            advisor. All content is for educational purposes only and does not constitute financial advice.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
