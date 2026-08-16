import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { USE_CASES } from '../../content/home';
import { color, font, motion, vivid } from '../../theme/tokens';

/**
 * Pintex-style solution cards: separated white cards with the shared soft
 * shadow, a gradient number badge (the blob-icon language, numbered), and a
 * hover lift, under a centered heading. Kept on the azure system — the gradient
 * badges cycle the same azure→cyan/sky/lavender ramp the rest of the page uses.
 */
export default function UseCases() {
  return (
    <Section id="use-cases" tone="light">
      <SectionHeading
        align="center"
        eyebrow="Use cases"
        title="Where it earns its place"
        description="The situations institutions run into every term, and how the platform answers them."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: 3,
        }}
      >
        {USE_CASES.map((uc, i) => {
          const v = i % vivid.gradients.length;
          return (
            <Reveal key={uc.title} delay={(i % 3) * 80} sx={{ display: 'flex' }}>
              <Panel
                lift
                fullHeight
                sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: { xs: 3.5, lg: 4 } }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '18px',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundImage: vivid.gradients[v],
                    color: '#fff',
                    boxShadow: `0 14px 26px -10px ${vivid.glows[v]}`,
                    fontFamily: font.display,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Box>

                <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
                  {uc.title}
                </Typography>

                <Box component="dl" sx={{ m: 0, mt: 2.5, flex: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Box component="dt">
                      <Typography variant="overline" component="span" sx={{ fontSize: '0.62rem', color: color.neutral[500] }}>
                        Problem
                      </Typography>
                    </Box>
                    <Typography component="dd" variant="body2" sx={{ m: 0, mt: 0.75, color: color.neutral[500] }}>
                      {uc.problem}
                    </Typography>
                  </Box>

                  <Box>
                    <Box component="dt">
                      <Eyebrow size="sm">Platform response</Eyebrow>
                    </Box>
                    <Typography component="dd" variant="body2" sx={{ m: 0, mt: 0.75, color: color.neutral[900] }}>
                      {uc.solution}
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: 3,
                    pt: 2.5,
                    alignItems: 'flex-start',
                    borderTop: `1px solid ${color.surface.line}`,
                    color: color.brand[700],
                    transition: `color ${motion.base} ${motion.ease}`,
                  }}
                >
                  <ArrowUpRight size={15} strokeWidth={2.25} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden />
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.6 }}>
                    {uc.outcome}
                  </Typography>
                </Stack>
              </Panel>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}
