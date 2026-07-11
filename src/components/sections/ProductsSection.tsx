import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '../FadeIn';
import WhopStats from '../WhopStats';
import { PRODUCTS, PRODUCTS_INTRO } from '../../data/content';
import { EASE_OUT, hoverLift, tapPress } from '../../lib/motion';

export default function ProductsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="products"
      className="section-x section-y relative z-10 border-t border-bull/10 bg-cream"
    >
      <FadeIn delay={0} y={30}>
        <h2 className="display-heading heading-gap text-center">Products</h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="mx-auto mb-6 max-w-2xl text-center font-light leading-relaxed text-bull/65"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}
        >
          {PRODUCTS_INTRO}
        </p>
        <p className="section-meta mx-auto mb-14 max-w-xl text-center text-bull/40 sm:mb-16">
          <WhopStats variant="products" />
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-6">
        {PRODUCTS.map((product, i) => (
          <FadeIn key={product.name} delay={0.2 + i * 0.1} y={24}>
            <motion.article
              className="flex h-full flex-col justify-between rounded-sm border border-bull/10 bg-cream-alt p-6 sm:p-8"
              whileHover={reduceMotion ? undefined : { ...hoverLift, borderColor: 'rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
            >
              <div>
                <h3 className="font-medium uppercase leading-snug tracking-wide text-bull">
                  {product.name}
                </h3>
                <div className="mt-5 flex flex-wrap items-baseline gap-1">
                  <span className="font-mono text-3xl font-bold tabular-nums text-candle sm:text-4xl">
                    {product.price}
                  </span>
                  {product.period && (
                    <span className="text-sm font-medium uppercase tracking-wider text-bull/50">
                      {product.period}
                    </span>
                  )}
                </div>
              </div>

              {reduceMotion ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block w-full bg-bull py-3.5 text-center text-xs font-medium uppercase tracking-widest text-cream transition-all hover:bg-bull/85 sm:text-sm"
                >
                  {product.cta}
                </a>
              ) : (
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block w-full bg-bull py-3.5 text-center text-xs font-medium uppercase tracking-widest text-cream sm:text-sm"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.88)', y: -1 }}
                  whileTap={tapPress}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                >
                  {product.cta}
                </motion.a>
              )}
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
