import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BellRing, CheckCircle2, FileText, CreditCard, BarChart3 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { color, radius, shadow } from '../../theme/tokens';

const STEPS = [
  { n: '01', icon: FileText, title: 'Create the fee', body: 'Set fee structures and schedules from the school portal.' },
  { n: '02', icon: BellRing, title: 'Notify families', body: 'Send clear reminders through the configured communication flow.' },
  { n: '03', icon: CreditCard, title: 'Collect digitally', body: 'Parents pay through supported card, mobile banking or net banking channels.' },
  { n: '04', icon: CheckCircle2, title: 'Keep records in sync', body: 'Payment status and transaction history update in the platform.' },
  { n: '05', icon: BarChart3, title: 'See the outcome', body: 'Use reports and collection visibility to manage the next action.' },
];

export default function ProcessJourney() {
  return (
    <Section id="journey" tone="subtle" density="loose">
      <SectionHeading
        eyebrow="How the experience flows"
        title="From fee setup to a completed record, without the back-and-forth."
        description="The workflow is designed around the people who create fees, make payments and need the record afterwards."
      />
      <Grid container spacing={1.5} sx={{ mt: { xs: 5, md: 7 } }}>
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, lg: index === 4 ? 12 : 3 }} key={step.n}>
              <Reveal delay={index * 65} sx={{ height: '100%' }}>
                <Box sx={{ height: '100%', minHeight: 235, p: { xs: 2.75, md: 3 }, borderRadius: `${radius.xl}px`, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.sm, position: 'relative', overflow: 'hidden', transition: 'transform 240ms var(--ease), box-shadow 240ms var(--ease)', '&:hover': { transform: 'translateY(-4px)', boxShadow: shadow.md } }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box sx={{ width: 44, height: 44, borderRadius: radius.md, display: 'grid', placeItems: 'center', bgcolor: color.brand[50], color: color.brand[600] }}><Icon size={20} /></Box>
                    <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 800, color: color.neutral[300] }}>{step.n}</Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ mt: 5, mb: 1 }}>{step.title}</Typography>
                  <Typography variant="body2" sx={{ color: color.neutral[600], lineHeight: 1.65 }}>{step.body}</Typography>
                  {index < 4 && <Box aria-hidden sx={{ position: 'absolute', right: -18, top: 56, width: 36, height: 36, borderRadius: '50%', bgcolor: color.brand[50], border: `1px solid ${color.brand[100]}`, display: { xs: 'none', lg: index !== 3 ? 'grid' : 'none' }, placeItems: 'center', color: color.brand[500] }}>→</Box>}
                </Box>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
