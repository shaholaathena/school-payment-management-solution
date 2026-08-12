import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { color, gradient, radius, shadow } from '../../theme/tokens';
import dashboardHero from '../../assets/images/dashboard-hero.png';
import paymentSummaryHero from '../../assets/images/payment-summary-hero.png';

const HERO_POINTS = ['Fee collection', 'Digital payments', 'Real-time reporting'];

export default function HomeHero() {
  return (
    <Box component="section" id="hero" sx={{ position: 'relative', overflow: 'hidden', bgcolor: '#F7F9FC', color: color.neutral[900], pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 11 }, borderBottom: `1px solid ${color.neutral[200]}` }}>
      <Box aria-hidden sx={{ position: 'absolute', width: { xs: 420, md: 760 }, height: { xs: 420, md: 760 }, top: { xs: -180, md: -300 }, right: { xs: -180, md: -220 }, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(56,189,248,0.06) 36%, transparent 70%)', pointerEvents: 'none' }} />
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 7, md: 5, lg: 8 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ maxWidth: 590, '@media (prefers-reduced-motion: no-preference)': { '& > *': { opacity: 0, animation: 'heroIn 600ms var(--ease) forwards' }, '& > *:nth-of-type(1)': { animationDelay: '40ms' }, '& > *:nth-of-type(2)': { animationDelay: '100ms' }, '& > *:nth-of-type(3)': { animationDelay: '160ms' }, '& > *:nth-of-type(4)': { animationDelay: '220ms' }, '@keyframes heroIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'none' } } } }}>
              <Box sx={{ mb: 2.75 }}><Badge tone="brand" pill icon={<ShieldCheck size={14} strokeWidth={2.2} />}>Built for education payments</Badge></Box>
              <Typography variant="h1" sx={{ color: color.neutral[950], fontSize: { xs: '2.7rem', sm: '3.5rem', md: '4.35rem', lg: '4.65rem' }, lineHeight: 0.98, letterSpacing: '-0.055em', maxWidth: 560, mb: 2.75 }}>
                Make every school payment{' '}<Box component="span" sx={{ backgroundImage: gradient.brand, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>simpler.</Box>
              </Typography>
              <Typography sx={{ color: color.neutral[600], maxWidth: 500, fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.72, mb: 3.75 }}>A modern payment management platform that helps schools collect fees, give parents a clearer way to pay, and keep every transaction organized.</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ mb: 3.25 }}>
                <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} strokeWidth={2.2} />}>Book a Demo</Button>
                <Button to="/features" size="lg" variant="outline">Explore the platform</Button>
              </Stack>
              <Stack direction="row" spacing={{ xs: 1.5, sm: 2.5 }} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                {HERO_POINTS.map((point) => <Stack key={point} direction="row" spacing={0.75} alignItems="center"><Box sx={{ width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: color.brand[50], color: color.brand[600] }}><Check size={11} strokeWidth={3} /></Box><Typography sx={{ color: color.neutral[600], fontSize: '0.78rem', fontWeight: 650 }}>{point}</Typography></Stack>)}
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ position: 'relative', minHeight: { xs: 330, sm: 430, md: 500 }, display: 'flex', alignItems: 'center', justifyContent: 'center', '@media (prefers-reduced-motion: no-preference)': { opacity: 0, animation: 'visualIn 750ms var(--ease) 180ms forwards', '@keyframes visualIn': { from: { opacity: 0, transform: 'translateY(18px) scale(.985)' }, to: { opacity: 1, transform: 'none' } } } }}>
              <Box aria-hidden sx={{ position: 'absolute', width: '88%', height: '78%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(99,102,241,0.12), transparent 68%)', filter: 'blur(24px)' }} />
              <Box sx={{ position: 'relative', width: '100%', maxWidth: 760, zIndex: 1, borderRadius: `${radius['2xl']}px`, overflow: 'hidden', border: `1px solid ${color.neutral[200]}`, bgcolor: '#fff', boxShadow: shadow['2xl'] }}>
                <Box sx={{ px: 2, py: 1.25, display: 'flex', alignItems: 'center', gap: 1, borderBottom: `1px solid ${color.neutral[200]}`, bgcolor: color.neutral[50] }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => <Box key={c} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: c }} />)}
                  <Typography sx={{ ml: 1, fontSize: 10, color: color.neutral[400], fontWeight: 600 }}>Education Payments · Dashboard</Typography>
                </Box>
                <Box component="img" src={dashboardHero} alt="Education Payments dashboard" sx={{ display: 'block', width: '100%', height: 'auto' }} />
              </Box>
              <Box sx={{ position: 'absolute', zIndex: 2, left: { xs: '2%', sm: '4%', md: '2%' }, bottom: { xs: -8, md: -22 }, width: { xs: 128, sm: 154, md: 178 }, borderRadius: '28px', overflow: 'hidden', border: '5px solid #fff', boxShadow: '0 24px 55px rgba(15,23,42,.18)', transform: 'rotate(-2deg)', '@media (prefers-reduced-motion: no-preference)': { animation: 'phoneFloat 6s ease-in-out 900ms infinite', '@keyframes phoneFloat': { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-8px) rotate(-2deg)' } } } }}>
                <Box component="img" src={paymentSummaryHero} alt="Education Payments mobile payment summary" sx={{ display: 'block', width: '100%', height: 'auto' }} />
              </Box>
              <Box sx={{ position: 'absolute', zIndex: 3, top: { xs: -6, md: 16 }, right: { xs: -4, md: -12 }, px: 1.75, py: 1.25, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.lg}px`, boxShadow: shadow.lg, minWidth: 190 }}>
                <Typography sx={{ fontSize: 10, color: color.neutral[400], fontWeight: 700, mb: .35 }}>REAL PRODUCT SCREEN</Typography>
                <Stack direction="row" alignItems="center" spacing={1}><Box sx={{ width: 28, height: 28, borderRadius: '9px', bgcolor: color.brand[50], color: color.brand[600], display: 'grid', placeItems: 'center' }}><Check size={14} strokeWidth={2.8} /></Box><Box><Typography sx={{ fontSize: 12.5, fontWeight: 800, color: color.neutral[900] }}>Live product UI</Typography><Typography sx={{ fontSize: 9.5, color: color.neutral[500] }}>Actual dashboard screenshot</Typography></Box></Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
