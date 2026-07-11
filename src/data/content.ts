import { LineChart, Zap, Users } from 'lucide-react';

export const LINKS = {
  x: 'https://x.com/enrichtrades',
  whop: 'https://whop.com/enrichtrades/',
  enrichtradesco: 'https://x.com/enrichtradesco',
};

export const STATS = {
  followers: '32.3K',
  whopRating: '4.9',
  members: '1,346+',
  reviews: '90',
  joined: 'November 2021',
};

export const HERO = {
  headingLine1: 'JOIN THE TOP 1%',
  headingLine2: 'TRADERS TODAY',
  subheading:
    'A private network built to transform everyday traders into top-1% performers through real education, real edge, and a community that wins together.',
  primaryCta: 'Join Whop',
  secondaryCta: 'See on X',
};

export const FEATURE_CARDS = [
  {
    icon: LineChart,
    title: 'Charts',
    description: 'A+ setups posted on X daily — breakouts, EMA crosses, bull flags with sector confluence.',
  },
  {
    icon: Zap,
    title: 'Alerts',
    description: 'Real-time options alerts on Whop. Entry, size, and thesis every time — no noise.',
  },
  {
    icon: Users,
    title: 'Community',
    description: '1,346+ traders on Whop · 4.9 rating. Use code "levels" for a discount at checkout.',
  },
];

/** Scroll marquee — tickers from X posts & weekly recaps */
export const MARQUEE_TICKERS = [
  { sym: '$NVDA', pct: '+400%', note: 'A++++ breakout' },
  { sym: '$RKLB', pct: '20x', note: 'Portfolio call' },
  { sym: '$IBM', pct: '+370%', note: 'Swing week' },
  { sym: '$DELL', pct: '+250%', note: 'Bull flag' },
  { sym: '$HOOD', pct: '15x', note: 'Long-term' },
  { sym: '$LLY', pct: '+200%', note: 'ATH / 9 EMA' },
  { sym: '$EOSE', pct: 'Stage 2', note: 'Monthly BO' },
  { sym: '$OSCR', pct: '5x pot.', note: 'Bull flag' },
  { sym: '$META', pct: '→ $750', note: 'Weekly BO' },
  { sym: '$IONQ', pct: 'Quantum', note: 'Sector leader' },
  { sym: '$CRWD', pct: 'Cyber', note: 'Bull run list' },
  { sym: '$TSLA', pct: 'Pullback', note: '$370 add zone' },
  { sym: '$NBIS', pct: 'AI Infra', note: 'Weekly reclaim' },
  { sym: '$PLTR', pct: 'Data', note: 'Sector leader' },
  { sym: '$SNOW', pct: '9 EMA', note: 'Lotto setup' },
  { sym: '$CIFR', pct: 'Breakout', note: 'Energy tech' },
  { sym: '$HIMS', pct: 'Retail', note: 'Momentum' },
  { sym: '$SPY', pct: 'Levels', note: 'Daily prep' },
  { sym: '$ASTS', pct: 'Space', note: 'Bull run list' },
  { sym: '$ONDS', pct: 'Robotics', note: 'Rotation' },
  { sym: '$MP', pct: 'Metals', note: 'Pullback $66' },
];

export const SERVICES = [
  {
    number: '01',
    name: 'Options Alerts',
    description:
      'Precise setups the moment they\'re identified. Entry, size, and full thesis every time — no noise, no filler. High-conviction, chart-based only.',
  },
  {
    number: '02',
    name: 'Portfolio Research',
    description:
      'Deep fundamental stock picks built for 1yr+ holds. Past calls include $RKLB (20x) and $HOOD (15x). Sector leaders, stage 2 breakouts, pullback watchlists.',
  },
  {
    number: '03',
    name: 'SPY Levels & Education',
    description:
      'Daily bias, support, resistance, and scenarios before the open. Weekly breakdowns and video lessons — from reading charts to managing risk.',
  },
  {
    number: '04',
    name: 'Whop Community',
    description:
      'Charts posted on X. Alerts live on Whop. A private room where serious options traders share setups, call out moves early, and sharpen each other daily.',
  },
  {
    number: '05',
    name: 'Full Access — Whop',
    description:
      '$79/month cancel anytime · $999 lifetime. Use code "levels" for a discount at checkout. Instant access after purchase.',
  },
];

