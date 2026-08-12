import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Check, Play, ShieldCheck, Sparkles } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { color, gradient, radius, shadow } from '../../theme/tokens';
import dashboardHero from '../../assets/images/dashboard-hero.png';
import paymentSummaryHero from '../../assets/images/payment-summary-hero.png';

const TRUST_POINTS = ['Fee collection', 'Parent payments', 'Real-time visibility'];

export default function HomeHero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#F8FAFF',
        color: color.neutral[900],
        pt: { xs: 10, md: 13 },
        pb: { xs: 9, md: 12 },
      }}
    >
      {/* Soft product glow */}
      <Box aria-hidden sx={{ position: 'absolute', width: 900, height: 900, right: -360, top: -280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(82,96,168,.18) 0%, rgba(109,190,235,.09) 32%, transparent 68%)', pointerEvents: 'none' }} />
      <Box aria-hidden sx={{ position: 'absolute', width: 520, height: 520, left: -300, bottom: -300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(82,96,168,.08), transparent 68%)', pointerEvents: 'none' }} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: { xs: 4, md: 5 } }}>
          <Badge tone="brand" pill icon={<ShieldCheck size={14} strokeWidth={2.2} />}>
            School payment management, simplified
          </Badge>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .9fr) minmax(0, 1.1fr)' },
            gap: { xs: 7, lg: 5 },
            alignItems: 'center',
          }}
        >
          {/* Copy */}
          <Box sx={{ maxWidth: 650, position: 'relative', zIndex: 4 }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '3.25rem', sm: '4.4rem', md: '5.1rem', lg: '5.35rem' },
                lineHeight: { xs: .98, md: .94 },
                letterSpacing: '-.065em',
                fontWeight: 800,
                color: color.neutral[950],
                maxWidth: 680,
                mb: 3,
              }}
            >
              School payments,
              <Box component="span" sx={{ display: 'block', backgroundImage: gradient.brand, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                without the friction.
              </Box>
            </Typography>

            <Typography sx={{ color: color.neutral[600], maxWidth: 540, fontSize: { xs: '1.02rem', md: '1.14rem' }, lineHeight: 1.75, mb: 3.5 }}>
              One connected platform for schools to collect fees, track every payment, and give parents a simpler way to stay on top of what they owe.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ mb: 3.5 }}>
              <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} strokeWidth={2.2} />}>
                Book a Demo
              </Button>
              <Button to="/features" size="lg" variant="outline" startIcon={<Play size={15} fill="currentColor" />}>
                See how it works
              </Button>
            </Stack>

            <Stack direction="row" spacing={{ xs: 1.5, md: 2.5 }} sx={{ flexWrap: 'wrap', rowGap: 1.25 }}>
              {TRUST_POINTS.map((point) => (
                <Stack key={point} direction="row" spacing={.7} alignItems="center">
                  <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#E9ECFF', color: '#5260A8', display: 'grid', placeItems: 'center' }}>
                    <Check size={11} strokeWidth={3} />
                  </Box>
                  <Typography sx={{ color: color.neutral[600], fontSize: '.78rem', fontWeight: 700 }}>{point}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Product composition */}
          <Box
            sx={{
              position: 'relative',
              minHeight: { xs: 360, sm: 500, md: 570 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: { lg: -7 },
            }}
          >
            {/* Ambient glass panel */}
            <Box aria-hidden sx={{ position: 'absolute', width: '92%', height: '82%', borderRadius: '48px', background: 'linear-gradient(145deg, rgba(255,255,255,.9), rgba(232,236,255,.72))', border: '1px solid rgba(82,96,168,.10)', transform: 'rotate(2deg)', boxShadow: '0 40px 100px rgba(35,49,104,.12)' }} />

            {/* Main real dashboard */}
            <Box
              sx={{
                position: 'absolute',
                width: { xs: '94%', sm: '92%', md: '88%' },
                right: { xs: '0%', md: '2%' },
                top: { xs: '7%', md: '5%' },
                zIndex: 2,
                overflow: 'hidden',
                borderRadius: { xs: '18px', md: '24px' },
                bgcolor: '#fff',
                border: '1px solid rgba(15,23,42,.10)',
                boxShadow: '0 34px 80px rgba(15,23,42,.20), 0 8px 24px rgba(15,23,42,.08)',
                transform: { md: 'perspective(1400px) rotateY(-5deg) rotateX(2deg)' },
                '@media (prefers-reduced-motion: no-preference)': {
                  animation: 'dashboardEnter 850ms cubic-bezier(.2,.8,.2,1) both',
                  '@keyframes dashboardEnter': { from: { opacity: 0, transform: 'perspective(1400px) rotateY(-8deg) rotateX(4deg) translateY(24px) scale(.97)' }, to: { opacity: 1, transform: 'perspective(1400px) rotateY(-5deg) rotateX(2deg) translateY(0) scale(1)' } },
                },
              }}
            >
              <Box sx={{ height: 38, px: 1.5, display: 'flex', alignItems: 'center', gap: .7, bgcolor: '#FBFCFE', borderBottom: '1px solid #E8EBF1' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FF6B6B' }} />
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FFC857' }} />
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#47C77A' }} />
                <Typography sx={{ ml: 1, fontSize: 9.5, color: color.neutral[400], fontWeight: 650 }}>School Payment Management</Typography>
              </Box>
              <Box component="img" src={dashboardHero} alt="School payment management dashboard" sx={{ display: 'block', width: '100%', height: 'auto' }} />
            </Box>

            {/* Floating mobile screen */}
            <Box
              sx={{
                position: 'absolute',
                zIndex: 4,
                left: { xs: '-1%', sm: '1%', md: '-2%' },
                bottom: { xs: '-2%', md: '-5%' },
                width: { xs: 125, sm: 155, md: 180 },
                p: .65,
                borderRadius: { xs: '22px', md: '28px' },
                bgcolor: '#fff',
                border: '1px solid rgba(15,23,42,.10)',
                boxShadow: '0 28px 60px rgba(15,23,42,.22)',
                transform: 'rotate(-7deg)',
                '@media (prefers-reduced-motion: no-preference)': {
                  animation: 'phoneEnter 900ms cubic-bezier(.2,.8,.2,1) 180ms both, phoneFloat 6s ease-in-out 1.2s infinite',
                  '@keyframes phoneEnter': { from: { opacity: 0, transform: 'rotate(-12deg) translateY(28px)' }, to: { opacity: 1, transform: 'rotate(-7deg) translateY(0)' } },
                  '@keyframes phoneFloat': { '0%,100%': { transform: 'rotate(-7deg) translateY(0)' }, '50%': { transform: 'rotate(-7deg) translateY(-9px)' } },
                },
              }}
            >
              <Box component="img" src={paymentSummaryHero} alt="Mobile payment summary" sx={{ display: 'block', width: '100%', borderRadius: { xs: '18px', md: '23px' } }} />
            </Box>

            {/* Product proof card */}
            <Box
              sx={{
                position: 'absolute',
                zIndex: 5,
                right: { xs: '-2%', sm: '0%', md: '-4%' },
                bottom: { xs: '8%', md: '7%' },
                minWidth: { xs: 170, sm: 205 },
                px: 1.75,
                py: 1.5,
                borderRadius: `${radius.lg}px`,
                bgcolor: 'rgba(255,255,255,.94)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,.9)',
                boxShadow: '0 18px 45px rgba(15,23,42,.15)',
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Box sx={{ width: 34, height: 34, borderRadius: '11px', bgcolor: '#EAF8F1', color: '#17945B', display: 'grid', placeItems: 'center' }}>
                  <Sparkles size={15} strokeWidth={2.3} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 9, color: color.neutral[400], fontWeight: 800, letterSpacing: '.08em' }}>ONE WORKSPACE</Typography>
                  <Typography sx={{ fontSize: 12, color: color.neutral[900], fontWeight: 800 }}>Payments, in context.</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
