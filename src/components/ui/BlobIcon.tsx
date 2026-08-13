import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { LucideIcon } from 'lucide-react';
import { motion, vivid } from '../../theme/tokens';

export type BlobSize = 'sm' | 'md' | 'lg';

export interface BlobIconProps {
  icon: LucideIcon;
  size?: BlobSize;
  /** Cycles the gradient + glow + outline so a row of icons has variety. */
  variant?: number;
  sx?: SxProps<Theme>;
}

/**
 * A vivid gradient icon disc — the inspiration's signature icon: a white line
 * icon on a gradient circle with a matching coloured glow. Four gradients cycle
 * by `variant` (azure → cyan / sky / lavender / cyan) so a row is lively rather
 * than four identical stamps, all still anchored on the azure brand.
 *
 * The rounded-squircle radius keeps it friendly rather than a hard circle.
 */
const DIMS: Record<BlobSize, { box: number; icon: number; radius: number }> = {
  sm: { box: 52, icon: 23, radius: 18 },
  md: { box: 66, icon: 28, radius: 22 },
  lg: { box: 80, icon: 34, radius: 26 },
};

export default function BlobIcon({ icon: Icon, size = 'md', variant = 0, sx }: BlobIconProps) {
  const d = DIMS[size];
  const i = variant % vivid.gradients.length;

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
          borderRadius: `${d.radius}px`,
          backgroundImage: vivid.gradients[i],
          color: '#fff',
          boxShadow: `0 14px 26px -10px ${vivid.glows[i]}`,
          transition: `transform ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Icon size={d.icon} strokeWidth={2} aria-hidden />
    </Box>
  );
}
