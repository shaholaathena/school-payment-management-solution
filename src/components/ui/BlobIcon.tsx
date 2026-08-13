import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { LucideIcon } from 'lucide-react';
import { color, motion } from '../../theme/tokens';

export type BlobTone = 'brand' | 'ink';
export type BlobSize = 'sm' | 'md' | 'lg';

export interface BlobIconProps {
  icon: LucideIcon;
  tone?: BlobTone;
  size?: BlobSize;
  /** Index into the shape set — alternates the organic outline down a row. */
  variant?: number;
  sx?: SxProps<Theme>;
}

/**
 * A line icon sitting on a soft, organic "blob" — the signature icon treatment
 * of the Pintex layout. The blob is an eight-value border-radius rather than an
 * image, so it scales cleanly and costs nothing; four variants keep a row of
 * them from reading as identical stamps.
 *
 * Kept on the azure brand ramp (not Pintex's magenta) per the project's palette.
 */
const SHAPES = [
  '42% 58% 60% 40% / 52% 44% 56% 48%',
  '58% 42% 44% 56% / 44% 56% 44% 56%',
  '50% 50% 56% 44% / 56% 48% 52% 44%',
  '46% 54% 48% 52% / 48% 56% 44% 52%',
] as const;

const DIMS: Record<BlobSize, { box: number; icon: number }> = {
  sm: { box: 56, icon: 24 },
  md: { box: 72, icon: 30 },
  lg: { box: 84, icon: 34 },
};

export default function BlobIcon({
  icon: Icon,
  tone = 'brand',
  size = 'md',
  variant = 0,
  sx,
}: BlobIconProps) {
  const d = DIMS[size];
  const onInk = tone === 'ink';

  return (
    <Box
      className="blob-icon"
      sx={[
        {
          width: d.box,
          height: d.box,
          flexShrink: 0,
          display: 'grid',
          placeItems: 'center',
          borderRadius: SHAPES[variant % SHAPES.length],
          bgcolor: onInk ? 'rgba(0,153,242,0.16)' : color.brand[50],
          color: onInk ? color.accent.sky : color.brand[700],
          transition: `transform ${motion.base} ${motion.ease}, background-color ${motion.base} ${motion.ease}`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Icon size={d.icon} strokeWidth={1.7} aria-hidden />
    </Box>
  );
}
