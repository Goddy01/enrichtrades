import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_PREMIUM, staggerContainer, staggerItem } from '../lib/motion';

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function StaggerReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.1,
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-6% 0px -6% 0px', amount: 0.15 }}
      variants={{
        hidden: staggerContainer.hidden,
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export function MotionSection({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px', amount: 0.08 }}
      transition={{ duration: 0.9, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.section>
  );
}
