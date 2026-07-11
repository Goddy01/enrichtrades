import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { formatCount, type FormatCountOptions } from '../lib/formatStat';
import { EASE_PREMIUM } from '../lib/motion';

type CountUpProps = FormatCountOptions & {
  value: number;
  duration?: number;
  className?: string;
};

export default function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  comma = false,
  duration = 1.4,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const formatOptions = { decimals, prefix, suffix, comma };
  const [display, setDisplay] = useState(() =>
    formatCount(reduceMotion ? value : 0, formatOptions),
  );

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(formatCount(value, formatOptions));
      return;
    }

    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: EASE_PREMIUM,
      onUpdate: (v) => setDisplay(formatCount(v, formatOptions)),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value, duration, decimals, prefix, suffix, comma]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      {display}
    </span>
  );
}
