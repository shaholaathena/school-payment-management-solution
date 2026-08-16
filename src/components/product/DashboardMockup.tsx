import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Bell, LayoutGrid, Search } from 'lucide-react';
import { color, radius } from '../../theme/tokens';
import {
  ACTIVITY,
  COLLECTION_SERIES,
  OVERVIEW_STATS,
  SIDEBAR_NAV,
  TRANSACTIONS,
  type TxStatus,
} from './mockData';

export interface DashboardMockupProps {
  /** `overview` for the hero, `transactions` for the product showcase */
  view?: 'overview' | 'transactions';
  /** Hides the sidebar — useful in narrow compositions */
  compact?: boolean;
}

const STATUS_TONE: Record<TxStatus, { bg: string; fg: string }> = {
  Paid: { bg: 'rgba(16,185,129,0.12)', fg: color.success[700] },
  Pending: { bg: 'rgba(245,158,11,0.14)', fg: color.warning[700] },
  Overdue: { bg: 'rgba(239,68,68,0.12)', fg: color.danger[700] },
};

const STAT_ACCENT = {
  brand: color.brand[600],
  success: color.success[600],
  warning: color.warning[600],
} as const;

function Panel({
  children,
  label,
  action,
}: {
  children: React.ReactNode;
  label: string;
  action?: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: color.neutral[0],
        border: `1px solid ${color.neutral[200]}`,
        borderRadius: `${radius.md}px`,
        p: 1.5,
      }}
    >
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 1.25 }}>
        <Typography sx={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', color: color.neutral[400] }}>
          {label.toUpperCase()}
        </Typography>
        {action && (
          <Typography sx={{ fontSize: 8.5, fontWeight: 600, color: color.brand[600] }}>{action}</Typography>
        )}
      </Stack>
      {children}
    </Box>
  );
}

