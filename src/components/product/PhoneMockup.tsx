import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { color, shadow } from '../../theme/tokens';
import { GUARDIAN_VIEW } from './mockData';

export interface PhoneMockupProps {
  width?: number;
  onDark?: boolean;
}

/**
 * Guardian payment view.
 *
 * PRIVACY: identifies the student by masked reference and cohort only — no
 * name, no photograph, no attendance times, no contact details. This replaces
 * `src/assets/images/app-home.png`, which showed a named minor's photograph,
 * school, ID and daily punch-in/punch-out times and cannot be published.
 */
export default function PhoneMockup({ width = 232, onDark = true }: PhoneMockupProps) {
  const s = width / 232;
  const px = (n: number) => `${n * s}px`;

  return (
    <Box
      sx={{
        width,
        flexShrink: 0,
        borderRadius: px(30),
        p: px(5),
        bgcolor: color.ink[900],
        border: `1px solid ${onDark ? 'rgba(255,255,255,0.14)' : color.neutral[300]}`,
        boxShadow: onDark ? shadow.onDark : shadow['2xl'],
      }}
    >
      <Box sx={{ borderRadius: px(25), overflow: 'hidden', bgcolor: color.neutral[0] }}>
        {/* Header */}
        <Box
          sx={{
            px: px(14),
            pt: px(10),
            pb: px(16),
            background: `linear-gradient(150deg, ${color.brand[600]} 0%, ${color.brand[500]} 55%, ${color.accent[600]} 100%)`,
          }}
        >
          {/* Notch */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: px(8) }}>
            <Box sx={{ width: px(46), height: px(4), borderRadius: px(2), bgcolor: 'rgba(255,255,255,0.32)' }} />
          </Box>

          <Typography sx={{ fontSize: px(7.5), fontWeight: 700, letterSpacing: '0.09em', color: 'rgba(255,255,255,0.7)' }}>
            GUARDIAN PORTAL
          </Typography>

          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mt: px(6) }}>
            <Box>
              <Typography sx={{ fontSize: px(11), fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                {GUARDIAN_VIEW.studentRef}
              </Typography>
              <Typography sx={{ fontSize: px(7.5), color: 'rgba(255,255,255,0.72)' }}>
                {GUARDIAN_VIEW.cohort}
              </Typography>
            </Box>
            <ChevronRight size={11 * s} strokeWidth={2.4} aria-hidden style={{ color: 'rgba(255,255,255,0.6)' }} />
          </Stack>

          <Box
            sx={{
              mt: px(11),
              p: px(10),
              borderRadius: px(11),
              bgcolor: 'rgba(255,255,255,0.16)',
              border: '1px solid rgba(255,255,255,0.20)',
            }}
          >
            <Typography sx={{ fontSize: px(7), color: 'rgba(255,255,255,0.78)', letterSpacing: '0.05em' }}>
              TOTAL OUTSTANDING
            </Typography>
            <Typography sx={{ fontSize: px(20), fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.15 }}>
              {GUARDIAN_VIEW.totalDue}
            </Typography>
            <Typography sx={{ fontSize: px(7.5), color: 'rgba(255,255,255,0.78)' }}>
              {GUARDIAN_VIEW.dueDate}
            </Typography>
          </Box>
        </Box>

        {/* Breakdown */}
        <Box sx={{ px: px(14), pt: px(11), pb: px(12) }}>
          <Typography sx={{ fontSize: px(7.5), fontWeight: 700, letterSpacing: '0.08em', color: color.neutral[400], mb: px(7) }}>
            FEE BREAKDOWN
          </Typography>

          <Stack spacing={0}>
            {GUARDIAN_VIEW.breakdown.map((b, i) => (
              <Stack
                key={b.item}
                direction="row"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  py: px(6.5),
                  borderTop: i === 0 ? 'none' : `1px solid ${color.neutral[100]}`,
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontSize: px(8.5), fontWeight: 600, color: color.neutral[800] }} noWrap>
                    {b.item}
                  </Typography>
                  <Typography sx={{ fontSize: px(7), color: color.neutral[400] }}>{b.period}</Typography>
                </Box>
                <Typography sx={{ fontSize: px(8.5), fontWeight: 700, color: color.neutral[900], flexShrink: 0 }}>
                  {b.amount}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Typography sx={{ fontSize: px(7.5), fontWeight: 700, letterSpacing: '0.08em', color: color.neutral[400], mt: px(11), mb: px(6) }}>
            PAY WITH
          </Typography>

          <Stack spacing={px(4.5)}>
            {GUARDIAN_VIEW.methods.map((m) => (
              <Stack
                key={m}
                direction="row"
                spacing={px(6)}
                sx={{
                  alignItems: 'center',
                  px: px(8),
                  py: px(6),
                  borderRadius: px(8),
                  border: `1px solid ${color.neutral[200]}`,
                }}
              >
                <Box sx={{ width: px(6), height: px(6), borderRadius: '50%', bgcolor: color.neutral[300], flexShrink: 0 }} />
                <Typography sx={{ fontSize: px(8), fontWeight: 600, color: color.neutral[700] }}>{m}</Typography>
              </Stack>
            ))}
          </Stack>

          {/* Pay CTA */}
          <Box
            sx={{
              mt: px(11),
              py: px(9),
              borderRadius: px(9),
              textAlign: 'center',
              background: `linear-gradient(135deg, ${color.brand[600]}, ${color.brand[500]})`,
            }}
          >
            <Typography sx={{ fontSize: px(9.5), fontWeight: 700, color: '#fff' }}>Pay Now</Typography>
          </Box>

          <Stack direction="row" spacing={px(4)} sx={{ alignItems: 'center', justifyContent: 'center', mt: px(7) }}>
            <ShieldCheck size={8 * s} strokeWidth={2.3} aria-hidden style={{ color: color.success[600] }} />
            <Typography sx={{ fontSize: px(6.75), color: color.neutral[400] }}>
              Secured by SSLCOMMERZ
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
