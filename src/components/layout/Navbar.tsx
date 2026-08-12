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
        <Container sx={{ pointerEvents: 'auto', mt: { xs: 1, md: 1.5 } }}>
          <Toolbar disableGutters sx={{ height: NAV_HEIGHT, minHeight: NAV_HEIGHT, px: { xs: 1.25, md: 1.5 }, borderRadius: `${radius.xl}px`, bgcolor: solid ? 'rgba(255,255,255,0.88)' : 'rgba(15,18,45,0.42)', backdropFilter: 'blur(20px) saturate(160%)', border: `1px solid ${solid ? 'rgba(15,18,45,0.08)' : 'rgba(255,255,255,0.12)'}`, boxShadow: solid ? '0 10px 34px rgba(15,18,45,0.10)' : '0 10px 34px rgba(0,0,0,0.12)', transition: `all ${motion.base} ${motion.easeInOut}` }}>
            <Logo onDark={!solid} />
            <Stack component="nav" aria-label="Main navigation" direction="row" spacing={0.25} sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 4, flexGrow: 1 }}>
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.to);
                return <Box key={item.to} component={RouterLink} to={item.to} aria-current={active ? 'page' : undefined} sx={{ px: 1.35, py: 1, borderRadius: `${radius.md}px`, fontSize: '0.875rem', fontWeight: active ? 700 : 550, textDecoration: 'none', color: solid ? (active ? color.brand[700] : color.neutral[600]) : (active ? '#fff' : 'rgba(255,255,255,0.72)'), transition: `all ${motion.fast} ${motion.ease}`, '&:hover': { color: solid ? color.neutral[900] : '#fff', bgcolor: solid ? color.neutral[100] : 'rgba(255,255,255,0.10)' } }}>{item.label}</Box>;
              })}
            </Stack>
            <Box sx={{ flexGrow: 1, display: { lg: 'none' } }} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}><Button to="/contact" variant={solid ? 'primary' : 'inverse'}>Book a Demo</Button></Box>
            <IconButton onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} sx={{ display: { lg: 'none' }, ml: 1, color: solid ? color.neutral[900] : '#fff' }}><Menu size={22} strokeWidth={2} /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} transitionDuration={{ enter: 260, exit: 200 }} slotProps={{ paper: { sx: { width: { xs: '100%', sm: 400 }, bgcolor: color.ink[900], backgroundImage: 'radial-gradient(circle at 90% 0%, rgba(99,102,241,0.32), transparent 38%)', color: '#fff', px: 3, py: 2.5 } } }}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 5 }}><Logo onDark /><IconButton onClick={() => setOpen(false)} aria-label="Close menu" sx={{ color: '#fff' }}><X size={22} /></IconButton></Stack>
        <Stack component="nav" aria-label="Mobile navigation" spacing={0.5}>{NAV_ITEMS.map((item, i) => <Box key={item.to} component={RouterLink} to={item.to} onClick={() => setOpen(false)} sx={{ py: 1.75, px: 1, borderRadius: `${radius.md}px`, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)', opacity: 0, animation: `navItemIn ${motion.slow} ${motion.ease} forwards`, animationDelay: `${70 + i * 45}ms`, '@keyframes navItemIn': { from: { opacity: 0, transform: 'translateX(14px)' }, to: { opacity: 1, transform: 'none' } }, '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' } }}><Typography sx={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: isActive(item.to) ? '#A9B2FF' : '#fff' }}>{item.label}</Typography></Box>)}</Stack>
        <Box sx={{ mt: 5 }}><Button to="/contact" size="lg" fullWidth onClick={() => setOpen(false)}>Book a Demo</Button></Box>
      </Drawer>
    </>
  );
}
