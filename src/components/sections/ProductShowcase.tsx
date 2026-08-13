import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ContentRow, { type ContentRowProps } from '../ui/ContentRow';
import ScreenArtifact, { type ScreenArtifactProps } from '../product/ScreenArtifact';

/** A real screenshot on a vivid gradient halo, so the proof shots match the
 *  illustrated sections' energy rather than sitting flat on white. */
function VividShot(props: ScreenArtifactProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: '-10% -12%',
          borderRadius: '46% 54% 52% 48% / 52% 46% 54% 48%',
          background:
            'linear-gradient(140deg, rgba(0,153,242,0.18) 0%, rgba(57,183,203,0.12) 55%, rgba(157,155,231,0.16) 100%)',
          filter: 'blur(10px)',
        }}
      />
      <Box sx={{ position: 'relative' }}>
        <ScreenArtifact {...props} />
      </Box>
    </Box>
  );
}
import dashboard from '../../assets/images/dashboard.png';
import paymentSummary from '../../assets/images/payment-summary.png';
import studentsList from '../../assets/images/students-list.png';
import appHome from '../../assets/images/app-home.png';

/**
 * The alternating content rows that give the page its Pintex spine.
 *
 * ⚠️ PRIVACY — two screenshots are cropped, a deliberate deviation. Rows using
 * `students-list.png` and `app-home.png` pass `ratio`/`focus` to keep student
 * names, guardian numbers, addresses and a child's photograph out of the
 * rendered page. Removing the crop publishes them. See ScreenArtifact.
 */
interface Panel extends Pick<ContentRowProps, 'eyebrow' | 'title' | 'lead' | 'bullets' | 'reversed' | 'dotted'> {
  artifact: ScreenArtifactProps;
}

const PANELS: Panel[] = [
  {
    eyebrow: 'Collection overview',
    title: 'See the whole collection at a glance',
    lead: 'The dashboard opens on payable, received and outstanding for the institution, with monthwise collection underneath — one screen instead of three reports.',
    bullets: ['Payable against received', 'Monthwise dues collection', 'Admissions in the same view'],
    dotted: 'tl',
    artifact: {
      src: dashboard,
      alt: 'Institution dashboard with payable and received amounts and a monthwise dues collection chart',
    },
  },
  {
    eyebrow: 'Payment detail',
    title: 'Make every payment easy to understand',
    lead: 'A guardian opens a due and sees what it is made of — each fee head, the month it belongs to, and the total — then pays from the same screen.',
    bullets: ['Fee breakdown per due', 'Total shown before paying', 'Full transaction history'],
    reversed: true,
    dotted: 'br',
    artifact: {
      src: paymentSummary,
      alt: 'Payment summary screen showing a total fee and a breakdown by month and fee type',
      maxWidth: 300,
    },
  },
  {
    eyebrow: 'Student information',
    title: 'Keep student records connected',
    lead: 'Students are searchable by name, ID, class, section, campus and status, and fees are raised against those records — which is what keeps a payment traceable back to a student.',
    bullets: ['Filter by class, section and campus', 'Records exportable for finance', 'Payments tied to the student'],
    dotted: 'tl',
    artifact: {
      src: studentsList,
      alt: 'Student list screen showing search and filter controls above the student records toolbar',
      ratio: 2.4,
      focus: '0% 0%',
      note: 'Cropped above the record rows to keep sample student data off this page.',
    },
  },
  {
    eyebrow: 'Mobile experience',
    title: 'Give families a simpler experience',
    lead: 'The Android and iOS apps present outstanding dues as a list a guardian can select from, with the total updating as they choose what to settle.',
    bullets: ['Outstanding dues as a checklist', 'Pay from the app', 'Android and iOS'],
    reversed: true,
    dotted: 'br',
    artifact: {
      src: appHome,
      alt: 'Mobile app dues list showing selectable monthly fees with a pay now action',
      ratio: 1.32,
      focus: '50% 97%',
      maxWidth: 360,
      note: 'Cropped to the dues list to keep a named student off this page.',
    },
  },
];

export default function ProductShowcase() {
  return (
    <Section id="product" tone="light" density="loose">
      <SectionHeading
        align="center"
        eyebrow="Inside the product"
        title="The actual product, not a promise of one"
        description="Every image below is a screenshot of the working platform, cropped only to keep sample student data off a public page."
      />

      <Stack spacing={{ xs: 9, lg: 13 }}>
        {PANELS.map((panel) => (
          <ContentRow
            key={panel.title as string}
            titleAs="h3"
            eyebrow={panel.eyebrow}
            title={panel.title}
            lead={panel.lead}
            bullets={panel.bullets}
            reversed={panel.reversed}
            dotted={panel.dotted}
            image={<VividShot {...panel.artifact} />}
          />
        ))}
      </Stack>
    </Section>
  );
}
