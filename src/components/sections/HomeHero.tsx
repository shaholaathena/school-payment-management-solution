import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { color, gradient, radius, shadow } from '../../theme/tokens';
import dashboardHero from '../../assets/images/dashboard-hero.png';
import paymentSummaryHero from '../../assets/images/payment-summary-hero.png';

export default function HomeHero() {
  return (
    <Box component="section" id="hero" sx={{ position: 'relative', overflow: 'hidden', bgcolor: '#F8FAFC', color: color.neutral[950], pt: { xs: 11, md: 14 }, pb: { xs: 8, md: 11 } }}>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 75% 20%, rgba(99,102,241,.13), transparent 30%), radial-gradient(circle at 15% 85%, rgba(14,165,233,.08), transparent 25%)', pointerEvents: 'none' }} />
      <Container sx={{ position: 'relative' }}>
        <Box sx={{ maxWidth: 920, mx: 'auto', textAlign: 'center' }}>
          <Stack alignItems="center" spacing={2.5} sx={{ '@media (prefers-reduced-motion: no-preference)': { animation: 'heroReveal .7s var(--ease) both', '@keyframes heroReveal': { from: { opacity: 0, transform: 'translateY(18px)' }, to: { opacity: 1, transform: 'none' } } } }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: .75, px: 1.5, py: .75, borderRadius: 99, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.sm }}>
              <ShieldCheck size={15} color={color.brand[600]} />
              <Typography sx={{ fontSize: 12, fontWeight: 750, color: color.neutral[700] }}>A simpler way to manage school payments</Typography>
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5.4rem' }, lineHeight: .94, letterSpacing: '-.065em', maxWidth: 900 }}>
              Payments that work for <Box component="span" sx={{ backgroundImage: gradient.brand, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>everybody.</Box>
            </Typography>
            <Typography sx={{ maxWidth: 650, color: color.neutral[600], fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}>
              One connected platform for schools, parents and students to collect, pay and track education fees with less friction.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ pt: 1 }}>
              <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} />}>Book a Demo</Button>
              <Button to="/features" size="lg" variant="outline">Explore the platform</Button>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ position: 'relative', maxWidth: 1120, mx: 'auto', mt: { xs: 7, md: 10 }, minHeight: { xs: 310, sm: 470, md: 600 } }}>
          <Box aria-hidden sx={{ position: 'absolute', inset: '8% 8% 0', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(99,102,241,.16), transparent 68%)', filter: 'blur(35px)' }} />

          <Box sx={{ position: 'absolute', zIndex: 2, width: { xs: '92%', md: '78%' }, left: { xs: '4%', md: '11%' }, top: 0, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius['2xl']}px`, overflow: 'hidden', boxShadow: shadow['2xl'], transform: { md: 'rotate(-1.2deg)' } }}>
            <Box sx={{ height: 38, display: 'flex', alignItems: 'center', gap: .75, px: 2, bgcolor: color.neutral[50], borderBottom: `1px solid ${color.neutral[200]}` }}>
              {[1,2,3].map((n) => <Box key={n} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: n === 1 ? '#F87171' : n === 2 ? '#FBBF24' : '#34D399' }} />)}
              <Typography sx={{ ml: 1, fontSize: 10, color: color.neutral[400] }}>School payment dashboard</Typography>
            </Box>
            <Box component="img" src={dashboardHero} alt="School payment management dashboard" sx={{ display: 'block', width: '100%' }} />
          </Box>

          <Box sx={{ position: 'absolute', zIndex: 4, width: { xs: 132, sm: 165, md: 205 }, right: { xs: '0%', md: '4%' }, bottom: { xs: 5, md: 8 }, bgcolor: '#fff', border: '5px solid #fff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 30px 70px rgba(15,23,42,.22)', transform: 'rotate(3deg)' }}>
            <Box component="img" src={paymentSummaryHero} alt="Mobile payment summary" sx={{ display: 'block', width: '100%' }} />
          </Box>

          <Box sx={{ position: 'absolute', zIndex: 5, left: { xs: 0, md: '2%' }, bottom: { xs: 20, md: 55 }, px: 1.75, py: 1.5, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.lg}px`, boxShadow: shadow.lg, display: { xs: 'none', sm: 'block' } }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ width: 34, height: 34, borderRadius: '10px', bgcolor: color.success[50], color: color.success[600], display: 'grid', placeItems: 'center' }}><Check size={17} strokeWidth={3} /></Box>
              <Box><Typography sx={{ fontSize: 12, fontWeight: 800 }}>Payment received</Typography><Typography sx={{ fontSize: 10, color: color.neutral[500] }}>Tuition fee · Updated instantly</Typography></Box>
            </Stack>
          </Box>

          <Box sx={{ position: 'absolute', zIndex: 5, right: { xs: '4%', md: '17%' }, top: { xs: 15, md: 35 }, px: 1.5, py: 1, bgcolor: color.neutral[950], color: '#fff', borderRadius: 99, boxShadow: shadow.lg, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: .75 }}>
            <Sparkles size={14} color="#A5B4FC" /><Typography sx={{ fontSize: 10.5, fontWeight: 700 }}>One connected payment experience</Typography>
          </Box>
        </Box>

        <Stack direction="row" justifyContent="center" spacing={{ xs: 2, sm: 4 }} sx={{ mt: { xs: 5, md: 6 }, flexWrap: 'wrap', rowGap: 1.5 }}>
          {['Fee collection', 'Digital payments', 'Real-time records'].map((item) => <Stack key={item} direction="row" spacing={.65} alignItems="center"><Check size={14} color={color.brand[600]} strokeWidth={2.8} /><Typography sx={{ fontSize: 12, color: color.neutral[600], fontWeight: 650 }}>{item}</Typography></Stack>)}
        </Stack>
      </Container>
    </Box>
  );
}
