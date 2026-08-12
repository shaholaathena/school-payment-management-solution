import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import StatCard from '../ui/StatCard';
import { STATS } from '../../content/home';
import { color, radius } from '../../theme/tokens';

export default function TrustStats() {
  return (
    <Section id="proof" tone="light" density="tight">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 2.5, mb: 3.5 }}>
        <Box>
          <Typography sx={{ fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: color.brand[600] }}>Built for clarity</Typography>
          <Typography sx={{ mt: .6, fontSize: { xs: '1.2rem', md: '1.35rem' }, fontWeight: 750, letterSpacing: '-.025em', color: color.neutral[900] }}>A clearer view of every collection.</Typography>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.5, py: .9, borderRadius: radius.pill, bgcolor: color.neutral[50], border: `1px solid ${color.neutral[200]}` }}>
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: color.success[500] }} />
          <Typography sx={{ fontSize: '.72rem', fontWeight: 700, color: color.neutral[600] }}>One connected payment workflow</Typography>
        </Stack>
      </Box>
      <Grid container spacing={1.5}>
        {STATS.map((s, i) => <Grid size={{ xs: 6, md: 3 }} key={s.label}><Reveal delay={i * 60}><Box sx={{ p: { xs: 2, md: 2.5 }, border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.xl}px`, bgcolor: '#fff', height: '100%', transition: 'transform 220ms var(--ease), box-shadow 220ms var(--ease)', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 30px rgba(15,23,42,.07)' } }}><StatCard {...s} /></Box></Reveal></Grid>)}
      </Grid>
    </Section>
  );
}
