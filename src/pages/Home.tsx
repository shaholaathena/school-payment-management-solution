import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CheckCircle2, LockKeyhole, ReceiptText, WalletCards } from 'lucide-react';
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
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import { color, radius, shadow } from '../theme/tokens';

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

      {/* Refined homepage: compact benefit cards for fast scanning */}
      <Section tone="light" density="tight">
        <Typography variant="overline" component="p" sx={{ textAlign: 'center', color: color.neutral[400], mb: 3.5 }}>
          Everything in one place
        </Typography>
        <Grid container spacing={2}>
          {quickBenefits.map(({ icon: Icon, title, text }, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
              <Reveal delay={i * 60}>
                <Box sx={{ p: 2.5, height: '100%', border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.lg}px`, bgcolor: '#fff', transition: 'transform 250ms ease, box-shadow 250ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: shadow.lg } }}>
                  <Box sx={{ width: 42, height: 42, display: 'grid', placeItems: 'center', borderRadius: `${radius.md}px`, bgcolor: color.brand[50], color: color.brand[600], mb: 2 }}><Icon size={20} /></Box>
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: color.neutral[600] }}>{text}</Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Master product story and stakeholder value */}
      <PlatformStory />
      <Stakeholders />

      {/* Master journey strengthened by the refined product-first presentation */}
      <ProcessJourney />
      <ProductShowcase />
      <Benefits />
      <UseCases />

      {/* Master security, FAQ and conversion close */}
      <SecurityBand />
      <HomeFaq />
      <CtaBand title="Get started with a simpler payment experience." description="See how the platform can fit your institution's fee collection workflow." />
    </>
  );
}
