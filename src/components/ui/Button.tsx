import { forwardRef } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';
import { color, motion, radius, shadow } from '../../theme/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size' | 'color' | 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Internal route — renders a react-router Link */
  to?: string;
  /** External URL — renders an anchor */
  href?: string;
}

/** Fixed heights rather than padding-derived ones, so rows of buttons align. */
const sizeSx: Record<ButtonSize, SxProps<Theme>> = {
  sm: { height: 38, px: 2.25, fontSize: '0.875rem' },
  md: { height: 44, px: 3.5, fontSize: '0.95rem' },
  lg: { height: 48, px: 3.5, fontSize: '0.95rem' },
};

const variantSx: Record<ButtonVariant, SxProps<Theme>> = {
  /** Flat indigo. The approved design has no gradient buttons. */
  primary: {
    color: color.surface.canvas,
    bgcolor: color.brand[600],
    boxShadow: shadow.soft,
    fontWeight: 600,
    '&:hover': { bgcolor: color.brand[700], boxShadow: shadow.soft },
    '&.Mui-disabled': { bgcolor: color.neutral[200], color: color.neutral[400], boxShadow: 'none' },
  },
  secondary: {
    color: color.neutral[900],
    bgcolor: color.surface.card,
    border: `1px solid ${color.surface.line}`,
    fontWeight: 500,
    '&:hover': {
      bgcolor: color.surface.card,
      borderColor: color.brand[300],
      color: color.brand[600],
    },
  },
  ghost: {
    color: color.neutral[500],
    bgcolor: 'transparent',
    fontWeight: 500,
    '&:hover': { bgcolor: color.surface.well, color: color.neutral[900] },
  },
  /** For ink surfaces */
  inverse: {
    color: color.ink.foreground,
    bgcolor: 'transparent',
    border: `1px solid rgba(243,245,249,0.25)`,
    fontWeight: 500,
    '&:hover': { bgcolor: 'rgba(243,245,249,0.10)', borderColor: 'rgba(243,245,249,0.4)' },
  },
};

/**
 * The single button primitive. Renders as `<button>`, a router `<Link>`, or an
 * `<a>` depending on which of `to` / `href` is supplied.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', to, href, sx, ...rest },
  ref
) {
  const linkProps = to
    ? { component: RouterLink, to }
    : href
      ? { component: 'a' as const, href, target: '_blank', rel: 'noopener noreferrer' }
      : {};

  return (
    <MuiButton
      ref={ref}
      disableElevation
      {...linkProps}
      sx={[
        {
          borderRadius: `${radius.md}px`,
          textTransform: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: 0,
          transition: `background-color ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease}`,
        },
        sizeSx[size],
        variantSx[variant],
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    />
  );
});

export default Button;
