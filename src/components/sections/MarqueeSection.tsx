import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../FadeIn';
import { MARQUEE_TICKERS } from '../../data/content';
import { EASE_OUT, hoverLift } from '../../lib/motion';

function triple<T>(arr: T[]) {
  return [...arr, ...arr, ...arr];
}

function TickerTile({ sym, pct, note }: { sym: string; pct: string; note: string }) {
  const isGreenCandle = pct.startsWith('+') || pct.endsWith('x') || pct.includes('→');
  const reduceMotion = useReducedMotion();

  const tile = (
    <div className="relative flex h-[270px] w-[420px] shrink-0 flex-col justify-between rounded-sm border border-bull/10 bg-cream-alt p-6 transition-colors hover:border-bull/20">
      <div>
        <p className="font-mono text-3xl font-bold tracking-wide text-bull">{sym}</p>
        <p className="mt-2 text-sm font-light uppercase tracking-wide text-bull/50">{note}</p>
      </div>
      <p className={`text-4xl font-bold tabular-nums ${isGreenCandle ? 'text-candle' : 'text-bull'}`}>{pct}</p>
    </div>
  );

  if (reduceMotion) return tile;

  return (
    <motion.div whileHover={{ ...hoverLift, scale: 1.015 }} transition={{ duration: 0.4, ease: EASE_OUT }}>
      {tile}
    </motion.div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], [-220, 220]);
  const row2X = useTransform(scrollYProgress, [0, 1], [220, -220]);

  const row1 = triple(MARQUEE_TICKERS.slice(0, 11));
  const row2 = triple(MARQUEE_TICKERS.slice(11));

  return (
    <section
      ref={sectionRef}
      className="section-y overflow-x-clip bg-cream"
    >
      <FadeIn delay={0} y={24} className="section-x heading-gap text-center">
        <h2 className="display-heading">Track Record</h2>
      </FadeIn>

      <div className="flex flex-col gap-3">
        <motion.div className="flex gap-3" style={{ x: row1X }}>
          {row1.map((t, i) => (
            <TickerTile key={`r1-${i}`} {...t} />
          ))}
        </motion.div>
        <motion.div className="flex gap-3" style={{ x: row2X }}>
          {row2.map((t, i) => (
            <TickerTile key={`r2-${i}`} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
