import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Bell, Building2, GraduationCap, Users, Wallet, type LucideIcon } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Panel from '../ui/Panel';
import { color, radius } from '../../theme/tokens';

/**
 * The hero visual: the four parties in a school payment orbiting one record.
 *
 * Node placement is deliberately off-grid — a rigid 2×2 reads as a diagram,
 * whereas the staggered positions read as a system.
 *
 * The orbit only works once the square is wide enough to seat two 190px cards
 * either side of a 230px centre panel, which is roughly 600px. Below that the
 * cards would sit on top of the centre panel and bury it, so the whole thing
 * reflows to a plain stack: centre panel first, then the four nodes as a 2×2
 * grid. Same DOM, same content, no duplicate markup for screen readers.
 */
interface EcosystemNode {
  icon: LucideIcon;
  label: string;
  meta: string;
  /** Offsets within the square, applied from `sm` up only. */
  pos: { left?: number; right?: number; top?: number; bottom?: number };
}

const NODES: EcosystemNode[] = [
  { icon: Building2, label: 'School', meta: 'Fee structures & oversight', pos: { left: 0, top: 24 } },
  { icon: Users, label: 'Parents', meta: 'Dues, reminders, payment', pos: { right: 0, top: 96 } },
  { icon: Wallet, label: 'Payments', meta: 'Card · MFS · net banking', pos: { left: 8, bottom: 80 } },
  {
    icon: GraduationCap,
    label: 'Records',
    meta: 'Student & transaction history',
    pos: { right: 8, bottom: 16 },
  },
];

/** Spoke endpoints in the 400×400 viewBox, matching the node positions. */
const SPOKES = [
  [60, 74],
  [348, 130],
  [70, 300],
  [340, 320],
] as const;

/** Staggered so the four dots arrive one at a time rather than in a burst. */
const FLOW_DELAY_MS = 1600;

/** `undefined` below sm so the grid controls placement, then the orbit offset. */
const atSm = (v: number | undefined) => (v === undefined ? undefined : { xs: 'auto', sm: v });

function NodeCard({ icon: Icon, label, meta }: EcosystemNode) {
  return (
    <Panel lift fullHeight sx={{ px: 2, py: 1.75 }}>
      <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            flexShrink: 0,
            borderRadius: `${radius.sm}px`,
            display: 'grid',
            placeItems: 'center',
            bgcolor: color.brand[100],
            color: color.brand[900],
          }}
        >
          <Icon size={16} strokeWidth={2} aria-hidden />
        </Box>

        <Typography
          sx={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '-0.014em',
            color: color.neutral[900],
          }}
        >
          {label}
        </Typography>
      </Stack>

      <Typography sx={{ mt: 1, fontSize: '0.75rem', lineHeight: 1.4, color: color.neutral[500] }}>
        {meta}
      </Typography>
    </Panel>
  );
}

function CentrePanel(): ReactNode {
  return (
    <Panel sx={{ px: 2.5, py: 2.5, textAlign: 'center' }}>
      <Eyebrow size="sm">One platform</Eyebrow>

      <Typography
        sx={{
          mt: 1,
          fontFamily: 'var(--font-display)',
          fontSize: '1.125rem',
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: '-0.018em',
          color: color.neutral[900],
        }}
      >
        Fee collection, connected end to end
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 2,
          px: 1.5,
          py: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: `${radius.md}px`,
          bgcolor: color.surface.well,
        }}
      >
        <Bell size={14} color={color.brand[600]} aria-hidden />
        <Typography sx={{ fontSize: '0.75rem', color: color.neutral[500] }}>
          Dues · reminders · records
        </Typography>
      </Stack>
    </Panel>
  );
}

export default function EcosystemVisual() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { xs: 'none', sm: 520 },
        mx: 'auto',
        aspectRatio: { xs: 'auto', sm: '1 / 1' },
        display: { xs: 'grid', sm: 'block' },
        gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'none' },
        gap: { xs: 1.5, sm: 0 },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          color: color.brand[600],
        }}
      >
        <circle
          className="eco-ring-breathe"
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeOpacity="0.14"
        />
        <circle
          className="eco-ring-spin"
          cx="200"
          cy="200"
          r="105"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeDasharray="3 7"
        />
        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeOpacity="0.12" />

        <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="1">
          {SPOKES.map(([x, y]) => (
            <path key={`${x}-${y}`} d={`M200 200 ${x} ${y}`} />
          ))}
        </g>

        {/*
          One dot per spoke, travelling from the node inward to the centre.
          `offset-path` takes the same geometry as the spoke above, so the dot
          cannot drift off the line if a node position is ever adjusted.
        */}
        {SPOKES.map(([x, y], i) => (
          <Box
            key={`flow-${x}-${y}`}
            component="circle"
            className="eco-flow"
            cx="0"
            cy="0"
            r="3"
            fill="currentColor"
            sx={{
              offsetPath: `path("M200 200 ${x} ${y}")`,
              offsetRotate: '0deg',
              animationDelay: `${i * FLOW_DELAY_MS}ms`,
            }}
          />
        ))}
      </Box>

      {/* Centre — the record every party writes to */}
      <Box
        sx={{
          position: { xs: 'static', sm: 'absolute' },
          gridColumn: { xs: '1 / -1', sm: 'auto' },
          order: { xs: -1, sm: 0 },
          left: { sm: '50%' },
          top: { sm: '50%' },
          transform: { xs: 'none', sm: 'translate(-50%, -50%)' },
          width: { xs: 'auto', sm: '54%' },
          maxWidth: { xs: 'none', sm: 230 },
        }}
      >
        <CentrePanel />
      </Box>

      {NODES.map((node, i) => (
        <Box
          key={node.label}
          // Drift lives on the positioning wrapper so it cannot fight the
          // card's own translateY on hover.
          className="eco-float"
          sx={{
            position: { xs: 'static', sm: 'absolute' },
            display: 'flex',
            width: { xs: 'auto', sm: '46%' },
            maxWidth: { xs: 'none', sm: 190 },
            left: atSm(node.pos.left),
            right: atSm(node.pos.right),
            top: atSm(node.pos.top),
            bottom: atSm(node.pos.bottom),
            animationDelay: `${i * 900}ms`,
          }}
        >
          <NodeCard {...node} />
        </Box>
      ))}
    </Box>
  );
}
