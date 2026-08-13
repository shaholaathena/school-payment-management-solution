import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import BlobIcon from '../ui/BlobIcon';
import Eyebrow from '../ui/Eyebrow';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { STAKEHOLDERS } from '../../content/home';
import { color } from '../../theme/tokens';

/**
 * Each audience gets a different weight, not a different label on the same card:
 * the administrator's panel is the large brand-tinted one because their job is
 * oversight, while families and students get lighter white cards for a shorter,
 * occasional task. All light, per the Pintex palette.
 */
const THEME: Record<string, string> = {
  'School Admin': 'Control',
  'Parents & Guardians': 'Clarity',
  Students: 'Access',
};

function CapabilityRow({ label }: { label: string }) {
  return (
    <Stack component="li" direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
      <Box
        sx={{
          mt: '2px',
          width: 20,
          height: 20,
          flexShrink: 0,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          bgcolor: color.brand[100],
          color: color.brand[700],
        }}
      >
        <Check size={12} strokeWidth={2.75} aria-hidden />
      </Box>
      <Typography variant="body2" sx={{ color: color.neutral[600] }}>
        {label}
      </Typography>
    </Stack>
  );
}

export default function Stakeholders() {
  const [admin, ...rest] = STAKEHOLDERS;

  return (
    <Section id="stakeholders" tone="light" density="loose">
      <SectionHeading
        align="center"
        eyebrow="Who it serves"
        title="Three roles, one record of truth"
        description="Each group works in a portal scoped to what they actually need — administrators get control, families get clarity, students get access."
      />

      <Box
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.25fr 1fr' }, gap: 3 }}
      >
        <Reveal sx={{ display: 'flex' }}>
          <Panel tone="tint" lift sx={{ flex: 1, p: { xs: 4, lg: 5 } }}>
            <Stack
              direction="row"
              sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 3 }}
            >
              <BlobIcon icon={admin.icon} size="lg" variant={0} />
              <Eyebrow>{THEME[admin.role]}</Eyebrow>
            </Stack>

            <Typography variant="h3" component="h3" sx={{ color: color.neutral[900] }}>
              {admin.role}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ mt: 1.5, maxWidth: 448, color: color.neutral[500] }}
            >
              {admin.description}
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                mt: 4,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                gap: 2,
              }}
            >
              {admin.capabilities.map((c) => (
                <CapabilityRow key={c} label={c} />
              ))}
            </Box>
          </Panel>
        </Reveal>

        <Box sx={{ display: 'grid', gap: 3 }}>
          {rest.map((s, i) => (
            <Reveal key={s.role} delay={(i + 1) * 80} sx={{ display: 'flex' }}>
              <Panel lift sx={{ flex: 1, p: 3.5 }}>
                <Stack
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}
                >
                  <BlobIcon icon={s.icon} size="sm" variant={i + 1} />
                  <Eyebrow size="sm">{THEME[s.role]}</Eyebrow>
                </Stack>

                <Typography variant="h4" component="h3" sx={{ fontSize: '1.25rem' }}>
                  {s.role}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1, color: color.neutral[500] }}>
                  {s.description}
                </Typography>

                <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0, mt: 2.5 }}>
                  {s.capabilities.map((c) => (
                    <CapabilityRow key={c} label={c} />
                  ))}
                </Stack>
              </Panel>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
