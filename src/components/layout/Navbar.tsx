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

const NAV_HEIGHT = 76;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const solid = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (to: string) => {
    const [path] = to.split('#');
    return path === '/' ? pathname === '/' : pathname === path;
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} component="header" sx={{ zIndex: zIndex.navbar, bgcolor: 'transparent', backgroundImage: 'none', boxShadow: 'none', pointerEvents: 'none' }}>
        <Container sx={{ pointerEvents: 'auto' }}>
          <Toolbar disableGutters sx={{ height: NAV_HEIGHT, minHeight: NAV_HEIGHT, px: { xs: 0.5, md: 0 }, borderBottom: `1px solid ${solid ? 'rgba(226,232,240,0.9)' : 'rgba(226,232,240,0.7)'}`, bgcolor: solid ? 'rgba(255,255,255,0.90)' : 'rgba(247,249,252,0.72)', backdropFilter: 'blur(18px) saturate(160%)', transition: `all ${motion.base} ${motion.easeInOut}` }}>
            <Logo />
            <Stack component="nav" aria-label="Main navigation" direction="row" spacing={0.25} sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 5, flexGrow: 1 }}>
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.to);
                return <Box key={item.to} component={RouterLink} to={item.to} aria-current={active ? 'page' : undefined} sx={{ position: 'relative', px: 1.35, py: 1, borderRadius: `${radius.md}px`, fontSize: '0.875rem', fontWeight: active ? 700 : 550, textDecoration: 'none', color: active ? color.brand[700] : color.neutral[600], transition: `all ${motion.fast} ${motion.ease}`, '&:after': { content: '""', position: 'absolute', left: 12, right: 12, bottom: 2, height: 2, borderRadius: 2, bgcolor: color.brand[600], transform: active ? 'scaleX(1)' : 'scaleX(0)', transition: `transform ${motion.fast} ${motion.ease}` }, '&:hover': { color: color.neutral[950], bgcolor: color.neutral[100] } }}>{item.label}</Box>;
              })}
            </Stack>
            <Box sx={{ flexGrow: 1, display: { lg: 'none' } }} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}><Button to="/contact">Book a Demo</Button></Box>
            <IconButton onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} sx={{ display: { lg: 'none' }, ml: 1, color: color.neutral[900] }}><Menu size={22} strokeWidth={2} /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} transitionDuration={{ enter: 260, exit: 200 }} slotProps={{ paper: { sx: { width: { xs: '100%', sm: 400 }, bgcolor: color.ink[900], color: '#fff', px: 3, py: 2.5 } } }}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 5 }}><Logo onDark /><IconButton onClick={() => setOpen(false)} aria-label="Close menu" sx={{ color: '#fff' }}><X size={22} /></IconButton></Stack>
        <Stack component="nav" aria-label="Mobile navigation" spacing={0.5}>{NAV_ITEMS.map((item, i) => <Box key={item.to} component={RouterLink} to={item.to} onClick={() => setOpen(false)} sx={{ py: 1.75, px: 1, borderRadius: `${radius.md}px`, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)', opacity: 0, animation: `navItemIn ${motion.slow} ${motion.ease} forwards`, animationDelay: `${70 + i * 45}ms`, '@keyframes navItemIn': { from: { opacity: 0, transform: 'translateX(14px)' }, to: { opacity: 1, transform: 'none' } }, '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' } }}><Typography sx={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: isActive(item.to) ? '#A9B2FF' : '#fff' }}>{item.label}</Typography></Box>)}</Stack>
        <Box sx={{ mt: 5 }}><Button to="/contact" size="lg" fullWidth onClick={() => setOpen(false)}>Book a Demo</Button></Box>
      </Drawer>
    </>
  );
}
