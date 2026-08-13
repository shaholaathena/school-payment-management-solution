import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Eye, RefreshCw, ShieldCheck, Timer, type LucideIcon } from 'lucide-react';
import BlobIcon from '../ui/BlobIcon';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { color } from '../../theme/tokens';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Deliberately unquantified — each line states what the platform changes about
 * the work, not by how much, because there is no verified figure to cite.
 */
const VALUES: ValueItem[] = [
  {
    icon: Timer,
    title: 'Faster collections',
    description: 'Dues generate and chase themselves, without the manual follow-up.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    description: 'Every transaction settles through the SSLCOMMERZ gateway.',
  },
  {
    icon: Eye,
    title: 'Real-time visibility',
    description: 'Collections, outstanding and pending sit in one live view.',
  },
  {
    icon: RefreshCw,
    title: 'Easier reconciliation',
    description: 'Each payment ties back to a student, a fee and a method.',
  },
];

/**
 * Pintex `features-1`: a centred heading and subtitle over a four-column row of
 * line-icon-on-blob features. The lightest possible structure — no cards, no
 * rules — so it reads in a glance right after the hero.
 */
export default function ValueBar() {
  return (
    <Section id="features" tone="light" density="loose">
      <SectionHeading
        align="center"
        title="Everything in one place"
        description="Fee collection, payments, records and reporting — one platform instead of a drawer full of tools."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(4, minmax(0, 1fr))',
          },
          columnGap: { sm: 4, lg: 5 },
          rowGap: { xs: 6, sm: 8 },
        }}
      >
        {VALUES.map(({ icon, title, description }, i) => (
          <Reveal key={title} delay={i * 90}>
            <Box
              sx={{
                textAlign: 'center',
                '&:hover .blob-icon': { transform: 'translateY(-5px) scale(1.04)' },
              }}
            >
              <BlobIcon icon={icon} variant={i} sx={{ mx: 'auto', mb: 3 }} />

              <Typography variant="h5" component="h3" sx={{ mb: 1.25, color: color.neutral[900] }}>
                {title}
              </Typography>

              <Typography variant="body2" sx={{ maxWidth: '26ch', mx: 'auto', color: color.neutral[500] }}>
                {description}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
