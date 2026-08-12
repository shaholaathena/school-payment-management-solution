import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';
import Button from '../ui/Button';
import { brand, CONTACT, FOOTER_LINKS, LEGAL_LINKS } from '../../content/site';
import { color, motion, radius } from '../../theme/tokens';

const linkSx = { fontSize: '0.875rem', textDecoration: 'none', color: 'rgba(255,255,255,0.56)', transition: `color ${motion.fast} ${motion.ease}`, '&:hover': { color: '#fff' } } as const;

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: color.ink[900], color: '#fff', pt: { xs: 6, md: 8 }, pb: 3, mt: 'auto', backgroundImage: 'radial-gradient(circle at 80% 0%, rgba(99,102,241,.16), transparent 32%)' }}>
      <Container>
        <Box sx={{ mb: { xs: 7, md: 9 }, p: { xs: 3, md: 5 }, borderRadius: `${radius['2xl']}px`, background: 'linear-gradient(135deg, rgba(99,102,241,.18), rgba(6,182,212,.08))', border: '1px solid rgba(255,255,255,.10)' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}><Typography variant="h3" sx={{ color: '#fff', maxWidth: '14ch', mb: 1.5 }}>Make the next payment cycle simpler.</Typography><Typography variant="body2" sx={{ color: 'rgba(255,255,255,.56)', maxWidth: '55ch' }}>See how the platform fits your institution's fee structure and payment workflow.</Typography></Grid>
            <Grid size={{ xs: 12, md: 4 }}><Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1.25} sx={{ alignItems: { md: 'flex-end' } }}><Button to="/contact" size="lg">Book a Demo</Button><Button to="/features" variant="inverse" size="lg">Explore Features</Button></Stack></Grid>
          </Grid>
        </Box>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}><Logo onDark /><Typography variant="body2" sx={{ mt: 2.5, mb: 3, maxWidth: 320, color: 'rgba(255,255,255,.48)' }}>{brand.tagline}</Typography><Stack spacing={1.25}>{[{ Icon: Mail, value: CONTACT.email }, { Icon: Phone, value: CONTACT.phone }, { Icon: MapPin, value: CONTACT.address }].map(({ Icon, value }) => <Stack key={value} direction="row" spacing={1.25} sx={{ alignItems: 'center' }}><Icon size={14} color={color.neutral[500]} /><Typography variant="body2" sx={{ color: 'rgba(255,255,255,.50)' }}>{value}</Typography></Stack>)}</Stack></Grid>
          {FOOTER_LINKS.map((group) => <Grid size={{ xs: 6, md: 2.4 }} key={group.heading}><Typography variant="overline" component="p" sx={{ mb: 2, color: 'rgba(255,255,255,.34)' }}>{group.heading}</Typography><Stack spacing={1.35}>{group.links.map((link) => <Box key={`${group.heading}-${link.label}`} component={RouterLink} to={link.to} sx={linkSx}>{link.label}</Box>)}</Stack></Grid>)}
          <Grid size={{ xs: 12, md: 2.8 }}><Typography variant="overline" component="p" sx={{ mb: 2, color: 'rgba(255,255,255,.34)' }}>Payments</Typography><Typography variant="body2" sx={{ color: 'rgba(255,255,255,.50)', mb: 1.5 }}>Processed through {brand.gateway}</Typography><Stack direction="row" sx={{ flexWrap: 'wrap', gap: .75 }}>{['Visa', 'Mastercard', 'bKash', 'Nagad', 'Rocket', 'Net Banking'].map((m) => <Box key={m} sx={{ px: 1, py: .5, borderRadius: '7px', border: '1px solid rgba(255,255,255,.11)', fontSize: '.67rem', fontWeight: 650, color: 'rgba(255,255,255,.46)' }}>{m}</Box>)}</Stack></Grid>
        </Grid>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,.08)', justifyContent: 'space-between', alignItems: { md: 'center' } }}><Typography variant="caption" sx={{ color: 'rgba(255,255,255,.32)' }}>© {new Date().getFullYear()} {brand.parent}. All rights reserved.</Typography><Stack direction="row" spacing={2.5} sx={{ flexWrap: 'wrap' }}>{LEGAL_LINKS.map((l) => <Box key={l.label} component={RouterLink} to={l.to} sx={{ ...linkSx, fontSize: '.78rem' }}>{l.label}</Box>)}</Stack><ArrowUpRight size={16} color="rgba(255,255,255,.30)" /></Stack>
      </Container>
    </Box>
  );
}
