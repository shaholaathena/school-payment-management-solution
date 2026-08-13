import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../content/home';
import { color, motion, radius, shadow } from '../../theme/tokens';

/**
 * Supporting detail for the featured card only. Each line is a capability
 * already described in `src/content/features.ts` — the bento gives the lead
 * benefit more room, not more claims.
 */
const FEATURED_DETAIL = [
  'Dues generated against published fee structures',
  'SMS and email reminders on due dates',
  'Push notifications through the mobile apps',
];

/** span-2 cards sit at either end of the two rows, so neither row reads as a grid of equals. */
const SPAN: Record<number, number> = { 0: 2, 1: 1, 2: 1, 3: 2 };

export default function Benefits() {
  return (
    <Section id="benefits" tone="light" density="loose">
      <SectionHeading
        align="left"
        eyebrow="Why institutions choose it"
        title="Less chasing. More visibility."
        description="The platform is judged on four things: how quickly money arrives, how clearly it can be seen, how it feels to families, and whether it holds up under scrutiny."
        titleMaxWidth="14ch"
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {BENEFITS.map((b, i) => {
          const featured = i === 0;

          return (
            <Reveal
              key={b.title}
              delay={i * 70}
              sx={{
                display: 'flex',
                gridColumn: { lg: `span ${SPAN[i]}` },
                ...(featured && { gridColumn: { sm: 'span 2', lg: 'span 2' } }),
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  p: { xs: 3, md: featured ? 4.5 : 3.5 },
                  minHeight: { md: featured ? 340 : 260 },
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: `${radius['2xl']}px`,
                  bgcolor: featured ? color.ink[900] : color.neutral[0],
                  color: featured ? '#fff' : color.neutral[950],
                  border: `1px solid ${featured ? 'rgba(255,255,255,0.08)' : color.surface.line}`,
                  boxShadow: featured ? shadow.lg : 'none',
                  transition: `transform ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: featured ? shadow.xl : shadow.lg,
                    borderColor: featured ? 'rgba(255,255,255,0.16)' : color.brand[200],
                  },
                }}
              >
                {featured && (
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'radial-gradient(at 88% 4%, rgba(79,70,229,0.36) 0px, transparent 50%), radial-gradient(at 6% 96%, rgba(6,182,212,0.14) 0px, transparent 45%)',
                    }}
                  />
                )}

                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Box
                    sx={{
                      width: featured ? 52 : 44,
                      height: featured ? 52 : 44,
                      mb: 2.5,
                      borderRadius: `${radius.md}px`,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: featured ? 'rgba(255,255,255,0.09)' : color.brand[50],
                      border: `1px solid ${featured ? 'rgba(255,255,255,0.14)' : color.brand[100]}`,
                      color: featured ? '#A9B2FF' : color.brand[600],
                    }}
                  >
                    <b.icon size={featured ? 23 : 20} strokeWidth={1.9} aria-hidden />
                  </Box>

                  <Typography
                    variant={featured ? 'h3' : 'h4'}
                    component="h3"
                    sx={{ mb: 1.5, color: 'inherit', maxWidth: featured ? '14ch' : 'none' }}
                  >
                    {b.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: featured ? 'rgba(255,255,255,0.64)' : color.neutral[600],
                      maxWidth: '46ch',
                      lineHeight: 1.7,
                    }}
                  >
                    {b.description}
                  </Typography>

                  {featured && (
                    <Stack
                      component="ul"
                      spacing={1.25}
                      sx={{
                        listStyle: 'none',
                        m: 0,
                        p: 0,
                        mt: 'auto',
                        pt: 4,
                      }}
                    >
                      {FEATURED_DETAIL.map((d) => (
                        <Stack
                          key={d}
                          component="li"
                          direction="row"
                          spacing={1.25}
                          sx={{ alignItems: 'center' }}
                        >
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              flexShrink: 0,
                              borderRadius: '50%',
                              display: 'grid',
                              placeItems: 'center',
                              bgcolor: 'rgba(103,232,249,0.14)',
                              color: color.accent[300],
                            }}
                          >
                            <Check size={11} strokeWidth={3} aria-hidden />
                          </Box>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                            {d}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  )}
                </Box>
              </Box>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}
