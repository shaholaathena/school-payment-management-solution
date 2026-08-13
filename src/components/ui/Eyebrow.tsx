import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { color } from '../../theme/tokens';

export interface EyebrowProps {
  children: ReactNode;
  /** Use on dark / brand surfaces */
  onDark?: boolean;
  /** Leading rule — the editorial tick that anchors a left-aligned section */
  rule?: boolean;
}

/**
 * The one section label style. `SectionHeading` renders this internally; use it
 * directly when a block needs the label without a full heading (panel headers,
 * split layouts) so the two never drift apart.
 */
export default function Eyebrow({ children, onDark = false, rule = false }: EyebrowProps) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25 }}>
      {rule && (
        <Box
          aria-hidden
          sx={{
            width: 22,
            height: 2,
            borderRadius: 2,
            flexShrink: 0,
            bgcolor: onDark ? 'rgba(169,178,255,0.7)' : color.brand[500],
          }}
        />
      )}
      <Typography
        variant="overline"
        component="span"
        sx={{ color: onDark ? 'rgba(255,255,255,0.55)' : color.brand[600] }}
      >
        {children}
      </Typography>
    </Box>
  );
}
