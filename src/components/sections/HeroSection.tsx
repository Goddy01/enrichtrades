import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../FadeIn';
import RevealLines from '../RevealLines';
import ContactButton from '../ContactButton';
import BracketButton from '../BracketButton';
import { HERO, LINKS } from '../../data/content';
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
    <section className="hero-section relative z-10 flex min-h-[calc(100dvh-46px)] flex-col overflow-x-clip px-5 pb-8 pt-5 sm:min-h-screen sm:px-8 sm:pb-10 sm:pt-8 md:px-10">
      <div className="hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {reduceMotion ? (
          <img
            src="/final-hero-image.png"
            alt=""
            className="hero-bg-media"
            draggable={false}
          />
        ) : (
          <video
            className="hero-bg-media"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/final-hero-image.png"
          >
            <source src="/hero-section-video.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <FadeIn delay={0} y={-16} duration={0.85} className="relative z-20">
        <header className="flex items-center justify-between gap-6">
          <motion.a
            href="#"
            className="inline-flex shrink-0 items-center"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <img
              src="/enrichtrades-logo-no-bg.webp"
              alt="Enrich Trades"
              className="h-11 w-auto sm:h-12 md:h-14"
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

      <div className="hero-content relative z-10 flex min-h-0 flex-1 flex-col justify-start sm:justify-center lg:max-w-[42%] xl:max-w-[38%]">
        <h1 className="hero-heading-mobile font-black uppercase leading-[0.9] tracking-tight text-bull sm:leading-[0.92]">
          <RevealLines
            lines={[HERO.headingLine1, HERO.headingLine2]}
            delay={0.3}
          />
        </h1>

        <FadeIn delay={0.55} y={20}>
          <p className="hero-subheading mt-3 max-w-md sm:mt-6">
            {HERO.subheading}
          </p>
        </FadeIn>

        <FadeIn delay={0.68} y={16} className="hero-cta mt-5 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6">
          <ContactButton
            variant="primary"
            label={HERO.primaryCta}
            className="w-full justify-center sm:w-auto"
          />
          <BracketButton href={LINKS.x} className="w-full justify-center sm:w-auto">
            {HERO.secondaryCta}
          </BracketButton>
        </FadeIn>
      </div>
    </section>
  );
}
