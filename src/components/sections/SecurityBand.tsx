import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BlobIcon from '../ui/BlobIcon';
import Eyebrow from '../ui/Eyebrow';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { brand } from '../../content/site';
import { PAYMENT_METHODS, SECURITY_PILLARS, TECH_STACK } from '../../content/platform';
import { color, radius, vivid } from '../../theme/tokens';

/**
 * Security, technology and payment methods.
 *
 * Every claim here comes verbatim from `content/platform.ts`, which carries an
 * explicit warning against adding platform-level certification claims. The
 * gateway's own certification is a separate statement and is not made here.
 */
export default function SecurityBand() {
  return (
    <Section id="security" tone="light" sx={{ bgcolor: vivid.tint.sky }}>
      <SectionHeading
        align="center"
        eyebrow="Technology & security"
        title="Trust built into how it runs"
        description={`Payments settle through the ${brand.gateway} gateway, access is governed by role, and every transaction stays traceable to a student and a fee.`}
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: 3,
        }}
      >
        {SECURITY_PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 70} sx={{ display: 'flex' }}>
            <Panel lift sx={{ flex: 1, p: 3.5 }}>
              <BlobIcon icon={p.icon} size="sm" variant={i} />

              <Typography
                sx={{
                  mt: 2.5,
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  letterSpacing: '-0.014em',
                  color: color.neutral[900],
                }}
              >
                {p.title}
              </Typography>

              <Typography variant="body2" sx={{ mt: 1.25, color: color.neutral[500] }}>
                {p.description}
              </Typography>
            </Panel>
          </Reveal>
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
          gap: 3,
          mt: 3,
        }}
      >
        <Reveal sx={{ display: 'flex' }}>
          <Panel sx={{ flex: 1, p: { xs: 3.5, lg: 4.5 } }}>
            <Eyebrow>Technology stack</Eyebrow>

            <Box component="dl" sx={{ m: 0, mt: 3 }}>
              {TECH_STACK.map((row, i) => (
                <Stack
                  key={row.layer}
                  direction="row"
                  spacing={2}
                  sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    py: 1.5,
                    borderTop: i === 0 ? 'none' : `1px solid ${color.surface.line}`,
                  }}
                >
                  <Typography component="dt" variant="body2" sx={{ color: color.neutral[500] }}>
                    {row.layer}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="body2"
                    sx={{ m: 0, fontWeight: 500, color: color.neutral[900] }}
                  >
                    {row.value}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Panel>
        </Reveal>

        <Reveal delay={80} sx={{ display: 'flex' }}>
          <Panel sx={{ flex: 1, p: { xs: 3.5, lg: 4.5 } }}>
            <Eyebrow>Payment methods</Eyebrow>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                mt: 3,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                gap: 1.5,
              }}
            >
              {PAYMENT_METHODS.map((m) => (
                <Stack
                  key={m.name}
                  component="li"
                  direction="row"
                  spacing={1.5}
                  title={m.category}
                  sx={{
                    alignItems: 'center',
                    px: 1.75,
                    py: 1.5,
                    borderRadius: `${radius.md}px`,
                    border: `1px solid ${color.surface.line}`,
                  }}
                >
                  <Box sx={{ display: 'grid', placeItems: 'center', color: color.brand[600], flexShrink: 0 }}>
                    <m.icon size={17} strokeWidth={2} aria-hidden />
                  </Box>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: color.neutral[900] }}>
                    {m.name}
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Typography variant="caption" sx={{ display: 'block', mt: 2.5, color: color.neutral[500] }}>
              Availability follows the {brand.gateway} merchant configuration for your institution.
            </Typography>
          </Panel>
        </Reveal>
      </Box>
    </Section>
  );
}
