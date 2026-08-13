import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, FileCheck2, ShieldCheck, Timer } from 'lucide-react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import EcosystemVisual from '../product/EcosystemVisual';
import { brand } from '../../content/site';
import { color, gradient, radius, shadow } from '../../theme/tokens';

const VALUE_POINTS = [
  { icon: Timer, label: 'Faster collection' },
  { icon: ShieldCheck, label: 'Secure digital payments' },
  { icon: FileCheck2, label: 'Real-time records' },
];

export default function HomeHero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: gradient.heroWash,
        color: color.neutral[950],
        pt: { xs: 14, md: 18 },
        pb: { xs: 9, md: 14 },
      }}
    >
      {/* Faint editorial grid — structure, not decoration */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${color.surface.line} 1px, transparent 1px), linear-gradient(90deg, ${color.surface.line} 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
          opacity: 0.5,
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 0%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <Container sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.05fr) minmax(0, 0.95fr)' },
            gap: { xs: 7, md: 8, lg: 10 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              '@media (prefers-reduced-motion: no-preference)': {
                '& > *': { opacity: 0, animation: 'heroIn 700ms var(--ease) forwards' },
                '& > *:nth-of-type(1)': { animationDelay: '40ms' },
                '& > *:nth-of-type(2)': { animationDelay: '110ms' },
                '& > *:nth-of-type(3)': { animationDelay: '180ms' },
                '& > *:nth-of-type(4)': { animationDelay: '250ms' },
                '& > *:nth-of-type(5)': { animationDelay: '320ms' },
              },
              '@keyframes heroIn': {
                from: { opacity: 0, transform: 'translateY(16px)' },
                to: { opacity: 1, transform: 'none' },
              },
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Eyebrow rule>Built for modern education payments</Eyebrow>
            </Box>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4.25rem' },
                lineHeight: 1.02,
                letterSpacing: '-0.045em',
                maxWidth: '13ch',
                color: color.neutral[950],
              }}
            >
              School payments, without the friction.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: '52ch',
                fontSize: { xs: '1.0625rem', md: '1.1875rem' },
                lineHeight: 1.7,
                color: color.neutral[600],
              }}
            >
              A connected platform for schools, parents and students to collect, pay and track
              education fees with less friction.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4.5 }}>
              <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} />}>
                Book a Demo
              </Button>
              <Button to="/how-it-works" size="lg" variant="secondary">
                See How It Works
              </Button>
            </Stack>

            <Box sx={{ mt: 5, pt: 4, borderTop: `1px solid ${color.surface.line}` }}>
              <Stack
                direction="row"
                sx={{ flexWrap: 'wrap', gap: { xs: 2, sm: 3.5 }, alignItems: 'center' }}
              >
                {VALUE_POINTS.map(({ icon: Icon, label }) => (
                  <Stack
                    key={label}
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: 'center', minWidth: 0 }}
                  >
                    <Box
                      sx={{
                        width: 26,
                        height: 26,
                        flexShrink: 0,
                        borderRadius: `${radius.sm}px`,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: color.brand[50],
                        color: color.brand[600],
                      }}
                    >
                      <Icon size={14} strokeWidth={2} aria-hidden />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        fontWeight: 650,
                        color: color.neutral[700],
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'heroVisualIn 900ms var(--ease) 120ms both',
              },
              '@keyframes heroVisualIn': {
                from: { opacity: 0, transform: 'translateY(20px) scale(0.985)' },
                to: { opacity: 1, transform: 'none' },
              },
            }}
          >
            <EcosystemVisual />

            <Stack
              direction="row"
              spacing={1}
              sx={{
                width: 'fit-content',
                mx: 'auto',
                mt: { xs: 3, md: 4 },
                px: 1.75,
                py: 1,
                alignItems: 'center',
                borderRadius: `${radius.pill}px`,
                bgcolor: color.neutral[0],
                border: `1px solid ${color.surface.line}`,
                boxShadow: shadow.xs,
              }}
            >
              <ShieldCheck size={14} color={color.brand[600]} aria-hidden />
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 650, color: color.neutral[600] }}>
                Payments settle through {brand.gateway}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
