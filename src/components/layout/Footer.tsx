import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';
import { brand, CONTACT, FOOTER_LINKS, LEGAL_LINKS } from '../../content/site';
import { color, motion, radius } from '../../theme/tokens';

const linkSx = {
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: 'rgba(255,255,255,0.56)',
  transition: `color ${motion.fast} ${motion.ease}`,
  '&:hover': { color: '#fff' },
} as const;

const CONTACT_ROWS = [
  { Icon: Mail, value: CONTACT.email },
  { Icon: Phone, value: CONTACT.phone },
  { Icon: MapPin, value: CONTACT.address },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: color.ink[900],
        color: '#fff',
        mt: 'auto',
        pt: { xs: 8, md: 11 },
        pb: 4,
        backgroundImage: 'radial-gradient(ellipse 60% 100% at 85% 0%, rgba(99,102,241,0.14), transparent 60%)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))',
            },
            gap: { xs: 5, lg: 6 },
          }}
        >
          <Box>
            <Logo onDark />

            <Typography
              variant="body2"
              sx={{ mt: 2.5, mb: 3.5, maxWidth: 320, color: 'rgba(255,255,255,0.48)', lineHeight: 1.7 }}
            >
              {brand.tagline}
            </Typography>

            <Stack spacing={1.5}>
              {CONTACT_ROWS.map(({ Icon, value }) => (
                <Stack key={value} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Icon size={14} color={color.neutral[500]} aria-hidden />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.50)' }}>
                    {value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {FOOTER_LINKS.map((group) => (
            <Box key={group.heading}>
              <Typography
                variant="overline"
                component="p"
                sx={{ mb: 2.5, color: 'rgba(255,255,255,0.34)' }}
              >
                {group.heading}
              </Typography>

              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', m: 0, p: 0 }}>
                {group.links.map((link) => (
                  <Box component="li" key={`${group.heading}-${link.label}`}>
                    <Box component={RouterLink} to={link.to} sx={linkSx}>
                      {link.label}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            justifyContent: 'space-between',
            alignItems: { md: 'center' },
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.32)' }}>
            © {new Date().getFullYear()} {brand.parent}. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            sx={{ flexWrap: 'wrap', gap: 2.5, alignItems: 'center' }}
          >
            <Box
              sx={{
                px: 1.25,
                py: 0.5,
                borderRadius: `${radius.sm}px`,
                border: '1px solid rgba(255,255,255,0.11)',
                fontSize: '0.6875rem',
                fontWeight: 650,
                color: 'rgba(255,255,255,0.46)',
              }}
            >
              Payments by {brand.gateway}
            </Box>

            {LEGAL_LINKS.map((l) => (
              <Box key={l.label} component={RouterLink} to={l.to} sx={{ ...linkSx, fontSize: '0.78rem' }}>
                {l.label}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
