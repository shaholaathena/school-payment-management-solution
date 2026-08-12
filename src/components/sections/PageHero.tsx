import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Badge from '../ui/Badge';
import { color, gradient } from '../../theme/tokens';

export interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Chips summarising what the page covers */
  tags?: string[];
  children?: ReactNode;
}

/** Dark hero band shared by every inner page, so the navbar behaves uniformly. */
export default function PageHero({ eyebrow, title, description, tags, children }: PageHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: color.ink[900],
        color: '#fff',
        backgroundImage: gradient.darkSurface,
        pt: { xs: 15, md: 19 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 78%)',
          pointerEvents: 'none',
        }}
      />

      <Container sx={{ position: 'relative' }}>
        <Box
          sx={{
            maxWidth: 760,
            // Guarded so the heading never depends on an animation to be visible
            '@media (prefers-reduced-motion: no-preference)': {
              '& > *': { opacity: 0, animation: 'pageHeroIn 650ms var(--ease) forwards' },
              '& > *:nth-of-type(1)': { animationDelay: '60ms' },
              '& > *:nth-of-type(2)': { animationDelay: '140ms' },
              '& > *:nth-of-type(3)': { animationDelay: '220ms' },
              '& > *:nth-of-type(4)': { animationDelay: '300ms' },
            },
            '@keyframes pageHeroIn': {
              from: { opacity: 0, transform: 'translateY(14px)' },
              to: { opacity: 1, transform: 'none' },
            },
          }}
        >
          <Typography
            variant="overline"
            component="p"
            sx={{ mb: 2, color: 'rgba(255,255,255,0.48)' }}
          >
            {eyebrow}
          </Typography>

          <Typography variant="h1" component="h1" sx={{ color: '#fff', mb: 3 }}>
            {title}
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.66)', maxWidth: 620 }}>
            {description}
          </Typography>

          {tags && (
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mt: 4 }}>
              {tags.map((t) => (
                <Badge key={t} tone="inverse" size="sm">
                  {t}
                </Badge>
              ))}
            </Stack>
          )}
        </Box>

        {children}
      </Container>
    </Box>
  );
}
