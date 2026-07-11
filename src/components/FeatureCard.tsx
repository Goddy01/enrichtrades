import { motion, useReducedMotion } from 'framer-motion';
import { Plus, type LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';
import { EASE_OUT, hoverLift } from '../lib/motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const reduceMotion = useReducedMotion();

  const card = (
    <div className="relative flex h-full min-h-[140px] flex-col justify-between rounded-sm border border-bull/10 bg-cream-alt p-5 transition-colors sm:min-h-[160px] sm:p-6">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Icon className="h-4 w-4 text-candle" strokeWidth={1.5} />
          <h3 className="text-sm font-semibold uppercase tracking-wide text-bull sm:text-base">
            {title}
          </h3>
        </div>
        <p className="text-xs font-light leading-relaxed text-bull/55 sm:text-sm">{description}</p>
      </div>
      <Plus className="absolute bottom-4 right-4 h-4 w-4 text-bull/20" strokeWidth={1} />
    </div>
  );

  if (reduceMotion) {
    return (
      <FadeIn delay={delay} y={24} className="flex-1">
        {card}
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={delay} y={24} className="flex-1">
      <motion.div
        className="h-full"
        whileHover={{
          ...hoverLift,
          boxShadow: '0 14px 40px rgba(0, 0, 0, 0.06)',
        }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
      >
        {card}
      </motion.div>
    </FadeIn>
  );
}
