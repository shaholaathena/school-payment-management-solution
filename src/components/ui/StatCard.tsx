import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useCountUp from '../../hooks/useCountUp';
import { color, font } from '../../theme/tokens';

export interface StatCardProps {
  /** Numeric target for the count-up. Ignored when `pending` is true. */
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /**
   * True when the real figure has not been supplied yet. Renders an em-dash
   * and a visible marker instead of a fabricated number.
   * @see docs/DESIGN_PLAN.md §8
   */
  pending?: boolean;
  onDark?: boolean;
  align?: 'left' | 'center';
}

export default function StatCard({
  value,
  label,
  prefix = '',
  suffix = '',
  decimals = 0,
  pending = false,
  onDark = false,
  align = 'left',
}: StatCardProps) {
  const [ref, animated] = useCountUp<HTMLDivElement>(value);

  return (
    <Box ref={ref} sx={{ textAlign: align }}>
      <Typography
        component="p"
        sx={{
          fontFamily: font.display,
          fontSize: 'clamp(2rem, 1.4rem + 1.8vw, 2.75rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          mb: 1,
          color: pending
            ? onDark
              ? 'rgba(255,255,255,0.32)'
              : color.neutral[300]
            : onDark
              ? color.neutral[0]
              : color.brand[600],
        }}
      >
        {pending ? '—' : `${prefix}${animated.toFixed(decimals)}${suffix}`}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          color: onDark ? 'rgba(255,255,255,0.72)' : color.neutral[700],
        }}
      >
        {label}
      </Typography>

      {pending && (
        <Typography
          variant="caption"
          sx={{ display: 'block', mt: 0.5, fontWeight: 600, color: color.warning[600] }}
        >
          awaiting verified figure
        </Typography>
      )}
    </Box>
  );
}
