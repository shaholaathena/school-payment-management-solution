import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, Check } from 'lucide-react';
import { color, radius, shadow } from '../../theme/tokens';
import paymentSummary from '../../assets/images/payment-summary.png';
import studentsList from '../../assets/images/students-list.png';
import appHome from '../../assets/images/app-home.png';

const STORIES = [
  { label: '01 · Payment clarity', title: 'Make every payment easy to understand.', text: 'Give families a clear breakdown of dues, payment status and history so they always know what changed.', image: paymentSummary, alt: 'Education Payments payment summary', dark: true },
  { label: '02 · Connected records', title: 'Keep student information connected.', text: 'Bring student management and payment history into the same operational view instead of separate processes.', image: studentsList, alt: 'Education Payments student list' },
  { label: '03 · Family experience', title: 'Give parents a simpler way to pay.', text: 'Make fee information and digital payment accessible from a focused family-facing experience.', image: appHome, alt: 'Education Payments mobile app' },
];

export default function ProductStories() {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 13 }, bgcolor: '#fff' }}>
      <Container>
        <Box sx={{ maxWidth: 720, mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: color.brand[600] }}>The actual product</Typography>
          <Typography variant="h2" sx={{ mt: 1.25 }}>Not a promise. A product you can see.</Typography>
          <Typography sx={{ mt: 2, color: color.neutral[600], maxWidth: 680, lineHeight: 1.75 }}>Use the real screens to show how the experience works across administration, payments and the family journey.</Typography>
        </Box>
        <Stack spacing={{ xs: 4, md: 8 }}>
          {STORIES.map((story, i) => (
            <Grid container spacing={{ xs: 3, md: 7 }} alignItems="center" direction={i === 1 ? 'row-reverse' : 'row'} key={story.title}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography sx={{ fontSize: '.68rem', fontWeight: 850, letterSpacing: '.12em', textTransform: 'uppercase', color: color.brand[600] }}>{story.label}</Typography>
                <Typography variant="h3" sx={{ mt: 1.25, maxWidth: 480 }}>{story.title}</Typography>
                <Typography sx={{ mt: 2, color: color.neutral[600], lineHeight: 1.75, maxWidth: 480 }}>{story.text}</Typography>
                <Stack spacing={1.2} sx={{ mt: 3 }}>
                  {['Clearer decisions', 'Fewer manual follow-ups', 'Connected records'].map((item) => <Stack key={item} direction="row" spacing={.9} alignItems="center"><Check size={15} color={color.success[600]} /><Typography sx={{ fontSize: '.8rem', color: color.neutral[700], fontWeight: 650 }}>{item}</Typography></Stack>)}
                </Stack>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: .6, mt: 3.5, color: color.brand[600], fontSize: '.82rem', fontWeight: 750 }}>See the experience <ArrowUpRight size={15} /></Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box sx={{ p: { xs: 1, md: 1.25 }, borderRadius: `${radius['2xl']}px`, bgcolor: story.dark ? color.ink[950] : color.neutral[50], border: `1px solid ${story.dark ? 'rgba(255,255,255,.08)' : color.neutral[200]}`, boxShadow: story.dark ? shadow.onDark : shadow.lg }}>
                  <Box component="img" src={story.image} alt={story.alt} sx={{ display: 'block', width: '100%', height: 'auto', borderRadius: `${radius.xl}px` }} />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
