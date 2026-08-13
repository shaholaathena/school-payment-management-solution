import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LifeBuoy } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import FaqAccordion from '../ui/FaqAccordion';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import TextLink from '../ui/TextLink';
import { FAQS } from '../../content/faq';
import { color, radius } from '../../theme/tokens';

/** The questions that come up before a demo. The rest live on /faq. */
const HOME_FAQ_COUNT = 6;

export default function HomeFaq() {
  return (
    <Section id="faq" tone="light" density="loose">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 0.72fr) minmax(0, 1.28fr)' },
          gap: { xs: 5, lg: 9 },
          alignItems: 'start',
        }}
      >
        <Reveal>
          <Box sx={{ position: { lg: 'sticky' }, top: { lg: 120 } }}>
            <Box sx={{ mb: 2.5 }}>
              <Eyebrow rule>Questions</Eyebrow>
            </Box>

            <Typography variant="h2" component="h2" sx={{ maxWidth: '12ch', mb: 2.5 }}>
              Answers before the demo.
            </Typography>

            <Typography variant="subtitle1" sx={{ color: color.neutral[600], maxWidth: '40ch', mb: 4 }}>
              The things institutions ask first — how payments work, what is supported, and where the
              answer depends on your own setup.
            </Typography>

            <Stack
              direction="row"
              spacing={1.75}
              sx={{
                p: 2.5,
                mb: 3.5,
                alignItems: 'flex-start',
                borderRadius: `${radius.xl}px`,
                bgcolor: color.surface.muted,
                border: `1px solid ${color.surface.line}`,
              }}
            >
              <LifeBuoy size={18} color={color.neutral[500]} style={{ flexShrink: 0, marginTop: 2 }} />
              <Typography variant="caption" sx={{ color: color.neutral[600], lineHeight: 1.7 }}>
                Refund handling and onboarding timelines depend on your merchant agreement, so we
                confirm those directly rather than publishing an assumption.
              </Typography>
            </Stack>

            <TextLink to="/faq">Read all {FAQS.length} questions</TextLink>
          </Box>
        </Reveal>

        <Reveal delay={80}>
          <FaqAccordion items={FAQS.slice(0, HOME_FAQ_COUNT)} defaultOpen={0} />
        </Reveal>
      </Box>
    </Section>
  );
}
