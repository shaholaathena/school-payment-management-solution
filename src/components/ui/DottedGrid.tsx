import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { color } from '../../theme/tokens';

export interface DottedGridProps {
  /** Dots across / down. Pintex uses roughly 7×7 blocks. */
  cols?: number;
  rows?: number;
  /** Dot diameter and the gap between dot centres, in px. */
  dot?: number;
  gap?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * The small square field of dots Pintex tucks behind and beside its section
 * images. Purely decorative — rendered as a radial-gradient tile so it stays
 * one element regardless of size, and marked aria-hidden.
 */
export default function DottedGrid({
  cols = 7,
  rows = 7,
  dot = 3.4,
  gap = 16,
  color: dotColor = color.brand[300],
  sx,
}: DottedGridProps) {
  return (
    <Box
      aria-hidden
      sx={[
        {
          width: cols * gap,
          height: rows * gap,
          backgroundImage: `radial-gradient(${dotColor} ${dot / 2}px, transparent ${dot / 2}px)`,
          backgroundSize: `${gap}px ${gap}px`,
          pointerEvents: 'none',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
