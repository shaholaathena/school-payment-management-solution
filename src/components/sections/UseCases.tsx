import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, Check } from 'lucide-react';
import ProcessJourney from './ProcessJourney';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { USE_CASES } from '../../content/home';
import { color, radius, shadow } from '../../theme/tokens';

export default function UseCases() {
  return (
    <>
      <ProcessJourney />
      <Section id="use-cases" tone="light" density="loose">
        <SectionHeading eyebrow="Use cases" title="Designed for the moments that create payment friction." description="Centralize the recurring collection workflows schools deal with every term." />
        <Grid container spacing={1.5} sx={{ mt: 1 }}>
          {USE_CASES.map((uc, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={uc.title}>
              <Reveal delay={(i % 2) * 70} sx={{ height: '100%' }}>
                <Box sx={{ height: '100%', p: { xs: 2.75, md: 3.5 }, borderRadius: `${radius.xl}px`, bgcolor: i === 0 ? color.brand[50] : '#fff', border: `1px solid ${i === 0 ? color.brand[100] : color.neutral[200]}`, transition: 'transform 220ms var(--ease), box-shadow 220ms var(--ease)', '&:hover': { transform: 'translateY(-4px)', boxShadow: shadow.md } }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box sx={{ width: 38, height: 38, borderRadius: radius.md, display: 'grid', placeItems: 'center', bgcolor: i === 0 ? '#fff' : color.neutral[50], color: color.brand[600] }}><Typography sx={{ fontSize: '.72rem', fontWeight: 850 }}>0{i + 1}</Typography></Box>
                    <ArrowUpRight size={17} color={color.neutral[400]} />
                  </Stack>
                  <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>{uc.title}</Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}><Typography sx={{ fontSize: '.66rem', fontWeight: 800, letterSpacing: '.09em', textTransform: 'uppercase', color: color.neutral[400], mb: .55 }}>The problem</Typography><Typography sx={{ fontSize: '.83rem', lineHeight: 1.65, color: color.neutral[600] }}>{uc.problem}</Typography></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><Typography sx={{ fontSize: '.66rem', fontWeight: 800, letterSpacing: '.09em', textTransform: 'uppercase', color: color.brand[600], mb: .55 }}>The outcome</Typography><Stack direction="row" spacing={.65} alignItems="flex-start"><Check size={14} color={color.success[600]} style={{ marginTop: 3, flexShrink: 0 }} /><Typography sx={{ fontSize: '.83rem', lineHeight: 1.65, color: color.neutral[700], fontWeight: 600 }}>{uc.outcome}</Typography></Stack></Grid>
                  </Grid>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
