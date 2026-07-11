import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../FadeIn';
import RevealLines from '../RevealLines';
import ContactButton from '../ContactButton';
import WhopStats from '../WhopStats';
import { SERVICES } from '../../data/content';
import { EASE_OUT } from '../../lib/motion';

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="section-x section-y relative z-10 rounded-t-[40px] border-t border-bull/10 bg-cream-alt sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <h2 className="display-heading heading-gap text-center">
        <RevealLines lines={['Access']} delay={0.05} />
      </h2>

      <FadeIn delay={0.15} y={16}>
        <p className="section-meta mx-auto mb-16 max-w-xl text-center sm:mb-20 md:mb-28">
          <WhopStats variant="services" />
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
                className="display-number shrink-0 text-candle"
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
