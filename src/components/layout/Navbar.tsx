import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from './Logo';
import { brand, CTA, NAV_ITEMS } from '../../content/site';
import { color, layout, motion, radius, zIndex } from '../../theme/tokens';

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

  /**
   * Exact match on path *and* hash. Two items can share a path — "How it works"
   * (`/how-it-works`) and "Security" (`/how-it-works#technology`) — so matching
   * on path alone would light both up at once.
   */
  const isActive = (to: string) => {
    const [path, anchor] = to.split('#');
    const target = path === '' ? '/' : path;
    if (pathname !== target) return false;
    return anchor ? hash === `#${anchor}` : hash === '';
  };

  /**
   * The bar is only transparent over the landing page's light hero. Inner pages
   * open on a dark `PageHero`, where transparent navy-on-navy links would be
   * unreadable — so those get the solid treatment from the first frame.
   */
  const transparent = pathname === '/' && !scrolled;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="header"
        sx={{
          zIndex: zIndex.navbar,
          // Transparent over the hero, opaque once the page moves, so the bar
          // never draws a hard edge across the hero on first paint.
          bgcolor: transparent ? 'transparent' : 'rgba(253,253,255,0.86)',
          backgroundImage: 'none',
          borderBottom: `1px solid ${transparent ? 'transparent' : color.surface.line}`,
          backdropFilter: transparent ? 'none' : 'blur(16px) saturate(180%)',
          transition: `background-color ${motion.base} ${motion.easeInOut}, border-color ${motion.base} ${motion.easeInOut}`,
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              height: layout.navHeight,
              minHeight: layout.navHeight,
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Logo />

            <Stack
              component="nav"
              aria-label="Main navigation"
              direction="row"
              spacing={0.25}
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}
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
                      px: 1.75,
                      py: 1,
                      borderRadius: `${radius.md}px`,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: active ? color.neutral[900] : color.neutral[500],
                      transition: `color ${motion.base} ${motion.ease}`,
                      '&:hover': { color: color.neutral[900] },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}
            >
              <MuiLink
                component={RouterLink}
                to="/#product"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: color.neutral[500],
                  '&:hover': { color: color.neutral[900] },
                }}
              >
                {CTA.navSecondary}
              </MuiLink>

              <Button to="/contact">{CTA.primary}</Button>
            </Stack>

            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              sx={{
                display: { lg: 'none' },
                width: 40,
                height: 40,
                color: color.neutral[900],
                border: `1px solid ${color.surface.line}`,
                borderRadius: `${radius.md}px`,
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
              color: color.ink.foreground,
              px: 3,
              py: 2,
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: layout.navHeight,
            mb: 3,
          }}
        >
          <Logo onDark />
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            sx={{ color: color.ink.foreground }}
          >
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
                  borderBottom: '1px solid rgba(243,245,249,0.10)',
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
                    fontWeight: 600,
                    letterSpacing: '-0.022em',
                    color: active ? color.accent.sky : color.ink.foreground,
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
            sx={{ display: 'block', mt: 2.5, color: color.ink.muted, lineHeight: 1.65 }}
          >
            {brand.tagline}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
