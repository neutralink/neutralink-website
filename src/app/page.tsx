// src/app/page.tsx


import Benefits from '@/components/Benefits';
import CreditOwnership from '@/components/Credit0wnership';
import FinalCTA from '@/components/FinalCTA';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import MarketplaceHighlight from '@/components/MarketplaceHighlight';
import VideoShowcase from '@/components/VideoShowcase';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HowItWorks />
      <VideoShowcase />
      <MarketplaceHighlight />
      <Benefits />
      <CreditOwnership />
      <LatestNews />
      <FinalCTA/>
      {/* Aqui virão as outras seções depois: */}
     
     
    </div>
  );
}