export const PRODUCTS_INTRO =
  'Unlock proven trading strategies, high-quality trade alerts, and long-term portfolio guidance — all backed by a network of elite entrepreneurs and seasoned analysts.';

export interface Product {
  name: string;
  price: string;
  period?: string;
  href: string;
  cta: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'Enrich Trades Full Access',
    price: '$79.00',
    period: '/ month',
    href: 'https://whop.com/joined/enrichtrades/products/enrich-trades-full-a-copy-87/',
    cta: 'Join Now',
  },
  {
    name: 'Enrich Trades Lifetime Access',
    price: '$999.00',
    href: 'https://whop.com/joined/enrichtrades/products/enrich-trades-blueprint-copy/',
    cta: 'Buy Now',
  },
];

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  tenure: string;
}

export const REVIEWS: Review[] = [
  {
    author: 'AdamK',
    rating: 5,
    text: "I'm brand new to trading and probably have the smallest account on here. I have to choose trades I can afford but between Enrich's educational material, a solid community and the trades taken by Enrich and J, this is by far the best place to become successful. No trade is a gamble because it's based on multiple factors and a history of success from Enrich. Highly recommend.",
    date: 'July 9, 2026',
    tenure: '2 months after purchase',
  },
  {
    author: 'Sligh Hartley',
    rating: 5,
    text: 'Been in many groups, this one is very different. Amazing education and execution. They truly care about their members success.',
    date: 'July 8, 2026',
    tenure: '1 month after purchase',
  },
  {
    author: 'AgentGrady',
    rating: 5,
    text: "One of the best decisions I've ever made is joining Enrich. He cares about you as an individual, has banger trades basically every day, simply amazing. Could not recommend more",
    date: 'July 7, 2026',
    tenure: '1 month after purchase',
  },
  {
    author: 'Brad Schwarck',
    rating: 5,
    text: 'I feel at home in this group. Great people, everyone working to be the best. Enrich is a great trader with success and wants the group to be successful too.',
    date: 'July 7, 2026',
    tenure: '1 year after purchase',
  },
  {
    author: 'RuRuRamen',
    rating: 5,
    text: 'Best discord options trading channel, both Enrich and J are so intuitive, acknowledge and patient. Seeking for the best setup and provide high quality trades. Only 1 week in, and I know I will stay. So glad I found this channel!',
    date: 'July 7, 2026',
    tenure: '8 days after purchase',
  },
  {
    author: 'Outlook_2',
    rating: 5,
    text: 'Good trading group very clean and organized',
    date: 'July 7, 2026',
    tenure: '16 days after purchase',
  },
  {
    author: 'LeroyBraden',
    rating: 5,
    text: 'Best investing group I have ever been part of. I did the lifetime and already have covered the cost by 5Xs in less than a month. Enrich and J are great at what they do and the community itself is worth the price of admission. If you are serious about making money, learning, and being part of a great group of individuals passionate about investing, this is an easy buy.',
    date: 'July 7, 2026',
    tenure: '1 month after purchase',
  },
  {
    author: 'Nicole',
    rating: 5,
    text: "Great group. Joined a few weeks ago and consistently making money. I plan on switching to the lifetime membership here shortly. Glad I randomly found them and I've been referring a few friends :).",
    date: 'July 7, 2026',
    tenure: '10 days after purchase',
  },
  {
    author: 'Gedeon',
    rating: 5,
    text: "Great group that's supportive and cares about your success. Consistent, high probability technical setups that often times exceed expectations. Lessons learned early on: 1) don't cherry pick the callouts and 2) it's generally a good idea to scale out in profit when one of the coaches do, if following.",
    date: 'July 7, 2026',
    tenure: '5 months after purchase',
  },
  {
    author: 'Michael Cowen',
    rating: 5,
    text: 'Honestly, I have yet to have a bad position since joining. Enrich and J have developed a rare eye for market predictions.',
    date: 'July 7, 2026',
    tenure: '11 days after purchase',
  },
  {
    author: 'Flaunty',
    rating: 5,
    text: "Enrich and J are great traders. They consistently find the strongest names regardless of market conditions. As long as you don't let green trades go red, you WILL grow your port.",
    date: 'July 7, 2026',
    tenure: '2 months after purchase',
  },
  {
    author: 'Brett Wilson',
    rating: 5,
    text: 'By far one of the most consistent and transparent traders out there. Been in and out of discords and have to say this is one of the best!',
    date: 'July 7, 2026',
    tenure: '1 year after purchase',
  },
  {
    author: 'Lielie',
    rating: 5,
    text: "Can't say more than thank you so much for ALL THE BANGERSSSSSSSSS LFG the best discord ever!!!",
    date: 'July 7, 2026',
    tenure: '2 months after purchase',
  },
  {
    author: 'Joel Foos',
    rating: 5,
    text: 'Very consistent in approach and delivers tons of insights and resources.',
    date: 'July 7, 2026',
    tenure: '1 month after purchase',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'What does access to your Discord provide?',
    answer:
      'Enrich Trades provides daily watchlists, real-time trade alerts, live market commentary, educational content, technical analysis, trade recaps, risk management, and a community focused on consistent growth.',
  },
  {
    question: 'How do I join the Discord?',
    answer:
      "After completing your purchase, you'll receive an invitation link to join our Whop community.",
  },
  {
    question: 'What tools do you provide?',
    answer:
      'We provide Unusual Whales and Bull Flow integrations, plus our 60-page Enrich Trades Blueprint covering our strategy, risk management, and everything you need to get up to speed quickly.',
  },
];

