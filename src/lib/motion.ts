import type { Transition, Variants } from 'framer-motion';

/** Premium ease — fast start, soft landing */
export const EASE_PREMIUM: Transition['ease'] = [0.16, 1, 0.3, 1];

export const EASE_OUT: Transition['ease'] = [0.22, 1, 0.36, 1];

export const VIEWPORT_DEFAULT = {
  once: true,
  margin: '-8% 0px -8% 0px',
  amount: 0.2 as const,
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(6px)',
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: EASE_PREMIUM,
    },
  },
};

export const lineReveal: Variants = {
  hidden: { y: '108%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_PREMIUM,
    },
  },
};

export const hoverLift = {
  y: -4,
  transition: { duration: 0.35, ease: EASE_OUT },
};

export const tapPress = {
  scale: 0.98,
  transition: { duration: 0.15 },
};
