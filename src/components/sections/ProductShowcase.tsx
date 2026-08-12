import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart3, Receipt, Smartphone } from 'lucide-react';
import BrowserFrame from '../product/BrowserFrame';
import DashboardMockup from '../product/DashboardMockup';
import PhoneMockup from '../product/PhoneMockup';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { color, motion, radius } from '../../theme/tokens';

type ViewKey = 'overview' | 'transactions' | 'guardian';

const VIEWS: { key: ViewKey; label: string; caption: string; icon: typeof BarChart3 }[] = [
  {
    key: 'overview',
    label: 'Collection overview',
    caption: 'Received, outstanding and monthwise collection at a glance.',
    icon: BarChart3,
  },
  {
    key: 'transactions',
    label: 'Transactions',
    caption: 'Every payment traceable to a student, a fee and a method.',
    icon: Receipt,
  },
  {
    key: 'guardian',
    label: 'Guardian app',
    caption: 'What a parent sees — dues, breakdown and payment.',
    icon: Smartphone,
  },
];

export default function ProductShowcase() {
  const [view, setView] = useState<ViewKey>('overview');

  return (
    <Section id="product" tone="dark">
      <SectionHeading
        eyebrow="Inside the product"
        title="A real working environment, not a slide"
        description="Switch between the views your team and your parents actually use."
        onDark
      />

      <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: 'center' }}>
        {/* View switcher */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={1.5}>
            {VIEWS.map((v) => {
              const isActive = v.key === view;
              return (
                <Box
                  key={v.key}
                  component="button"
                  type="button"
                  onClick={() => setView(v.key)}
                  aria-pressed={isActive}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    p: 2.25,
                    borderRadius: `${radius.lg}px`,
                    bgcolor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.09)'}`,
                    transition: `background-color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      flexShrink: 0,
                      borderRadius: `${radius.sm}px`,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: isActive ? color.brand[600] : 'rgba(255,255,255,0.07)',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                      transition: `background-color ${motion.base} ${motion.ease}`,
                    }}
                  >
                    <v.icon size={17} strokeWidth={2} aria-hidden />
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.78)', mb: 0.25 }}
                    >
                      {v.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      {v.caption}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Grid>

        {/* Viewport */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Reveal>
            <Box
              key={view}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                animation: `viewSwap ${motion.slow} ${motion.ease}`,
                '@keyframes viewSwap': {
                  from: { opacity: 0, transform: 'translateY(10px)' },
                  to: { opacity: 1, transform: 'none' },
                },
              }}
            >
              {view === 'guardian' ? (
                <PhoneMockup width={268} />
              ) : (
                <Box sx={{ width: '100%' }}>
                  <BrowserFrame onDark>
                    <DashboardMockup view={view} />
                  </BrowserFrame>
                </Box>
              )}
            </Box>
          </Reveal>

          <Typography
            variant="caption"
            sx={{ display: 'block', mt: 3, textAlign: 'center', color: 'rgba(255,255,255,0.36)' }}
          >
            Interface shown with synthetic data — no real student records.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