export interface ProjectPanel {
  label: string;
  value: string;
  sub?: string;
}

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  panels: ProjectPanel[];
  href?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: '$RKLB — 20x',
    category: 'Portfolio Research',
    description:
      'Long-term fundamental call on the space economy leader. Multi-bagger before the crowd — part of the bull run sector list alongside $ASTS, $LUNR, $RDW.',
    panels: [
      { label: 'Sector', value: 'Space Economy', sub: '$RKLB $ASTS $LUNR' },
      { label: 'Hold', value: '1yr+', sub: 'Fundamental thesis' },
      { label: 'Result', value: '20x', sub: 'Past portfolio call' },
      { label: 'Add Zone', value: '$55', sub: 'Pullback watchlist' },
    ],
    href: LINKS.x,
  },
  {
    number: '02',
    name: '$NVDA — 400%',
    category: 'Options Alert',
    description:
      'A++++ daily chart — clean breakout, EMAs bullish cross, in the gap. Cons over 250%. Play of the day from the 7/6 weekly recap.',
    panels: [
      { label: 'Setup', value: 'A++++', sub: 'EMA bullish cross' },
      { label: 'Week', value: '7/6', sub: 'Weekly recap' },
      { label: 'Return', value: '400%', sub: 'Options play' },
      { label: 'Tone', value: 'Disciplined', sub: 'Let price confirm' },
    ],
    href: LINKS.x,
  },
  {
    number: '03',
    name: 'Sector Leaders',
    category: 'Bull Run Watchlist',
    description:
      'Pinned playbook for the next bull run — leaders by sector. Cybersecurity, space, quantum, data, AI hardware. Exposure over the next 5+ years.',
    panels: [
      { label: 'Cyber', value: '$CRWD $ZS', sub: '$PANW $NET $RBRK' },
      { label: 'Space', value: '$RKLB $ASTS', sub: '$LUNR $RDW $PL' },
      { label: 'Quantum', value: '$IONQ $RGTI', sub: '$GOOGL exposure' },
      { label: 'Data', value: '$SNOW $PLTR', sub: '$DDOG $CFLT $ESTC' },
    ],
    href: LINKS.x,
  },
];

export const ABOUT_TEXT =
  "I trade options & buy real estate. Proven edge. Building @enrichtradesco. Charts are posted on X but alerts are given on Whop — high-conviction setups with entry, size, and full thesis. Unlike communities that push constant low-conviction noise, I wait for A+ charts. Stay disciplined.";

export const PINNED_NOTE =
  'Pinned on X: whop.com/enrichtrades — use code "levels" for a discount.';
