import { motion, useReducedMotion } from 'framer-motion';
import { EASE_PREMIUM } from '../lib/motion';

type RevealLinesProps = {
  lines: string[];
  className?: string;
  delay?: number;
  lineClassName?: string;
};

export default function RevealLines({
  lines,
  className = '',
  delay = 0,
  lineClassName = '',
}: RevealLinesProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {lines.map((line) => (
          <span key={line} className={`block ${lineClassName}`}>
            {line}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={className} aria-hidden={false}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: '108%', opacity: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.95,
              delay: delay + index * 0.14,
              ease: EASE_PREMIUM,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
