import Box from '@mui/material/Box';
import phoneSrc from '../../assets/images/payment-summary-hero.png';
import { color, shadow } from '../../theme/tokens';

export interface PhoneScreenshotProps {
  width?: number;
  onDark?: boolean;
}

/** Source capture is 786 × 1704. */
const SRC_RATIO = 1704 / 786;

/**
 * Real guardian-app capture in a device bezel —
 * `src/assets/images/payment-summary.png`, downscaled to
 * `payment-summary-hero.png`.
 *
 * PRIVACY: this screen shows a fee breakdown and total only — no student name,
 * no photograph, no contact details, no card data. It is the safe counterpart
 * to `app-home.png`, which shows a named minor's photograph, school, student ID
 * and daily punch-in / punch-out times and must not be published.
 */
export default function PhoneScreenshot({ width = 200, onDark = true }: PhoneScreenshotProps) {
  const bezel = Math.max(4, Math.round(width * 0.022));
  const radius = Math.round(width * 0.125);

  return (
    <Box
      sx={{
        width,
        flexShrink: 0,
        p: `${bezel}px`,
        borderRadius: `${radius}px`,
        bgcolor: color.ink[900],
        border: `1px solid ${onDark ? 'rgba(255,255,255,0.16)' : color.neutral[300]}`,
        boxShadow: onDark ? shadow.onDark : shadow['2xl'],
      }}
    >
      <Box
        component="img"
        src={phoneSrc}
        alt="Guardian mobile app showing a payment summary with a total fee of 3,000 taka broken down into tuition and exam fees, and a swipe-to-pay control"
        width={900 / SRC_RATIO}
        height={900}
        loading="eager"
        decoding="async"
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: `${radius - bezel}px`,
        }}
      />
    </Box>
  );
}
