// src/app/page.tsx


import Benefits from '../components/Benefits';
import CreditOwnership from '../components/Credit0wnership';
import FinalCTA from '../components/FinalCTA';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import LatestNews from '../components/LatestNews';
import MarketplaceHighlight from '../components/MarketplaceHighlight';
import VideoShowcase from '../components/VideoShowcase';

export default function HomePage() {
  console.log('✅ GOOGLE CLIENT ID:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="p-8">
        <button className="bg-primary text-white px-4 py-2 rounded">
          Botão Teste
        </button>
      </div>
      <HowItWorks />
      <VideoShowcase />
      <MarketplaceHighlight />
      <Benefits />
      <CreditOwnership />
      <LatestNews />
      <FinalCTA />
      {/* Aqui virão as outras seções depois: */}
    </div>
  );
}
