import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BellRing, Check, CheckCircle2, ShieldCheck } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import BrowserFrame from '../product/BrowserFrame';
import PhoneMockup from '../product/PhoneMockup';
import dashboardHero from '../../assets/images/dashboard-hero.png';
import { color, radius, shadow } from '../../theme/tokens';

const HERO_SIGNALS = [
  {
    icon: <CheckCircle2 size={17} strokeWidth={2.5} />,
    title: 'Payment received',
    meta: 'Auto-reconciled',
  },
  {
    icon: <BellRing size={17} strokeWidth={2.25} />,
    title: 'Reminder sent',
    meta: 'SMS and email',
  },
] as const;

function HeroSignalCard({
  icon,
  title,
  meta,
  floatDelay = 0,
}: {
  icon: ReactNode;
  title: string;
  meta: string;
  floatDelay?: number;
}) {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        alignItems: 'center',
        p: 1.5,
        borderRadius: `${radius.lg}px`,
        bgcolor: 'rgba(255,255,255,0.94)',
        border: '1px solid rgba(255,255,255,0.22)',
        boxShadow: shadow.onDark,
        color: color.neutral[900],
        animation: 'signalFloat 6s ease-in-out infinite',
        animationDelay: `${floatDelay}ms`,
        '@keyframes signalFloat': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          flexShrink: 0,
          borderRadius: `${radius.md}px`,
          display: 'grid',
          placeItems: 'center',
          bgcolor: color.brand[100],
          color: color.brand[700],
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 800, lineHeight: 1.2 }} noWrap>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '0.6875rem', color: color.neutral[500] }} noWrap>
          {meta}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function HomeHero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#fff',
        color: color.neutral[900],
        pt: { xs: 13, md: 18 },
        pb: { xs: 8, md: 13 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 78% 18%, rgba(0,153,242,0.14), transparent 34%), radial-gradient(circle at 14% 70%, rgba(57,183,203,0.10), transparent 30%)',
          pointerEvents: 'none',
        }}
      />
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 7, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ '@media (prefers-reduced-motion: no-preference)': { '& > *': { opacity: 0, animation: 'heroIn 700ms var(--ease) forwards' }, '& > *:nth-of-type(1)': { animationDelay: '60ms' }, '& > *:nth-of-type(2)': { animationDelay: '150ms' }, '& > *:nth-of-type(3)': { animationDelay: '240ms' }, '& > *:nth-of-type(4)': { animationDelay: '330ms' }, '& > *:nth-of-type(5)': { animationDelay: '420ms' } }, '@keyframes heroIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'none' } } }}>
              <Box sx={{ mb: 3 }}>
                <Badge pill icon={<ShieldCheck strokeWidth={2.2} />}>
                  Powered by SSLCOMMERZ
                </Badge>
              </Box>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  maxWidth: 560,
                  fontSize: { xs: '2.75rem', sm: '3.35rem', lg: '4.2rem' },
                  lineHeight: 1.02,
                }}
              >
                Make school payments secure, simple and easy
              </Typography>
              <Typography variant="subtitle1" sx={{ color: color.neutral[500], maxWidth: 500, mb: 3.5 }}>
                Automate fee collection, give guardians a payment journey they can finish quickly,
                and see every collection in real time.
              </Typography>
              <Stack
                component="form"
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  p: 0.75,
                  border: `1px solid ${color.surface.line}`,
                  borderRadius: `${radius.lg}px`,
                  bgcolor: '#fff',
                  boxShadow: shadow.soft,
                }}
              >
                <Box
                  component="input"
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    height: 46,
                    px: 2,
                    border: 0,
                    outline: 0,
                    font: 'inherit',
                    color: color.neutral[900],
                    bgcolor: 'transparent',
                    '&::placeholder': { color: color.neutral[400] },
                  }}
                />
                <Button type="submit" to="/contact" size="lg">
                  Get Started
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 2.5, alignItems: 'center' }}>
                <Check size={15} strokeWidth={2.5} color={color.brand[600]} aria-hidden />
                <Typography variant="caption" sx={{ color: color.neutral[500] }}>
                  No card needed. Demo against your own fee structure.
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: 'relative',
                pr: { lg: 1 },
                '@media (prefers-reduced-motion: no-preference)': {
                  opacity: 0,
                  animation: 'visualIn 900ms var(--ease) 260ms forwards',
                },
                '@keyframes visualIn': {
                  from: { opacity: 0, transform: 'translateY(28px) scale(0.98)' },
                  to: { opacity: 1, transform: 'none' },
                },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: '8% -4% -7% 10%',
                  borderRadius: '40px',
                  bgcolor: color.brand[50],
                  transform: 'rotate(-3deg)',
                }}
              />
              <Box sx={{ position: 'relative', animation: 'frameFloat 8s ease-in-out infinite', '@keyframes frameFloat': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } } }}>
                <BrowserFrame url="epms.educationpayments.example">
                  <Box component="img" src={dashboardHero} alt="Education payment management dashboard overview" sx={{ display: 'block', width: '100%', height: 'auto' }} />
                </BrowserFrame>
              </Box>
              <Box sx={{ position: 'absolute', left: { md: -10, lg: -28 }, bottom: -50, display: { xs: 'none', md: 'block' } }}>
                <PhoneMockup width={176} onDark={false} />
              </Box>
              <Box sx={{ position: 'absolute', right: { md: -10, lg: -30 }, top: -18, display: { xs: 'none', md: 'block' }, width: 208 }}>
                <HeroSignalCard {...HERO_SIGNALS[0]} floatDelay={400} />
              </Box>
              <Box sx={{ position: 'absolute', right: { md: 20, lg: -8 }, bottom: -28, display: { xs: 'none', lg: 'block' }, width: 216 }}>
                <HeroSignalCard {...HERO_SIGNALS[1]} floatDelay={1600} />
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 5 }}>
              <PhoneMockup width={218} onDark={false} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
