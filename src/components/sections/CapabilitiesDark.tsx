import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BellRing, BookOpen, CreditCard, FileBarChart, LockKeyhole, Users } from 'lucide-react';
import { color, radius } from '../../theme/tokens';

const CAPABILITIES = [
  { icon: BookOpen, title: 'Fee Management', text: 'Set structures, schedules and recurring dues with less manual work.' },
  { icon: CreditCard, title: 'Digital Payments', text: 'Give families a clear path to pay through supported payment channels.' },
  { icon: Users, title: 'Student & User Management', text: 'Keep student records and access roles organized in one place.' },
  { icon: BellRing, title: 'Notifications & Reminders', text: 'Make due-date and payment communication more consistent.' },
  { icon: FileBarChart, title: 'Transactions & Reporting', text: 'Trace payment activity and turn records into useful reports.' },
  { icon: LockKeyhole, title: 'Controlled Access', text: 'Support role-based workflows across the administrative portal.' },
];

export default function CapabilitiesDark() {
  return (
    <Box component="section" sx={{ bgcolor: color.ink[950], color: '#fff', py: { xs: 9, md: 13 } }}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 9 }} alignItems="start">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography sx={{ fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#A9B2FF' }}>Inside the system</Typography>
            <Typography variant="h2" sx={{ mt: 1.5, color: '#fff', maxWidth: 430 }}>The operational layer behind better collections.</Typography>
            <Typography sx={{ mt: 2.25, color: 'rgba(255,255,255,.56)', lineHeight: 1.75, maxWidth: 420 }}>Everything teams need to define fees, communicate, collect, reconcile and understand the payment workflow without stitching together separate tools.</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={1.5}>
              {CAPABILITIES.map(({ icon: Icon, title, text }, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={title}>
                  <Box sx={{ p: { xs: 2.5, md: 3 }, height: '100%', minHeight: 190, borderRadius: `${radius.xl}px`, bgcolor: i === 0 ? 'rgba(99,102,241,.14)' : 'rgba(255,255,255,.045)', border: '1px solid rgba(255,255,255,.08)', transition: 'transform 220ms var(--ease), background-color 220ms var(--ease)', '&:hover': { transform: 'translateY(-4px)', bgcolor: 'rgba(255,255,255,.075)' } }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: radius.md, display: 'grid', placeItems: 'center', bgcolor: 'rgba(255,255,255,.08)', color: '#A9B2FF' }}><Icon size={19} /></Box>
                    <Typography sx={{ mt: 4, color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{title}</Typography>
                    <Typography sx={{ mt: 1, color: 'rgba(255,255,255,.5)', fontSize: '.8rem', lineHeight: 1.65 }}>{text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
