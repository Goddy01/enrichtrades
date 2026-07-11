import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../FadeIn';
import RevealLines from '../RevealLines';
import ContactButton from '../ContactButton';
import BracketButton from '../BracketButton';
import FeatureCard from '../FeatureCard';
import HeroVisual from '../HeroVisual';
import { FEATURE_CARDS, HERO, LINKS } from '../../data/content';
import { EASE_OUT } from '../../lib/motion';

const NAV_LINKS = [
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Access', href: '#services' },
  { label: 'Plays', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 flex h-[calc(100dvh-46px)] min-h-[calc(100dvh-46px)] flex-col overflow-x-clip overflow-y-hidden px-5 pb-6 pt-6 sm:min-h-screen sm:h-auto sm:overflow-y-visible sm:px-8 sm:pb-10 sm:pt-8 md:px-10">
      <FadeIn delay={0} y={-16} duration={0.85}>
        <header className="flex items-center justify-between gap-6">
          <motion.a
            href="#"
            className="inline-flex shrink-0 items-center"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <img
              src="/enrichtrades-website-logo.webp"
              alt="Enrich Trades"
              className="h-8 w-auto sm:h-9 md:h-10"
              draggable={false}
            />
          </motion.a>
          <nav className="flex flex-1 items-center justify-end gap-4 sm:gap-6 md:gap-10">
            {NAV_LINKS.map((link, index) =>
              reduceMotion ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="hidden text-xs font-normal uppercase tracking-wide text-bull/75 transition-opacity hover:text-candle sm:inline sm:text-sm md:text-base"
                >
                  {link.label}
                </a>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="hidden text-xs font-normal uppercase tracking-wide text-bull/75 sm:inline sm:text-sm md:text-base"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 + index * 0.05, ease: EASE_OUT }}
                  whileHover={{ color: '#2eaf4a', y: -1 }}
                >
                  {link.label}
                </motion.a>
              ),
            )}
            <div id="contact">
              <ContactButton variant="nav" />
            </div>
          </nav>
        </header>
      </FadeIn>

      <div className="flex min-h-0 flex-1 flex-col gap-4 pt-4 max-sm:pt-5 sm:gap-10 sm:pt-10 lg:flex-row lg:items-center lg:gap-6 lg:pt-14">
        <div className="relative z-10 order-1 flex min-h-0 flex-[1.35] items-center justify-center overflow-visible max-sm:pt-2 lg:order-2 lg:flex-1 lg:justify-end lg:pr-10 xl:pr-14">
          <HeroVisual />
        </div>

        <div className="relative z-20 order-2 flex shrink-0 flex-col justify-center max-sm:pb-2 lg:order-1 lg:w-[40%] lg:shrink-0 xl:w-[36%]">
          <h1 className="hero-heading-mobile font-black uppercase leading-[0.9] tracking-tight text-bull sm:leading-[0.92]">
            <RevealLines
              lines={[HERO.headingLine1, HERO.headingLine2]}
              delay={0.3}
            />
          </h1>

          <FadeIn delay={0.55} y={20}>
            <p className="hero-subheading mt-4 max-w-md sm:mt-6">
              {HERO.subheading}
            </p>
          </FadeIn>

          <FadeIn delay={0.68} y={16} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <ContactButton variant="primary" label={HERO.primaryCta} />
            <BracketButton href={LINKS.x}>{HERO.secondaryCta}</BracketButton>
          </FadeIn>
        </div>
      </div>

      <div className="relative z-20 mt-auto hidden flex-col gap-3 pt-10 sm:flex sm:flex-row sm:gap-4 sm:pt-12">
        {FEATURE_CARDS.map((card, i) => (
          <FeatureCard key={card.title} {...card} delay={0.8 + i * 0.1} />
        ))}
      </div>
    </section>
  );
}
