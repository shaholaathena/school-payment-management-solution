import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  BarChart3,
  BellRing,
  CheckCircle2,
  CreditCard,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { JOURNEY } from '../../content/platform';
import { color, font, motion, radius } from '../../theme/tokens';

const STEP_ICONS: LucideIcon[] = [FileText, BellRing, CreditCard, CheckCircle2, BarChart3];

/**
 * Each step is owned by a different party, and the colour of the actor dot is
 * what makes the handoffs legible — the point of the diagram is that the work
 * moves between the school, the family, the gateway and finance.
 */
const ACTOR_DOT: Record<string, string> = {
  'School Admin': color.brand[600],
  Platform: color.neutral[400],
  'Parent / Guardian': color.accent[500],
  SSLCOMMERZ: color.brand[400],
  'Finance Team': color.success[500],
};

export default function ProcessJourney() {
  return (
    <Section id="journey" tone="light" density="loose">
      <SectionHeading
        align="left"
        eyebrow="The payment journey"
        title="Five steps, and the handoff between each one."
        description="A fee moves from the institution to the family, through the gateway, and back into the record. Every transition is accounted for rather than assumed."
        titleMaxWidth="18ch"
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(5, minmax(0, 1fr))' },
          columnGap: 2,
          rowGap: { xs: 0, md: 5 },
        }}
      >
        {JOURNEY.map((step, i) => {
          const Icon = STEP_ICONS[i];
          const isLast = i === JOURNEY.length - 1;

          return (
            <Reveal key={step.step} delay={i * 70}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: { xs: 'row', lg: 'column' },
                  gap: { xs: 2.5, lg: 0 },
                  pb: { xs: isLast ? 0 : 4, md: 0 },
                }}
              >
                {/*
                 * The connector is drawn per step rather than as one rail behind
                 * the row, so it lands exactly on the node at every breakpoint
                 * without depending on column widths.
                 */}
                {!isLast && (
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      bgcolor: color.surface.lineStrong,
                      left: { xs: 21, lg: 56 },
                      top: { xs: 48, lg: 21 },
                      bottom: { xs: 8, lg: 'auto' },
                      right: { xs: 'auto', lg: -16 },
                      width: { xs: 2, lg: 'auto' },
                      height: { xs: 'auto', lg: 2 },
                      display: { md: 'none', lg: 'block' },
                    }}
                  />
                )}

                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    mb: { lg: 3 },
                    borderRadius: `${radius.lg}px`,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: color.neutral[0],
                    border: `1px solid ${color.surface.lineStrong}`,
                    color: color.brand[600],
                    transition: `border-color ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}`,
                    '&:hover': {
                      borderColor: color.brand[300],
                      boxShadow: '0 0 0 4px rgba(99,102,241,0.10)',
                    },
                  }}
                >
                  <Icon size={19} strokeWidth={1.9} aria-hidden />
                </Box>

                <Box sx={{ minWidth: 0, pb: { xs: 1, lg: 0 } }}>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: font.mono,
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: color.neutral[400],
                      mb: 0.75,
                    }}
                  >
                    STEP {String(step.step).padStart(2, '0')}
                  </Typography>

                  <Typography variant="h5" sx={{ mb: 1, color: color.neutral[950] }}>
                    {step.title}
                  </Typography>

                  <Stack direction="row" spacing={0.875} sx={{ alignItems: 'center', mb: 1.5 }}>
                    <Box
                      aria-hidden
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        flexShrink: 0,
                        bgcolor: ACTOR_DOT[step.actor] ?? color.neutral[400],
                      }}
                    />
                    <Typography
                      sx={{ fontSize: '0.75rem', fontWeight: 650, color: color.neutral[500] }}
                    >
                      {step.actor}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ color: color.neutral[600], fontSize: '0.875rem', lineHeight: 1.65 }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}
