import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { USE_CASES } from '../../content/home';
import { color, font, motion } from '../../theme/tokens';

const COLUMNS = [
  { key: 'problem', label: 'The problem' },
  { key: 'solution', label: 'Platform response' },
  { key: 'outcome', label: 'Outcome' },
] as const;

/**
 * Rows rather than cards. Six use cases as six cards would be a wall of
 * equal boxes; as a ruled list they read like a table of contents, and the
 * problem → response → outcome columns stay aligned down the page.
 */
export default function UseCases() {
  return (
    <Section id="use-cases" tone="subtle" density="loose">
      <SectionHeading
        align="left"
        eyebrow="Use cases"
        title="Where it earns its place."
        description="The recurring situations institutions described, what the platform does about each, and what changes as a result."
        titleMaxWidth="15ch"
      />

      <Box sx={{ borderTop: `1px solid ${color.surface.lineStrong}` }}>
        {USE_CASES.map((uc, i) => (
          <Reveal key={uc.title} delay={(i % 3) * 60}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 0.78fr) minmax(0, 2.22fr)' },
                gap: { xs: 2.5, lg: 5 },
                py: { xs: 4, md: 5 },
                px: { xs: 0, lg: 2 },
                mx: { lg: -2 },
                borderBottom: `1px solid ${color.surface.line}`,
                transition: `background ${motion.base} ${motion.ease}`,
                '&:hover': { bgcolor: color.neutral[0] },
                '&:hover .use-case-index': { color: color.brand[600] },
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                <Typography
                  className="use-case-index"
                  component="span"
                  sx={{
                    fontFamily: font.mono,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: color.neutral[400],
                    flexShrink: 0,
                    transition: `color ${motion.base} ${motion.ease}`,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Typography>

                <Typography variant="h4" component="h3" sx={{ color: color.neutral[950] }}>
                  {uc.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                  gap: { xs: 2.5, md: 4 },
                }}
              >
                {COLUMNS.map((col, ci) => (
                  <Box
                    key={col.key}
                    sx={{
                      pl: { md: ci === 0 ? 0 : 3 },
                      borderLeft: {
                        xs: 'none',
                        md: ci === 0 ? 'none' : `1px solid ${color.surface.line}`,
                      },
                    }}
                  >
                    <Typography
                      variant="overline"
                      component="p"
                      sx={{
                        mb: 1,
                        fontSize: '0.6875rem',
                        color: col.key === 'outcome' ? color.brand[600] : color.neutral[400],
                      }}
                    >
                      {col.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.875rem',
                        lineHeight: 1.7,
                        color: col.key === 'outcome' ? color.neutral[800] : color.neutral[600],
                        fontWeight: col.key === 'outcome' ? 600 : 400,
                      }}
                    >
                      {uc[col.key]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
