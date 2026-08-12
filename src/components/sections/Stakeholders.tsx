import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import StakeholderCard from '../ui/StakeholderCard';
import { STAKEHOLDERS } from '../../content/home';
import { color, radius, shadow } from '../../theme/tokens';

function FlowStrip() {
  const nodes = ['School creates the fee', 'Parent receives and pays', 'Records stay in sync'];

  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, p: { xs: 2, md: 2.25 }, borderRadius: `${radius.xl}px`, bgcolor: color.ink[900], backgroundImage: 'radial-gradient(circle at 20% 0%, rgba(99,102,241,0.24), transparent 35%), radial-gradient(circle at 90% 100%, rgba(6,182,212,0.14), transparent 32%)', boxShadow: shadow.xl }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1.5, md: 0 }}>
        {nodes.map((node, i) => (
          <Stack key={node} direction="row" spacing={1.5} sx={{ flex: 1, alignItems: 'center', minWidth: 0, px: { xs: 1, md: 2 }, py: 1.5, borderRight: { md: i < nodes.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none' }, borderBottom: { xs: i < nodes.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', md: 'none' } }}>
            <Box sx={{ width: 32, height: 32, flexShrink: 0, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'rgba(129,140,248,0.14)', color: '#A5B4FC' }}>
              <CheckCircle2 size={17} strokeWidth={2} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700 }}>{node}</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem', mt: 0.25 }}>Step {i + 1}</Typography>
            </Box>
            {i < nodes.length - 1 && <ArrowRight size={15} color="rgba(255,255,255,0.28)" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
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
        title="A better experience for everyone around the payment"
        description="Schools get control, parents get clarity, and students stay connected to the information they need."
      />

      <Reveal><FlowStrip /></Reveal>

      <Grid container spacing={2.5}>
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
