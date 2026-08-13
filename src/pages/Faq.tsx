import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, LifeBuoy, MessageCircleQuestion } from 'lucide-react';
import Button from '../components/ui/Button';
import FaqAccordion from '../components/ui/FaqAccordion';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import CtaBand from '../components/sections/CtaBand';
import PageHero from '../components/sections/PageHero';
import { FAQS } from '../content/faq';
import { color, radius, shadow } from '../theme/tokens';

export default function Faq() {
  return <>
    <PageHero eyebrow="FAQ" title="Answers before you book the demo." description="Payments, methods, security, reporting and onboarding — with caveats where the answer depends on your institution or merchant setup." />
    <Section tone="light">
      <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'flex-start' }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 112 } }}>
            <Box sx={{ width: 52, height: 52, mb: 2.5, borderRadius: `${radius.lg}px`, display: 'grid', placeItems: 'center', bgcolor: color.brand[50], color: color.brand[600], border: `1px solid ${color.brand[100]}` }}><MessageCircleQuestion size={23} /></Box>
            <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>Make a confident decision.</Typography>
            <Typography variant="body1" sx={{ color: color.neutral[600], lineHeight: 1.7, mb: 3 }}>If your question is specific to your fee structure, merchant setup or reporting workflow, the demo is the fastest way to answer it.</Typography>
            <Stack spacing={1.25} sx={{ alignItems: 'flex-start' }}><Button to="/contact">Book a Demo <ArrowUpRight size={16} /></Button><Button to="/how-it-works" variant="ghost">See how it works</Button></Stack>
            <Box sx={{ mt: 4, p: 2.5, borderRadius: `${radius.xl}px`, bgcolor: color.neutral[50], border: `1px solid ${color.neutral[200]}` }}><Stack direction="row" spacing={1.5}><LifeBuoy size={18} color={color.neutral[500]} /><Typography variant="caption" sx={{ color: color.neutral[600], lineHeight: 1.65 }}>Refund handling and onboarding timelines depend on your merchant agreement. We confirm those details directly rather than publishing assumptions.</Typography></Stack></Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}><Reveal><Box sx={{ p: { xs: 2, md: 3 }, borderRadius: `${radius['2xl']}px`, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.sm }}><FaqAccordion items={FAQS} defaultOpen={0} /></Box></Reveal></Grid>
      </Grid>
    </Section>
    <CtaBand title="Still have a question?" description="Bring your edge cases to the team and we will walk through them with you." secondaryLabel="Contact" secondaryTo="/contact" />
  </>;
}
