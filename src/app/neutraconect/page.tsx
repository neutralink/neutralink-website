
import HowNeutraconectWorks from '@/components/HowNeutraconectWorks';
import NeutraconectBenefits from '@/components/NeutraconectBenefits';
import NeutraconectSecurityFeatures from '@/components/NeutraconectSecurityFeatures';
import NeutraconectCompatibility from '@/components/NeutraconectCompatibility';
import DeviceSpecs from '@/components/DeviceSpecs';
import NeutraconectCTA from '@/components/NeutraconectCTA'; // Você criará esse a seguir
import HeroNeutraconect from '@/components/HeroNutraconect';

export default function NeutraconectPage() {
  return (
    <>
      <HeroNeutraconect />
      <HowNeutraconectWorks />
      <NeutraconectBenefits />
      <NeutraconectSecurityFeatures />
      <NeutraconectCompatibility />
      <DeviceSpecs />
      <NeutraconectCTA />
    </>
  );
}
