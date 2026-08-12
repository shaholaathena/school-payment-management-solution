import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { color, radius, shadow } from '../../theme/tokens';

export interface CtaBandProps { title?: string; description?: string; primaryLabel?: string; secondaryLabel?: string; secondaryTo?: string; }

export default function CtaBand({ title = 'Ready to make school payments simpler?', description = 'See how a connected payment workflow can fit into your institution.', primaryLabel = 'Book a Demo', secondaryLabel = 'Explore Features', secondaryTo = '/features' }: CtaBandProps) {
  return <Section tone="light" density="normal"><Reveal><Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: `${radius['3xl']}px`, px: { xs: 3, sm: 6, md: 9 }, py: { xs: 5, md: 7 }, bgcolor: color.ink[900], color: '#fff', boxShadow: shadow.xl, backgroundImage: 'linear-gradient(115deg, #151936 0%, #232b68 58%, #17354b 100%)' }}>
    <Box aria-hidden sx={{ position: 'absolute', width: 420, height: 420, right: -120, top: -210, borderRadius: '50%', background: 'radial-gradient(circle, rgba(129,140,248,.28), transparent 68%)' }} />
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 7 }} sx={{ position: 'relative', alignItems: { md: 'center' }, justifyContent: 'space-between' }}>
      <Box sx={{ maxWidth: 620 }}><Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-.04em' }}>{title}</Typography><Typography sx={{ mt: 1.5, color: 'rgba(255,255,255,.62)', maxWidth: 520, lineHeight: 1.7 }}>{description}</Typography><Stack direction="row" spacing={2} sx={{ mt: 2.5, flexWrap: 'wrap' }}>{['School-friendly workflow', 'Clear payment records'].map((item) => <Stack key={item} direction="row" spacing={.6} alignItems="center"><Check size={14} color="#A9B2FF" /><Typography sx={{ fontSize: '.72rem', color: 'rgba(255,255,255,.55)' }}>{item}</Typography></Stack>)}</Stack></Box>
      <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1.25} sx={{ flexShrink: 0 }}><Button to="/contact" size="lg" endIcon={<ArrowRight size={17} />}>{primaryLabel}</Button><Button to={secondaryTo} size="lg" variant="inverse">{secondaryLabel}</Button></Stack>
    </Stack>
  </Box></Reveal></Section>;
}
