import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Building2, Check, CircleDollarSign, FileCheck2, ShieldCheck, Users } from 'lucide-react';
import Button from '../ui/Button';
import { color, gradient, radius, shadow } from '../../theme/tokens';

const HERO_POINTS = [
  { icon: ShieldCheck, label: 'Secure payments' },
  { icon: CircleDollarSign, label: 'Faster collections' },
  { icon: FileCheck2, label: 'Clear records' },
];

export default function HomeHero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#F8FAFF',
        color: color.neutral[950],
        pt: { xs: 12, md: 14 },
        pb: { xs: 7, md: 10 },
        borderBottom: `1px solid ${color.neutral[200]}`,
      }}
    >
      <Box aria-hidden sx={{ position: 'absolute', width: 700, height: 700, right: -220, top: -250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.15), rgba(56,189,248,.05) 42%, transparent 68%)', filter: 'blur(4px)' }} />
      <Box aria-hidden sx={{ position: 'absolute', width: 440, height: 440, left: -240, bottom: -250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,.10), transparent 68%)' }} />

      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 7, md: 6, lg: 9 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ maxWidth: 650, '@media (prefers-reduced-motion: no-preference)': { animation: 'heroCopy .7s var(--ease) both', '@keyframes heroCopy': { from: { opacity: 0, transform: 'translateY(18px)' }, to: { opacity: 1, transform: 'none' } } } }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ width: 'fit-content', px: 1.5, py: .8, mb: 3, border: `1px solid ${color.neutral[200]}`, borderRadius: 99, bgcolor: '#fff', boxShadow: shadow.sm }}>
                <ShieldCheck size={15} color={color.brand[600]} />
                <Typography sx={{ fontSize: 12, fontWeight: 750, color: color.neutral[700] }}>Trusted payment infrastructure for education</Typography>
              </Stack>

              <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5.15rem' }, lineHeight: .95, letterSpacing: '-.065em', maxWidth: 660, mb: 3 }}>
                Make school payments feel{' '}
                <Box component="span" sx={{ backgroundImage: gradient.brand, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>effortless.</Box>
              </Typography>

              <Typography sx={{ maxWidth: 590, color: color.neutral[600], fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.75, mb: 4 }}>
                One connected platform for schools, parents and students to collect fees, complete payments and keep records in sync.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ mb: 4.5 }}>
                <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} />}>Book a Demo</Button>
                <Button to="/features" size="lg" variant="outline">Explore the platform</Button>
              </Stack>

              <Grid container spacing={1.5}>
                {HERO_POINTS.map(({ icon: Icon, label }) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={label}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ width: 30, height: 30, borderRadius: '10px', display: 'grid', placeItems: 'center', bgcolor: color.brand[50], color: color.brand[600] }}><Icon size={15} /></Box>
                      <Typography sx={{ fontSize: 12, fontWeight: 700, color: color.neutral[700] }}>{label}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ position: 'relative', minHeight: { xs: 370, md: 520 }, display: 'grid', placeItems: 'center', '@media (prefers-reduced-motion: no-preference)': { animation: 'heroVisual .85s var(--ease) .08s both', '@keyframes heroVisual': { from: { opacity: 0, transform: 'translateY(22px) scale(.98)' }, to: { opacity: 1, transform: 'none' } } } }}>
              <Box aria-hidden sx={{ position: 'absolute', width: { xs: 300, md: 460 }, height: { xs: 300, md: 460 }, borderRadius: '50%', border: '1px dashed rgba(99,102,241,.28)' }} />
              <Box aria-hidden sx={{ position: 'absolute', width: { xs: 230, md: 350 }, height: { xs: 230, md: 350 }, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,1), rgba(238,242,255,.95) 60%, rgba(224,231,255,.8))', boxShadow: '0 40px 90px rgba(79,70,229,.15)' }} />

              <Box sx={{ position: 'relative', zIndex: 2, width: { xs: 145, md: 205 }, height: { xs: 145, md: 205 }, borderRadius: '42px', display: 'grid', placeItems: 'center', bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.xl, transform: 'rotate(-4deg)' }}>
                <Box sx={{ position: 'absolute', inset: 12, borderRadius: '34px', background: 'linear-gradient(145deg, rgba(99,102,241,.12), rgba(56,189,248,.08))' }} />
                <Building2 size={86} strokeWidth={1.45} color={color.brand[600]} />
              </Box>

              <Box sx={{ position: 'absolute', zIndex: 3, top: { xs: 10, md: 18 }, left: { xs: '50%', md: '50%' }, transform: 'translateX(-50%)', px: 1.5, py: 1, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, borderRadius: 99, boxShadow: shadow.md }}>
                <Typography sx={{ fontSize: 11, fontWeight: 800, color: color.neutral[800] }}>School Portal</Typography>
              </Box>

              <Stack direction="row" spacing={1} sx={{ position: 'absolute', zIndex: 4, top: { xs: 72, md: 85 }, right: { xs: 2, md: 0 } }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '16px', display: 'grid', placeItems: 'center', bgcolor: '#fff', color: color.brand[600], border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.lg }}><Users size={22} /></Box>
                <Box sx={{ mt: 1, px: 1.25, py: 1, bgcolor: '#fff', borderRadius: '14px', border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.md }}><Typography sx={{ fontSize: 10, fontWeight: 800 }}>Parents</Typography><Typography sx={{ fontSize: 9, color: color.neutral[500] }}>Pay with confidence</Typography></Box>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ position: 'absolute', zIndex: 4, bottom: { xs: 34, md: 50 }, left: { xs: 0, md: -2 } }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '16px', display: 'grid', placeItems: 'center', bgcolor: '#fff', color: color.success[600], border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.lg }}><Check size={22} strokeWidth={2.8} /></Box>
                <Box sx={{ mt: 1, px: 1.25, py: 1, bgcolor: '#fff', borderRadius: '14px', border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.md }}><Typography sx={{ fontSize: 10, fontWeight: 800 }}>Payment complete</Typography><Typography sx={{ fontSize: 9, color: color.neutral[500] }}>Record updated</Typography></Box>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ position: 'absolute', zIndex: 4, bottom: { xs: 5, md: 18 }, right: { xs: 20, md: 44 } }}>
                <Box sx={{ width: 44, height: 44, borderRadius: '14px', display: 'grid', placeItems: 'center', bgcolor: color.brand[600], color: '#fff', boxShadow: shadow.md }}><FileCheck2 size={20} /></Box>
                <Typography sx={{ alignSelf: 'center', fontSize: 10, fontWeight: 700, color: color.neutral[600] }}>Smart records</Typography>
              </Stack>

              <Stack direction="row" spacing={1.25} sx={{ position: 'absolute', top: { xs: 105, md: 130 }, left: { xs: 12, md: 32 }, zIndex: 4, px: 1.5, py: 1.15, bgcolor: color.neutral[950], color: '#fff', borderRadius: `${radius.lg}px`, boxShadow: shadow.lg }}>
                <Box sx={{ width: 30, height: 30, borderRadius: '9px', bgcolor: 'rgba(255,255,255,.1)', display: 'grid', placeItems: 'center' }}><CircleDollarSign size={15} color="#A5B4FC" /></Box>
                <Box><Typography sx={{ fontSize: 10, fontWeight: 800 }}>Faster collections</Typography><Typography sx={{ fontSize: 9, color: 'rgba(255,255,255,.5)' }}>Less manual follow-up</Typography></Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
