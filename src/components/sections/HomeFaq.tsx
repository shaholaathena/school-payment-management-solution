import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '../ui/Button';
import FaqAccordion from '../ui/FaqAccordion';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '../../content/faq';
import { color } from '../../theme/tokens';

/**
 * Pintex `faqs-1`: a centred heading and subtitle over a single full-width
 * accordion column, closed with a "can't find the answer?" contact prompt.
 */
export default function HomeFaq() {
  return (
    <Section id="faq" tone="light" density="loose">
      <SectionHeading
        align="center"
        eyebrow="FAQ"
        title="Questions? Look here."
        description="The things institutions ask first — how payments work, what is supported, and where the answer depends on your own setup."
      />

      <Box sx={{ maxWidth: 860, mx: 'auto' }}>
        <Reveal>
          <FaqAccordion items={FAQS} defaultOpen={0} />
        </Reveal>

        <Reveal>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              mt: { xs: 5, md: 7 },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700, color: color.neutral[900] }}>
                Can&rsquo;t find the answer to your question?
              </Typography>
              <Typography variant="body2" sx={{ color: color.neutral[500] }}>
                Bring your edge cases to the demo and we&rsquo;ll walk through them.
              </Typography>
            </Box>
            <Button to="/contact" variant="secondary" sx={{ flexShrink: 0 }}>
              Contact Us
            </Button>
          </Stack>
        </Reveal>
      </Box>
    </Section>
  );
}
