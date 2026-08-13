import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { color } from '../../theme/tokens';

export interface EyebrowProps {
  children: ReactNode;
  /** On ink surfaces the label switches from azure to sky */
  onDark?: boolean;
  /** Smaller variant used inside cards and the hero centre panel */
  size?: 'sm' | 'md';
}

/**
 * The one section label style: uppercase, 0.14em tracking, azure on light and
 * sky on ink. Every section and most panels open with one of these, so it
 * lives in a single component rather than being re-declared per section.
 */
export default function Eyebrow({ children, onDark = false, size = 'md' }: EyebrowProps) {
  return (
    <Typography
      variant="overline"
      component="p"
      sx={{
        fontSize: size === 'sm' ? '0.66rem' : '0.75rem',
        letterSpacing: onDark ? '0.16em' : '0.14em',
        color: onDark ? color.accent.sky : color.brand[700],
      }}
    >
      {children}
    </Typography>
  );
}
