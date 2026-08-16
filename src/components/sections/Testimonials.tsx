import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Quote, Star } from 'lucide-react';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../content/testimonials';
import { color, vivid } from '../../theme/tokens';

/**
 * The reference's "Happy Customers" band, adapted to the azure system.
 *
 * Quotes are content-driven and every entry is currently `pending` (see
 * `content/testimonials.ts`): a pending card shows the bracketed placeholder
 * and an explicit "awaiting verified quote" marker rather than a rating, so an
 * unverified endorsement can never read as a real one. Once real quotes land,
 * flip `pending` to false and the stars + attribution render.
 */
export default function Testimonials() {
  return (
    <Section id="testimonials" tone="subtle" sx={{ bgcolor: vivid.tint.lavender }}>
      <SectionHeading
        align="center"
        eyebrow="What institutions say"
        title="Trusted by schools across Bangladesh"
        description="Real quotes from the institutions running fee collection on the platform."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
          gap: 3,
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 70} sx={{ display: 'flex' }}>
            <Panel lift fullHeight sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: { xs: 3.5, lg: 4 } }}>
              <Box aria-hidden sx={{ color: color.brand[300], mb: 2.5 }}>
                <Quote size={30} strokeWidth={2.25} />
              </Box>

              {t.pending ? (
                <Box
                  sx={{
                    alignSelf: 'flex-start',
                    mb: 2,
                    px: 1,
                    py: 0.25,
                    borderRadius: 1,
                    border: `1px dashed ${color.warning[600]}`,
                    color: color.warning[700],
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Awaiting verified quote
                </Box>
              ) : (
                <Stack direction="row" spacing={0.5} sx={{ mb: 2, color: color.warning[500] }} aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill={s < t.rating ? 'currentColor' : 'none'} strokeWidth={s < t.rating ? 0 : 1.75} />
                  ))}
                </Stack>
              )}

              <Typography
                sx={{
                  flex: 1,
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  color: t.pending ? color.neutral[400] : color.neutral[700],
                  fontStyle: t.pending ? 'italic' : 'normal',
                }}
              >
                {t.quote}
              </Typography>

              <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${color.surface.line}` }}>
                <Typography variant="h5" component="p" sx={{ color: color.neutral[900] }}>
                  {t.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.25, color: color.neutral[500] }}>
                  {t.role} · {t.institution}
                </Typography>
              </Box>
            </Panel>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
