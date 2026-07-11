import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { EASE_PREMIUM } from '../lib/motion';

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
};

export function Float({
  children,
  className = '',
  delay = 0,
  distance = 10,
  duration = 5,
}: FloatProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

type ScrollScaleProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollScale({ children, className = '' }: ScrollScaleProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, scale: 0.94, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-5% 0px', amount: 0.35 }}
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ duration: 0.9, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

type FloatingIconProps = {
  Icon: LucideIcon;
  className?: string;
  delay?: number;
};

export function FloatingIcon({ Icon, className = '', delay = 0 }: FloatingIconProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Icon className={className} strokeWidth={1} />;
  }

  return (
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{
        duration: 6 + delay,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Icon className={className} strokeWidth={1} />
    </motion.div>
  );
}
