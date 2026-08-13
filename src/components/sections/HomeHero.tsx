import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import EcosystemVisual from '../product/EcosystemVisual';
import { color, gradient, radius } from '../../theme/tokens';

/** Staggered entrance, matching the reveal timing used down the rest of the page. */
const stagger = (i: number) => ({
  '@media (prefers-reduced-motion: no-preference)': {
    opacity: 0,
    animation: `heroIn 700ms var(--ease) ${i * 60}ms forwards`,
  },
});

export default function HomeHero() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 15, lg: 20 },
        pb: { xs: 8, lg: 12 },
        '@keyframes heroIn': {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'none' },
        },
      }}
    >
      <Box
        aria-hidden
        className="grid-faint"
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
          maskImage: 'radial-gradient(80% 60% at 50% 0%, black, transparent)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          insetInline: 0,
          top: 0,
          height: 520,
          backgroundImage: gradient.heroWash,
          pointerEvents: 'none',
        }}
      />

      <Container sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
            gap: { xs: 7, lg: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Box sx={stagger(0)}>
              <Stack
                direction="row"
                spacing={1}
                component="span"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 1.75,
                  py: 0.75,
                  borderRadius: `${radius.pill}px`,
                  border: `1px solid ${color.surface.line}`,
                  bgcolor: color.surface.card,
                }}
              >
                <Box
                  aria-hidden
                  sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: color.brand[600] }}
                />
                <Typography
                  variant="overline"
                  component="span"
                  sx={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: color.neutral[500] }}
                >
                  Built for modern education payments
                </Typography>
              </Stack>
            </Box>

            <Box sx={stagger(1)}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mt: 3.5,
                  maxWidth: '15ch',
                  // Explicit steps rather than a clamp — the approved design
                  // holds 2.6rem / 3.75rem / 4.1rem across the breakpoints.
                  fontSize: { xs: '2.6rem', sm: '3.75rem', lg: '4.1rem' },
                  color: color.neutral[900],
                }}
              >
                School payments,
                <Box component="span" sx={{ display: 'block', color: color.brand[600] }}>
                  without the friction.
                </Box>
              </Typography>
            </Box>

            <Box sx={stagger(2)}>
              <Typography
                sx={{
                  mt: 3,
                  maxWidth: '52ch',
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  lineHeight: 1.65,
                  color: color.neutral[500],
                }}
              >
                A connected platform for schools, parents and students to collect, pay and track
                education fees with less friction.
              </Typography>
            </Box>

            <Box sx={stagger(3)}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4.5 }}>
                <Button to="/contact" size="lg" endIcon={<ArrowRight size={16} />}>
                  Book a Demo
                </Button>
                <Button to="/how-it-works" size="lg" variant="secondary">
                  See How It Works
                </Button>
              </Stack>
            </Box>

            {/*
              The inline "faster collection · secure payments · real-time
              records" list used to sit here. It said the same four things as the
              value rail directly below, which now states them with more weight —
              so the hero ends on its actions instead of repeating itself.
            */}
          </Box>

          <Box sx={stagger(2)}>
            <EcosystemVisual />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
