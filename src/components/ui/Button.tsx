import { forwardRef } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';
import { color, gradient, motion, radius, shadow } from '../../theme/tokens';

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

const sizeSx: Record<ButtonSize, SxProps<Theme>> = {
  sm: { px: 1.75, py: 0.875, fontSize: '0.875rem', borderRadius: `${radius.sm}px` },
  md: { px: 2.5, py: 1.25, fontSize: '0.9375rem', borderRadius: `${radius.md}px` },
  lg: { px: 3.5, py: 1.75, fontSize: '1rem', borderRadius: `${radius.lg}px` },
};

const variantSx: Record<ButtonVariant, SxProps<Theme>> = {
  primary: {
    color: color.neutral[0],
    background: gradient.brand,
    boxShadow: shadow.brand,
    '&:hover': {
      background: `linear-gradient(135deg, ${color.brand[700]} 0%, ${color.brand[600]} 100%)`,
      boxShadow: '0 10px 24px -6px rgba(79,70,229,0.55)',
    },
    '&.Mui-disabled': { background: color.neutral[200], color: color.neutral[400], boxShadow: 'none' },
  },
  secondary: {
    color: color.neutral[900],
    background: color.neutral[0],
    border: `1px solid ${color.neutral[300]}`,
    boxShadow: shadow.xs,
    '&:hover': { background: color.neutral[50], borderColor: color.neutral[400], boxShadow: shadow.sm },
  },
  ghost: {
    color: color.neutral[600],
    background: 'transparent',
    '&:hover': { background: color.neutral[100], color: color.neutral[900] },
  },
  /** For dark surfaces */
  inverse: {
    color: color.neutral[0],
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.20)',
    backdropFilter: 'blur(6px)',
    '&:hover': { background: 'rgba(255,255,255,0.14)', borderColor: 'rgba(255,255,255,0.36)' },
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
          fontWeight: 600,
          textTransform: 'none',
          whiteSpace: 'nowrap',
          transition: `background ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}, transform ${motion.fast} ${motion.ease}`,
          '&:active': { transform: 'translateY(1px)' },
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
