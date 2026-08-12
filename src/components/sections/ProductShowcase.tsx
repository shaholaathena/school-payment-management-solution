import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart3, CheckCircle2, Receipt, Smartphone } from 'lucide-react';
import BrowserFrame from '../product/BrowserFrame';
import DashboardMockup from '../product/DashboardMockup';
import PhoneMockup from '../product/PhoneMockup';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { color, motion, radius, shadow } from '../../theme/tokens';

type ViewKey = 'overview' | 'transactions' | 'guardian';
const VIEWS: { key: ViewKey; label: string; caption: string; icon: typeof BarChart3 }[] = [
  { key: 'overview', label: 'Collection overview', caption: 'See received, outstanding and monthwise collection at a glance.', icon: BarChart3 },
  { key: 'transactions', label: 'Transactions', caption: 'Trace every payment to a student, fee and method.', icon: Receipt },
  { key: 'guardian', label: 'Guardian app', caption: 'Give parents a simple view of dues and payment.', icon: Smartphone },
];

export default function ProductShowcase() {
  const [view, setView] = useState<ViewKey>('overview');
  return (
    <Section id="product" tone="dark" density="loose">
      <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Reveal><SectionHeading eyebrow="Inside the product" title="The work happens here." description="A focused workspace for collection, reconciliation and family payments — designed to make the important information obvious." onDark /></Reveal>
          <Stack spacing={1.25} sx={{ mt: 4 }}>
            {VIEWS.map((v) => { const active = v.key === view; return <Box key={v.key} component="button" type="button" onClick={() => setView(v.key)} aria-pressed={active} sx={{ width: '100%', textAlign: 'left', cursor: 'pointer', p: 2, borderRadius: `${radius.lg}px`, bgcolor: active ? 'rgba(255,255,255,0.09)' : 'transparent', border: `1px solid ${active ? 'rgba(255,255,255,0.20)' : 'rgba(255,255,255,0.08)'}`, transition: `all ${motion.base} ${motion.ease}`, '&:hover': { bgcolor: 'rgba(255,255,255,0.07)', transform: 'translateX(3px)' } }}><Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}><Box sx={{ width: 38, height: 38, flexShrink: 0, borderRadius: `${radius.md}px`, display: 'grid', placeItems: 'center', bgcolor: active ? color.brand[600] : 'rgba(255,255,255,0.07)', color: active ? '#fff' : 'rgba(255,255,255,0.52)' }}><v.icon size={17} /></Box><Box><Typography sx={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>{v.label}</Typography><Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', mt: .35 }}>{v.caption}</Typography></Box></Stack></Box>; })}
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mt: 3, alignItems: 'center' }}><CheckCircle2 size={15} color="#67E8F9" /><Typography sx={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.72rem' }}>Synthetic product data shown for demonstration</Typography></Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Reveal><Box key={view} sx={{ animation: `showcaseIn ${motion.slow} ${motion.ease}`, '@keyframes showcaseIn': { from: { opacity: 0, transform: 'translateY(14px) scale(.99)' }, to: { opacity: 1, transform: 'none' } }, filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.34))' }}>{view === 'guardian' ? <Box sx={{ display: 'flex', justifyContent: 'center' }}><PhoneMockup width={292} /></Box> : <BrowserFrame onDark><DashboardMockup view={view} /></BrowserFrame>}</Box></Reveal>
        </Grid>
      </Grid>
    </Section>
  );
}