export default function DashboardMockup({ view = 'overview', compact = false }: DashboardMockupProps) {
  const maxSeries = Math.max(...COLLECTION_SERIES.map((d) => d.value));

  return (
    <Stack direction="row" sx={{ minHeight: { xs: 300, sm: 380 }, bgcolor: color.neutral[50] }}>
      {/* Sidebar */}
      {!compact && (
        <Box
          sx={{
            width: 148,
            flexShrink: 0,
            bgcolor: color.ink[900],
            py: 1.75,
            px: 1.25,
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Stack direction="row" spacing={0.875} sx={{ alignItems: 'center', mb: 2.25, px: 0.5 }}>
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: '5px',
                display: 'grid',
                placeItems: 'center',
                background: `linear-gradient(135deg, ${color.brand[600]}, ${color.brand[500]})`,
                color: '#fff',
                flexShrink: 0,
              }}
            >
              <LayoutGrid size={10} strokeWidth={2.5} aria-hidden />
            </Box>
            <Typography sx={{ fontSize: 9.5, fontWeight: 700, color: '#fff' }} noWrap>
              School Portal
            </Typography>
          </Stack>

          <Stack spacing={0.125}>
            {SIDEBAR_NAV.map((item, i) => {
              const active = view === 'overview' ? i === 0 : i === 6;
              return (
                <Box
                  key={item}
                  sx={{
                    px: 1,
                    py: 0.625,
                    borderRadius: '6px',
                    bgcolor: active ? 'rgba(11,160,243,0.24)' : 'transparent',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 8.75,
                      fontWeight: active ? 600 : 400,
                      color: active ? color.brand[300] : 'rgba(255,255,255,0.46)',
                    }}
                    noWrap
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}

      {/* Main panel */}
      <Box sx={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Top bar */}
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: 1,
            px: 1.75,
            py: 1.25,
            bgcolor: color.neutral[0],
            borderBottom: `1px solid ${color.neutral[200]}`,
          }}
        >
          <Typography sx={{ fontSize: 11.5, fontWeight: 700, color: color.neutral[900] }}>
            {view === 'overview' ? 'Fee Collection Overview' : 'Transactions Overview'}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search size={11} strokeWidth={2.2} aria-hidden style={{ color: color.neutral[400] }} />
          <Box sx={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
            <Bell size={11} strokeWidth={2.2} aria-hidden style={{ color: color.neutral[400] }} />
            <Box
              sx={{
                position: 'absolute',
                top: -1,
                right: -2,
                width: 5,
                height: 5,
                borderRadius: '50%',
                bgcolor: color.danger[500],
              }}
            />
          </Box>
        </Stack>

        <Box sx={{ p: 1.75, display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
          {/* Stat tiles */}
          <Stack direction="row" spacing={1.25}>
            {OVERVIEW_STATS.map((s) => (
              <Box
                key={s.label}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  bgcolor: color.neutral[0],
                  border: `1px solid ${color.neutral[200]}`,
                  borderRadius: `${radius.md}px`,
                  p: 1.25,
                  borderTop: `2px solid ${STAT_ACCENT[s.tone]}`,
                }}
              >
                {/* wraps rather than truncates — at 390px three tiles cannot
                    fit these labels on one line */}
                <Typography
                  sx={{
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    lineHeight: 1.3,
                    color: color.neutral[400],
                  }}
                >
                  {s.label.toUpperCase()}
                </Typography>
                <Typography
                  sx={{ fontSize: 13, fontWeight: 800, letterSpacing: '-0.02em', color: color.neutral[900], whiteSpace: 'nowrap' }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: s.metaTone === 'success' ? color.success[600] : color.warning[600],
                  }}
                  noWrap
                >
                  {s.meta}
                </Typography>
              </Box>
            ))}
          </Stack>

          {view === 'overview' ? (
            <>
              {/* Chart */}
              <Panel label="Monthwise dues collection" action="2026">
                <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-end', height: 62 }}>
                  {COLLECTION_SERIES.map((d, i) => {
                    const peak = d.value === maxSeries;
                    return (
                      <Stack key={d.month} sx={{ flex: 1, alignItems: 'center', gap: 0.375 }}>
                        <Box
                          sx={{
                            width: '100%',
                            height: `${(d.value / maxSeries) * 52}px`,
                            borderRadius: '3px 3px 0 0',
                            background: peak
                              ? `linear-gradient(180deg, ${color.brand[500]}, ${color.brand[700]})`
                              : `linear-gradient(180deg, ${color.neutral[200]}, ${color.neutral[100]})`,
                            transition: 'height 600ms var(--ease)',
                            transitionDelay: `${i * 40}ms`,
                          }}
                        />
                        <Typography sx={{ fontSize: 6.25, color: color.neutral[400] }}>{d.month}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Panel>

              {/* Recent activity */}
              <Panel label="Recent activity" action="View all">
                <Stack spacing={0.875}>
                  {ACTIVITY.map((a) => (
                    <Stack key={a.text} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          flexShrink: 0,
                          bgcolor:
                            a.tone === 'success'
                              ? color.success[500]
                              : a.tone === 'warning'
                                ? color.warning[500]
                                : color.brand[500],
                        }}
                      />
                      <Typography sx={{ fontSize: 8.75, color: color.neutral[700], flexGrow: 1 }} noWrap>
                        {a.text}
                      </Typography>
                      <Typography sx={{ fontSize: 7.75, color: color.neutral[400], flexShrink: 0 }}>
                        {a.time}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Panel>
            </>
          ) : (
            /* Transactions table */
            <Box
              sx={{
                bgcolor: color.neutral[0],
                border: `1px solid ${color.neutral[200]}`,
                borderRadius: `${radius.md}px`,
                overflow: 'hidden',
                flexGrow: 1,
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ px: 1.5, py: 0.875, bgcolor: color.neutral[50], borderBottom: `1px solid ${color.neutral[200]}` }}
              >
                {[
                  { l: 'Student', w: 62 },
                  { l: 'Fee', w: 0 },
                  { l: 'Method', w: 52 },
                  { l: 'Amount', w: 48 },
                  { l: 'Status', w: 46 },
                ].map((h) => (
                  <Typography
                    key={h.l}
                    sx={{
                      fontSize: 7.5,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: color.neutral[400],
                      width: h.w || undefined,
                      flexGrow: h.w ? 0 : 1,
                      flexShrink: 0,
                      display: h.w === 52 ? { xs: 'none', sm: 'block' } : 'block',
                    }}
                  >
                    {h.l.toUpperCase()}
                  </Typography>
                ))}
              </Stack>

              {TRANSACTIONS.map((t, i) => (
                <Stack
                  key={t.ref}
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    px: 1.5,
                    py: 0.875,
                    borderTop: i === 0 ? 'none' : `1px solid ${color.neutral[100]}`,
                  }}
                >
                  <Box sx={{ width: 62, flexShrink: 0 }}>
                    <Typography sx={{ fontSize: 8.5, fontWeight: 700, color: color.neutral[900] }}>
                      {t.ref}
                    </Typography>
                    <Typography sx={{ fontSize: 7, color: color.neutral[400] }} noWrap>
                      {t.cohort}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: 8.5, color: color.neutral[600], flexGrow: 1, minWidth: 0 }} noWrap>
                    {t.feeType}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 8, color: color.neutral[500], width: 52, flexShrink: 0, display: { xs: 'none', sm: 'block' } }}
                    noWrap
                  >
                    {t.method}
                  </Typography>
                  <Typography sx={{ fontSize: 8.5, fontWeight: 700, color: color.neutral[700], width: 48, flexShrink: 0 }}>
                    {t.amount}
                  </Typography>
                  <Box
                    sx={{
                      width: 46,
                      flexShrink: 0,
                      textAlign: 'center',
                      py: 0.25,
                      borderRadius: '5px',
                      bgcolor: STATUS_TONE[t.status].bg,
                    }}
                  >
                    <Typography sx={{ fontSize: 7, fontWeight: 700, color: STATUS_TONE[t.status].fg }}>
                      {t.status}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
