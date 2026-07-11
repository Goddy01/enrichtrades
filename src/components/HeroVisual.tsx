import { motion, useReducedMotion } from 'framer-motion';
import { EASE_PREMIUM } from '../lib/motion';

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const image = (
    <img
      src="/final-hero-image.png"
      alt="Trader celebrating success at the mountain peak"
      className="hero-bull-image h-auto w-full max-w-none select-none object-contain max-sm:w-[98vw] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[660px]"
      draggable={false}
    />
  );

  const wrapperClass =
    'relative flex w-full items-center justify-center max-sm:mr-0 sm:mr-8 lg:mr-10 xl:mr-12';

  if (reduceMotion) {
    return <div className={wrapperClass}>{image}</div>;
  }

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 0, scale: 0.94, y: 32 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: EASE_PREMIUM }}
    >
      <div className="hero-bull-float">{image}</div>
    </motion.div>
  );
}
