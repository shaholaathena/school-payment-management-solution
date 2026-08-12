import type { LucideIcon } from 'lucide-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { color, motion, radius, shadow } from '../../theme/tokens';

export type FeatureCardVariant = 'default' | 'compact' | 'spotlight' | 'inverse';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Zero-padded ordinal, e.g. "04" */
  index?: string;
  /** Short outcome line, rendered in a tinted footer */
  outcome?: string;
  variant?: FeatureCardVariant;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
  outcome,
  variant = 'default',
}: FeatureCardProps) {
  const inverse = variant === 'inverse';
  const spotlight = variant === 'spotlight';
  const compact = variant === 'compact';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: compact ? 2.5 : { xs: 3, md: 3.5 },
        borderRadius: `${radius.xl}px`,
        ...(inverse
          ? {
              bgcolor: 'rgba(255,255,255,0.045)',
              borderColor: 'rgba(255,255,255,0.11)',
              boxShadow: 'none',
            }
          : spotlight
            ? {
                bgcolor: color.brand[50],
                borderColor: color.brand[100],
                boxShadow: 'none',
              }
            : {}),
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: inverse ? 'none' : shadow.lg,
          borderColor: inverse ? 'rgba(255,255,255,0.24)' : color.brand[200],
          ...(inverse && { bgcolor: 'rgba(255,255,255,0.07)' }),
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: compact ? 1.75 : 2.5,
        }}
      >
        <Box
          sx={{
            width: compact ? 40 : 44,
            height: compact ? 40 : 44,
            borderRadius: `${radius.md}px`,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            bgcolor: inverse ? 'rgba(99,102,241,0.20)' : color.brand[50],
            border: `1px solid ${inverse ? 'rgba(255,255,255,0.10)' : color.brand[100]}`,
            color: inverse ? '#A9B2FF' : color.brand[600],
            transition: `transform ${motion.base} ${motion.ease}`,
          }}
        >
          <Icon size={compact ? 19 : 21} strokeWidth={1.9} aria-hidden />
        </Box>

        {index && (
          <Typography
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: inverse ? 'rgba(255,255,255,0.34)' : color.neutral[300],
            }}
          >
            {index}
          </Typography>
        )}
      </Box>

      <Typography variant={compact ? 'h6' : 'h5'} sx={{ mb: 1, color: 'inherit' }}>
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: inverse ? 'rgba(255,255,255,0.62)' : color.neutral[600],
          flexGrow: 1,
        }}
      >
        {description}
      </Typography>

      {outcome && (
        <Box
          sx={{
            mt: 2.5,
            pt: 2,
            borderTop: `1px solid ${inverse ? 'rgba(255,255,255,0.10)' : color.neutral[200]}`,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 600,
              color: inverse ? '#A9B2FF' : color.brand[600],
            }}
          >
            {outcome}
          </Typography>
        </Box>
      )}
    </Card>
  );
}
