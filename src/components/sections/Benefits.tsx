import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight } from 'lucide-react';
import MuiLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import BlobIcon from '../ui/BlobIcon';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../content/home';
import { color, motion } from '../../theme/tokens';

/**
 * A bento rather than four equal cards: the lead benefit takes a tall column on
 * the left and carries the section's call to action, while the remaining three
 * stack as wide rows beside it.
 */
export default function Benefits() {
  const [lead, ...rest] = BENEFITS;

  return (
    <Section id="benefits" tone="subtle" density="loose">
      <SectionHeading
        align="center"
        eyebrow="Capabilities"
        title="What changes once it is running"
        description="Four things institutions feel first once the platform is collecting fees for them."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: 3,
        }}
      >
        <Reveal sx={{ display: 'flex', gridRow: { lg: 'span 3' } }}>
          <Panel
            lift
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: { xs: 4, lg: 5 },
            }}
          >
            <Box>
              <BlobIcon icon={lead.icon} size="lg" variant={0} />

              <Typography
                variant="h3"
                component="h3"
                sx={{ mt: 3.5, fontSize: { xs: '1.5rem', lg: '1.75rem' } }}
              >
                {lead.title}
              </Typography>

              <Typography sx={{ mt: 2, fontSize: '1rem', lineHeight: 1.65, color: color.neutral[500] }}>
                {lead.description}
              </Typography>
            </Box>

            <MuiLink
              component={RouterLink}
              to="/contact"
              sx={{
                display: 'inline-flex',
                width: 'fit-content',
                alignItems: 'center',
                gap: 1,
                mt: 5,
                fontSize: '0.875rem',
                fontWeight: 600,
                color: color.brand[700],
                '&:hover svg': { transform: 'translateX(3px)' },
                '& svg': { transition: `transform ${motion.base} ${motion.ease}` },
              }}
            >
              Book a Demo
              <ArrowRight size={15} strokeWidth={2.25} aria-hidden />
            </MuiLink>
          </Panel>
        </Reveal>

        {rest.map((b, i) => (
          <Reveal
            key={b.title}
            delay={(i + 1) * 70}
            sx={{ display: 'flex', gridColumn: { lg: 'span 2 / -1' } }}
          >
            <Panel lift sx={{ flex: 1, p: 3.5 }}>
              <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center' }}>
                <BlobIcon icon={b.icon} size="sm" variant={i + 1} />

                <Box>
                  <Typography variant="h5" component="h3">
                    {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: color.neutral[500] }}>
                    {b.description}
                  </Typography>
                </Box>
              </Stack>
            </Panel>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
