import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ScreenArtifact, { type ScreenArtifactProps } from '../product/ScreenArtifact';
import { color } from '../../theme/tokens';
import dashboardHero from '../../assets/images/dashboard-hero.png';
import paymentSummaryHero from '../../assets/images/payment-summary-hero.png';
import studentsList from '../../assets/images/students-list.png';
import appHome from '../../assets/images/app-home.png';

const DEMO_NOTE = 'Screenshot from a demo environment — figures are sample data.';

interface Panel {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  artifact: ScreenArtifactProps;
  /** Puts the artifact on the left */
  flip?: boolean;
  /** Full-width artifact below the copy, for wide crops */
  stacked?: boolean;
}

/**
 * Crops are chosen for privacy as much as composition — see ScreenArtifact.
 * `students-list` is pinned to the filter and toolbar region because every row
 * beneath it carries a student name, guardian number and home address, and
 * `app-home` is pinned to the dues list because the top of that screen shows a
 * named student and their photograph.
 */
const PANELS: Panel[] = [
  {
    eyebrow: 'Collection overview',
    title: 'See the whole collection at a glance.',
    description:
      'The dashboard opens on payable, received and outstanding for the institution, with monthwise dues collection underneath. Admission collection sits in the same view, so the position is one screen rather than three reports.',
    bullets: ['Payable against received', 'Monthwise dues collection', 'Admissions in the same view'],
    artifact: {
      src: dashboardHero,
      alt: 'School portal dashboard showing payable, received and outstanding amounts with a monthwise dues collection chart',
      variant: 'browser',
      ratio: 1.62,
      focus: '0% 0%',
      label: 'School Portal — Dashboard',
      note: DEMO_NOTE,
    },
  },
  {
    eyebrow: 'Family experience',
    title: 'Make every payment easy to understand.',
    description:
      'A guardian opens a due and sees what it is made of — each fee head, the month it belongs to, and the total. Nothing has to be worked out from a notice or a phone call, and payment starts from the same screen.',
    bullets: ['Fee-by-fee breakdown', 'Total shown before paying', 'Card, mobile banking or net banking'],
    flip: true,
    artifact: {
      src: paymentSummaryHero,
      alt: 'Mobile payment summary screen showing a total fee and a breakdown by month and fee type',
      variant: 'phone',
      label: 'Payment summary',
      note: DEMO_NOTE,
    },
  },
  {
    eyebrow: 'Student records',
    title: 'Keep student records connected.',
    description:
      'Students are searchable by name, ID, class, section, campus and status. Fees are raised against those records rather than a separate list, which is what keeps a payment traceable back to a student.',
    bullets: ['Filter by class, section and campus', 'Records exportable for finance', 'Payments tied to the student'],
    stacked: true,
    artifact: {
      src: studentsList,
      alt: 'Student list screen showing search and filter controls and the student records toolbar',
      variant: 'browser',
      ratio: 3.2,
      focus: '0% 0%',
      label: 'School Portal — Student List',
      note: `${DEMO_NOTE} Cropped above the record rows.`,
    },
  },
  {
    eyebrow: 'Mobile app',
    title: 'Give families a simpler experience.',
    description:
      'The Android and iOS apps present outstanding dues as a list a guardian can select from, with the total updating as they choose what to settle. Payment and history stay in the same place.',
    bullets: ['Outstanding dues as a checklist', 'Pay from the app', 'Android and iOS'],
    artifact: {
      src: appHome,
      alt: 'Mobile app dues list showing selectable monthly fees with a pay now action',
      variant: 'detail',
      ratio: 1.32,
      focus: '50% 97%',
      note: `${DEMO_NOTE} Cropped to the dues list.`,
    },
  },
];

function PanelCopy({ panel }: { panel: Panel }) {
  return (
    <Box>
      <Box sx={{ mb: 2.5 }}>
        <Eyebrow onDark rule>
          {panel.eyebrow}
        </Eyebrow>
      </Box>

      <Typography variant="h3" component="h3" sx={{ color: '#fff', maxWidth: '17ch', mb: 2 }}>
        {panel.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: 'rgba(255,255,255,0.62)', maxWidth: '48ch', lineHeight: 1.75 }}
      >
        {panel.description}
      </Typography>

      <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0, mt: 3.5 }}>
        {panel.bullets.map((b) => (
          <Stack key={b} component="li" direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                width: 18,
                height: 18,
                flexShrink: 0,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'rgba(103,232,249,0.14)',
                color: color.accent[300],
              }}
            >
              <Check size={11} strokeWidth={3} aria-hidden />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.80)' }}>
              {b}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default function ProductShowcase() {
  return (
    <Section id="product" tone="dark" density="loose">
      <SectionHeading
        align="left"
        onDark
        eyebrow="Inside the product"
        title="The actual screens, not an illustration of them."
        description="Every image below is a screenshot of the working platform, cropped only to keep sample student data off a public page."
        titleMaxWidth="19ch"
      />

      <Stack spacing={{ xs: 8, md: 12 }}>
        {PANELS.map((panel) => (
          <Reveal key={panel.title}>
            {panel.stacked ? (
              <Box>
                <Box sx={{ maxWidth: 620, mb: { xs: 4, md: 5 } }}>
                  <PanelCopy panel={panel} />
                </Box>
                <ScreenArtifact {...panel.artifact} onDark />
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1.15fr)' },
                  gap: { xs: 5, md: 8 },
                  alignItems: 'center',
                }}
              >
                <Box sx={{ order: { md: panel.flip ? 2 : 1 } }}>
                  <PanelCopy panel={panel} />
                </Box>
                <Box sx={{ order: { md: panel.flip ? 1 : 2 } }}>
                  <ScreenArtifact {...panel.artifact} onDark />
                </Box>
              </Box>
            )}
          </Reveal>
        ))}
      </Stack>
    </Section>
  );
}
