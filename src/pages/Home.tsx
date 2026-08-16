import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CheckCircle2, LockKeyhole, ReceiptText, WalletCards } from 'lucide-react';
import Benefits from '../components/sections/Benefits';
import CtaBand from '../components/sections/CtaBand';
import HomeFaq from '../components/sections/HomeFaq';
import HomeHero from '../components/sections/HomeHero';
import PlatformStory from '../components/sections/PlatformStory';
import ProcessJourney from '../components/sections/ProcessJourney';
import ProductPreviewBand from '../components/sections/ProductPreviewBand';
import ProductShowcase from '../components/sections/ProductShowcase';
import SecurityBand from '../components/sections/SecurityBand';
import Stakeholders from '../components/sections/Stakeholders';
import Testimonials from '../components/sections/Testimonials';
import TrustBar from '../components/sections/TrustBar';
import UseCases from '../components/sections/UseCases';
import ValueBar from '../components/sections/ValueBar';
import BlobIcon from '../components/ui/BlobIcon';
import Panel from '../components/ui/Panel';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import { color } from '../theme/tokens';

const quickBenefits = [
  { icon: WalletCards, title: 'Quick payments', text: 'Let guardians settle tuition and other fees through a simple digital payment flow.' },
  { icon: ReceiptText, title: 'Collection reports', text: 'See paid, pending and overdue collections without stitching together spreadsheets.' },
  { icon: CheckCircle2, title: 'Online verification', text: 'Keep payment status and receipts visible to the right people at every step.' },
  { icon: LockKeyhole, title: 'Advanced security', text: 'Use a trusted payment gateway while keeping your product experience focused.' },
];

export default function Home() {
  return (
    <>
      {/* Refined Pintex-inspired hero from manual-design-refinement */}
      <HomeHero />

      {/* Master homepage: value proposition + trust proof */}
      <ValueBar />
      <TrustBar />

      {/* "Everything in one place" — Pintex features-1 treatment: centered
          heading + a row of blob-icon cards (kept on the azure system). */}
      <Section tone="light">
        <SectionHeading
          align="center"
          eyebrow="Platform"
          title="Everything in one place"
          description="The essentials of fee collection — payments, reporting, verification and security — in one system."
        />
        <Grid container spacing={3}>
          {quickBenefits.map(({ icon: Icon, title, text }, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
              <Reveal delay={i * 60} sx={{ display: 'flex' }}>
                <Panel
                  lift
                  fullHeight
                  sx={{ flex: 1, p: { xs: 3, lg: 3.5 }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <BlobIcon icon={Icon} size="md" variant={i} />
                  <Typography variant="h5" component="h3" sx={{ mt: 3 }}>{title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1.25, color: color.neutral[500] }}>{text}</Typography>
                </Panel>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Master product story and stakeholder value */}
      <PlatformStory />
      <Stakeholders />
      <ProductPreviewBand />

      {/* Master journey strengthened by the refined product-first presentation */}
      <ProcessJourney />
      <ProductShowcase />
      <Benefits />
      <UseCases />

      {/* Master security, social proof, FAQ and conversion close */}
      <SecurityBand />
      <Testimonials />
      <HomeFaq />
      <CtaBand title="Get started with a simpler payment experience." description="See how the platform can fit your institution's fee collection workflow." />
    </>
  );
}
