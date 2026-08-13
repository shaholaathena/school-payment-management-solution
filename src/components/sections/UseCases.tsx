import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { USE_CASES } from '../../content/home';
import { color, font, motion, radius } from '../../theme/tokens';

/**
 * A two-column grid whose gridlines are the container's own background showing
 * through a 1px gap — one hairline between cells, none doubled, and no borders
 * to keep in sync when the grid wraps.
 */
export default function UseCases() {
  return (
    <Section id="use-cases" tone="light">
      <SectionHeading
        eyebrow="Use cases"
        title="Where it earns its place."
        description="The situations institutions run into every term, and how the platform answers them."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
          gap: '1px',
          overflow: 'hidden',
          borderRadius: `${radius['2xl']}px`,
          border: `1px solid ${color.surface.line}`,
          bgcolor: color.surface.line,
        }}
      >
        {USE_CASES.map((uc, i) => (
          <Reveal key={uc.title} delay={(i % 2) * 80} sx={{ display: 'flex', bgcolor: color.surface.card }}>
            <Box
              sx={{
                flex: 1,
                p: { xs: 3.5, lg: 4.5 },
                bgcolor: color.surface.card,
                transition: `background-color ${motion.base} ${motion.ease}`,
                '&:hover': { bgcolor: color.surface.muted },
              }}
            >
              <Typography
                sx={{ fontFamily: font.mono, fontSize: '0.75rem', color: color.neutral[500] }}
              >
                {String(i + 1).padStart(2, '0')}
              </Typography>

              <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
                {uc.title}
              </Typography>

              <Box component="dl" sx={{ m: 0, mt: 2.5 }}>
                <Box sx={{ mb: 2 }}>
                  <Box component="dt">
                    <Typography
                      variant="overline"
                      component="span"
                      sx={{ fontSize: '0.62rem', color: color.neutral[500] }}
                    >
                      Problem
                    </Typography>
                  </Box>
                  <Typography
                    component="dd"
                    variant="body2"
                    sx={{ m: 0, mt: 0.75, color: color.neutral[500] }}
                  >
                    {uc.problem}
                  </Typography>
                </Box>

                <Box>
                  <Box component="dt">
                    <Eyebrow size="sm">Platform response</Eyebrow>
                  </Box>
                  <Typography
                    component="dd"
                    variant="body2"
                    sx={{ m: 0, mt: 0.75, color: color.neutral[900] }}
                  >
                    {uc.solution}
                  </Typography>
                </Box>
              </Box>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mt: 2.5,
                  pt: 2,
                  alignItems: 'flex-start',
                  borderTop: `1px solid ${color.surface.line}`,
                  color: color.brand[700],
                }}
              >
                <ArrowUpRight size={15} strokeWidth={2.25} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden />
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.6 }}>
                  {uc.outcome}
                </Typography>
              </Stack>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
