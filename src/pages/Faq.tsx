import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LifeBuoy, MessageCircleQuestion } from 'lucide-react';
import Button from '../components/ui/Button';
import FaqAccordion from '../components/ui/FaqAccordion';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import CtaBand from '../components/sections/CtaBand';
import PageHero from '../components/sections/PageHero';
import { FAQS } from '../content/faq';
import { color, radius } from '../theme/tokens';

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions institutions ask first"
        description="Payments, methods, security, reporting and onboarding. Where the answer depends on your setup, it says so rather than guessing."
      />

      <Section tone="light">
        <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'flex-start' }}>
          {/* Sticky helper rail */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 112 } }}>
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  mb: 2.5,
                  borderRadius: `${radius.md}px`,
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: color.brand[50],
                  border: `1px solid ${color.brand[100]}`,
                  color: color.brand[600],
                }}
              >
                <MessageCircleQuestion size={21} strokeWidth={1.9} aria-hidden />
              </Box>

              <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                Still deciding?
              </Typography>

              <Typography variant="body2" sx={{ color: color.neutral[600], mb: 3.5 }}>
                Most questions come down to how your institution already handles fees. A demo
                answers those faster than a page can.
              </Typography>

              <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                <Button to="/contact">Book a Demo</Button>
                <Button to="/how-it-works" variant="ghost">
                  See how it works
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: 'flex-start',
                  mt: 4,
                  p: 2.25,
                  borderRadius: `${radius.lg}px`,
                  bgcolor: color.neutral[50],
                  border: `1px solid ${color.neutral[200]}`,
                }}
              >
                <LifeBuoy
                  size={16}
                  strokeWidth={2}
                  aria-hidden
                  style={{ color: color.neutral[500], flexShrink: 0, marginTop: 2 }}
                />
                <Typography variant="caption" sx={{ color: color.neutral[600] }}>
                  Refund handling and onboarding timelines depend on your merchant agreement — we
                  confirm both directly rather than publishing a policy we cannot guarantee.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Questions */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Reveal>
              <FaqAccordion items={FAQS} defaultOpen={0} />
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <CtaBand
        title="Ask us the one that is not listed."
        description="Bring your fee structure and your edge cases to the demo."
        secondaryLabel="Contact"
        secondaryTo="/contact"
      />
    </>
  );
}
