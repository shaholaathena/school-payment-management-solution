import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from '../ui/Section';
import { PAYMENT_METHODS } from '../../content/platform';
import { color, motion, radius } from '../../theme/tokens';

export default function PaymentStrip() {
  return (
    <Section id="payment-methods-strip" tone="subtle" density="tight">
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 5 }} sx={{ alignItems: { md: 'center' }, justifyContent: 'space-between' }}>
        <Box sx={{ minWidth: 220 }}>
          <Typography sx={{ fontSize: '.68rem', fontWeight: 800, letterSpacing: '.11em', textTransform: 'uppercase', color: color.neutral[400] }}>Payment infrastructure</Typography>
          <Typography sx={{ mt: .6, fontSize: '.95rem', fontWeight: 700, color: color.neutral[800] }}>Flexible ways for families to pay.</Typography>
        </Box>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, justifyContent: { md: 'flex-end' } }}>
          {PAYMENT_METHODS.map((m) => <Stack key={m.name} direction="row" spacing={.8} alignItems="center" title={m.category} sx={{ px: 1.5, py: .85, borderRadius: radius.md, bgcolor: '#fff', border: `1px solid ${color.neutral[200]}`, transition: `all ${motion.base} ${motion.ease}`, '&:hover': { borderColor: color.brand[200], transform: 'translateY(-2px)', boxShadow: '0 8px 22px rgba(15,23,42,.06)' } }}><Box component={m.icon} sx={{ width: 15, height: 15, color: color.brand[600] }} aria-hidden /><Typography sx={{ fontSize: '.76rem', fontWeight: 700, color: color.neutral[700] }}>{m.name}</Typography></Stack>)}
        </Stack>
      </Stack>
    </Section>
  );
}
