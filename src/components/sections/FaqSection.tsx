import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import FadeIn from '../FadeIn';
import StaggerReveal, { StaggerItem } from '../StaggerReveal';
import { FAQS } from '../../data/content';
import { EASE_PREMIUM } from '../../lib/motion';

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-b border-cream/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium leading-snug text-cream sm:text-base">{question}</span>
        <motion.span
          className="shrink-0 text-cream/70"
          aria-hidden
          animate={reduceMotion ? undefined : { rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        >
          {isOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Plus className="h-5 w-5" strokeWidth={1.5} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm font-light leading-relaxed text-cream/65 sm:pb-6 sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 border-t border-bull/10 bg-cream-alt px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="mb-10 text-center font-black uppercase text-bull sm:mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          FAQS
        </h2>
      </FadeIn>

      <StaggerReveal className="mx-auto max-w-3xl" stagger={0.08}>
        <StaggerItem>
          <div className="overflow-hidden rounded-lg bg-bull px-5 sm:px-8">
            {FAQS.map((faq, i) => (
              <FaqAccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}
