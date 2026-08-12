import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { color, radius } from '../../theme/tokens';

export interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

/** Closing conversion band. Reused at the foot of every page. */
export default function CtaBand({
  title = 'Make school payments simpler.',
  description = 'Bring payments, collections and financial visibility into one platform.',
  primaryLabel = 'Book a Demo',
  secondaryLabel = 'Explore Features',
  secondaryTo = '/features',
}: CtaBandProps) {
  return (
    <Section tone="light" density="normal">
      <Reveal>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: `${radius['3xl']}px`,
            px: { xs: 3.5, sm: 6, md: 9 },
            py: { xs: 6, md: 9 },
            textAlign: 'center',
            color: '#fff',
            backgroundColor: color.ink[900],
            backgroundImage: `
              radial-gradient(at 12% 8%, rgba(79,70,229,0.55) 0px, transparent 55%),
              radial-gradient(at 88% 22%, rgba(6,182,212,0.32) 0px, transparent 52%),
              radial-gradient(at 50% 100%, rgba(99,102,241,0.30) 0px, transparent 58%)
            `,
          }}
        >
          {/* grid texture */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 72%)',
              pointerEvents: 'none',
            }}
          />

          <Box sx={{ position: 'relative' }}>
            <Typography variant="h2" sx={{ color: '#fff', maxWidth: 620, mx: 'auto' }}>
              {title}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ mt: 2.5, mb: 4.5, color: 'rgba(255,255,255,0.7)', maxWidth: 520, mx: 'auto' }}
            >
              {description}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} strokeWidth={2.25} />}>
                {primaryLabel}
              </Button>
              <Button to={secondaryTo} size="lg" variant="inverse">
                {secondaryLabel}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
}
