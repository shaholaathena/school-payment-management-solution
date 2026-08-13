import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Building2, FileCheck2, Users, Wallet, type LucideIcon } from 'lucide-react';
import { color, font, motion, radius, shadow } from '../../theme/tokens';

/**
 * The hero visual: the four parties in a school payment, drawn as a single
 * closed loop rather than a collage of product screenshots.
 *
 * Geometry is expressed once, in a 0–100 coordinate space, and shared by the
 * SVG connector and the DOM nodes — the container is locked to a square aspect
 * ratio so percentage positions and viewBox units stay in register at every
 * breakpoint.
 */

interface EcosystemNode {
  icon: LucideIcon;
  label: string;
  meta: string;
  /** Position in the 0–100 coordinate space */
  x: number;
  y: number;
}

const NODES: EcosystemNode[] = [
  { icon: Building2, label: 'School', meta: 'Publishes the fee', x: 24, y: 24 },
  { icon: Users, label: 'Parents', meta: 'Notified, then pay', x: 76, y: 24 },
  { icon: Wallet, label: 'Payment', meta: 'Through SSLCOMMERZ', x: 76, y: 76 },
  { icon: FileCheck2, label: 'Record', meta: 'Settled and traceable', x: 24, y: 76 },
];

/** Rounded square through the four node centres, drawn clockwise from due north. */
const LOOP =
  'M 50 24 H 58 A 18 18 0 0 1 76 42 V 58 A 18 18 0 0 1 58 76 H 42 A 18 18 0 0 1 24 58 V 42 A 18 18 0 0 1 42 24 Z';

/** Measured length of LOOP — 64 units of straight edge plus four quarter arcs. */
const LOOP_LENGTH = 177;

export default function EcosystemVisual() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { xs: 330, sm: 420, md: 520 },
        mx: 'auto',
        aspectRatio: '1 / 1',
      }}
    >
      {/* Soft ground so the loop sits on light rather than floating on nothing */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: '-14%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.95) 0%, rgba(245,246,254,0.75) 42%, rgba(245,246,254,0) 70%)',
        }}
      />

      <Box
        component="svg"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
      >
        {/* Spokes: every party resolves to the same record in the middle */}
        {NODES.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke={color.brand[400]}
            strokeWidth="0.4"
            strokeOpacity="0.18"
            strokeDasharray="1.5 2.5"
          />
        ))}

        <path d={LOOP} stroke={color.brand[200]} strokeWidth="1.1" strokeLinecap="round" />

        <Box
          component="path"
          d={LOOP}
          className="ecosystem-pulse"
          stroke={color.brand[600]}
          strokeWidth="1.8"
          strokeLinecap="round"
          sx={{ '--pulse-dash': `9 ${LOOP_LENGTH - 9}`, '--pulse-len': `${LOOP_LENGTH}` }}
        />
      </Box>

      {/* Centre — the platform every party writes to */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 76, sm: 92, md: 108 },
          height: { xs: 76, sm: 92, md: 108 },
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          bgcolor: color.neutral[0],
          border: `1px solid ${color.surface.line}`,
          boxShadow: '0 18px 40px -18px rgba(30,27,75,0.30)',
        }}
      >
        <Box
          sx={{
            width: { xs: 40, sm: 48, md: 56 },
            height: { xs: 40, sm: 48, md: 56 },
            borderRadius: `${radius.lg}px`,
            display: 'grid',
            placeItems: 'center',
            background: `linear-gradient(140deg, ${color.brand[600]} 0%, ${color.brand[500]} 55%, ${color.accent[500]} 100%)`,
            color: color.neutral[0],
            fontFamily: font.display,
            fontWeight: 800,
            fontSize: { xs: '0.9rem', md: '1.1rem' },
            letterSpacing: '-0.04em',
            boxShadow: '0 8px 18px -8px rgba(79,70,229,0.6)',
          }}
        >
          EP
        </Box>
      </Box>

      {NODES.map(({ icon: Icon, label, meta, x, y }) => (
        <Box
          key={label}
          sx={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%)',
            width: { xs: 132, sm: 154, md: 176 },
            px: { xs: 1.5, md: 2 },
            py: { xs: 1.25, md: 1.75 },
            borderRadius: `${radius.lg}px`,
            bgcolor: color.neutral[0],
            border: `1px solid ${color.surface.line}`,
            boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 14px 28px -16px rgba(30,27,75,0.28)',
            transition: `transform ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}`,
            '&:hover': {
              transform: 'translate(-50%, -50%) translateY(-3px)',
              boxShadow: shadow.lg,
            },
          }}
        >
          <Box
            sx={{
              width: { xs: 28, md: 32 },
              height: { xs: 28, md: 32 },
              mb: 1,
              borderRadius: `${radius.sm}px`,
              display: 'grid',
              placeItems: 'center',
              bgcolor: color.brand[50],
              color: color.brand[600],
            }}
          >
            <Icon size={16} strokeWidth={1.9} aria-hidden />
          </Box>

          <Typography
            sx={{
              fontFamily: font.display,
              fontSize: { xs: '0.8125rem', md: '0.9375rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: color.neutral[950],
            }}
          >
            {label}
          </Typography>
          <Typography
            sx={{
              mt: 0.25,
              fontSize: { xs: '0.6875rem', md: '0.75rem' },
              lineHeight: 1.4,
              color: color.neutral[500],
            }}
          >
            {meta}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
