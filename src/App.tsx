import DotGrid from './components/DotGrid';
import PageShell from './components/PageShell';
import TopTickerBar from './components/TopTickerBar';
import HeroSection from './components/sections/HeroSection';
import MarqueeSection from './components/sections/MarqueeSection';
import AboutSection from './components/sections/AboutSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ReviewsSection from './components/sections/ReviewsSection';
import FaqSection from './components/sections/FaqSection';
import Footer from './components/Footer';
import { useLenisScroll } from './hooks/useLenisScroll';

export default function App() {
  useLenisScroll();

  return (
    <>
      <TopTickerBar />
      <div className="relative overflow-x-clip bg-cream pt-[46px] font-kanit text-bull">
        <DotGrid />
        <PageShell>
          <main className="relative z-10">
            <HeroSection />
            <ReviewsSection />
            <MarqueeSection />
            <AboutSection />
            <ProductsSection />
            <ServicesSection />
            <ProjectsSection />
            <FaqSection />
          </main>
          <Footer />
        </PageShell>
      </div>
    </>
  );
}
