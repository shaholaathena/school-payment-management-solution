import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Bell,
  FileBarChart,
  Landmark,
  Receipt,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import TextLink from '../ui/TextLink';
import { color, motion, radius, shadow } from '../../theme/tokens';

/** The everyday tools a fee cycle currently leaks into. */
const SCATTERED = ['Spreadsheets', 'Cash at the office', 'Paper receipts', 'Phone follow-ups', 'Bank slips'];

const MODULES: { icon: LucideIcon; label: string }[] = [
  { icon: Landmark, label: 'Fee structures' },
  { icon: Wallet, label: 'Collection' },
  { icon: Receipt, label: 'Transactions' },
  { icon: Bell, label: 'Reminders' },
  { icon: FileBarChart, label: 'Reporting' },
  { icon: Users, label: 'Student information' },
];

/**
 * The section's visual argument: five loose, unconnected places a fee cycle
 * currently lives, funnelled into one system holding six modules.
 */
function ConsolidationDiagram() {
  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3.5, md: 4.5 },
        borderRadius: `${radius['3xl']}px`,
        bgcolor: color.surface.muted,
        border: `1px solid ${color.surface.line}`,
      }}
    >
      <Typography variant="overline" component="p" sx={{ mb: 2.5, color: color.neutral[400] }}>
        Scattered across tools
      </Typography>

      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
        {SCATTERED.map((item) => (
          <Box
            key={item}
            sx={{
              px: 1.75,
              py: 0.875,
              borderRadius: `${radius.md}px`,
              border: `1px dashed ${color.surface.lineStrong}`,
              bgcolor: 'rgba(255,255,255,0.6)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: color.neutral[500],
            }}
          >
            {item}
          </Box>
        ))}
      </Stack>

      {/* Funnel — five inputs resolving to one */}
      <Box
        component="svg"
        viewBox="0 0 200 44"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
        sx={{ display: 'block', width: '100%', height: { xs: 34, md: 44 }, my: { xs: 2, md: 2.5 } }}
      >
        {[16, 58, 100, 142, 184].map((x) => (
          <path
            key={x}
            d={`M ${x} 0 C ${x} 24, 100 20, 100 44`}
            stroke={color.brand[300]}
            strokeWidth="1"
            strokeOpacity="0.55"
          />
        ))}
      </Box>

      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: `${radius['2xl']}px`,
          bgcolor: color.neutral[0],
          border: `1px solid ${color.brand[100]}`,
          boxShadow: shadow.md,
        }}
      >
        <Typography variant="overline" component="p" sx={{ mb: 2.5, color: color.brand[600] }}>
          One system of record
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
            gap: 1,
          }}
        >
          {MODULES.map(({ icon: Icon, label }) => (
            <Stack
              key={label}
              direction="row"
              spacing={1.25}
              sx={{
                alignItems: 'center',
                px: 1.5,
                py: 1.25,
                borderRadius: `${radius.md}px`,
                bgcolor: color.surface.muted,
                transition: `background ${motion.base} ${motion.ease}`,
                '&:hover': { bgcolor: color.brand[50] },
              }}
            >
              <Box sx={{ display: 'grid', placeItems: 'center', color: color.brand[600], flexShrink: 0 }}>
                <Icon size={16} strokeWidth={1.9} aria-hidden />
              </Box>
              <Typography
                sx={{ fontSize: '0.8125rem', fontWeight: 650, color: color.neutral[800] }}
              >
                {label}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function PlatformStory() {
  return (
    <Section id="platform" tone="light" density="loose">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.15fr) minmax(0, 0.85fr)' },
          gap: { xs: 6, lg: 9 },
          alignItems: 'center',
        }}
      >
        <Reveal>
          <ConsolidationDiagram />
        </Reveal>

        <Reveal delay={90}>
          <Box sx={{ mb: 2.5 }}>
            <Eyebrow rule>One platform</Eyebrow>
          </Box>

          <Typography variant="h2" component="h2" sx={{ maxWidth: '15ch', mb: 2.5 }}>
            One payment system. Less operational noise.
          </Typography>

          <Typography variant="subtitle1" sx={{ color: color.neutral[600], maxWidth: '46ch', mb: 4 }}>
            A fee cycle usually spreads across spreadsheets, receipts and follow-up calls. The
            platform holds all of it — from the structure a fee is built on to the report at the end
            of the period.
          </Typography>

          <Stack
            component="ul"
            spacing={0}
            sx={{ listStyle: 'none', m: 0, p: 0, mb: 4, borderTop: `1px solid ${color.surface.line}` }}
          >
            {[
              'Fee structures defined once, by class, section and campus',
              'Collection tracked against every structure you publish',
              'Transactions traceable to a student, a fee and a method',
              'Reminders, reporting and student records in the same system',
            ].map((line) => (
              <Box
                key={line}
                component="li"
                sx={{
                  py: 1.75,
                  borderBottom: `1px solid ${color.surface.line}`,
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: color.neutral[700],
                }}
              >
                {line}
              </Box>
            ))}
          </Stack>

          <TextLink to="/features">See every capability</TextLink>
        </Reveal>
      </Box>
    </Section>
  );
}
