import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { brand } from '../../content/site';
import { color, font, radius } from '../../theme/tokens';

export interface LogoProps {
  onDark?: boolean;
  /** Hides the wordmark, keeping only the mark */
  markOnly?: boolean;
}

/**
 * Wordmark: a solid indigo mark plus a two-line lockup — product name over the
 * parent company. Placeholder mark — swap the glyph for the official
 * SSLWIRELESS / product logo asset when available.
 */
export default function Logo({ onDark = false, markOnly = false }: LogoProps) {
  return (
    <Box
      component={RouterLink}
      to="/"
      aria-label={`${brand.name} — home`}
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
          width: 36,
          height: 36,
          flexShrink: 0,
          borderRadius: `${radius.md}px`,
          display: 'grid',
          placeItems: 'center',
          bgcolor: color.brand[600],
          color: color.surface.canvas,
        }}
      >
        <Box component="svg" viewBox="0 0 24 24" fill="none" sx={{ width: 20, height: 20 }}>
          <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" fill="currentColor" opacity=".9" />
          <path
            d="M6.5 11v4.2c0 1.6 2.5 2.8 5.5 2.8s5.5-1.2 5.5-2.8V11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </Box>
      </Box>

      {!markOnly && (
        <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <Typography
            component="span"
            sx={{
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: '0.98rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
              color: onDark ? color.ink.foreground : color.neutral[900],
            }}
          >
            {brand.name}
          </Typography>

          <Typography
            component="span"
            sx={{
              mt: '2px',
              fontSize: '0.66rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              color: onDark ? color.ink.muted : color.neutral[500],
            }}
          >
            by {brand.parent}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
