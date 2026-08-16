import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import BrowserFrame from '../product/BrowserFrame';
import DashboardScreenshot from '../product/DashboardScreenshot';
import FloatingCard from '../product/FloatingCard';
import PhoneScreenshot from '../product/PhoneScreenshot';
import { HERO_SIGNALS } from '../../content/home';
import { color, gradient } from '../../theme/tokens';

export default function HomeHero() {
  return (
    <Box component="section" id="hero" sx={{ position: 'relative', overflow: 'hidden', bgcolor: color.ink[900], color: '#fff', backgroundImage: gradient.darkSurface, pt: { xs: 15, md: 20 }, pb: { xs: 10, md: 18 } }}>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at 50% 0%, black 38%, transparent 76%)', pointerEvents: 'none' }} />
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 8, md: 5 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ '@media (prefers-reduced-motion: no-preference)': { '& > *': { opacity: 0, animation: 'heroIn 700ms var(--ease) forwards' }, '& > *:nth-of-type(1)': { animationDelay: '60ms' }, '& > *:nth-of-type(2)': { animationDelay: '150ms' }, '& > *:nth-of-type(3)': { animationDelay: '240ms' }, '& > *:nth-of-type(4)': { animationDelay: '330ms' }, '& > *:nth-of-type(5)': { animationDelay: '420ms' } }, '@keyframes heroIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'none' } } }}>
              <Box sx={{ mb: 3 }}><Badge tone="inverse" pill icon={<ShieldCheck strokeWidth={2.2} />}>Powered by SSLCOMMERZ</Badge></Box>
              <Typography variant="h1" sx={{ color: '#fff', mb: 3, fontSize: { xs: '2.5rem', sm: '3rem', lg: '3.375rem' } }}>Simplify every <Box component="span" sx={{ backgroundImage: gradient.displayOnDark, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>school payment.</Box></Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.66)', maxWidth: 420, mb: 4.5 }}>Automate fee collection, give parents a payment journey they will actually finish, and see your institution's finances in real time.</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}><Button to="/contact" size="lg" endIcon={<ArrowRight size={17} strokeWidth={2.25} />}>Book a Demo</Button><Button to="/features" size="lg" variant="inverse">Explore Features</Button></Stack>
              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>{['Fee management', 'Digital payments', 'Reminders', 'Reporting'].map((t) => <Badge key={t} tone="inverse" size="sm">{t}</Badge>)}</Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ position: 'relative', '@media (prefers-reduced-motion: no-preference)': { opacity: 0, animation: 'visualIn 900ms var(--ease) 260ms forwards' }, '@keyframes visualIn': { from: { opacity: 0, transform: 'translateY(28px) scale(0.98)' }, to: { opacity: 1, transform: 'none' } } }}>
              <Box aria-hidden sx={{ position: 'absolute', inset: '-12% -8%', background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.28) 0%, transparent 68%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
              <Box sx={{ position: 'relative', animation: 'frameFloat 8s ease-in-out infinite', '@keyframes frameFloat': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } } }}><BrowserFrame onDark url="epms.educationpayments.example"><DashboardScreenshot /></BrowserFrame></Box>
              <Box sx={{ position: 'absolute', left: { md: -14, lg: -22 }, bottom: -58, display: { xs: 'none', md: 'block' } }}><PhoneScreenshot width={190} /></Box>
              <Box sx={{ position: 'absolute', right: { md: -22, lg: -38 }, top: -24, display: { xs: 'none', md: 'block' }, width: 208 }}><FloatingCard {...HERO_SIGNALS[0]} floatDelay={400} /></Box>
              <Box sx={{ position: 'absolute', right: { md: 12, lg: -12 }, bottom: -34, display: { xs: 'none', lg: 'block' }, width: 216 }}><FloatingCard {...HERO_SIGNALS[1]} floatDelay={1600} /></Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 5 }}><PhoneScreenshot width={218} /></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
