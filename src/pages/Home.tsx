import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, BellRing, CheckCircle2, LockKeyhole, ReceiptText, Sparkles, WalletCards } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/sections/CtaBand';
import PhoneMockup from '../components/product/PhoneMockup';
import DashboardMockup from '../components/product/DashboardMockup';
import { color, gradient, radius, shadow } from '../theme/tokens';

const features = [
  { icon: WalletCards, title: 'Quick payments', text: 'Let guardians settle tuition and other fees through a simple digital payment flow.' },
  { icon: ReceiptText, title: 'Collection reports', text: 'See paid, pending and overdue collections without stitching together spreadsheets.' },
  { icon: CheckCircle2, title: 'Online verification', text: 'Keep payment status and receipts visible to the right people at every step.' },
  { icon: LockKeyhole, title: 'Advanced security', text: 'Use a trusted payment gateway while keeping your product experience focused.' },
];

const steps = [
  ['01', 'Create an account', 'Set up the institution and fee structure.'],
  ['02', 'Configure fees', 'Define classes, heads, schedules and due dates.'],
  ['03', 'Collect payments', 'Guardians choose a payment method and complete checkout.'],
];

export default function Home() {
  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 13, md: 16 }, pb: { xs: 10, md: 14 }, color: '#fff', backgroundColor: color.ink[900], backgroundImage: `${gradient.darkSurface}, radial-gradient(circle at 50% 70%, rgba(99,102,241,.12), transparent 38%)` }}>
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, opacity: .35, backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(to bottom, black, transparent 85%)' }} />
        <Container sx={{ position: 'relative' }}>
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal>
                <Badge tone="inverse" pill icon={<Sparkles size={13} />}>Smart school payment management</Badge>
                <Typography component="h1" sx={{ mt: 3, fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5.4rem)', fontWeight: 800, lineHeight: .98, letterSpacing: '-.055em', maxWidth: 720 }}>
                  Make school payments <Box component="span" sx={{ background: 'linear-gradient(105deg,#a9b2ff,#67e8f9)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>simple, safe and clear.</Box>
                </Typography>
                <Typography sx={{ mt: 3, maxWidth: 590, color: 'rgba(255,255,255,.68)', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
                  A connected fee collection experience for schools, guardians and finance teams — from fee setup to successful payment and reconciliation.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4.5, alignItems: { sm: 'center' } }}>
                  <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} />}>Get Started</Button>
                  <Button to="/features" size="lg" variant="inverse">Explore Features</Button>
                </Stack>
                <Typography sx={{ mt: 2, fontSize: '.78rem', color: 'rgba(255,255,255,.42)' }}>No setup friction · Gateway-ready · Built for education</Typography>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal delay={140}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: 'rgba(99,102,241,.18)', filter: 'blur(55px)', top: '10%', right: '10%' }} />
                  <Box sx={{ position: 'relative', width: '100%', maxWidth: 650, borderRadius: `${radius['2xl']}px`, overflow: 'hidden', border: '1px solid rgba(255,255,255,.13)', boxShadow: shadow.onDark, background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(8px)', p: { xs: .75, md: 1.25 } }}>
                    <DashboardMockup view="overview" />
                  </Box>
                  <Box sx={{ position: 'absolute', right: { xs: -12, md: -22 }, bottom: { xs: -45, md: -54 }, display: { xs: 'none', sm: 'block' } }}><PhoneMockup width={185} onDark /></Box>
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Section tone="light" density="tight">
        <Typography variant="overline" component="p" sx={{ textAlign: 'center', color: color.neutral[400], mb: 3 }}>Everything in one place</Typography>
        <Grid container spacing={2}>{features.map(({ icon: Icon, title, text }, i) => <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}><Reveal delay={i * 60}><Box sx={{ p: 2.5, height: '100%', border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.lg}px`, bgcolor: '#fff', transition: 'transform 250ms ease, box-shadow 250ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: shadow.lg } }}><Box sx={{ width: 42, height: 42, display: 'grid', placeItems: 'center', borderRadius: `${radius.md}px`, bgcolor: color.brand[50], color: color.brand[600], mb: 2 }}><Icon size={20} /></Box><Typography variant="h5">{title}</Typography><Typography variant="body2" sx={{ mt: 1, color: color.neutral[600] }}>{text}</Typography></Box></Reveal></Grid>)}</Grid>
      </Section>

      <Section tone="subtle">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}><Reveal><Typography variant="overline" sx={{ color: color.brand[600] }}>Advanced security</Typography><Typography variant="h2" sx={{ mt: 1.5 }}>Payments are protected at every step.</Typography><Typography variant="subtitle1" sx={{ mt: 2.5, color: color.neutral[600] }}>Give finance teams visibility while keeping the checkout experience familiar for guardians.</Typography><Stack spacing={1.5} sx={{ mt: 3.5 }}>{['Gateway-based checkout', 'Clear payment confirmation', 'Receipts and transaction history'].map((item) => <Stack key={item} direction="row" spacing={1.25} sx={{ alignItems: 'center' }}><CheckCircle2 size={18} color={color.success[600]} /><Typography variant="body2" sx={{ fontWeight: 600 }}>{item}</Typography></Stack>)}</Stack><Box sx={{ mt: 4 }}><Button to="/how-it-works" variant="secondary" endIcon={<ArrowRight size={16} />}>See how it works</Button></Box></Reveal></Grid>
          <Grid size={{ xs: 12, md: 7 }}><Reveal delay={100}><Box sx={{ p: { xs: 1, md: 1.5 }, borderRadius: `${radius['2xl']}px`, bgcolor: color.ink[900], backgroundImage: gradient.darkSurface, boxShadow: shadow['2xl'] }}><DashboardMockup view="transactions" /></Box></Reveal></Grid>
        </Grid>
      </Section>

      <Section tone="light"><SectionHeading eyebrow="Complete solutions" title="The simpler, safer way to collect fees" description="A product flow inspired by modern payment platforms, adapted for the needs of educational institutions." /><Grid container spacing={{ xs: 3, md: 5 }}>{steps.map(([num, title, text], i) => <Grid size={{ xs: 12, md: 4 }} key={num}><Reveal delay={i * 80}><Stack direction="row" spacing={2.5}><Typography sx={{ fontFamily: 'var(--font-display)', fontSize: '3.2rem', fontWeight: 800, lineHeight: 1, color: color.brand[100] }}>{num}</Typography><Box><Typography variant="h4">{title}</Typography><Typography variant="body2" sx={{ mt: 1, color: color.neutral[600] }}>{text}</Typography></Box></Stack></Reveal></Grid>)}</Grid></Section>

      <Section tone="brand"><Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}><Grid size={{ xs: 12, md: 6 }}><Reveal><Typography variant="overline" sx={{ color: 'rgba(255,255,255,.55)' }}>Built for the full payment journey</Typography><Typography variant="h2" sx={{ mt: 1.5, color: '#fff' }}>One platform for institutions, guardians and finance teams.</Typography><Typography variant="subtitle1" sx={{ mt: 2.5, color: 'rgba(255,255,255,.72)' }}>Bring payment collection, reporting and communication into one connected experience.</Typography></Reveal></Grid><Grid size={{ xs: 12, md: 6 }}><Grid container spacing={2}>{[['Schools', 'Configure fees and monitor collections.'], ['Guardians', 'View dues and pay securely online.'], ['Finance', 'Reconcile activity with clear reports.'], ['Support', 'Resolve payment questions faster.']].map(([title, text], i) => <Grid size={{ xs: 12, sm: 6 }} key={title}><Reveal delay={i * 60}><Box sx={{ p: 2.5, minHeight: 145, borderRadius: `${radius.xl}px`, bgcolor: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.13)' }}><Typography variant="h5" sx={{ color: '#fff' }}>{title}</Typography><Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,.62)' }}>{text}</Typography></Box></Reveal></Grid>)}</Grid></Grid></Grid></Section>

      <Section tone="subtle"><SectionHeading eyebrow="Trusted payment experience" title="Ready for everyday payment behaviour" description="Support cards, mobile financial services and online banking through the configured gateway experience." /><Stack direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1.25 }}>{['Visa', 'Mastercard', 'bKash', 'Nagad', 'Rocket', 'Internet Banking'].map((name) => <Box key={name} sx={{ px: 2.5, py: 1.5, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.md}px`, color: color.neutral[700], fontWeight: 700, fontSize: '.9rem' }}>{name}</Box>)}</Stack></Section>

      <Section tone="light"><Grid container spacing={{ xs: 6, md: 9 }} sx={{ alignItems: 'center' }}><Grid size={{ xs: 12, md: 6 }}><Reveal><Box sx={{ display: 'flex', justifyContent: 'center' }}><PhoneMockup width={300} onDark={false} /></Box></Reveal></Grid><Grid size={{ xs: 12, md: 6 }}><Reveal delay={100}><Typography variant="overline" sx={{ color: color.brand[600] }}>Guardian experience</Typography><Typography variant="h2" sx={{ mt: 1.5 }}>Send money and make payments without the friction.</Typography><Typography variant="subtitle1" sx={{ mt: 2.5, color: color.neutral[600] }}>A focused mobile-first experience makes outstanding fees, payment methods and confirmation easy to understand.</Typography><Stack direction="row" spacing={3} sx={{ mt: 3.5 }}>{[['7.8k', 'payments'], ['76%', 'digital adoption'], ['4.93', 'experience score']].map(([value, label]) => <Box key={label}><Typography sx={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 800 }}>{value}</Typography><Typography variant="caption" sx={{ color: color.neutral[500] }}>{label}</Typography></Box>)}</Stack></Reveal></Grid></Grid></Section>

      <Section tone="dark"><SectionHeading onDark eyebrow="Questions? Look here." title="Frequently asked questions" description="A few of the questions teams usually ask before moving payment collection online." /><Grid container spacing={2}>{['How do we get started?', 'Which payment methods can guardians use?', 'How are payments confirmed?', 'Can finance teams export reports?'].map((q, i) => <Grid size={{ xs: 12, md: 6 }} key={q}><Reveal delay={i * 60}><Box sx={{ p: 2.5, borderRadius: `${radius.lg}px`, border: '1px solid rgba(255,255,255,.12)', bgcolor: 'rgba(255,255,255,.045)' }}><Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}><BellRing size={18} color="#A9B2FF" /><Typography variant="h5" sx={{ color: '#fff' }}>{q}</Typography></Stack><Typography variant="body2" sx={{ mt: 1.5, color: 'rgba(255,255,255,.58)' }}>See the FAQ page for the full answer and implementation details.</Typography></Box></Reveal></Grid>)}</Grid></Section>

      <CtaBand title="Get started with a simpler payment experience." description="See how the platform can fit your institution's fee collection workflow." />
    </>
  );
}
