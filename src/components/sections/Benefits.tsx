import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../content/home';
import { color, radius, shadow } from '../../theme/tokens';

export default function Benefits() {
  return (
    <Section id="benefits" tone="light">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 3, mb: { xs: 5, md: 7 } }}>
        <SectionHeading
          eyebrow="Why institutions choose it"
          title="Everything needed for a smoother collection cycle"
          description="Replace manual follow-ups and scattered records with one clear payment experience for your institution and families."
        />
        <Box sx={{ alignSelf: { md: 'flex-end' }, flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.5, py: 1, border: `1px solid ${color.neutral[200]}`, borderRadius: `${radius.pill}px`, bgcolor: '#fff', boxShadow: shadow.xs }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color.success[500] }} />
            <Typography sx={{ fontSize: '0.76rem', fontWeight: 700, color: color.neutral[700] }}>One connected payment flow</Typography>
          </Stack>
        </Box>
      </Box>

      <Grid container spacing={2.5}>
        {BENEFITS.map((b, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={b.title}>
            <Reveal delay={i * 80} sx={{ height: '100%' }}>
              <Box sx={{ height: '100%', position: 'relative', '&:hover .benefit-arrow': { opacity: 1, transform: 'translate(2px,-2px)' } }}>
                <FeatureCard icon={b.icon} title={b.title} description={b.description} />
                <Box className="benefit-arrow" sx={{ position: 'absolute', top: 18, right: 18, width: 28, height: 28, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: color.brand[50], color: color.brand[600], opacity: 0, transform: 'translateY(2px)', transition: 'opacity 180ms ease, transform 180ms ease', pointerEvents: 'none' }}>
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </Box>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
