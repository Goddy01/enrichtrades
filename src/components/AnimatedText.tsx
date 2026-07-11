import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p
      ref={ref}
      className={`relative text-center font-medium leading-relaxed text-bull ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
        maxWidth: '560px',
      }}
    >
      {characters.map((char, i) => (
        <Character key={`${char}-${i}`} char={char} index={i} total={characters.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}

function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
