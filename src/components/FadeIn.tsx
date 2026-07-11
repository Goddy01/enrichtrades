import { motion, useReducedMotion } from 'framer-motion';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { EASE_PREMIUM, VIEWPORT_DEFAULT } from '../lib/motion';

type FadeInProps<T extends ElementType = 'div'> = {
  as?: T;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  blur?: boolean;
  scale?: boolean;
  viewport?: boolean;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export default function FadeIn<T extends ElementType = 'div'>({
  as,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 30,
  blur = true,
  scale = true,
  viewport = true,
  children,
  className,
  ...rest
}: FadeInProps<T>) {
  const reduceMotion = useReducedMotion();
  const Component = motion.create(as ?? 'div');

  const hidden = {
    opacity: 0,
    x,
    y,
    ...(blur ? { filter: 'blur(8px)' } : {}),
    ...(scale ? { scale: 0.98 } : {}),
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
  };

  if (reduceMotion) {
    const Static = (as ?? 'div') as ElementType;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      initial={viewport ? hidden : false}
      animate={viewport ? undefined : visible}
      whileInView={viewport ? visible : undefined}
      viewport={viewport ? VIEWPORT_DEFAULT : undefined}
      transition={{
        duration,
        delay,
        ease: EASE_PREMIUM,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
