import Benefits from '../components/sections/Benefits';
import CtaBand from '../components/sections/CtaBand';
import HomeHero from '../components/sections/HomeHero';
import PaymentStrip from '../components/sections/PaymentStrip';
import ProductShowcase from '../components/sections/ProductShowcase';
import Stakeholders from '../components/sections/Stakeholders';
import TrustStats from '../components/sections/TrustStats';
import UseCases from '../components/sections/UseCases';

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustStats />
      <PaymentStrip />
      <Benefits />
      <Stakeholders />
      <ProductShowcase />
      <UseCases />
      <CtaBand />
    </>
  );
}
