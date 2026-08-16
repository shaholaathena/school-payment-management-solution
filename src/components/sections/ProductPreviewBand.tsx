import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Play } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { color, radius, shadow } from '../../theme/tokens';
import dashboardHero from '../../assets/images/dashboard-hero.png';

export default function ProductPreviewBand() {
  return (
    <Box component="section" id="preview" sx={{ bgcolor: color.surface.canvas, py: { xs: 8, lg: 12 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: { xs: 560, sm: 620, lg: 760 },
              px: { xs: 3, sm: 5, lg: 8 },
              pt: { xs: 7, sm: 8, lg: 10 },
              borderRadius: { xs: `${radius.panel}px`, md: '32px' },
              bgcolor: '#F1EAF8',
            }}
          >
            <Box sx={{ maxWidth: 920, mx: 'auto', textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#17003F',
                  fontSize: { xs: '2.35rem', sm: '3.2rem', lg: '4.25rem' },
                  lineHeight: 1.12,
                  letterSpacing: 0,
                  textWrap: 'balance',
                }}
              >
                Collect fees and manage every payment easily
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  mt: 3,
                  mx: 'auto',
                  maxWidth: 780,
                  color: 'rgba(23,0,63,0.58)',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                }}
              >
                Give administrators one clear view of dues, collections, reports and reminders
                while guardians pay from a simple digital experience.
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                bottom: { xs: -120, sm: -150, lg: -220 },
                width: { xs: '112%', sm: '92%', lg: '84%' },
                maxWidth: 1120,
                transform: 'translateX(-50%)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 1.25, sm: 1.75, lg: 2.25 },
                  borderRadius: { xs: '26px 26px 0 0', md: '34px 34px 0 0' },
                  bgcolor: '#111',
                  boxShadow: '0 34px 90px -36px rgba(23,0,63,0.58)',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: { xs: '18px 18px 0 0', md: '24px 24px 0 0' },
                    bgcolor: '#fff',
                    border: '1px solid rgba(255,255,255,0.16)',
                  }}
                >
                  <Box
                    component="img"
                    src={dashboardHero}
                    alt="Dashboard showing school fee collection and payment reporting"
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Box>

                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: { xs: '42%', lg: '45%' },
                    width: { xs: 82, md: 126 },
                    height: { xs: 82, md: 126 },
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: '#F84F8B',
                    color: '#fff',
                    boxShadow: shadow.lift,
                  }}
                >
                  <Play
                    size={44}
                    fill="currentColor"
                    strokeWidth={0}
                    style={{ marginLeft: 6 }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
