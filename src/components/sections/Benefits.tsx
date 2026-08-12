import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../content/home';
import { color, radius, shadow } from '../../theme/tokens';

export default function Benefits() {
  return (
    <Section id="benefits" tone="light" density="loose">
      <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'minmax(0,1fr) auto' }, gap: 4, alignItems: 'end', mb: { xs: 5, md: 7 } }}>
        <SectionHeading eyebrow="Why institutions choose it" title="Less chasing. More visibility." description="Bring collections, payments and records into one experience designed around the everyday work of schools." />
        <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.5, py: 1, borderRadius: radius.pill, bgcolor: color.brand[50], color: color.brand[700], border: `1px solid ${color.brand[100]}` }}><Sparkles size={14} /><Typography sx={{ fontSize: '.72rem', fontWeight: 750 }}>Designed for daily operations</Typography></Stack>
      </Box>
      <Grid container spacing={1.5}>
        {BENEFITS.map((b, i) => {
          const featured = i === 0;
          return <Grid size={{ xs: 12, sm: 6, lg: i === 0 ? 6 : 3 }} key={b.title}><Reveal delay={i * 70} sx={{ height: '100%' }}><Box sx={{ height: '100%', minHeight: { xs: 235, md: featured ? 330 : 260 }, p: { xs: 3, md: 3.5 }, position: 'relative', overflow: 'hidden', borderRadius: `${radius.xl}px`, bgcolor: featured ? color.ink[900] : '#fff', color: featured ? '#fff' : color.neutral[900], border: `1px solid ${featured ? 'rgba(255,255,255,.08)' : color.neutral[200]}`, boxShadow: featured ? shadow.lg : '0 8px 28px rgba(15,23,42,.035)', transition: 'transform 240ms var(--ease), box-shadow 240ms var(--ease)', '&:hover': { transform: 'translateY(-5px)', boxShadow: shadow.lg }, '&:before': { content: '""', position: 'absolute', width: 250, height: 250, right: -110, bottom: -130, borderRadius: '50%', background: featured ? 'rgba(99,102,241,.22)' : color.brand[50] } }}><Stack direction="row" justifyContent="space-between" sx={{ position: 'relative', zIndex: 1 }}><Box sx={{ width: 46, height: 46, borderRadius: radius.md, display: 'grid', placeItems: 'center', bgcolor: featured ? 'rgba(255,255,255,.1)' : color.brand[50], color: featured ? '#A9B2FF' : color.brand[600] }}><b.icon size={20} /></Box><Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: featured ? 'rgba(255,255,255,.08)' : color.neutral[50], color: featured ? '#fff' : color.neutral[500] }}><ArrowUpRight size={14} /></Box></Stack><Typography variant="h4" sx={{ position: 'relative', zIndex: 1, mt: featured ? 8 : 6, mb: 1.25, color: 'inherit' }}>{b.title}</Typography><Stack direction="row" spacing={.8} sx={{ position: 'relative', zIndex: 1, alignItems: 'flex-start' }}><Check size={15} color={featured ? '#A9B2FF' : color.success[600]} style={{ marginTop: 4, flexShrink: 0 }} /><Typography sx={{ fontSize: '.86rem', lineHeight: 1.65, color: featured ? 'rgba(255,255,255,.62)' : color.neutral[600], maxWidth: 42 + 'ch' }}>{b.description}</Typography></Stack></Box></Reveal></Grid>;
        })}
      </Grid>
    </Section>
  );
}
