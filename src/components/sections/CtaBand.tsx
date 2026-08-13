import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import { color, radius, shadow } from '../../theme/tokens';
import paymentSummary from '../../assets/images/payment-summary-hero.png';

export interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

/**
 * Pintex `banner-1`: a rounded gradient band with the pitch on the left and a
 * device peeking in from the right. The gradient runs dark→brand so the white
 * copy sits on the deep end (AA-safe) while the bright end frames the screen.
 * Copy props stay overridable — inner pages reuse this band with their own line.
 */
export default function CtaBand({
  title = 'Make school payments simpler.',
  description = 'A demo runs against your institution’s actual setup — your fee structures, your payment methods, your reporting.',
  primaryLabel = 'Book a Demo',
  secondaryLabel = 'Explore Features',
  secondaryTo = '/features',
}: CtaBandProps) {
  return (
    <Box component="section" id="demo" sx={{ pb: { xs: 10, lg: 14 }, bgcolor: color.surface.canvas }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: `${radius['3xl']}px`,
              backgroundImage: `linear-gradient(115deg, ${color.brand[900]} 0%, ${color.brand[800]} 44%, ${color.brand[600]} 100%)`,
              boxShadow: shadow.lift,
            }}
          >
            <Box
              aria-hidden
              className="grid-faint grid-faint--on-dark"
              sx={{ position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none' }}
            />

            <Box
              sx={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' },
                gap: { xs: 5, lg: 6 },
                alignItems: 'center',
                px: { xs: 3.5, sm: 5, lg: 8 },
                pt: { xs: 6, lg: 9 },
                pb: { xs: 6, lg: 0 },
              }}
            >
              <Box sx={{ py: { lg: 9 } }}>
                <Eyebrow onDark>Get started</Eyebrow>

                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ mt: 2, maxWidth: '16ch', color: color.ink.foreground }}
                >
                  {title}
                </Typography>

                <Typography
                  sx={{ mt: 2.5, maxWidth: '50ch', fontSize: '1rem', lineHeight: 1.65, color: 'rgba(243,245,249,0.82)' }}
                >
                  {description}
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                  <Button
                    to="/contact"
                    size="lg"
                    endIcon={<ArrowRight size={16} />}
                    sx={{
                      bgcolor: color.surface.canvas,
                      color: color.brand[700],
                      '&:hover': { bgcolor: color.brand[50] },
                    }}
                  >
                    {primaryLabel}
                  </Button>
                  <Button to={secondaryTo} size="lg" variant="inverse">
                    {secondaryLabel}
                  </Button>
                </Stack>

                <Stack direction="row" spacing={1} sx={{ mt: 3, alignItems: 'center' }}>
                  <Check size={15} strokeWidth={2.5} color={color.accent.sky} aria-hidden />
                  <Typography sx={{ fontSize: '0.8125rem', color: 'rgba(243,245,249,0.72)' }}>
                    Walked through against your own fee structure
                  </Typography>
                </Stack>
              </Box>

              {/* Device peeking in from the right — hidden below lg */}
              <Box
                sx={{
                  display: { xs: 'none', lg: 'block' },
                  position: 'relative',
                  alignSelf: 'flex-end',
                }}
              >
                <Box
                  component="img"
                  src={paymentSummary}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  sx={{
                    display: 'block',
                    width: 260,
                    mx: 'auto',
                    mt: 6,
                    borderRadius: `${radius.shot}px ${radius.shot}px 0 0`,
                    boxShadow: shadow.onDark,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
