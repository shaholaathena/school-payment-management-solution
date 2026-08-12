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
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4, mb: { xs: 5, md: 7 } }}>
        <SectionHeading eyebrow="Why institutions choose it" title="One payment system. Less operational noise." description="Replace manual follow-ups and scattered records with one clear payment experience for your institution and families." />
        <Stack direction="row" spacing={1} sx={{ alignSelf: { md: 'flex-end' }, flexShrink: 0, height: 'fit-content', px: 1.5, py: 1, borderRadius: radius.pill, bgcolor: color.neutral[50], border: `1px solid ${color.neutral[200]}` }}><Sparkles size={15} color={color.brand[600]} /><Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: color.neutral[700] }}>Designed for everyday collections</Typography></Stack>
      </Box>
      <Grid container spacing={2}>
        {BENEFITS.map((b, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: i === 0 || i === 3 ? 5 : 7 }} key={b.title}>
            <Reveal delay={i * 70} sx={{ height: '100%' }}>
              <Box sx={{ height: '100%', minHeight: { xs: 230, md: 270 }, p: { xs: 3, md: 4 }, position: 'relative', overflow: 'hidden', borderRadius: `${radius.xl}px`, bgcolor: i === 0 ? color.ink[900] : '#fff', color: i === 0 ? '#fff' : color.neutral[900], border: `1px solid ${i === 0 ? 'rgba(255,255,255,0.10)' : color.neutral[200]}`, boxShadow: i === 0 ? shadow.lg : shadow.sm, transition: 'transform 240ms var(--ease), box-shadow 240ms var(--ease)', '&:hover': { transform: 'translateY(-5px)', boxShadow: shadow.lg }, '&:after': { content: '""', position: 'absolute', width: 220, height: 220, right: -80, bottom: -100, borderRadius: '50%', background: i === 0 ? 'rgba(99,102,241,0.24)' : color.brand[50], pointerEvents: 'none' } }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: `${radius.md}px`, display: 'grid', placeItems: 'center', bgcolor: i === 0 ? 'rgba(255,255,255,0.10)' : color.brand[50], color: i === 0 ? '#A9B2FF' : color.brand[600] }}><b.icon size={21} strokeWidth={1.9} /></Box>
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: i === 0 ? 'rgba(255,255,255,0.08)' : color.neutral[50], color: i === 0 ? '#fff' : color.neutral[500] }}><ArrowUpRight size={15} /></Box>
                </Stack>
                <Typography variant="h4" sx={{ position: 'relative', zIndex: 1, mt: 5, mb: 1.5, color: 'inherit' }}>{b.title}</Typography>
                <Stack direction="row" spacing={1} sx={{ position: 'relative', zIndex: 1, alignItems: 'flex-start' }}><Check size={15} color={i === 0 ? '#A9B2FF' : color.success[600]} style={{ marginTop: 4, flexShrink: 0 }} /><Typography variant="body2" sx={{ color: i === 0 ? 'rgba(255,255,255,0.64)' : color.neutral[600], maxWidth: '48ch' }}>{b.description}</Typography></Stack>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
