import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ScreenArtifact from '../product/ScreenArtifact';
import DottedGrid from '../ui/DottedGrid';
import { JOURNEY } from '../../content/platform';
import { color, font, radius, vivid } from '../../theme/tokens';
import paymentSummary from '../../assets/images/payment-summary-hero.png';

/**
 * The Pintex numbered-steps pattern: a device screenshot on one side, a vertical
 * list of numbered steps on the other. Each step keeps its actor label, so the
 * hand-offs between school, family, gateway and finance stay legible.
 */
export default function ProcessJourney() {
  return (
    <Section id="how-it-works" tone="light" density="loose" sx={{ bgcolor: vivid.tint.sky }}>
      <SectionHeading
        align="center"
        eyebrow="Payment journey"
        title="From published fee to reconciled record"
        description="One workflow, five steps — the same path every fee follows across the institution."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '0.85fr 1.15fr' },
          columnGap: { lg: 10 },
          rowGap: { xs: 7, lg: 0 },
          alignItems: 'center',
        }}
      >
        <Reveal>
          <Box sx={{ position: 'relative', width: 'fit-content', mx: { xs: 'auto', lg: 0 } }}>
            {/* Vivid gradient halo behind the device */}
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: '-14% -18%',
                borderRadius: '46% 54% 52% 48% / 52% 46% 54% 48%',
                background:
                  'linear-gradient(140deg, rgba(0,153,242,0.22) 0%, rgba(57,183,203,0.16) 55%, rgba(157,155,231,0.20) 100%)',
                filter: 'blur(8px)',
              }}
            />
            <DottedGrid
              sx={{
                position: 'absolute',
                bottom: -18,
                left: -18,
                display: { xs: 'none', md: 'block' },
              }}
            />
            <Box sx={{ position: 'relative' }}>
              <ScreenArtifact
                src={paymentSummary}
                alt="Mobile payment summary screen showing a total fee and a breakdown by month and fee type"
                maxWidth={300}
              />
            </Box>
          </Box>
        </Reveal>

        <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
          {JOURNEY.map((step, i) => {
            const last = i === JOURNEY.length - 1;

            return (
              <Reveal key={step.step} delay={i * 80}>
                <Box component="li" sx={{ display: 'flex', gap: { xs: 2.5, md: 3 } }}>
                  {/* Marker + connecting rail */}
                  <Stack sx={{ alignItems: 'center', flexShrink: 0 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center',
                        backgroundImage: vivid.gradients[i % vivid.gradients.length],
                        color: '#fff',
                        fontFamily: font.display,
                        fontSize: '0.9375rem',
                        fontWeight: 800,
                        boxShadow: `0 12px 22px -8px ${vivid.glows[i % vivid.glows.length]}`,
                      }}
                    >
                      {String(step.step).padStart(2, '0')}
                    </Box>
                    {!last && (
                      <Box
                        aria-hidden
                        sx={{ width: 2, flex: 1, minHeight: 28, my: 1, bgcolor: color.brand[100] }}
                      />
                    )}
                  </Stack>

                  <Box sx={{ pb: last ? 0 : { xs: 4, md: 5 }, pt: 0.5 }}>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      sx={{ alignItems: 'center', flexWrap: 'wrap', mb: 1 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: font.display,
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          letterSpacing: '-0.014em',
                          color: color.neutral[900],
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{
                          px: 1.25,
                          py: 0.375,
                          borderRadius: `${radius.pill}px`,
                          bgcolor: color.brand[50],
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: color.brand[700],
                        }}
                      >
                        {step.actor}
                      </Typography>
                    </Stack>

                    <Typography variant="body1" sx={{ color: color.neutral[500], maxWidth: '52ch' }}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
}
