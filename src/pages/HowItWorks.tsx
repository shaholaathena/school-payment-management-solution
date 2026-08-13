import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Info, ShieldCheck } from 'lucide-react';
import Badge from '../components/ui/Badge';
import PaymentCard from '../components/ui/PaymentCard';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/sections/CtaBand';
import PageHero from '../components/sections/PageHero';
import PhoneMockup from '../components/product/PhoneMockup';
import { JOURNEY, PAYMENT_METHODS, SECURITY_PILLARS, TECH_STACK } from '../content/platform';
import { color, radius, shadow } from '../theme/tokens';

function Journey() {
  return <Box sx={{ position: 'relative' }}>
    <Box aria-hidden sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', top: 32, left: '9%', right: '9%', height: 2, background: `linear-gradient(90deg, ${color.brand[200]}, ${color.brand[500]}, ${color.accent[400]})`, opacity: .7 }} />
    <Grid container spacing={{ xs: 3, lg: 2 }} sx={{ position: 'relative' }}>
      {JOURNEY.map((s, i) => <Grid size={{ xs: 12, sm: 6, lg: 12 / 5 }} key={s.step}><Reveal delay={i * 80}><Box sx={{ textAlign: { lg: 'center' } }}>
        <Box sx={{ width: 64, height: 64, mx: { lg: 'auto' }, mb: 2.5, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: '#fff', border: `2px solid ${color.brand[200]}`, boxShadow: shadow.md, position: 'relative' }}><Typography sx={{ fontWeight: 800, color: color.brand[700] }}>{String(s.step).padStart(2, '0')}</Typography></Box>
        <Typography variant="h5" sx={{ mb: 1 }}>{s.title}</Typography><Badge tone="neutral" size="sm">{s.actor}</Badge><Typography variant="body2" sx={{ color: color.neutral[600], mt: 1.5, lineHeight: 1.65 }}>{s.description}</Typography>
      </Box></Reveal></Grid>)}
    </Grid>
  </Box>;
}

export default function HowItWorks() {
  return <>
    <PageHero eyebrow="How it works" title="One payment journey. Every step visible." description="Create the fee, notify the family, collect the payment and reconcile the record — with the platform keeping the journey connected." tags={['Create fee', 'Parent pays', 'Reconcile']} />

    <Section id="journey" tone="light"><SectionHeading eyebrow="The journey" title="From fee setup to reconciled payment" description="A five-step workflow designed to remove the gaps between collection, confirmation and reporting." /><Journey /></Section>

    <Section id="payment-methods" tone="subtle"><SectionHeading eyebrow="Payment methods" title="Meet families where they pay" description="Payment methods are surfaced through the configured SSLCOMMERZ merchant setup. Keep the live method list editable as gateway configuration evolves." />
      <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: 'center' }}><Grid size={{ xs: 12, md: 7 }}><Grid container spacing={2}>{PAYMENT_METHODS.map((m, i) => <Grid size={{ xs: 12, sm: 6 }} key={m.name}><Reveal delay={i * 60} sx={{ height: '100%' }}><Box sx={{ height: '100%', transition: 'transform 250ms var(--ease)', '&:hover': { transform: 'translateY(-4px)' } }}><PaymentCard name={m.name} category={m.category} icon={m.icon} /></Box></Reveal></Grid>)}</Grid><Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start', mt: 3, p: 2.25, borderRadius: `${radius.lg}px`, bgcolor: color.warning[50], border: '1px solid #FDE68A' }}><Info size={16} color={color.warning[700]} /><Typography variant="caption" sx={{ color: color.warning[700] }}>The live method list follows your institution's SSLCOMMERZ merchant configuration. Confirm it before launch and edit <Box component="code" sx={{ fontFamily: 'var(--font-mono)' }}>PAYMENT_METHODS</Box> in <Box component="code" sx={{ fontFamily: 'var(--font-mono)' }}>src/content/platform.ts</Box>.</Typography></Stack></Grid><Grid size={{ xs: 12, md: 5 }}><Reveal><Box sx={{ display: 'flex', justifyContent: 'center' }}><PhoneMockup width={280} /></Box></Reveal></Grid></Grid>
    </Section>

    <Section id="technology" tone="dark"><SectionHeading eyebrow="Technology & security" title="Built for payment confidence." description="Keep security and operational visibility understandable for finance, administration and technology teams." onDark />
      <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }}>{SECURITY_PILLARS.map((p, i) => <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={p.title}><Reveal delay={i * 70} sx={{ height: '100%' }}><Box sx={{ height: '100%', p: 3, borderRadius: `${radius.xl}px`, bgcolor: 'rgba(255,255,255,.045)', border: '1px solid rgba(255,255,255,.11)', transition: 'transform 250ms var(--ease), background 250ms var(--ease)', '&:hover': { transform: 'translateY(-4px)', bgcolor: 'rgba(255,255,255,.07)' } }}><Box sx={{ width: 44, height: 44, mb: 2.5, borderRadius: `${radius.md}px`, display: 'grid', placeItems: 'center', bgcolor: 'rgba(99,102,241,.22)', color: '#A9B2FF' }}><Box component={p.icon} sx={{ width: 20, height: 20 }} /></Box><Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>{p.title}</Typography><Typography variant="body2" sx={{ color: 'rgba(255,255,255,.62)', lineHeight: 1.7 }}>{p.description}</Typography></Box></Reveal></Grid>)}</Grid>
      <Reveal><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.25fr .75fr' }, gap: 2.5 }}><Box sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: `${radius.xl}px`, bgcolor: 'rgba(255,255,255,.045)', border: '1px solid rgba(255,255,255,.11)' }}><Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>Technology stack</Typography><Stack spacing={1}>{TECH_STACK.map((row) => <Stack key={row.layer} direction="row" spacing={2} sx={{ justifyContent: 'space-between', py: 1.25, borderBottom: '1px solid rgba(255,255,255,.08)' }}><Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>{row.layer}</Typography><Typography variant="body2" sx={{ color: 'rgba(255,255,255,.58)', textAlign: 'right' }}>{row.value}</Typography></Stack>)}</Stack></Box><Box sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: `${radius.xl}px`, bgcolor: 'linear-gradient(145deg, rgba(99,102,241,.18), rgba(255,255,255,.04))', border: '1px solid rgba(255,255,255,.11)' }}><ShieldCheck size={22} color="#A9B2FF" /><Typography variant="h5" sx={{ color: '#fff', mt: 2, mb: 1.5 }}>Security, without overclaiming</Typography><Typography variant="body2" sx={{ color: 'rgba(255,255,255,.62)', lineHeight: 1.7 }}>Payment processing is handled through the configured gateway. Platform-level certifications or compliance claims should only be added once verified with the relevant team.</Typography></Box></Box></Reveal>
    </Section>
    <CtaBand title="See the flow with your own fee structure." description="Bring your classes, fee heads and payment setup to the demo." secondaryLabel="Read the FAQ" secondaryTo="/faq" />
  </>;
}
