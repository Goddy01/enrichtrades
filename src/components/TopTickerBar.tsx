import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import useLiveStockQuotes, { type StockQuote } from '../hooks/useLiveStockQuotes';
import { EASE_PREMIUM } from '../lib/motion';

function formatPrice(value: number) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatSigned(value: number, suffix = '') {
  const sign = value > 0 ? '+' : value < 0 ? '-' : '';
  const absolute = Math.abs(value);
  const formatted = absolute.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${sign}${formatted}${suffix}`;
}

const TickerItem = memo(function TickerItem({ quote }: { quote: StockQuote }) {
  const isPositive = quote.change > 0;
  const isNegative = quote.change < 0;
  const changeClass = isPositive ? 'text-candle' : isNegative ? 'text-red-600' : 'text-bull/50';

  return (
    <div className="stock-ticker-item flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 text-[11px] sm:gap-2 sm:px-4 sm:text-sm">
      <span className="font-medium tracking-wide text-bull/55">
        {quote.symbol}
        <span className="mx-1 text-bull/20" aria-hidden>
          ·
        </span>
      </span>
      <span className="font-semibold tabular-nums text-bull">{formatPrice(quote.price)}</span>
      <span className={`font-medium tabular-nums ${changeClass}`}>{formatSigned(quote.change)}</span>
      <span className={`font-medium tabular-nums ${changeClass}`}>{formatSigned(quote.changePercent, '%')}</span>
    </div>
  );
});

const TickerTrack = memo(function TickerTrack({
  quotes,
  duplicate = false,
}: {
  quotes: StockQuote[];
  duplicate?: boolean;
}) {
  return (
    <div
      className="stock-ticker-track flex w-max shrink-0 items-center"
      aria-hidden={duplicate || undefined}
    >
      {quotes.map((quote) => (
        <TickerItem key={`${duplicate ? 'dup-' : ''}${quote.symbol}`} quote={quote} />
      ))}
    </div>
  );
});

export default function TopTickerBar() {
  const { quotes, isLoading } = useLiveStockQuotes();
  const hasQuotes = quotes.length > 0;
  const reduceMotion = useReducedMotion();

  const bar = (
    <>
      <div className="relative h-full overflow-hidden">
        {hasQuotes ? (
          <div className="stock-ticker-marquee flex h-full w-max items-center">
            <TickerTrack quotes={quotes} />
            <TickerTrack quotes={quotes} duplicate />
          </div>
        ) : (
          <div className="flex h-full items-center px-4 text-xs text-bull/45 sm:text-sm">
            {isLoading ? 'Loading market data…' : 'Market data unavailable'}
          </div>
        )}
      </div>
      <div className="ticker-fade ticker-fade-left pointer-events-none absolute inset-y-0 left-0 z-10" aria-hidden />
      <div className="ticker-fade ticker-fade-right pointer-events-none absolute inset-y-0 right-0 z-10" aria-hidden />
    </>
  );

  if (reduceMotion) {
    return (
      <div
        className="fixed inset-x-0 top-0 z-[100] h-[46px] overflow-hidden border-b border-bull/10 bg-cream"
        aria-label="Live stock price ticker"
      >
        {bar}
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[46px] overflow-hidden border-b border-bull/10 bg-cream"
      aria-label="Live stock price ticker"
      initial={{ y: -46, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: EASE_PREMIUM }}
    >
      {bar}
    </motion.div>
  );
}
