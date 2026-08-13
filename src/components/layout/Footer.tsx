import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Eyebrow from '../ui/Eyebrow';
import { brand, CONTACT, FOOTER_LINKS, LEGAL_LINKS } from '../../content/site';
import { color, font, motion } from '../../theme/tokens';

const linkSx = {
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: color.neutral[500],
  transition: `color ${motion.base} ${motion.ease}`,
  '&:hover': { color: color.brand[700] },
} as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        bgcolor: color.surface.muted,
        borderTop: `1px solid ${color.surface.line}`,
        py: { xs: 7, lg: 8 },
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.3fr 2fr' },
            gap: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: font.display,
                fontSize: '1.125rem',
                fontWeight: 600,
                letterSpacing: '-0.018em',
                color: color.neutral[900],
              }}
            >
              {brand.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 1.5, maxWidth: 320, color: color.neutral[500] }}
            >
              {brand.tagline}
            </Typography>

            <Typography variant="body2" sx={{ mt: 2.5, color: color.neutral[500] }}>
              {CONTACT.address}
              <br />
              {CONTACT.email} · {CONTACT.phone}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
              gap: 4,
            }}
          >
            {FOOTER_LINKS.map((group) => (
              <Box key={group.heading}>
                <Eyebrow size="sm">{group.heading}</Eyebrow>

                <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0, mt: 2 }}>
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
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{
            mt: 6,
            pt: 3,
            borderTop: `1px solid ${color.surface.line}`,
            justifyContent: 'space-between',
            alignItems: { sm: 'center' },
          }}
        >
          <Typography variant="caption" sx={{ color: color.neutral[500] }}>
            © {new Date().getFullYear()} {brand.parent}. All rights reserved.
          </Typography>

          <Stack component="ul" direction="row" spacing={2.5} sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {LEGAL_LINKS.map((l) => (
              <Box component="li" key={l.label}>
                <Box component={RouterLink} to={l.to} sx={{ ...linkSx, fontSize: '0.75rem' }}>
                  {l.label}
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
