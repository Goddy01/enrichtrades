import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../FadeIn';
import RevealLines from '../RevealLines';
import ContactButton from '../ContactButton';
import { SERVICES, STATS } from '../../data/content';
import { EASE_OUT } from '../../lib/motion';

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative z-10 rounded-t-[40px] border-t border-bull/10 bg-cream-alt px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-4 text-center font-black uppercase text-bull sm:mb-6"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        <RevealLines lines={['Access']} delay={0.05} />
      </h2>

      <FadeIn delay={0.15} y={16}>
        <p className="mx-auto mb-16 max-w-xl text-center text-sm font-light uppercase tracking-widest text-bull/45 sm:mb-20 md:mb-28">
          {STATS.whopRating} on Whop · {STATS.reviews} reviews · {STATS.members} members
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={28}>
            <motion.div
              className="flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}
              whileHover={reduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
            >
              <motion.span
                className="shrink-0 font-black text-candle"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                {service.number}
              </motion.span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase text-bull"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-bull/55"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5} y={20} className="mt-12 flex justify-center sm:mt-16">
        <ContactButton variant="primary" label="Join on Whop" />
      </FadeIn>
    </section>
  );
}
