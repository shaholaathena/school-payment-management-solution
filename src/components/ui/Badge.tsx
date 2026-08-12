import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { color, radius } from '../../theme/tokens';

export type BadgeTone = 'brand' | 'neutral' | 'success' | 'warning' | 'danger' | 'inverse';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  size?: BadgeSize;
  /** Leading icon — pass a Lucide icon element */
  icon?: ReactNode;
  /** Fully rounded rather than subtly rounded */
  pill?: boolean;
}

const tones: Record<BadgeTone, { bg: string; fg: string; border: string }> = {
  brand: { bg: color.brand[50], fg: color.brand[700], border: color.brand[100] },
  neutral: { bg: color.neutral[100], fg: color.neutral[600], border: color.neutral[200] },
  success: { bg: color.success[50], fg: color.success[700], border: '#A7F3D0' },
  warning: { bg: color.warning[50], fg: color.warning[700], border: '#FDE68A' },
  danger: { bg: color.danger[50], fg: color.danger[700], border: '#FECACA' },
  inverse: { bg: 'rgba(255,255,255,0.07)', fg: 'rgba(255,255,255,0.88)', border: 'rgba(255,255,255,0.16)' },
};

export default function Badge({
  children,
  tone = 'brand',
  size = 'md',
  icon,
  pill = false,
}: BadgeProps) {
  const t = tones[tone];

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        bgcolor: t.bg,
        color: t.fg,
        border: `1px solid ${t.border}`,
        borderRadius: pill ? `${radius.pill}px` : `${radius.sm}px`,
        px: size === 'sm' ? 1 : 1.5,
        py: size === 'sm' ? 0.375 : 0.625,
        fontSize: size === 'sm' ? '0.75rem' : '0.8125rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '-0.005em',
        whiteSpace: 'nowrap',
        '& svg': { width: size === 'sm' ? 13 : 15, height: size === 'sm' ? 13 : 15 },
      }}
    >
      {icon}
      {children}
    </Box>
  );
}
