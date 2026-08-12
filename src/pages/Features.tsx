import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Check, CircleDashed } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/sections/CtaBand';
import PageHero from '../components/sections/PageHero';
import BrowserFrame from '../components/product/BrowserFrame';
import DashboardMockup from '../components/product/DashboardMockup';
import { FEATURES, type Feature } from '../content/features';
import { color, radius, shadow } from '../theme/tokens';

/** Small marker so the team can see at a glance which copy still needs sign-off. */
function StatusNote({ status }: { status: Feature['status'] }) {
  if (status === 'confirmed') return null;

  return (
    <Box sx={{ mt: 2 }}>
      <Badge tone="warning" size="sm" icon={<CircleDashed strokeWidth={2.2} />}>
        {status === 'placeholder' ? 'Placeholder copy — pending product' : 'Needs product confirmation'}
      </Badge>
    </Box>
  );
}

/** Alternating full-width row: copy one side, capability list the other. */
function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const flip = index % 2 === 1;
  const Icon = feature.icon;

  return (
    <Reveal>
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        sx={{
          alignItems: 'center',
          py: { xs: 5, md: 7 },
          borderTop: index === 0 ? 'none' : `1px solid ${color.neutral[200]}`,
        }}
      >
        <Grid size={{ xs: 12, md: 6 }} sx={{ order: { md: flip ? 2 : 1 } }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 2.5 }}>
            <Box
              sx={{
                width: 46,
                height: 46,
                flexShrink: 0,
                borderRadius: `${radius.md}px`,
                display: 'grid',
                placeItems: 'center',
                bgcolor: color.brand[50],
                border: `1px solid ${color.brand[100]}`,
                color: color.brand[600],
              }}
            >
              <Icon size={22} strokeWidth={1.9} aria-hidden />
            </Box>
            <Box>
              <Typography
                variant="overline"
                component="p"
                sx={{ fontSize: '0.6875rem', color: color.neutral[400] }}
              >
                {feature.index} · {feature.category}
              </Typography>
              <Typography variant="h3" component="h2">
                {feature.title}
              </Typography>
            </Box>
          </Stack>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
            {feature.headline}
          </Typography>

          <Typography variant="body1" sx={{ color: color.neutral[600], mb: 2.5, maxWidth: '54ch' }}>
            {feature.description}
          </Typography>

          <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                width: 18,
                height: 18,
                flexShrink: 0,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                bgcolor: color.success[50],
                color: color.success[600],
              }}
            >
              <Check size={11} strokeWidth={3} aria-hidden />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {feature.outcome}
            </Typography>
          </Stack>

          <StatusNote status={feature.status} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ order: { md: flip ? 1 : 2 } }}>
          <Box
            sx={{
              p: { xs: 3, md: 3.5 },
              borderRadius: `${radius.xl}px`,
              bgcolor: color.neutral[50],
              border: `1px solid ${color.neutral[200]}`,
            }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{ fontSize: '0.6875rem', color: color.neutral[400], mb: 2 }}
            >
              What it includes
            </Typography>

            <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {feature.details.map((d) => (
                <Stack
                  key={d}
                  component="li"
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: 'flex-start' }}
                >
                  <Box
                    sx={{
                      mt: '7px',
                      width: 5,
                      height: 5,
                      flexShrink: 0,
                      borderRadius: '50%',
                      bgcolor: color.brand[400],
                    }}
                  />
                  <Typography variant="body2" sx={{ color: color.neutral[700] }}>
                    {d}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Reveal>
  );
}

export default function Features() {
  const confirmed = FEATURES.filter((f) => f.status === 'confirmed').length;

  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything fee collection needs, in one platform"
        description="Ten capabilities that take an institution from defining a fee structure to a reconciled payment — without the process leaving the system."
        tags={FEATURES.slice(0, 5).map((f) => f.category)}
      >
        <Box sx={{ mt: { xs: 6, md: 8 }, position: 'relative' }}>
          <BrowserFrame onDark>
            <DashboardMockup view="transactions" />
          </BrowserFrame>
        </Box>
      </PageHero>

      <Section tone="light">
        <SectionHeading
          eyebrow="The full set"
          title="Ten features, one workflow"
          description={`${confirmed} of ${FEATURES.length} are confirmed against the product brief. The remainder are marked inline for sign-off.`}
        />

        <Box>
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.slug} feature={f} index={i} />
          ))}
        </Box>
      </Section>

      {/* Merchant panel gets its own emphasis — it is the newest surface */}
      <Section tone="subtle" width="md">
        <Reveal>
          <Box
            sx={{
              p: { xs: 3.5, md: 5 },
              borderRadius: `${radius['2xl']}px`,
              bgcolor: color.neutral[0],
              border: `1px solid ${color.brand[100]}`,
              boxShadow: shadow.md,
            }}
          >
            <Badge tone="warning" size="sm" icon={<CircleDashed strokeWidth={2.2} />}>
              Copy pending
            </Badge>

            <Typography variant="h3" component="h2" sx={{ mt: 2.5, mb: 2 }}>
              Merchant Panel
            </Typography>

            <Typography variant="body1" sx={{ color: color.neutral[600], maxWidth: '60ch' }}>
              Manage payment activity, transaction visibility and operational controls from a
              centralized merchant panel.
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 3,
                pt: 2.5,
                borderTop: `1px solid ${color.neutral[200]}`,
                color: color.neutral[500],
              }}
            >
              Internal note: final copy for this feature has not been supplied. Edit the
              <Box component="code" sx={{ mx: 0.5, fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>
                merchant-panel
              </Box>
              entry in
              <Box component="code" sx={{ mx: 0.5, fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>
                src/content/features.ts
              </Box>
              and set its status to <Box component="code" sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>confirmed</Box>.
            </Typography>
          </Box>
        </Reveal>
      </Section>

      <CtaBand
        title="See these features against your own fee structure."
        secondaryLabel="How It Works"
        secondaryTo="/how-it-works"
      />
    </>
  );
}
