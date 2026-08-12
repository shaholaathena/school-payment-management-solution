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
import { color, radius } from '../../theme/tokens';

export default function Stakeholders() {
  const nodes = ['Create fees', 'Pay with ease', 'Stay in sync'];
  return <Section id="stakeholders" tone="subtle" density="loose">
    <SectionHeading eyebrow="One connected experience" title="Built around the people behind every payment." description="Schools get control. Parents get clarity. Records stay connected from collection to reconciliation." />
    <Reveal>
      <Box sx={{ mt: { xs: 5, md: 6 }, mb: { xs: 5, md: 6 }, p: { xs: 1.25, md: 1.75 }, borderRadius: `${radius['2xl']}px`, bgcolor: color.ink[900], backgroundImage: 'linear-gradient(110deg, #151936 0%, #20285a 52%, #16223c 100%)' }}>
        <Grid container spacing={1}>
          {nodes.map((node, i) => <Grid size={{ xs: 12, md: 4 }} key={node}><Stack direction="row" spacing={1.25} alignItems="center" sx={{ minHeight: { md: 90 }, p: 2, borderRadius: radius.lg, bgcolor: 'rgba(255,255,255,.055)', border: '1px solid rgba(255,255,255,.08)' }}><Box sx={{ width: 34, height: 34, flexShrink: 0, borderRadius: '50%', bgcolor: 'rgba(129,140,248,.15)', color: '#A9B2FF', display: 'grid', placeItems: 'center' }}><CheckCircle2 size={17} /></Box><Box sx={{ flex: 1 }}><Typography sx={{ color: '#fff', fontWeight: 750, fontSize: '.85rem' }}>{node}</Typography><Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: '.67rem', mt: .3 }}>Step {i + 1}</Typography></Box>{i < 2 && <ArrowRight size={15} color="rgba(255,255,255,.3)" />}</Stack></Grid>)}
        </Grid>
      </Box>
    </Reveal>
    <Grid container spacing={1.5}>{STAKEHOLDERS.map((s, i) => <Grid size={{ xs: 12, md: 4 }} key={s.role}><Reveal delay={i * 70} sx={{ height: '100%' }}><Box sx={{ height: '100%', transition: 'transform 220ms var(--ease)', '&:hover': { transform: 'translateY(-4px)' } }}><StakeholderCard {...s} /></Box></Reveal></Grid>)}</Grid>
  </Section>;
}
