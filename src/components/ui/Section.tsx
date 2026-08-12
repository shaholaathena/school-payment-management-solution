import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { SxProps, Theme } from '@mui/material/styles';
import { color, gradient } from '../../theme/tokens';

export type SectionTone = 'light' | 'subtle' | 'dark' | 'brand';
export type SectionWidth = 'sm' | 'md' | 'lg';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  width?: SectionWidth;
  /** Vertical padding scale. `tight` for stat bars and logo rows. */
  density?: 'tight' | 'normal' | 'loose';
  sx?: SxProps<Theme>;
}

const toneSx: Record<SectionTone, SxProps<Theme>> = {
  light: { bgcolor: color.neutral[0], color: color.neutral[900] },
  subtle: { bgcolor: color.neutral[50], color: color.neutral[900] },
  dark: {
    bgcolor: color.ink[900],
    color: color.neutral[0],
    backgroundImage: gradient.darkSurface,
  },
  brand: {
    color: color.neutral[0],
    backgroundImage: `linear-gradient(140deg, ${color.brand[800]} 0%, ${color.brand[600]} 52%, ${color.accent[600]} 100%)`,
  },
};

const densityPy = {
  tight: { xs: 5, md: 7 },
  normal: { xs: 10, md: 16 },
  loose: { xs: 12, md: 20 },
} as const;

/**
 * Every page section goes through this wrapper — it owns the vertical rhythm
 * and the light/subtle/dark alternation, so sections stay visually
 * differentiated without each one re-declaring padding and background.
 */
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
      <Container maxWidth={width === 'lg' ? 'lg' : width === 'md' ? 'md' : 'sm'} sx={{ position: 'relative' }}>
        {children}
      </Container>
    </Box>
  );
}
