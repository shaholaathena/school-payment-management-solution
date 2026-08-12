import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from '../ui/Section';
import { PAYMENT_METHODS } from '../../content/platform';
import { color, motion, radius } from '../../theme/tokens';

/**
 * Payment-method trust row.
 *
 * These are typographic wordmarks, NOT the official brand marks. Licensed
 * logo assets must be sourced from each provider before launch — approximating
 * a payment brand's mark is a trademark problem as much as a fidelity one.
 */
export default function PaymentStrip() {
  return (
    <Section id="payment-methods-strip" tone="light" density="tight">
      <Typography
        variant="overline"
        component="p"
        sx={{ textAlign: 'center', color: color.neutral[400], mb: 3.5 }}
      >
        Payments processed through SSLCOMMERZ
      </Typography>

      <Stack
        direction="row"
        sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: { xs: 1.25, md: 2 } }}
      >
        {PAYMENT_METHODS.map((m) => (
          <Stack
            key={m.name}
            direction="row"
            spacing={1.25}
            title={m.category}
            sx={{
              alignItems: 'center',
              px: 2.25,
              py: 1.375,
              borderRadius: `${radius.md}px`,
              border: `1px solid ${color.neutral[200]}`,
              bgcolor: color.neutral[0],
              filter: 'grayscale(1)',
              opacity: 0.62,
              transition: `filter ${motion.base} ${motion.ease}, opacity ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
              '&:hover': { filter: 'none', opacity: 1, borderColor: color.brand[200] },
            }}
          >
            <Box component={m.icon} sx={{ width: 16, height: 16, color: color.neutral[500] }} aria-hidden />
            <Typography sx={{ fontSize: '0.9375rem', fontWeight: 700, color: color.neutral[700] }}>
              {m.name}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Typography
        variant="caption"
        sx={{ display: 'block', textAlign: 'center', mt: 3, color: color.neutral[400] }}
      >
        Wordmark placeholders — official brand assets pending licensing
      </Typography>
    </Section>
  );
}
