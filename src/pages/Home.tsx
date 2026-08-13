import Benefits from '../components/sections/Benefits';
import CtaBand from '../components/sections/CtaBand';
import HomeFaq from '../components/sections/HomeFaq';
import HomeHero from '../components/sections/HomeHero';
import PlatformStory from '../components/sections/PlatformStory';
import ProcessJourney from '../components/sections/ProcessJourney';
import ProductShowcase from '../components/sections/ProductShowcase';
import SecurityBand from '../components/sections/SecurityBand';
import Stakeholders from '../components/sections/Stakeholders';
import TrustBar from '../components/sections/TrustBar';
import UseCases from '../components/sections/UseCases';
import ValueBar from '../components/sections/ValueBar';

/**
 * Narrative order: clarity → trust → convenience → control → proof → conversion.
 * Section tone alternates light / subtle / dark so the page has a rhythm rather
 * than one continuous scroll of white cards.
 */
export default function Home() {
  return (
    <>
      <HomeHero />
      <ValueBar />
      <TrustBar />
      <PlatformStory />
      <Stakeholders />
      <ProcessJourney />
      <ProductShowcase />
      <Benefits />
      <UseCases />
      <SecurityBand />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
