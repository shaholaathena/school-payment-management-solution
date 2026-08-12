import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart3, CheckCircle2, Receipt, Smartphone } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { color, motion, radius, shadow } from '../../theme/tokens';
import dashboard from '../../assets/images/dashboard.png';
import studentsList from '../../assets/images/students-list.png';
import appHome from '../../assets/images/app-home.png';

type ViewKey = 'overview' | 'transactions' | 'guardian';
const VIEWS: { key: ViewKey; label: string; caption: string; icon: typeof BarChart3 }[] = [
  { key: 'overview', label: 'Collection overview', caption: 'See received, outstanding and monthwise collection at a glance.', icon: BarChart3 },
  { key: 'transactions', label: 'Students & records', caption: 'Work with real student and payment-management screens.', icon: Receipt },
  { key: 'guardian', label: 'Guardian app', caption: 'Show families a simple view of their education payments.', icon: Smartphone },
];

const SCREENSHOTS: Record<ViewKey, string> = { overview: dashboard, transactions: studentsList, guardian: appHome };
const ALT: Record<ViewKey, string> = { overview: 'Education Payments dashboard screenshot', transactions: 'Education Payments students list screenshot', guardian: 'Education Payments guardian app screenshot' };

export default function ProductShowcase() {
  const [view, setView] = useState<ViewKey>('overview');
  return <Section id="product" tone="dark" density="loose">
    <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
      <Grid size={{ xs: 12, md: 4 }}>
        <Reveal>
          <Typography sx={{ color: '#A9B2FF', fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase' }}>Inside the platform</Typography>
          <Typography variant="h2" sx={{ color: '#fff', mt: 1.5, maxWidth: 430 }}>See the real product, not a concept mockup.</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,.58)', mt: 2, lineHeight: 1.7, maxWidth: 420 }}>Explore actual screens from the education payment platform across administration, student management and the family experience.</Typography>
        </Reveal>
        <Stack spacing={1} sx={{ mt: 4 }}>
          {VIEWS.map((v) => { const active = v.key === view; return <Box key={v.key} component="button" type="button" onClick={() => setView(v.key)} aria-pressed={active} sx={{ width: '100%', textAlign: 'left', cursor: 'pointer', p: 1.5, borderRadius: radius.lg, bgcolor: active ? 'rgba(255,255,255,.085)' : 'transparent', border: `1px solid ${active ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.07)'}`, transition: `all ${motion.base} ${motion.ease}`, '&:hover': { bgcolor: 'rgba(255,255,255,.065)', transform: 'translateX(3px)' } }}><Stack direction="row" spacing={1.25} alignItems="center"><Box sx={{ width: 38, height: 38, flexShrink: 0, borderRadius: radius.md, display: 'grid', placeItems: 'center', bgcolor: active ? color.brand[600] : 'rgba(255,255,255,.07)', color: active ? '#fff' : 'rgba(255,255,255,.5)' }}><v.icon size={17} /></Box><Box><Typography sx={{ color: '#fff', fontSize: '.82rem', fontWeight: 750 }}>{v.label}</Typography><Typography sx={{ color: 'rgba(255,255,255,.42)', fontSize: '.7rem', mt: .25 }}>{v.caption}</Typography></Box></Stack></Box>; })}
        </Stack>
        <Stack direction="row" spacing={.8} alignItems="center" sx={{ mt: 3 }}><CheckCircle2 size={14} color="#67E8F9" /><Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: '.7rem' }}>Real screenshots from the product assets</Typography></Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Reveal>
          <Box sx={{ p: { xs: .75, md: 1.25 }, borderRadius: `${radius['2xl']}px`, bgcolor: 'rgba(255,255,255,.045)', border: '1px solid rgba(255,255,255,.09)', boxShadow: shadow.onDark }}>
            <Box key={view} sx={{ position: 'relative', overflow: 'hidden', borderRadius: `${radius.xl}px`, bgcolor: '#fff', animation: `showcaseIn ${motion.slow} ${motion.ease}`, '@keyframes showcaseIn': { from: { opacity: 0, transform: 'translateY(10px)' }, to: { opacity: 1, transform: 'none' } } }}>
              <Box sx={{ px: 2, py: 1.2, display: 'flex', alignItems: 'center', gap: 1, bgcolor: color.neutral[50], borderBottom: `1px solid ${color.neutral[200]}` }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => <Box key={c} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: c }} />)}
                <Typography sx={{ ml: 1, fontSize: 10, color: color.neutral[400], fontWeight: 600 }}>{ALT[view]}</Typography>
              </Box>
              <Box component="img" src={SCREENSHOTS[view]} alt={ALT[view]} sx={{ display: 'block', width: '100%', height: 'auto', maxHeight: { md: 570 }, objectFit: 'contain', objectPosition: 'top center' }} />
            </Box>
          </Box>
        </Reveal>
      </Grid>
    </Grid>
  </Section>;
}
