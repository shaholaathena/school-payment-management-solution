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

export default function Stakeholders() {
  const nodes = ['School creates the fee', 'Parent receives and pays', 'Records stay in sync'];
  return (
    <Section id="stakeholders" tone="subtle" density="loose">
      <SectionHeading eyebrow="One platform, three audiences" title="Every side of the payment gets a better experience" description="A connected flow keeps the school in control while making payment clearer for families." />
      <Reveal>
        <Box sx={{ mt: { xs: 5, md: 7 }, mb: { xs: 5, md: 7 }, p: { xs: 2, md: 2.5 }, borderRadius: `${radius['2xl']}px`, bgcolor: color.ink[900], backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(99,102,241,0.30), transparent 34%), radial-gradient(circle at 100% 100%, rgba(6,182,212,0.16), transparent 32%)', boxShadow: shadow.xl }}>
          <Grid container spacing={1.5} alignItems="stretch">
            {nodes.map((node, i) => <Grid size={{ xs: 12, md: 4 }} key={node}><Stack direction="row" spacing={1.5} sx={{ height: '100%', alignItems: 'center', p: { xs: 2, md: 2.5 }, borderRadius: `${radius.lg}px`, bgcolor: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.08)' }}><Box sx={{ width: 36, height: 36, flexShrink: 0, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'rgba(129,140,248,0.16)', color: '#A9B2FF' }}><CheckCircle2 size={18} /></Box><Box sx={{ minWidth: 0, flex: 1 }}><Typography sx={{ color: '#fff', fontSize: '0.86rem', fontWeight: 700 }}>{node}</Typography><Typography sx={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.68rem', mt: 0.4 }}>Step {i + 1}</Typography></Box>{i < 2 && <ArrowRight size={15} color="rgba(255,255,255,0.3)" />}</Stack></Grid>)}
          </Grid>
        </Box>
      </Reveal>
      <Grid container spacing={2}>
        {STAKEHOLDERS.map((s, i) => <Grid size={{ xs: 12, md: 4 }} key={s.role}><Reveal delay={i * 80} sx={{ height: '100%' }}><Box sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)' }, transition: 'transform 220ms var(--ease)' }}><StakeholderCard {...s} /></Box></Reveal></Grid>)}
      </Grid>
    </Section>
  );
}
