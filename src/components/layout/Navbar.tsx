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
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from './Logo';
import { NAV_ITEMS } from '../../content/site';
import { color, motion, radius, zIndex } from '../../theme/tokens';

const NAV_HEIGHT = 72;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  /** Solid once the hero band is behind us. */
  const solid = useScrollTrigger({ disableHysteresis: true, threshold: 24 });

  // Close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname, hash]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (to: string) => {
    const [path] = to.split('#');
    if (path === '/') return pathname === '/';
    return pathname === path;
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="header"
        sx={{
          zIndex: zIndex.navbar,
          bgcolor: solid ? 'rgba(255,255,255,0.86)' : 'transparent',
          backgroundImage: 'none',
          backdropFilter: solid ? 'saturate(180%) blur(14px)' : 'none',
          borderBottom: '1px solid',
          borderColor: solid ? color.neutral[200] : 'transparent',
          transition: `background-color ${motion.base} ${motion.easeInOut}, border-color ${motion.base} ${motion.easeInOut}`,
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: NAV_HEIGHT, minHeight: NAV_HEIGHT }}>
            <Logo onDark={!solid} />

            {/* Desktop nav */}
            <Stack
              component="nav"
              aria-label="Main navigation"
              direction="row"
              spacing={0.25}
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 5, flexGrow: 1 }}
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
                      px: 1.5,
                      py: 1,
                      borderRadius: `${radius.sm}px`,
                      fontSize: '0.9375rem',
                      fontWeight: active ? 650 : 500,
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      color: solid
                        ? active
                          ? color.brand[700]
                          : color.neutral[600]
                        : active
                          ? '#fff'
                          : 'rgba(255,255,255,0.72)',
                      transition: `color ${motion.fast} ${motion.ease}, background-color ${motion.fast} ${motion.ease}`,
                      '&:hover': {
                        color: solid ? color.neutral[900] : '#fff',
                        bgcolor: solid ? color.neutral[100] : 'rgba(255,255,255,0.10)',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Stack>

            <Box sx={{ flexGrow: 1, display: { lg: 'none' } }} />

            {/* Desktop CTA */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button to="/contact" variant={solid ? 'primary' : 'inverse'}>
                Book a Demo
              </Button>
            </Box>

            {/* Mobile toggle */}
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              sx={{
                display: { lg: 'none' },
                ml: 1,
                color: solid ? color.neutral[900] : '#fff',
              }}
            >
              <Menu size={22} strokeWidth={2} aria-hidden />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
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
                'radial-gradient(at 80% 0%, rgba(0,153,242,0.30) 0px, transparent 55%)',
              color: '#fff',
              px: 3,
              py: 2.5,
            },
          },
        }}
      >
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
          <Logo onDark />
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu" sx={{ color: '#fff' }}>
            <X size={22} strokeWidth={2} aria-hidden />
          </IconButton>
        </Stack>

        <Stack component="nav" aria-label="Mobile navigation" spacing={0.5}>
          {NAV_ITEMS.map((item, i) => (
            <Box
              key={item.to}
              component={RouterLink}
              to={item.to}
              onClick={() => setOpen(false)}
              sx={{
                py: 1.75,
                px: 1,
                borderRadius: `${radius.md}px`,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                // staggered slide-in
                opacity: 0,
                animation: `navItemIn ${motion.slow} ${motion.ease} forwards`,
                animationDelay: `${80 + i * 55}ms`,
                '@keyframes navItemIn': {
                  from: { opacity: 0, transform: 'translateX(16px)' },
                  to: { opacity: 1, transform: 'none' },
                },
                '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: isActive(item.to) ? color.brand[300] : '#fff',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ mt: 5 }}>
          <Button to="/contact" size="lg" fullWidth onClick={() => setOpen(false)}>
            Book a Demo
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
