import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import StatCard from '../ui/StatCard';
import { STATS } from '../../content/home';
import { color } from '../../theme/tokens';

export default function TrustStats() {
  const anyPending = STATS.some((s) => s.pending);

  return (
    <Section id="proof" tone="subtle" density="tight">
      <Grid container spacing={{ xs: 4, md: 3 }}>
        {STATS.map((s, i) => (
          <Grid size={{ xs: 6, md: 3 }} key={s.label}>
            <Reveal delay={i * 70}>
              <StatCard {...s} />
            </Reveal>
          </Grid>
        ))}
      </Grid>

      {anyPending && (
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${color.neutral[200]}`,
          }}
        >
          <Typography variant="caption" sx={{ color: color.warning[700], fontWeight: 600 }}>
            Internal note — not for launch: these figures are placeholders. Supply verified numbers
            in <Box component="code" sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125em' }}>src/content/home.ts</Box>{' '}
            and set <Box component="code" sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125em' }}>pending: false</Box>, or remove this section.
          </Typography>
        </Box>
      )}
    </Section>
  );
}
