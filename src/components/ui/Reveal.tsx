import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import useReveal from '../../hooks/useReveal';

export interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms — use `index * 70` inside mapped lists */
  delay?: number;
  sx?: SxProps<Theme>;
}

/** Declarative wrapper around useReveal for scroll-in animation. */
export default function Reveal({ children, delay = 0, sx }: RevealProps) {
  const { ref, props } = useReveal(delay);

  return (
    <Box ref={ref} {...props} sx={sx}>
      {children}
    </Box>
  );
}
