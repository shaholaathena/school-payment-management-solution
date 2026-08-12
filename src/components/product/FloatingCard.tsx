import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { LucideIcon } from 'lucide-react';
import { color, radius, shadow } from '../../theme/tokens';

export interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  meta: string;
  tone?: 'success' | 'brand' | 'warning';
  /** Float animation offset so stacked cards drift out of sync */
  floatDelay?: number;
}

const tones = {
  success: { bg: color.success[50], fg: color.success[600] },
  brand: { bg: color.brand[50], fg: color.brand[600] },
  warning: { bg: color.warning[50], fg: color.warning[600] },
} as const;

/**
 * Small notification card that floats over the dashboard composition —
 * gives the hero depth and shows the platform's live signals.
 */
export default function FloatingCard({
  icon: Icon,
  title,
  meta,
  tone = 'success',
  floatDelay = 0,
}: FloatingCardProps) {
  const t = tones[tone];

  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        alignItems: 'center',
        px: 1.75,
        py: 1.375,
        bgcolor: color.neutral[0],
        border: `1px solid ${color.neutral[200]}`,
        borderRadius: `${radius.lg}px`,
        boxShadow: shadow.xl,
        animation: 'cardFloat 7s ease-in-out infinite',
        animationDelay: `${floatDelay}ms`,
        '@keyframes cardFloat': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: `${radius.sm}px`,
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
          bgcolor: t.bg,
          color: t.fg,
        }}
      >
        <Icon size={15} strokeWidth={2.2} aria-hidden />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 700, color: color.neutral[900], lineHeight: 1.3 }} noWrap>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '0.6875rem', color: color.neutral[500] }} noWrap>
          {meta}
        </Typography>
      </Box>
    </Stack>
  );
}
