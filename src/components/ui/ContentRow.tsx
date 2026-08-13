import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { ArrowRight, Check } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import DottedGrid from './DottedGrid';
import { color, motion } from '../../theme/tokens';

export interface ContentRowProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Small bold line above the bullet list */
  subheading?: string;
  bullets?: string[];
  cta?: { label: string; to: string };
  /** The image / device / screenshot node for the visual side */
  image: ReactNode;
  /** Puts the image on the LEFT (text right). Rows alternate with this. */
  reversed?: boolean;
  /** Corner for the decorative dot field, or false to omit it */
  dotted?: 'tl' | 'br' | false;
  /** Ratio of text column to image column at lg */
  ratio?: string;
  /**
   * Heading level. `h2` for a standalone row that owns its section; `h3` when
   * several rows sit under one section intro (keeps the document outline sane).
   */
  titleAs?: 'h2' | 'h3';
}

/**
 * The Pintex `ct-01` content row: eyebrow + heading + paragraph + optional
 * sub-heading and check-bullets on one side, an image with a dotted-grid
 * decoration on the other, sides alternating via `reversed`.
 *
 * It renders only the two-column row — the section wrapper (padding, container,
 * background) is the caller's, so several rows can share one Section.
 */
export default function ContentRow({
  eyebrow,
  title,
  lead,
  subheading,
  bullets,
  cta,
  image,
  reversed = false,
  dotted = 'tl',
  ratio = '1fr 1.1fr',
  titleAs = 'h2',
}: ContentRowProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: ratio },
        columnGap: { lg: 9 },
        rowGap: { xs: 5, lg: 0 },
        alignItems: 'center',
      }}
    >
      {/* Text column */}
      <Reveal sx={{ order: { lg: reversed ? 2 : 1 } }}>
        {eyebrow && (
          <Box sx={{ mb: 2 }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Box>
        )}

        <Typography
          variant={titleAs}
          component={titleAs}
          sx={{ color: color.neutral[900], mb: 2.5 }}
        >
          {title}
        </Typography>

        {lead && (
          <Typography variant="subtitle1" sx={{ color: color.neutral[500], maxWidth: '48ch' }}>
            {lead}
          </Typography>
        )}

        {subheading && (
          <Typography
            variant="h5"
            component="p"
            sx={{ mt: 4, mb: 2, color: color.neutral[900] }}
          >
            {subheading}
          </Typography>
        )}

        {bullets && (
          <Stack
            component="ul"
            spacing={1.75}
            sx={{ listStyle: 'none', m: 0, p: 0, mt: subheading ? 0 : 4 }}
          >
            {bullets.map((b) => (
              <Stack
                key={b}
                component="li"
                direction="row"
                spacing={1.75}
                sx={{ alignItems: 'flex-start' }}
              >
                <Box
                  sx={{
                    mt: '2px',
                    width: 22,
                    height: 22,
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: color.brand[50],
                    color: color.brand[700],
                  }}
                >
                  <Check size={13} strokeWidth={2.5} aria-hidden />
                </Box>
                <Typography variant="body1" sx={{ color: color.neutral[600], lineHeight: 1.6 }}>
                  {b}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}

        {cta && (
          <MuiLink
            component={RouterLink}
            to={cta.to}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mt: 4,
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: color.brand[700],
              '&:hover svg': { transform: 'translateX(3px)' },
              '& svg': { transition: `transform ${motion.base} ${motion.ease}` },
            }}
          >
            {cta.label}
            <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
          </MuiLink>
        )}
      </Reveal>

      {/* Image column */}
      <Reveal delay={90} sx={{ order: { lg: reversed ? 1 : 2 } }}>
        <Box sx={{ position: 'relative' }}>
          {dotted && (
            <DottedGrid
              sx={{
                position: 'absolute',
                zIndex: 0,
                ...(dotted === 'tl'
                  ? { top: -18, left: -18 }
                  : { bottom: -18, right: -18 }),
                display: { xs: 'none', md: 'block' },
              }}
            />
          )}
          <Box sx={{ position: 'relative', zIndex: 1 }}>{image}</Box>
        </Box>
      </Reveal>
    </Box>
  );
}
