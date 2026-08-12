import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { color, font, radius } from '../../theme/tokens';

export interface LogoProps {
  onDark?: boolean;
  /** Hides the wordmark, keeping only the mark */
  markOnly?: boolean;
}

/**
 * Wordmark. Placeholder mark — swap the glyph for the official
 * SSLWIRELESS / product logo asset when available.
 */
export default function Logo({ onDark = false, markOnly = false }: LogoProps) {
  return (
    <Box
      component={RouterLink}
      to="/"
      aria-label={`${'Education Payments'} — home`}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.25,
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <Box
        aria-hidden
        sx={{
          width: 34,
          height: 34,
          flexShrink: 0,
          borderRadius: `${radius.md}px`,
          display: 'grid',
          placeItems: 'center',
          background: `linear-gradient(135deg, ${color.brand[600]} 0%, ${color.brand[500]} 60%, ${color.accent[500]} 100%)`,
          color: '#fff',
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: '-0.04em',
        }}
      >
        EP
      </Box>

      {!markOnly && (
        <Typography
          component="span"
          sx={{
            fontFamily: font.display,
            fontWeight: 800,
            fontSize: '1.0625rem',
            letterSpacing: '-0.028em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            color: onDark ? '#fff' : color.neutral[900],
          }}
        >
          Education Payments
        </Typography>
      )}
    </Box>
  );
}
