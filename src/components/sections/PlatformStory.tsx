import Box from '@mui/material/Box';
import Section from '../ui/Section';
import ContentRow from '../ui/ContentRow';
import PaymentFlowArt from '../product/PaymentFlowArt';
import { vivid } from '../../theme/tokens';

/**
 * The "one platform" content row, now anchored by a vivid vector illustration
 * (PaymentFlowArt) instead of a screenshot, on a soft lavender-tinted band.
 */
export default function PlatformStory() {
  return (
    <Section id="platform" tone="light" density="loose" sx={{ bgcolor: vivid.tint.lavender }}>
      <ContentRow
        eyebrow="One platform"
        title={
          <>
            One payment system.
            <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} /> Less operational
            noise.
          </>
        }
        lead="Fee structures, collection, transactions, reminders, reporting and student information stop living in separate spreadsheets, inboxes and counters."
        subheading="Fewer places for a fee to hide"
        bullets={[
          'Fee structures defined once, by class, section and campus',
          'Every payment traceable to a student, a fee and a method',
          'Reminders, reporting and records in the same system',
        ]}
        cta={{ label: 'Explore all capabilities', to: '/features' }}
        image={<PaymentFlowArt />}
        dotted={false}
      />
    </Section>
  );
}
