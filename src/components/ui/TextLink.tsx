import type { ReactNode } from 'react';
import MuiLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { color, motion } from '../../theme/tokens';

export interface TextLinkProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onDark?: boolean;
  /** Trailing arrow that nudges right on hover */
  withArrow?: boolean;
}

/**
 * Inline directional link. The nudging arrow is the esenda-style
 * "Find Out More →" affordance used at the end of content blocks.
 */
export default function TextLink({
  children,
  to,
  href,
  onDark = false,
  withArrow = true,
}: TextLinkProps) {
  const linkProps = to
    ? { component: RouterLink, to }
    : { component: 'a' as const, href, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <MuiLink
      {...linkProps}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: onDark ? '#A9B2FF' : color.brand[600],
        '&:hover': { color: onDark ? '#C6CCFE' : color.brand[700] },
        '&:hover svg': { transform: 'translateX(3px)' },
        '& svg': { transition: `transform ${motion.base} ${motion.ease}` },
      }}
    >
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2.25} aria-hidden />}
    </MuiLink>
  );
}
