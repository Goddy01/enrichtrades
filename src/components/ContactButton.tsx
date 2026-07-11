import { motion, useReducedMotion } from 'framer-motion';
import { LINKS } from '../data/content';
import { EASE_OUT, hoverLift, tapPress } from '../lib/motion';

type ContactButtonVariant = 'primary' | 'nav';

interface ContactButtonProps {
  className?: string;
  href?: string;
  label?: string;
  variant?: ContactButtonVariant;
}

export default function ContactButton({
  className = '',
  href = LINKS.whop,
  label = 'Join Whop',
  variant = 'primary',
}: ContactButtonProps) {
  const reduceMotion = useReducedMotion();

  if (variant === 'nav') {
    if (reduceMotion) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block border border-bull/30 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-bull transition-all hover:border-bull hover:bg-bull/5 sm:px-5 sm:py-2.5 sm:text-xs ${className}`}
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
        className={`inline-block border border-bull/30 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-bull transition-colors hover:border-bull hover:bg-bull/5 sm:px-5 sm:py-2.5 sm:text-xs ${className}`}
        whileHover={{ y: -1 }}
        whileTap={tapPress}
        transition={{ duration: 0.3, ease: EASE_OUT }}
      >
        {label}
      </motion.a>
    );
  }

  if (reduceMotion) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block bg-bull px-7 py-3 text-xs font-medium uppercase tracking-widest text-cream transition-all hover:bg-bull/85 sm:px-9 sm:py-3.5 sm:text-sm ${className}`}
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
      className={`inline-flex items-center bg-bull px-7 py-3 text-xs font-medium uppercase tracking-widest text-cream transition-colors hover:bg-bull/90 sm:px-9 sm:py-3.5 sm:text-sm ${className}`}
      whileHover={hoverLift}
      whileTap={tapPress}
      transition={{ duration: 0.35, ease: EASE_OUT }}
    >
      {label}
    </motion.a>
  );
}
