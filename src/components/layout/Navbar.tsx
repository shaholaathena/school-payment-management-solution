import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from './Logo';
import { brand, CTA, NAV_ITEMS } from '../../content/site';
import { color, motion, radius, zIndex } from '../../theme/tokens';

const NAV_HEIGHT = 72;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 16 });

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (to: string) => {
    const [path] = to.split('#');
    return path === '/' ? pathname === '/' : pathname === path;
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="header"
        sx={{
          zIndex: zIndex.navbar,
          // Transparent over the hero, opaque once the page moves — the bar
          // should never draw a hard edge across the hero on first paint.
          bgcolor: scrolled ? 'rgba(255,255,255,0.86)' : 'transparent',
          backgroundImage: 'none',
          borderBottom: `1px solid ${scrolled ? color.surface.line : 'transparent'}`,
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          transition: `background-color ${motion.base} ${motion.easeInOut}, border-color ${motion.base} ${motion.easeInOut}`,
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ height: NAV_HEIGHT, minHeight: NAV_HEIGHT, gap: 1 }}
          >
            <Logo />

            <Stack
              component="nav"
              aria-label="Main navigation"
              direction="row"
              spacing={0.25}
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 4, flexGrow: 1 }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.to);

                return (
                  <Box
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    sx={{
                      position: 'relative',
                      px: 1.5,
                      py: 1,
                      borderRadius: `${radius.sm}px`,
                      fontSize: '0.875rem',
                      fontWeight: active ? 700 : 550,
                      textDecoration: 'none',
                      color: active ? color.neutral[950] : color.neutral[600],
                      transition: `color ${motion.fast} ${motion.ease}`,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 4,
                        height: 2,
                        borderRadius: 2,
                        bgcolor: color.brand[600],
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'center',
                        transition: `transform ${motion.base} ${motion.ease}`,
                      },
                      '&:hover': { color: color.neutral[950] },
                      '&:hover::after': { transform: 'scaleX(1)' },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Stack>

            <Box sx={{ flexGrow: 1, display: { lg: 'none' } }} />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button to="/contact" endIcon={<ArrowRight size={15} />}>
                {CTA.primary}
              </Button>
            </Box>

            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              sx={{
                display: { lg: 'none' },
                color: color.neutral[900],
                border: `1px solid ${color.surface.line}`,
                borderRadius: `${radius.sm}px`,
                bgcolor: 'rgba(255,255,255,0.7)',
              }}
            >
              <Menu size={20} strokeWidth={2} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{ enter: 260, exit: 200 }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '100%', sm: 400 },
              bgcolor: color.ink[900],
              backgroundImage:
                'radial-gradient(at 90% 4%, rgba(79,70,229,0.30) 0px, transparent 55%)',
              color: '#fff',
              px: 3,
              py: 2,
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between', height: NAV_HEIGHT, mb: 3 }}
        >
          <Logo onDark />
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu" sx={{ color: '#fff' }}>
            <X size={22} />
          </IconButton>
        </Stack>

        <Stack component="nav" aria-label="Mobile navigation" spacing={0}>
          {NAV_ITEMS.map((item, i) => {
            const active = isActive(item.to);

            return (
              <Box
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
                sx={{
                  py: 2,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  opacity: 0,
                  animation: `navItemIn ${motion.slow} ${motion.ease} forwards`,
                  animationDelay: `${70 + i * 45}ms`,
                  '@keyframes navItemIn': {
                    from: { opacity: 0, transform: 'translateX(14px)' },
                    to: { opacity: 1, transform: 'none' },
                  },
                  '@media (prefers-reduced-motion: reduce)': { opacity: 1, animation: 'none' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    color: active ? '#A9B2FF' : '#fff',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Stack>

        <Box sx={{ mt: 4 }}>
          <Button to="/contact" size="lg" fullWidth onClick={() => setOpen(false)}>
            {CTA.primary}
          </Button>
          <Typography
            variant="caption"
            sx={{ display: 'block', mt: 2.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65 }}
          >
            {brand.tagline}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
