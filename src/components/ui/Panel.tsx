import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { color, motion, radius, shadow } from '../../theme/tokens';

export type PanelTone = 'card' | 'tint' | 'ink';

export interface PanelProps {
  children: ReactNode;
  tone?: PanelTone;
  /** Adds the hover lift: raise, deepen the shadow, warm the border. */
  lift?: boolean;
  /** Stretch to the height of its grid track */
  fullHeight?: boolean;
  sx?: SxProps<Theme>;
}

const toneSx: Record<PanelTone, SxProps<Theme>> = {
  card: { bgcolor: color.surface.card, border: `1px solid ${color.surface.line}` },
  tint: { bgcolor: color.surface.tint, border: `1px solid ${color.brand[100]}` },
  ink: {
    bgcolor: color.ink[900],
    color: color.ink.foreground,
    border: `1px solid rgba(243,245,249,0.10)`,
  },
};

/**
 * The card surface used across the whole page: white, hairline border, resting
 * shadow, 20px radius. Everything that looks like a card should be this — it is
 * the difference between a designed page and a page of assorted boxes.
 */
export default function Panel({
  children,
  tone = 'card',
  lift = false,
  fullHeight = false,
  sx,
}: PanelProps) {
  return (
    <Box
      sx={[
        {
          borderRadius: `${radius.panel}px`,
          boxShadow: shadow.soft,
          ...(fullHeight && { height: '100%' }),
        },
        toneSx[tone],
        lift && {
          transition: `transform ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: shadow.lift,
            borderColor: tone === 'ink' ? 'rgba(243,245,249,0.22)' : color.brand[300],
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
