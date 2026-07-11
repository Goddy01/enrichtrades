import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import FadeIn from '../FadeIn';
import WhopStats from '../WhopStats';
import { REVIEWS, type Review } from '../../data/content';
import { EASE_OUT, hoverLift } from '../../lib/motion';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${i < rating ? 'fill-candle text-candle' : 'text-bull/20'}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const reduceMotion = useReducedMotion();

  const card = (
    <article className="flex h-[400px] w-[340px] shrink-0 flex-col rounded-sm border border-bull/10 bg-cream-alt p-6 transition-colors hover:border-bull/20 sm:w-[380px]">
      <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
        <h3 className="text-sm font-medium uppercase tracking-wide text-bull">{review.author}</h3>
        <StarRating rating={review.rating} />
      </div>
      <p className="min-h-0 flex-1 overflow-y-auto pr-1 text-sm font-light leading-relaxed text-bull/70">
        {review.text}
      </p>
      <p className="mt-4 shrink-0 text-[11px] font-light uppercase tracking-wider text-bull/40">
        {review.date} · {review.tenure}
      </p>
    </article>
  );

  if (reduceMotion) return card;

  return (
    <motion.div whileHover={hoverLift} transition={{ duration: 0.4, ease: EASE_OUT }}>
      {card}
    </motion.div>
  );
}

export default function ReviewsSection() {
  const track = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="section-x section-y relative z-10 overflow-x-clip border-t border-bull/10 bg-cream"
    >
      <FadeIn delay={0} y={30}>
        <h2 className="display-heading heading-gap text-center">Reviews</h2>
        <p className="section-eyebrow mx-auto mb-3 max-w-xl text-center">
          <WhopStats variant="reviews-members" />
        </p>
        <p className="section-meta mx-auto mb-3 max-w-xl text-center">
          Verified reviews from Whop
        </p>
        <p className="section-meta mx-auto mb-12 max-w-xl text-center text-bull/40 sm:mb-14">
          <WhopStats variant="reviews-ratings" />
        </p>
      </FadeIn>

      <div className="relative">
        <div className="reviews-marquee flex w-max items-stretch gap-4 px-4 sm:gap-5 sm:px-5">
          {track.map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
