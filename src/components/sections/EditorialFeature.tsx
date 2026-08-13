import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { color, radius, shadow } from '../../theme/tokens';
import dashboard from '../../assets/images/dashboard.png';

const POINTS = [
  'Centralize fee structures and collection visibility',
  'Give administrators a single view of outstanding dues',
  'Keep transaction records connected to student information',
];

export default function EditorialFeature() {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 13 }, bgcolor: '#fff' }}>
      <Container>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.95fr 1.05fr' }, gap: { xs: 5, md: 9 }, alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: color.brand[600] }}>One platform</Typography>
            <Typography variant="h2" sx={{ mt: 1.25, maxWidth: 510 }}>One payment system. Less operational noise.</Typography>
            <Typography sx={{ mt: 2, color: color.neutral[600], maxWidth: 560, lineHeight: 1.75 }}>Bring the daily work of fee collection into one clear workspace, so teams spend less time chasing records and more time running the institution.</Typography>
            <Stack spacing={1.6} sx={{ mt: 4 }}>
              {POINTS.map((point) => <Stack key={point} direction="row" spacing={1.25} alignItems="flex-start"><CheckCircle2 size={18} color={color.success[600]} style={{ marginTop: 2, flexShrink: 0 }} /><Typography sx={{ color: color.neutral[700], fontSize: '.9rem', lineHeight: 1.55 }}>{point}</Typography></Stack>)}
            </Stack>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: .75, mt: 4, color: color.brand[600], fontWeight: 750, fontSize: '.85rem' }}><span>Explore the platform</span><ArrowUpRight size={16} /></Box>
          </Box>
          <Box sx={{ p: { xs: 1, md: 1.5 }, borderRadius: `${radius['2xl']}px`, bgcolor: color.neutral[50], border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.lg }}>
            <Box component="img" src={dashboard} alt="Education Payments dashboard" sx={{ display: 'block', width: '100%', borderRadius: `${radius.xl}px` }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
