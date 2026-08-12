import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { brand, CONTACT, FOOTER_LINKS, LEGAL_LINKS } from '../../content/site';
import { color, motion } from '../../theme/tokens';

const linkSx = {
  fontSize: '0.9375rem',
  textDecoration: 'none',
  color: 'rgba(255,255,255,0.58)',
  transition: `color ${motion.fast} ${motion.ease}`,
  '&:hover': { color: '#fff' },
} as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: color.ink[900], color: '#fff', pt: { xs: 8, md: 11 }, pb: 4, mt: 'auto' }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Logo onDark />
            <Typography
              variant="body2"
              sx={{ mt: 2.5, mb: 3, maxWidth: 320, color: 'rgba(255,255,255,0.56)' }}
            >
              {brand.tagline}
            </Typography>

            <Stack spacing={1.25}>
              {[
                { Icon: Mail, value: CONTACT.email },
                { Icon: Phone, value: CONTACT.phone },
                { Icon: MapPin, value: CONTACT.address },
              ].map(({ Icon, value }) => (
                <Stack key={value} direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                  <Icon size={14} strokeWidth={2} aria-hidden style={{ color: color.neutral[500], flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.56)' }}>
                    {value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <Grid size={{ xs: 6, md: 2.4 }} key={group.heading}>
              <Typography
                variant="overline"
                component="p"
                sx={{ mb: 2.25, color: 'rgba(255,255,255,0.38)' }}
              >
                {group.heading}
              </Typography>
              <Stack spacing={1.5}>
                {group.links.map((link) => (
                  <Box key={`${group.heading}-${link.label}`} component={RouterLink} to={link.to} sx={linkSx}>
                    {link.label}
                  </Box>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Payment methods */}
          <Grid size={{ xs: 12, md: 2.8 }}>
            <Typography variant="overline" component="p" sx={{ mb: 2.25, color: 'rgba(255,255,255,0.38)' }}>
              Payments
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.56)', mb: 1.5 }}>
              Processed through {brand.gateway}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
              {['Visa', 'Mastercard', 'bKash', 'Nagad', 'Rocket', 'Net Banking'].map((m) => (
                <Box
                  key={m}
                  sx={{
                    px: 1,
                    py: 0.5,
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.13)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.52)',
                  }}
                >
                  {m}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3.5,
            borderTop: '1px solid rgba(255,255,255,0.09)',
            justifyContent: 'space-between',
            alignItems: { md: 'center' },
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.36)' }}>
            © {new Date().getFullYear()} {brand.parent}. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', gap: 1.5 }}>
            {LEGAL_LINKS.map((l) => (
              <Box
                key={l.label}
                component={RouterLink}
                to={l.to}
                sx={{ ...linkSx, fontSize: '0.8125rem' }}
              >
                {l.label}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
