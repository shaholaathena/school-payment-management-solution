import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import StakeholderCard from '../ui/StakeholderCard';
import { STAKEHOLDERS } from '../../content/home';
import { color, radius } from '../../theme/tokens';

/** Visualises the three-party flow the platform sits in the middle of. */
function FlowStrip() {
  const nodes = ['School raises the fee', 'Guardian is notified and pays', 'Records update everywhere'];

  return (
    <Box
      sx={{
        mb: { xs: 5, md: 7 },
        p: { xs: 2.5, md: 3 },
        borderRadius: `${radius.xl}px`,
        bgcolor: color.neutral[0],
        border: `1px solid ${color.neutral[200]}`,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 0 }}
        sx={{ alignItems: { md: 'center' } }}
      >
        {nodes.map((n, i) => (
          <Stack
            key={n}
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', flex: 1, minWidth: 0 }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  flexShrink: 0,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: color.brand[50],
                  border: `1px solid ${color.brand[100]}`,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: color.brand[700],
                }}
              >
                {i + 1}
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: color.neutral[700] }}>
                {n}
              </Typography>
            </Stack>

            {i < nodes.length - 1 && (
              <ArrowRight
                size={16}
                strokeWidth={2}
                aria-hidden
                style={{ color: color.neutral[300], flexShrink: 0 }}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default function Stakeholders() {
  return (
    <Section id="stakeholders" tone="subtle">
      <SectionHeading
        eyebrow="One platform, three audiences"
        title="Connecting schools, parents and students"
        description="Each group gets the view that fits their role — working from the same underlying records."
      />

      <Reveal>
        <FlowStrip />
      </Reveal>

      <Grid container spacing={3}>
        {STAKEHOLDERS.map((s, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={s.role}>
            <Reveal delay={i * 90} sx={{ height: '100%' }}>
              <StakeholderCard {...s} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
