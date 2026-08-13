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
  /** Caps the measure of the title, e.g. `'16ch'` */
  titleMaxWidth?: number | string;
  /** Removes the default bottom margin when the caller owns the spacing */
  flush?: boolean;
  children?: ReactNode;
}

/**
 * Section openers are left-aligned and capped at 2xl (672px) throughout the
 * approved design — a short measure over the full-width content below is what
 * gives the page its editorial feel.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
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
        maxWidth: 672,
        mx: centered ? 'auto' : 0,
        mb: flush ? 0 : { xs: 7, lg: 7 },
      }}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}

      <Typography
        variant={as === 'h1' ? 'h1' : 'h2'}
        component={as}
        sx={{
          mt: eyebrow ? 2 : 0,
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
            color: onDark ? color.ink.muted : color.neutral[500],
          }}
        >
          {description}
        </Typography>
      )}

      {children && <Box sx={{ mt: 4 }}>{children}</Box>}
    </Box>
  );
}
