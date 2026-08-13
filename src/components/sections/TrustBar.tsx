import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import { brand } from '../../content/site';
import { color } from '../../theme/tokens';

/**
 * Institutional trust without institutional logos.
 *
 * No customer logos, counts or testimonials exist in this repository, and a
 * payment product cannot borrow credibility it has not earned. What is
 * verifiable is who built it and what it runs on, so that is the claim — set as
 * a pull quote against an indigo rule.
 */
export default function TrustBar() {
  return (
    <Section tone="light" sx={{ py: { xs: 8, lg: 10 } }}>
      <Reveal>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 3, lg: 4 }}
          sx={{
            pl: { xs: 3, sm: 4 },
            borderLeft: `2px solid ${color.brand[200]}`,
            alignItems: { lg: 'flex-end' },
            justifyContent: { lg: 'space-between' },
          }}
        >
          <Typography
            sx={{
              maxWidth: 768,
              fontFamily: 'var(--font-display)',
              fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.7rem' },
              fontWeight: 500,
              lineHeight: 1.38,
              letterSpacing: '-0.02em',
              color: color.neutral[900],
            }}
          >
            Built by{' '}
            <Box component="span" sx={{ color: color.brand[600] }}>
              {brand.parent}
            </Box>{' '}
            for educational institutions — fee collection, digital payments and financial visibility
            on one system, with payments settled through the {brand.gateway} gateway.
          </Typography>

          <Typography
            sx={{
              flexShrink: 0,
              fontSize: '0.875rem',
              lineHeight: 1.65,
              color: color.neutral[500],
              textAlign: { lg: 'right' },
            }}
          >
            Web portal · Android &amp; iOS apps
            <br />
            RESTful API · role-based access
          </Typography>
        </Stack>
      </Reveal>
    </Section>
  );
}
