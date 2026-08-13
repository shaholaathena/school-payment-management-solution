import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Info } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { brand } from '../../content/site';
import { PAYMENT_METHODS } from '../../content/platform';
import { color, motion, radius } from '../../theme/tokens';

/**
 * Institutional trust without institutional logos.
 *
 * No customer logos, counts or testimonials exist in this repository, and a
 * payment product cannot borrow credibility it has not earned — so the proof
 * offered here is the infrastructure, which is verifiable, plus an explicit
 * statement about what is deliberately not claimed.
 */
export default function TrustBar() {
  const grouped = PAYMENT_METHODS.reduce<Record<string, string[]>>((acc, m) => {
    (acc[m.category] ??= []).push(m.name);
    return acc;
  }, {});

  return (
    <Section id="trust" tone="subtle" density="tight" sx={{ py: { xs: 8, md: 11 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' },
          gap: { xs: 5, md: 8 },
          alignItems: 'start',
        }}
      >
        <Reveal>
          <Box sx={{ mb: 2.5 }}>
            <Eyebrow rule>Trust &amp; infrastructure</Eyebrow>
          </Box>

          <Typography variant="h3" component="h2" sx={{ maxWidth: '17ch', mb: 2 }}>
            Built on payment rails families already use.
          </Typography>

          <Typography variant="body1" sx={{ color: color.neutral[600], maxWidth: '48ch' }}>
            Fee payments are processed through {brand.gateway}, so cardholder data is handled by the
            gateway rather than stored on the education platform.
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              mt: 3.5,
              p: 2,
              alignItems: 'flex-start',
              borderRadius: `${radius.lg}px`,
              bgcolor: color.neutral[0],
              border: `1px solid ${color.surface.line}`,
            }}
          >
            <Info size={16} color={color.neutral[400]} style={{ flexShrink: 0, marginTop: 2 }} />
            <Typography variant="caption" sx={{ color: color.neutral[600], lineHeight: 1.65 }}>
              We publish institution names and collection figures only once they are verified.
              Reference customers can be shared directly during a demo.
            </Typography>
          </Stack>
        </Reveal>

        <Reveal delay={80}>
          <Box
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: `${radius['2xl']}px`,
              bgcolor: color.neutral[0],
              border: `1px solid ${color.surface.line}`,
            }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{ mb: 3, color: color.neutral[400] }}
            >
              Ways families can pay
            </Typography>

            <Stack spacing={3}>
              {Object.entries(grouped).map(([category, names]) => (
                <Box key={category}>
                  <Typography
                    sx={{
                      mb: 1.5,
                      fontSize: '0.75rem',
                      fontWeight: 650,
                      color: color.neutral[500],
                    }}
                  >
                    {category}
                  </Typography>

                  <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {names.map((name) => (
                      <Box
                        key={name}
                        sx={{
                          px: 1.75,
                          py: 1,
                          borderRadius: `${radius.md}px`,
                          bgcolor: color.surface.muted,
                          border: `1px solid ${color.surface.line}`,
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: color.neutral[700],
                          transition: `all ${motion.base} ${motion.ease}`,
                          '&:hover': {
                            borderColor: color.brand[200],
                            color: color.brand[700],
                            bgcolor: color.brand[50],
                          },
                        }}
                      >
                        {name}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>

            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 3.5,
                pt: 2.5,
                borderTop: `1px solid ${color.surface.line}`,
                color: color.neutral[500],
              }}
            >
              The live method list follows your institution&rsquo;s {brand.gateway} merchant
              configuration.
            </Typography>
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
}
