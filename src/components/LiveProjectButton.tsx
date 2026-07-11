import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT, tapPress } from '../lib/motion';

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
  label?: string;
}

export default function LiveProjectButton({
  href = 'https://x.com/enrichtrades',
  className = '',
  label = 'View on X',
}: LiveProjectButtonProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block rounded-full border-2 border-bull px-8 py-3 text-sm font-medium uppercase tracking-widest text-bull transition-colors hover:bg-bull hover:text-cream sm:px-10 sm:py-3.5 sm:text-base ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-bull px-8 py-3 text-sm font-medium uppercase tracking-widest text-bull sm:px-10 sm:py-3.5 sm:text-base ${className}`}
      whileHover={{ y: -2, backgroundColor: '#000000', color: '#f3ede2' }}
      whileTap={tapPress}
      transition={{ duration: 0.35, ease: EASE_OUT }}
    >
      {label}
    </motion.a>
  );
}
