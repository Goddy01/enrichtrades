import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../lib/motion';

interface BracketButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function BracketButton({ href, children, className = '' }: BracketButtonProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center px-6 py-3 text-xs font-medium uppercase tracking-widest text-bull transition-colors hover:text-candle sm:px-8 sm:py-3.5 sm:text-sm ${className}`}
      >
        <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-bull/50 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-candle" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-bull/50 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-candle" />
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center px-6 py-3 text-xs font-medium uppercase tracking-widest text-bull transition-colors hover:text-candle sm:px-8 sm:py-3.5 sm:text-sm ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: EASE_OUT }}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-bull/50 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-candle" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-bull/50 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-candle" />
      {children}
    </motion.a>
  );
}
