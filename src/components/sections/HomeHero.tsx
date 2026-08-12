import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import BrowserFrame from '../product/BrowserFrame';
import DashboardScreenshot from '../product/DashboardScreenshot';
import FloatingCard from '../product/FloatingCard';
import PhoneScreenshot from '../product/PhoneScreenshot';
import { HERO_SIGNALS } from '../../content/home';
import { color, gradient, radius } from '../../theme/tokens';

const HERO_POINTS = ['Fee collection', 'Digital payments', 'Real-time reporting'];

export default function HomeHero() {
  return (
    <Box component="section" id="hero" sx={{ position: 'relative', overflow: 'hidden', bgcolor: color.ink[900], color: '#fff', backgroundImage: 'radial-gradient(circle at 78% 22%, rgba(99,102,241,0.24), transparent 32%), radial-gradient(circle at 18% 80%, rgba(56,189,248,0.10), transparent 28%), linear-gradient(135deg, #11152d 0%, #171b3d 52%, #11152d 100%)', pt: { xs: 13, md: 16 }, pb: { xs: 9, md: 13 } }}>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, opacity: 0.45, backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'linear-gradient(to bottom, black 0%, transparent 88%)', pointerEvents: 'none' }} />
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 7, md: 4, lg: 7 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ maxWidth: 620, '@media (prefers-reduced-motion: no-preference)': { '& > *': { opacity: 0, animation: 'heroCopyIn 650ms var(--ease) forwards' }, '& > *:nth-of-type(1)': { animationDelay: '40ms' }, '& > *:nth-of-type(2)': { animationDelay: '100ms' }, '& > *:nth-of-type(3)': { animationDelay: '170ms' }, '& > *:nth-of-type(4)': { animationDelay: '240ms' }, '& > *:nth-of-type(5)': { animationDelay: '310ms' } }, '@keyframes heroCopyIn': { from: { opacity: 0, transform: 'translateY(18px)' }, to: { opacity: 1, transform: 'none' } } }}>
              <Box sx={{ mb: 3.5 }}><Badge tone="inverse" pill icon={<ShieldCheck size={15} strokeWidth={2.2} />}>Trusted payment infrastructure by SSLCOMMERZ</Badge></Box>
              <Typography variant="h1" sx={{ color: '#fff', fontSize: { xs: '2.65rem', sm: '3.35rem', md: '4rem', lg: '4.35rem' }, lineHeight: 1.02, letterSpacing: '-0.045em', maxWidth: 600, mb: 3 }}>
                School payments,
                <Box component="span" sx={{ display: 'block', backgroundImage: gradient.displayOnDark, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>without the friction.</Box>
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.68)', maxWidth: 500, fontSize: { md: '1.08rem' }, lineHeight: 1.7, mb: 4 }}>
                A modern payment management platform for schools and institutions to collect fees, simplify the parent journey, and stay in control of every transaction.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
                <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} strokeWidth={2.25} />}>Book a Demo</Button>
                <Button to="/features" size="lg" variant="inverse">See how it works</Button>
              </Stack>
              <Stack direction="row" spacing={{ xs: 1.5, sm: 2.5 }} sx={{ flexWrap: 'wrap', rowGap: 1.25 }}>
                {HERO_POINTS.map((point) => <Stack key={point} direction="row" spacing={0.75} alignItems="center"><Box sx={{ width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'rgba(129,140,248,0.18)', color: '#A5B4FC' }}><Check size={11} strokeWidth={3} /></Box><Typography sx={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.8rem', fontWeight: 600 }}>{point}</Typography></Stack>)}
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ position: 'relative', minHeight: { xs: 330, md: 520 }, display: 'flex', alignItems: 'center', '@media (prefers-reduced-motion: no-preference)': { opacity: 0, animation: 'heroVisualIn 850ms var(--ease) 220ms forwards' }, '@keyframes heroVisualIn': { from: { opacity: 0, transform: 'translateY(24px) scale(0.985)' }, to: { opacity: 1, transform: 'none' } } }}>
              <Box aria-hidden sx={{ position: 'absolute', width: '90%', height: '70%', left: '5%', top: '15%', background: 'radial-gradient(ellipse, rgba(129,140,248,0.30), transparent 68%)', filter: 'blur(34px)' }} />
              <Box sx={{ position: 'relative', width: '100%', transform: { md: 'translateX(3%)' }, '@media (prefers-reduced-motion: no-preference)': { animation: 'dashboardFloat 8s ease-in-out infinite' }, '@keyframes dashboardFloat': { '0%,100%': { transform: 'translateY(0) translateX(3%)' }, '50%': { transform: 'translateY(-7px) translateX(3%)' } } }}>
                <BrowserFrame onDark url="epms.educationpayments.example"><DashboardScreenshot /></BrowserFrame>
              </Box>
              <Box sx={{ position: 'absolute', left: { md: -8, lg: -18 }, bottom: { md: -16, lg: -5 }, display: { xs: 'none', md: 'block' }, filter: 'drop-shadow(0 24px 45px rgba(0,0,0,0.28))', animation: 'phoneFloat 7s ease-in-out 1s infinite', '@keyframes phoneFloat': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } } }}><PhoneScreenshot width={178} /></Box>
              <Box sx={{ position: 'absolute', top: { md: 5, lg: 20 }, right: { md: -8, lg: -20 }, width: 210, display: { xs: 'none', md: 'block' } }}><FloatingCard {...HERO_SIGNALS[0]} floatDelay={400} /></Box>
              <Box sx={{ position: 'absolute', right: { lg: -12 }, bottom: { md: 20, lg: 5 }, width: 218, display: { xs: 'none', lg: 'block' } }}><FloatingCard {...HERO_SIGNALS[1]} floatDelay={1500} /></Box>
              <Box sx={{ position: 'absolute', top: { md: -22 }, left: { md: '48%' }, transform: 'translateX(-50%)', display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, px: 1.5, py: 1, border: '1px solid rgba(255,255,255,0.12)', borderRadius: `${radius.lg}px`, bgcolor: 'rgba(24,28,62,0.78)', backdropFilter: 'blur(14px)', boxShadow: '0 16px 40px rgba(0,0,0,0.20)' }}><Sparkles size={15} color="#A5B4FC" /><Typography sx={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(255,255,255,0.82)', whiteSpace: 'nowrap' }}>Built for simpler school operations</Typography></Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: -1 }}><PhoneScreenshot width={205} /></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
