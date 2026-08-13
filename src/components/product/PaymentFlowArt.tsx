import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BellRing, Check, TrendingUp } from 'lucide-react';
import { color, font, radius, shadow, vivid } from '../../theme/tokens';

/**
 * A vivid vector illustration of a payment settling — built from styled DOM and
 * gradients rather than a photo or a screenshot, per the "illustrations" and
 * "go vivid" direction.
 *
 * The amounts and labels are illustrative, not real customer data: this is a
 * drawn scene, the way the inspiration floats made-up UI cards over its art.
 * Kept generic (no card numbers, no named person) so nothing reads as a real
 * record on a real payment product.
 */
export default function PaymentFlowArt() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 480,
        mx: 'auto',
        aspectRatio: '5 / 5',
      }}
    >
      {/* Gradient blobs behind the scene */}
      <Box
        sx={{
          position: 'absolute',
          inset: '6% 4% 10% 6%',
          borderRadius: '46% 54% 52% 48% / 52% 46% 54% 48%',
          background: 'linear-gradient(140deg, rgba(0,153,242,0.16) 0%, rgba(57,183,203,0.14) 60%, rgba(157,155,231,0.16) 100%)',
          filter: 'blur(6px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 150,
          height: 150,
          right: '4%',
          top: '2%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(157,155,231,0.34), transparent 68%)',
        }}
      />

      {/* Dotted grid */}
      <Box
        sx={{
          position: 'absolute',
          left: '2%',
          bottom: '6%',
          width: 96,
          height: 96,
          backgroundImage: `radial-gradient(${color.brand[300]} 1.6px, transparent 1.6px)`,
          backgroundSize: '16px 16px',
          opacity: 0.7,
        }}
      />

      {/* Central app card */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(-3deg)',
          width: { xs: 220, sm: 250 },
          borderRadius: `${radius.panel}px`,
          overflow: 'hidden',
          bgcolor: color.surface.card,
          boxShadow: shadow.lift,
        }}
      >
        <Box sx={{ backgroundImage: gradientHeader(), px: 2.5, pt: 2.5, pb: 3, color: '#fff' }}>
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.85, textTransform: 'uppercase' }}>
            Total fee
          </Typography>
          <Typography sx={{ mt: 0.5, fontFamily: font.display, fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            ৳ 3,000.00
          </Typography>
        </Box>

        <Box sx={{ p: 2.5 }}>
          {['Tuition fee', 'Exam fee', 'Transport'].map((label, i) => (
            <Stack
              key={label}
              direction="row"
              sx={{
                justifyContent: 'space-between',
                py: 1,
                borderTop: i === 0 ? 'none' : `1px solid ${color.surface.line}`,
              }}
            >
              <Typography sx={{ fontSize: '0.8125rem', color: color.neutral[600] }}>{label}</Typography>
              <Typography sx={{ fontSize: '0.8125rem', fontWeight: 700, color: color.neutral[900] }}>
                ৳ 1,000
              </Typography>
            </Stack>
          ))}

          <Box
            sx={{
              mt: 2,
              py: 1.25,
              borderRadius: `${radius.pill}px`,
              textAlign: 'center',
              backgroundImage: vivid.gradients[0],
              color: '#fff',
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: '0.875rem',
              boxShadow: `0 12px 22px -10px ${vivid.glows[0]}`,
            }}
          >
            Pay now
          </Box>
        </Box>
      </Box>

      {/* Floating chip — payment received */}
      <FloatingCard
        icon={<Check size={16} strokeWidth={3} />}
        gradient={vivid.gradients[3]}
        glow={vivid.glows[3]}
        title="Payment received"
        meta="Reconciled to student"
        sx={{ top: '8%', left: '-2%' }}
      />

      {/* Floating chip — reminder sent */}
      <FloatingCard
        icon={<BellRing size={16} strokeWidth={2.2} />}
        gradient={vivid.gradients[2]}
        glow={vivid.glows[2]}
        title="Reminder sent"
        meta="SMS + email"
        sx={{ bottom: '12%', right: '-4%' }}
      />

      {/* Floating chip — collection up */}
      <FloatingCard
        icon={<TrendingUp size={16} strokeWidth={2.4} />}
        gradient={vivid.gradients[1]}
        glow={vivid.glows[1]}
        title="Collection"
        meta="This month"
        compact
        sx={{ top: '46%', right: '-6%' }}
      />
    </Box>
  );
}

function gradientHeader() {
  return 'linear-gradient(135deg, #0077C4 0%, #0099F2 60%, #39B7CB 100%)';
}

function FloatingCard({
  icon,
  gradient,
  glow,
  title,
  meta,
  compact = false,
  sx,
}: {
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  title: string;
  meta: string;
  compact?: boolean;
  sx?: object;
}) {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        position: 'absolute',
        zIndex: 3,
        alignItems: 'center',
        px: 1.5,
        py: 1.15,
        borderRadius: `${radius.lg}px`,
        bgcolor: color.surface.card,
        border: `1px solid ${color.surface.line}`,
        boxShadow: shadow.lift,
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 34,
          height: 34,
          flexShrink: 0,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          backgroundImage: gradient,
          color: '#fff',
          boxShadow: `0 8px 16px -6px ${glow}`,
        }}
      >
        {icon}
      </Box>
      {!compact && (
        <Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: color.neutral[900], lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '0.65rem', color: color.neutral[500] }}>{meta}</Typography>
        </Box>
      )}
    </Stack>
  );
}
