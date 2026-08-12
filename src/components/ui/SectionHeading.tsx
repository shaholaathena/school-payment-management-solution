import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
  as = 'h2',
  children,
}: SectionHeadingProps) {
  const { ref, props } = useReveal();

  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        textAlign: align,
        maxWidth: align === 'center' ? 720 : 640,
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 6, md: 8 },
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          component="p"
          sx={{ mb: 1.5, color: onDark ? 'rgba(255,255,255,0.5)' : color.brand[600] }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography variant={as === 'h1' ? 'h1' : 'h2'} component={as} sx={{ color: 'inherit' }}>
        {title}
      </Typography>

      {description && (
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2.5,
            color: onDark ? 'rgba(255,255,255,0.66)' : color.neutral[600],
            maxWidth: align === 'center' ? 620 : 560,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {description}
        </Typography>
      )}

      {children && <Box sx={{ mt: 4 }}>{children}</Box>}
    </Box>
  );
}
