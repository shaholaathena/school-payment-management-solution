import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { SxProps, Theme } from '@mui/material/styles';
import { color } from '../../theme/tokens';

export type SectionTone = 'light' | 'subtle' | 'dark' | 'brand';
export type SectionWidth = 'sm' | 'md' | 'lg';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  width?: SectionWidth;
  /** Vertical padding scale. `tight` for strips and logo rows. */
  density?: 'tight' | 'normal' | 'loose';
  sx?: SxProps<Theme>;
}

const toneSx: Record<SectionTone, SxProps<Theme>> = {
  light: { bgcolor: color.surface.canvas, color: color.neutral[900] },
  subtle: { bgcolor: color.surface.muted, color: color.neutral[900] },
  dark: { bgcolor: color.ink[900], color: color.ink.foreground },
  brand: {
    color: color.surface.canvas,
    backgroundImage: `linear-gradient(140deg, ${color.brand[800]} 0%, ${color.brand[600]} 60%, ${color.accent[600]} 100%)`,
  },
};

/**
 * Every page section goes through this wrapper — it owns the vertical rhythm
 * (80px mobile / 112px desktop) and the light/subtle/dark alternation, so
 * sections stay differentiated without each one re-declaring padding.
 */
const densityPy = {
  tight: { xs: 6, lg: 8 },
  normal: { xs: 10, lg: 14 },
  loose: { xs: 10, lg: 14 },
} as const;

export default function Section({
  children,
  id,
  tone = 'light',
  width = 'lg',
  density = 'normal',
  sx,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={[
        { position: 'relative', py: densityPy[density] },
        toneSx[tone],
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container
        sx={{
          position: 'relative',
          ...(width !== 'lg' && { maxWidth: width === 'md' ? 900 : 680, mx: 'auto' }),
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
