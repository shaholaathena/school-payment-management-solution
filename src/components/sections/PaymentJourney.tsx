import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BellRing, CheckCircle2, FileText, RefreshCw, Send } from 'lucide-react';
import { color, radius } from '../../theme/tokens';

const STEPS = [
  { icon: FileText, title: 'Create fee', text: 'Set the fee structure and due dates once.' },
  { icon: Send, title: 'Notify', text: 'Keep families informed with consistent reminders.' },
  { icon: BellRing, title: 'Collect', text: 'Let guardians pay through supported digital channels.' },
  { icon: RefreshCw, title: 'Reconcile', text: 'Bring gateway activity and payment records together.' },
  { icon: CheckCircle2, title: 'Report', text: 'See dues, collections and transaction history clearly.' },
];

export default function PaymentJourney() {
  return (
    <Box component="section" id="payment-journey" sx={{ bgcolor: '#F7F8FC', py: { xs: 9, md: 13 }, borderTop: `1px solid ${color.surface.line}`, borderBottom: `1px solid ${color.surface.line}` }}>
      <Container>
        <Box sx={{ maxWidth: 680, mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: color.brand[600] }}>The payment journey</Typography>
          <Typography variant="h2" sx={{ mt: 1.25, maxWidth: 680 }}>From fee creation to a clean record, every step stays connected.</Typography>
          <Typography sx={{ mt: 2, color: color.neutral[600], maxWidth: 620, lineHeight: 1.75 }}>A simple operational flow designed to reduce manual follow-up while keeping schools and families aligned.</Typography>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Box aria-hidden sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '7%', right: '7%', top: 29, height: 1, bgcolor: color.neutral[200] }} />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' }, gap: { xs: 2, md: 1.5 } }}>
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <Box key={title} sx={{ position: 'relative', p: { xs: 2.5, md: 2.25 }, borderRadius: `${radius.xl}px`, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, minHeight: { md: 210 } }}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box sx={{ width: 42, height: 42, flexShrink: 0, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: color.brand[50], color: color.brand[600], border: `5px solid #F7F8FC`, boxShadow: '0 0 0 1px rgba(99,102,241,.08)' }}><Icon size={18} strokeWidth={2} /></Box>
                  <Typography sx={{ fontSize: '.68rem', fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: color.neutral[400 }}>0{i + 1}</Typography>
                </Stack>
                <Typography sx={{ mt: 3, fontWeight: 800, fontSize: '1rem', color: color.neutral[900] }}>{title}</Typography>
                <Typography sx={{ mt: 1, fontSize: '.8rem', lineHeight: 1.65, color: color.neutral[600] }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
