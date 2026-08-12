import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Info } from 'lucide-react';
import Badge from '../components/ui/Badge';
import PaymentCard from '../components/ui/PaymentCard';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/sections/CtaBand';
import PageHero from '../components/sections/PageHero';
import PhoneMockup from '../components/product/PhoneMockup';
import { JOURNEY, PAYMENT_METHODS, SECURITY_PILLARS, TECH_STACK } from '../content/platform';
import { color, radius, shadow } from '../theme/tokens';

/** Connected 5-step journey. Rail runs behind the markers on desktop. */
function Journey() {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* horizontal rail (lg+) */}
      <Box
        aria-hidden
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'absolute',
          top: 27,
          left: '10%',
          right: '10%',
          height: 2,
          background: `linear-gradient(90deg, ${color.brand[200]}, ${color.brand[400]}, ${color.accent[400]})`,
          borderRadius: 2,
        }}
      />

      <Grid container spacing={{ xs: 3, lg: 2 }} sx={{ position: 'relative' }}>
        {JOURNEY.map((s, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 12 / 5 }} key={s.step}>
            <Reveal delay={i * 90}>
              <Stack
                direction={{ xs: 'row', lg: 'column' }}
                spacing={{ xs: 2.5, lg: 0 }}
                sx={{ alignItems: { xs: 'flex-start', lg: 'center' }, textAlign: { lg: 'center' } }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: color.neutral[0],
                    border: `2px solid ${color.brand[200]}`,
                    boxShadow: shadow.md,
                    mb: { lg: 3 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 800,
                      color: color.brand[700],
                    }}
                  >
                    {s.step}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Box sx={{ mb: 1.5 }}>
                    <Badge tone="neutral" size="sm">
                      {s.actor}
                    </Badge>
                  </Box>
                  <Typography variant="body2" sx={{ color: color.neutral[600] }}>
                    {s.description}
                  </Typography>
                </Box>
              </Stack>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From fee setup to reconciled payment"
        description="One connected flow across the school portal, the guardian's phone and the SSLCOMMERZ gateway — with the record updating at every step."
        tags={['5-step journey', 'Payment methods', 'Technology & security']}
      />

      {/* ── 1. Journey ── */}
      <Section id="journey" tone="light">
        <SectionHeading
          eyebrow="The journey"
          title="Five steps, one system of record"
          description="Nothing leaves the platform along the way — which is why the reconciliation step is short."
        />
        <Journey />
      </Section>

      {/* ── 2. Payment methods ── */}
      <Section id="payment-methods" tone="subtle">
        <SectionHeading
          eyebrow="Payment methods"
          title="Let families pay the way they already pay"
          description="Every method below settles through the SSLCOMMERZ gateway. Cardholder data is handled by the gateway, not stored on the education platform."
        />

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {PAYMENT_METHODS.map((m, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={m.name}>
                  <Reveal delay={i * 60} sx={{ height: '100%' }}>
                    <PaymentCard name={m.name} category={m.category} icon={m.icon} />
                  </Reveal>
                </Grid>
              ))}
            </Grid>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: 'flex-start',
                mt: 3,
                p: 2.25,
                borderRadius: `${radius.lg}px`,
                bgcolor: color.warning[50],
                border: '1px solid #FDE68A',
              }}
            >
              <Info
                size={16}
                strokeWidth={2.1}
                aria-hidden
                style={{ color: color.warning[700], flexShrink: 0, marginTop: 2 }}
              />
              <Typography variant="caption" sx={{ color: color.warning[700], fontWeight: 500 }}>
                The live method list follows your institution's SSLCOMMERZ merchant configuration.
                Confirm it before launch and edit{' '}
                <Box component="code" sx={{ fontFamily: 'var(--font-mono)' }}>
                  PAYMENT_METHODS
                </Box>{' '}
                in{' '}
                <Box component="code" sx={{ fontFamily: 'var(--font-mono)' }}>
                  src/content/platform.ts
                </Box>
                . Official brand marks still need licensing from each provider.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PhoneMockup width={264} onDark={false} />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* ── 3. Technology & security ── */}
      <Section id="technology" tone="dark">
        <SectionHeading
          eyebrow="Technology & security"
          title="Infrastructure a finance team can sign off on"
          description="What the platform is built on, and how payment data is handled."
          onDark
        />

        <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {SECURITY_PILLARS.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={p.title}>
              <Reveal delay={i * 70} sx={{ height: '100%' }}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: `${radius.xl}px`,
                    bgcolor: 'rgba(255,255,255,0.045)',
                    border: '1px solid rgba(255,255,255,0.11)',
                    transition: 'background-color 250ms var(--ease), border-color 250ms var(--ease)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.07)',
                      borderColor: 'rgba(255,255,255,0.22)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      mb: 2.25,
                      borderRadius: `${radius.md}px`,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(99,102,241,0.22)',
                      color: '#A9B2FF',
                    }}
                  >
                    <Box component={p.icon} sx={{ width: 20, height: 20 }} aria-hidden />
                  </Box>

                  <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.62)' }}>
                    {p.description}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        {/* Stack table */}
        <Reveal>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h4" sx={{ color: '#fff', mb: 2.5 }}>
                Technology stack
              </Typography>

              <TableContainer
                sx={{
                  borderRadius: `${radius.lg}px`,
                  border: '1px solid rgba(255,255,255,0.12)',
                  overflow: 'hidden',
                }}
              >
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'rgba(255,255,255,0.06)' }}>
                      <TableCell sx={{ color: 'rgba(255,255,255,0.72)', fontWeight: 700, borderColor: 'rgba(255,255,255,0.10)' }}>
                        Layer
                      </TableCell>
                      <TableCell sx={{ color: 'rgba(255,255,255,0.72)', fontWeight: 700, borderColor: 'rgba(255,255,255,0.10)' }}>
                        Component
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {TECH_STACK.map((row) => (
                      <TableRow key={row.layer}>
                        <TableCell sx={{ color: '#fff', fontWeight: 600, borderColor: 'rgba(255,255,255,0.08)' }}>
                          {row.layer}
                        </TableCell>
                        <TableCell sx={{ color: 'rgba(255,255,255,0.62)', borderColor: 'rgba(255,255,255,0.08)' }}>
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: `${radius.xl}px`,
                  bgcolor: 'rgba(255,255,255,0.045)',
                  border: '1px solid rgba(255,255,255,0.11)',
                }}
              >
                <Typography variant="h5" sx={{ color: '#fff', mb: 1.5 }}>
                  On certifications
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.62)', mb: 2.5 }}>
                  SSLCOMMERZ is a PCI-DSS certified payment gateway, and that is the claim this
                  page makes. Any certification held by the education platform itself is a separate
                  statement and is not asserted here without documentation from compliance.
                </Typography>
                <Badge tone="inverse" size="sm">
                  Verify with compliance before adding claims
                </Badge>
              </Box>
            </Grid>
          </Grid>
        </Reveal>
      </Section>

      <CtaBand
        title="Walk the flow with your own fee structure."
        description="We will map your classes, fee heads and payment methods during the demo."
        secondaryLabel="Read the FAQ"
        secondaryTo="/faq"
      />
    </>
  );
}
