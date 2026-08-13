import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { color, gradient, radius, shadow } from '../../theme/tokens';

export interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** Right-hand list. Defaults to what a demo actually covers. */
  points?: string[];
}

const DEFAULT_POINTS = [
  'Your fee structures, by class, section and campus',
  'The payment methods your merchant setup supports',
  'The reporting your finance team needs at period close',
];

export default function CtaBand({
  title = 'Make school payments simpler.',
  description = 'A demo runs against your institution’s actual setup rather than a generic walkthrough.',
  primaryLabel = 'Book a Demo',
  secondaryLabel = 'Explore Features',
  secondaryTo = '/features',
  points = DEFAULT_POINTS,
}: CtaBandProps) {
  return (
    <Section tone="light" density="normal">
      <Reveal>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: `${radius['3xl']}px`,
            border: `1px solid ${color.surface.line}`,
            bgcolor: color.neutral[0],
            boxShadow: shadow.lg,
          }}
        >
          {/* Brand rule along the top edge instead of a full gradient fill */}
          <Box
            aria-hidden
            sx={{ position: 'absolute', insetInline: 0, top: 0, height: 3, background: gradient.brand }}
          />

          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(${color.surface.line} 1px, transparent 1px), linear-gradient(90deg, ${color.surface.line} 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
              opacity: 0.45,
              maskImage: 'radial-gradient(ellipse 70% 100% at 100% 0%, black 0%, transparent 70%)',
            }}
          />

          <Box
            sx={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(0, 0.9fr)' },
              gap: { xs: 5, md: 8 },
              alignItems: 'center',
              px: { xs: 3, sm: 5, md: 7 },
              py: { xs: 5, md: 7 },
            }}
          >
            <Box>
              <Box sx={{ mb: 2.5 }}>
                <Eyebrow rule>Get started</Eyebrow>
              </Box>

              <Typography variant="h2" component="h2" sx={{ maxWidth: '13ch', mb: 2 }}>
                {title}
              </Typography>

              <Typography variant="subtitle1" sx={{ color: color.neutral[600], maxWidth: '44ch' }}>
                {description}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                <Button to="/contact" size="lg" endIcon={<ArrowRight size={17} />}>
                  {primaryLabel}
                </Button>
                <Button to={secondaryTo} size="lg" variant="secondary">
                  {secondaryLabel}
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                p: { xs: 2.5, md: 3.5 },
                borderRadius: `${radius['2xl']}px`,
                bgcolor: color.surface.muted,
                border: `1px solid ${color.surface.line}`,
              }}
            >
              <Typography variant="overline" component="p" sx={{ mb: 2.5, color: color.neutral[400] }}>
                What we cover
              </Typography>

              <Stack component="ul" spacing={0} sx={{ listStyle: 'none', m: 0, p: 0 }}>
                {points.map((p, i) => (
                  <Box
                    key={p}
                    component="li"
                    sx={{
                      py: 1.75,
                      borderTop: i === 0 ? 'none' : `1px solid ${color.surface.line}`,
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: color.neutral[700],
                    }}
                  >
                    {p}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
}
