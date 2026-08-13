import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { SECURITY_PILLARS, TECH_STACK } from '../../content/platform';
import { color, motion, radius } from '../../theme/tokens';

/**
 * Stands in for a testimonials section. There is no testimonial content in the
 * repository, and inventing one for a payment product is not an option — so the
 * page offers what can actually be checked instead.
 */
const VERIFIABLE = [
  'The working platform, walked through against your own fee structure',
  'Gateway records reviewed alongside institutional fee data',
  'Role-based access demonstrated for each type of user',
];

export default function SecurityBand() {
  return (
    <Section id="security" tone="dark" density="loose">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 0.85fr) minmax(0, 1.15fr)' },
          gap: { xs: 6, lg: 9 },
          alignItems: 'start',
        }}
      >
        <Reveal>
          <Box sx={{ position: { lg: 'sticky' }, top: { lg: 120 } }}>
            <Box sx={{ mb: 2.5 }}>
              <Eyebrow onDark rule>
                Security &amp; technology
              </Eyebrow>
            </Box>

            <Typography variant="h2" component="h2" sx={{ color: '#fff', maxWidth: '15ch', mb: 2.5 }}>
              Confidence that survives a finance review.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: 'rgba(255,255,255,0.62)', maxWidth: '44ch', mb: 4.5 }}
            >
              What the platform does about payment handling, access and traceability — described
              only as far as the product actually goes.
            </Typography>

            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: `${radius.xl}px`,
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <Typography
                variant="overline"
                component="p"
                sx={{ mb: 2, color: 'rgba(255,255,255,0.42)' }}
              >
                Technology
              </Typography>

              <Stack component="dl" spacing={0} sx={{ m: 0 }}>
                {TECH_STACK.map((row, i) => (
                  <Stack
                    key={row.layer}
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 0.25, sm: 2 }}
                    sx={{
                      py: 1.375,
                      justifyContent: 'space-between',
                      borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <Typography
                      component="dt"
                      sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.88)' }}
                    >
                      {row.layer}
                    </Typography>
                    <Typography
                      component="dd"
                      sx={{
                        m: 0,
                        fontSize: '0.8125rem',
                        color: 'rgba(255,255,255,0.52)',
                        textAlign: { sm: 'right' },
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Reveal>

        <Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 2,
            }}
          >
            {SECURITY_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: `${radius.xl}px`,
                    bgcolor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    transition: `transform ${motion.base} ${motion.ease}, background ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      bgcolor: 'rgba(255,255,255,0.07)',
                      borderColor: 'rgba(255,255,255,0.20)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      mb: 2.5,
                      borderRadius: `${radius.md}px`,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(99,102,241,0.20)',
                      color: '#A9B2FF',
                    }}
                  >
                    <p.icon size={19} strokeWidth={1.9} aria-hidden />
                  </Box>

                  <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.60)', fontSize: '0.875rem', lineHeight: 1.7 }}
                  >
                    {p.description}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>

          <Reveal delay={80}>
            <Box
              sx={{
                mt: 2,
                p: { xs: 3, md: 4 },
                borderRadius: `${radius.xl}px`,
                border: '1px solid rgba(255,255,255,0.10)',
                backgroundImage:
                  'linear-gradient(135deg, rgba(99,102,241,0.20) 0%, rgba(6,182,212,0.08) 100%)',
              }}
            >
              <Typography variant="h5" sx={{ color: '#fff', mb: 1.5 }}>
                Proof instead of testimonials
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.66)', maxWidth: '54ch', mb: 3, lineHeight: 1.7 }}
              >
                We would rather show the product than quote someone about it. A demo covers three
                things end to end:
              </Typography>

              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', m: 0, p: 0, mb: 3.5 }}>
                {VERIFIABLE.map((item, i) => (
                  <Stack
                    key={item}
                    component="li"
                    direction="row"
                    spacing={1.75}
                    sx={{ alignItems: 'flex-start' }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: color.accent[300],
                        mt: '3px',
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)' }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button to="/contact" variant="inverse" endIcon={<ArrowRight size={16} />}>
                Book a Demo
              </Button>
            </Box>
          </Reveal>
        </Box>
      </Box>
    </Section>
  );
}
