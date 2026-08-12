import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { USE_CASES } from '../../content/home';
import { color, radius, shadow } from '../../theme/tokens';

export default function UseCases() {
  return (
    <Section id="use-cases" tone="light">
      <SectionHeading
        eyebrow="Use cases"
        title="Where it earns its place"
        description="Six situations institutions run into, and what changes once fee collection is centralized."
      />

      <Grid container spacing={2.5}>
        {USE_CASES.map((uc, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={uc.title}>
            <Reveal delay={(i % 2) * 70} sx={{ height: '100%' }}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  borderRadius: `${radius.xl}px`,
                  bgcolor: color.neutral[50],
                  border: `1px solid ${color.neutral[200]}`,
                  transition: 'border-color 250ms var(--ease), box-shadow 250ms var(--ease)',
                  '&:hover': { borderColor: color.brand[200], boxShadow: shadow.md },
                }}
              >
                <Typography variant="h5" sx={{ mb: 2.25 }}>
                  {uc.title}
                </Typography>

                <Stack spacing={1.75}>
                  <Box>
                    <Typography
                      variant="overline"
                      component="p"
                      sx={{ fontSize: '0.6875rem', color: color.neutral[400], mb: 0.375 }}
                    >
                      The problem
                    </Typography>
                    <Typography variant="body2" sx={{ color: color.neutral[600] }}>
                      {uc.problem}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      component="p"
                      sx={{ fontSize: '0.6875rem', color: color.brand[600], mb: 0.375 }}
                    >
                      How the platform helps
                    </Typography>
                    <Typography variant="body2" sx={{ color: color.neutral[600] }}>
                      {uc.solution}
                    </Typography>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1.25}
                    sx={{
                      alignItems: 'center',
                      pt: 1.75,
                      borderTop: `1px solid ${color.neutral[200]}`,
                    }}
                  >
                    <ArrowRight
                      size={15}
                      strokeWidth={2.25}
                      aria-hidden
                      style={{ color: color.success[600], flexShrink: 0 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: color.neutral[800] }}>
                      {uc.outcome}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
