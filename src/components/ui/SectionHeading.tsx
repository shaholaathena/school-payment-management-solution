import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Eyebrow from './Eyebrow';
import useReveal from '../../hooks/useReveal';
import { color } from '../../theme/tokens';

export interface SectionHeadingProps {
  /** ALL-CAPS micro-label above the title */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Use on dark / brand sections */
  onDark?: boolean;
  /** Rendered heading level — keeps the document outline correct */
  as?: 'h1' | 'h2' | 'h3';
  /**
   * Caps the measure of the title. Editorial headlines want a short line —
   * roughly 16–20 characters per line reads as deliberate rather than wrapped.
   */
  titleMaxWidth?: number | string;
  /** Removes the default bottom margin when the caller owns the spacing */
  flush?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
  as = 'h2',
  titleMaxWidth,
  flush = false,
  children,
}: SectionHeadingProps) {
  const { ref, props } = useReveal();
  const centered = align === 'center';

  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        textAlign: align,
        maxWidth: centered ? 720 : 640,
        mx: centered ? 'auto' : 0,
        mb: flush ? 0 : { xs: 6, md: 8 },
      }}
    >
      {eyebrow && (
        <Box sx={{ mb: 2 }}>
          <Eyebrow onDark={onDark} rule={!centered}>
            {eyebrow}
          </Eyebrow>
        </Box>
      )}

      <Typography
        variant={as === 'h1' ? 'h1' : 'h2'}
        component={as}
        sx={{
          color: 'inherit',
          maxWidth: titleMaxWidth,
          mx: centered && titleMaxWidth ? 'auto' : 0,
          textWrap: 'balance',
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2.5,
            color: onDark ? 'rgba(255,255,255,0.66)' : color.neutral[600],
            maxWidth: centered ? 620 : 560,
            mx: centered ? 'auto' : 0,
          }}
        >
          {description}
        </Typography>
      )}

      {children && <Box sx={{ mt: 4 }}>{children}</Box>}
    </Box>
  );
}
