import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { color, motion, radius, shadow } from '../../theme/tokens';

export type ArtifactVariant = 'browser' | 'phone' | 'detail';

export interface ScreenArtifactProps {
  src: string;
  alt: string;
  variant?: ArtifactVariant;
  /**
   * Aspect ratio (width / height) of the *visible* window onto the screenshot.
   * Combined with `focus`, this is how a screenshot is cropped — the source
   * image is never letterboxed and never distorted.
   */
  ratio?: number;
  /** CSS object-position for the crop, e.g. `'50% 0%'` to pin to the top. */
  focus?: string;
  /** Label shown in the frame's chrome. */
  label?: string;
  /** Caption below the frame — used to mark demo data. */
  note?: string;
  onDark?: boolean;
}

const RATIO_DEFAULT: Record<ArtifactVariant, number> = {
  browser: 16 / 10,
  phone: 415 / 900,
  detail: 4 / 3,
};

/**
 * Frames a real product screenshot.
 *
 * Cropping is intentional and load-bearing: several source screenshots contain
 * student names, guardian phone numbers and addresses, so panels pin the crop
 * to the regions of the UI that carry no personal data. Change `ratio`/`focus`
 * only after checking what the new crop exposes.
 */
export default function ScreenArtifact({
  src,
  alt,
  variant = 'browser',
  ratio,
  focus = '50% 0%',
  label,
  note,
  onDark = false,
}: ScreenArtifactProps) {
  const aspect = ratio ?? RATIO_DEFAULT[variant];
  const isPhone = variant === 'phone';

  const image = (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        aspectRatio: `${aspect}`,
        bgcolor: color.neutral[0],
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: focus,
          transition: `transform ${motion.slow} ${motion.ease}`,
        }}
      />
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          borderRadius: isPhone ? '38px' : `${radius['2xl']}px`,
          overflow: 'hidden',
          bgcolor: isPhone ? color.neutral[950] : color.neutral[0],
          p: isPhone ? '10px' : 0,
          border: `1px solid ${onDark ? 'rgba(255,255,255,0.14)' : color.surface.lineStrong}`,
          boxShadow: onDark ? shadow.onDark : shadow.artifact,
          maxWidth: isPhone ? 300 : 'none',
          mx: isPhone ? 'auto' : 0,
          '&:hover img': { transform: 'scale(1.02)' },
        }}
      >
        {variant === 'browser' && (
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              alignItems: 'center',
              px: 2,
              py: 1.25,
              bgcolor: color.surface.muted,
              borderBottom: `1px solid ${color.surface.line}`,
            }}
          >
            <Stack direction="row" spacing={0.75} sx={{ flexShrink: 0 }}>
              {[0, 1, 2].map((d) => (
                <Box
                  key={d}
                  sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color.neutral[300] }}
                />
              ))}
            </Stack>

            {label && (
              <Typography
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 650,
                  color: color.neutral[500],
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </Typography>
            )}
          </Stack>
        )}

        {isPhone ? (
          <Box sx={{ borderRadius: '28px', overflow: 'hidden' }}>{image}</Box>
        ) : (
          image
        )}
      </Box>

      {note && (
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 1.75,
            textAlign: isPhone ? 'center' : 'left',
            color: onDark ? 'rgba(255,255,255,0.42)' : color.neutral[500],
          }}
        >
          {note}
        </Typography>
      )}
    </Box>
  );
}
