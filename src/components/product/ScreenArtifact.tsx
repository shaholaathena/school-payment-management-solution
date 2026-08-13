import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { color, motion, radius, shadow } from '../../theme/tokens';

export interface ScreenArtifactProps {
  src?: string;
  alt?: string;
  /** Custom React component to render inside the artifact instead of an image. */
  children?: React.ReactNode;
  /**
   * Crops the screenshot to a window of this aspect ratio (width / height).
   * Omit to show the image whole, which is the default treatment.
   */
  ratio?: number;
  /** CSS object-position for the crop, e.g. `'50% 0%'` to pin to the top. */
  focus?: string;
  /** Constrains width — used for the portrait mobile screenshot. */
  maxWidth?: number;
  /** Caption below the frame. */
  note?: string;
  /** Adds a classic browser window header (macOS style dots) to make raw screenshots look more premium. */
  browserFrame?: boolean;
}

/**
 * Frames a real product screenshot: 16px radius, hairline border, lifted
 * shadow, and a slow scale on hover. This is the `.shot` treatment from the
 * approved design — a screenshot is presented as an artifact, never as a card.
 */
export default function ScreenArtifact({
  src,
  alt,
  children,
  ratio,
  focus = '50% 0%',
  maxWidth,
  note,
  browserFrame = false,
}: ScreenArtifactProps) {
  return (
    <Box sx={{ maxWidth, mx: maxWidth ? 'auto' : 0 }}>
      <Box
        sx={{
          borderRadius: `${radius.shot}px`,
          border: '1px solid rgba(16,26,47,0.10)',
          boxShadow: shadow.lift,
          overflow: 'hidden',
          bgcolor: color.surface.card, // Ensure white background for the frame header
          '&:hover .screenshot-img': { transform: 'scale(1.02)' },
        }}
      >
        {browserFrame && (
          <Box
            sx={{
              height: 36,
              bgcolor: '#F8FAFC',
              borderBottom: '1px solid rgba(16,26,47,0.06)',
              display: 'flex',
              alignItems: 'center',
              px: 2,
              gap: 1,
            }}
          >
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#EF4444' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#F59E0B' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22C55E' }} />
          </Box>
        )}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            ...(ratio && { aspectRatio: `${ratio}`, overflow: 'hidden' }),
          }}
        >
          {children ? (
            children
          ) : (
            <Box
              className="screenshot-img"
              component="img"
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              sx={{
                display: 'block',
                width: '100%',
                ...(ratio
                  ? { height: '100%', objectFit: 'cover', objectPosition: focus }
                  : { height: 'auto' }),
                transition: `transform ${motion.slow} ${motion.ease}`,
              }}
            />
          )}
        </Box>
      </Box>

      {note && (
        <Typography
          variant="caption"
          sx={{ display: 'block', mt: 1.75, color: color.neutral[500] }}
        >
          {note}
        </Typography>
      )}
    </Box>
  );
}
