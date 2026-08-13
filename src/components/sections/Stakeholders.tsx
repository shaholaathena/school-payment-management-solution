import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Check, type LucideIcon } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { STAKEHOLDERS } from '../../content/home';
import { color, motion, radius, shadow } from '../../theme/tokens';

/**
 * Each audience gets a different shape, not a different label on the same card:
 * the administrator's panel is the dark, dense one because their job is
 * oversight; families and students get lighter cards because theirs is a short,
 * occasional task.
 */
const THEME: Record<string, string> = {
  'School Admin': 'Control',
  'Parents & Guardians': 'Clarity',
  Students: 'Access',
};

function CapabilityList({ items, onDark }: { items: string[]; onDark?: boolean }) {
  return (
    <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {items.map((c) => (
        <Stack key={c} component="li" direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
          <Box
            sx={{
              mt: '3px',
              width: 16,
              height: 16,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              bgcolor: onDark ? 'rgba(103,232,249,0.14)' : color.success[50],
              color: onDark ? color.accent[300] : color.success[600],
            }}
          >
            <Check size={10} strokeWidth={3} aria-hidden />
          </Box>
          <Typography
            variant="body2"
            sx={{ color: onDark ? 'rgba(255,255,255,0.72)' : color.neutral[700] }}
          >
            {c}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

function RoleHeader({
  icon: Icon,
  role,
  onDark,
}: {
  icon: LucideIcon;
  role: string;
  onDark?: boolean;
}) {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 2 }}>
      <Box
        sx={{
          width: 46,
          height: 46,
          flexShrink: 0,
          borderRadius: `${radius.lg}px`,
          display: 'grid',
          placeItems: 'center',
          bgcolor: onDark ? 'rgba(255,255,255,0.09)' : color.brand[50],
          border: `1px solid ${onDark ? 'rgba(255,255,255,0.14)' : color.brand[100]}`,
          color: onDark ? '#A9B2FF' : color.brand[600],
        }}
      >
        <Icon size={21} strokeWidth={1.9} aria-hidden />
      </Box>

      <Box>
        <Typography
          variant="overline"
          component="p"
          sx={{ color: onDark ? 'rgba(169,178,255,0.85)' : color.brand[600], lineHeight: 1.3 }}
        >
          {THEME[role]}
        </Typography>
        <Typography variant="h4" sx={{ color: onDark ? '#fff' : color.neutral[950] }}>
          {role}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function Stakeholders() {
  const [admin, ...rest] = STAKEHOLDERS;

  return (
    <Section id="stakeholders" tone="subtle" density="loose">
      <SectionHeading
        align="left"
        eyebrow="Who it serves"
        title="Three roles. One record between them."
        description="The institution keeps control of collection, families get a clear answer to what they owe, and students can see their own position — all from the same underlying record."
        titleMaxWidth="16ch"
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.12fr) minmax(0, 0.88fr)' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        <Reveal sx={{ display: 'flex' }}>
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 4.5 },
              borderRadius: `${radius['2xl']}px`,
              bgcolor: color.ink[900],
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: shadow.lg,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(at 82% 6%, rgba(79,70,229,0.34) 0px, transparent 52%), radial-gradient(at 12% 92%, rgba(6,182,212,0.16) 0px, transparent 48%)',
              }}
            />

            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <RoleHeader icon={admin.icon} role={admin.role} onDark />

              <Typography
                variant="subtitle1"
                sx={{ color: 'rgba(255,255,255,0.66)', maxWidth: '34ch', mb: 4 }}
              >
                {admin.description}
              </Typography>

              <Box sx={{ mt: 'auto' }}>
                <CapabilityList items={admin.capabilities} onDark />
              </Box>
            </Box>
          </Box>
        </Reveal>

        <Stack spacing={{ xs: 2, md: 2.5 }}>
          {rest.map((s, i) => (
            <Reveal key={s.role} delay={(i + 1) * 80} sx={{ flex: 1, display: 'flex' }}>
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 3, md: 3.5 },
                  borderRadius: `${radius['2xl']}px`,
                  bgcolor: color.neutral[0],
                  border: `1px solid ${color.surface.line}`,
                  transition: `transform ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: shadow.lg,
                    borderColor: color.brand[200],
                  },
                }}
              >
                <RoleHeader icon={s.icon} role={s.role} />
                <Typography variant="body2" sx={{ color: color.neutral[600], mb: 2.5 }}>
                  {s.description}
                </Typography>
                <CapabilityList items={s.capabilities} />
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
