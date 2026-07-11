import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../LiveProjectButton';
import FadeIn from '../FadeIn';
import PanelValue from '../PanelValue';
import RevealLines from '../RevealLines';
import { PROJECTS, type ProjectData } from '../../data/content';
import { EASE_PREMIUM } from '../../lib/motion';

const TOTAL_CARDS = PROJECTS.length;

function PanelGrid({ panels }: { panels: ProjectData['panels'] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {panels.map((panel, index) => {
        const cell = (
          <div
            className="flex flex-col justify-between rounded-sm border border-bull/10 bg-cream p-4 transition-colors hover:border-bull/20 sm:p-5 md:p-6"
            style={{ minHeight: 'clamp(130px, 16vw, 200px)' }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-bull/50">{panel.label}</p>
            <div>
              <p className="hero-heading text-2xl font-bold tabular-nums text-candle sm:text-3xl">
                <PanelValue value={panel.value} />
              </p>
              {panel.sub && (
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-bull/40 sm:text-xs">
                  {panel.sub}
                </p>
              )}
            </div>
          </div>
        );

        if (reduceMotion) {
          return <div key={panel.label}>{cell}</div>;
        }

        return (
          <motion.div
            key={panel.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: EASE_PREMIUM }}
          >
            {cell}
          </motion.div>
        );
      })}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.55, 1, 1, 0.75]);

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.div
        className="sticky top-[calc(6rem+var(--card-offset))] md:top-[calc(8rem+var(--card-offset))]"
        style={{
          scale,
          opacity,
          ['--card-offset' as string]: `${index * 28}px`,
        }}
      >
        <div className="rounded-sm border-2 border-bull/15 bg-cream-alt p-4 sm:rounded-md sm:p-6 md:p-8">
          <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-wrap items-end gap-4 sm:gap-6">
              <span className="display-number text-bull">
                {project.number}
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-bull/55">
                  {project.category}
                </p>
                <h3
                  className="font-medium uppercase text-bull"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LiveProjectButton href={project.href} label="View on X" />
            </div>
          </div>

          <p className="mb-6 max-w-3xl text-sm font-light leading-relaxed text-bull/65 sm:text-base">
            {project.description}
          </p>

          <PanelGrid panels={project.panels} />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-x section-y relative z-10 -mt-10 rounded-t-[40px] bg-cream sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <FadeIn delay={0} y={36}>
        <h2 className="display-heading heading-gap text-center">
          <RevealLines lines={['Plays']} delay={0.05} />
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
