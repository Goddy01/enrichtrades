import { useReducedMotion } from 'framer-motion';

const DOT_STYLE = {
  backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.07) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
} as const;

const DOT_STYLE_SOFT = {
  backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
} as const;

export default function DotGrid() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden style={DOT_STYLE} />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="dot-grid-drift absolute inset-0" style={DOT_STYLE} />
      <div className="dot-grid-drift-reverse absolute inset-0" style={DOT_STYLE_SOFT} />
    </div>
  );
}
