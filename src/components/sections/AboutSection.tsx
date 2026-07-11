import { TrendingUp, BarChart3, CandlestickChart, LineChart } from 'lucide-react';
import FadeIn from '../FadeIn';
import RevealLines from '../RevealLines';
import ContactButton from '../ContactButton';
import AnimatedText from '../AnimatedText';
import { FloatingIcon, ScrollScale } from '../MotionFX';
import { ABOUT_TEXT, PINNED_NOTE } from '../../data/content';

const DECO_CONFIG = [
  { Icon: TrendingUp, delay: 0.1, x: -80, floatDelay: 0, className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[100px] sm:w-[130px] md:w-[160px]' },
  { Icon: BarChart3, delay: 0.25, x: -80, floatDelay: 1.2, className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[90px] sm:w-[120px] md:w-[150px]' },
  { Icon: CandlestickChart, delay: 0.15, x: 80, floatDelay: 0.6, className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[100px] sm:w-[130px] md:w-[160px]' },
  { Icon: LineChart, delay: 0.3, x: 80, floatDelay: 1.8, className: 'right-[3%] bottom-[8%] sm:right-[6%] md:right-[10%] w-[110px] sm:w-[140px] md:w-[170px]' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mt-32 flex min-h-screen flex-col items-center justify-center bg-cream px-5 pt-32 pb-20 sm:mt-40 sm:px-8 sm:pt-40 sm:pb-24 md:mt-48 md:px-10 md:pt-48 md:pb-32"
    >
      {DECO_CONFIG.map(({ Icon, delay, x, floatDelay, className }, i) => (
        <FadeIn
          key={i}
          delay={delay}
          x={x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute text-candle/20 ${className}`}
        >
          <FloatingIcon Icon={Icon} className="h-full w-full" delay={floatDelay} />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <h2
          className="text-center font-black uppercase leading-none tracking-tight text-bull"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          <RevealLines lines={['About']} delay={0.1} />
        </h2>

        <ScrollScale className="w-full max-w-4xl">
          <img
            src="/discord-mockup.webp"
            alt="Enrich Trades Whop community — profit updates and trade recaps"
            className="h-auto w-full select-none object-contain"
            draggable={false}
          />
        </ScrollScale>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text={ABOUT_TEXT} />
          <FadeIn delay={0.2} y={16}>
            <p className="max-w-md text-center font-mono text-xs uppercase tracking-wider text-bull/40">
              {PINNED_NOTE}
            </p>
          </FadeIn>
          <FadeIn delay={0.3} y={12}>
            <div id="contact">
              <ContactButton />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
