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
 * Section order and tone alternation follow the approved design: canvas and
 * muted trade off down the page, with a single ink band at the payment journey
 * and a second at the closing CTA.
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
