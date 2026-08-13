import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import ContentRow from '../ui/ContentRow';
import { brand } from '../../content/site';
import { color, motion, radius, shadow } from '../../theme/tokens';
import dashboardHero from '../../assets/images/dashboard-hero.png';

/**
 * A single honest accent pill floating over the screenshot — states a
 * capability the platform genuinely has, with no invented amount or metric
 * (unlike the template's "$89,942.32" style cards, which would be fabricated
 * financial data on a real payment product).
 */
function FloatingChip() {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        position: 'absolute',
        bottom: { xs: 14, md: 22 },
        left: { xs: -8, md: -26 },
        zIndex: 2,
        alignItems: 'center',
        px: 1.75,
        py: 1.25,
        borderRadius: `${radius.lg}px`,
        bgcolor: color.surface.card,
        border: `1px solid ${color.surface.line}`,
        boxShadow: shadow.lift,
      }}
    >
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          bgcolor: color.brand[50],
          color: color.brand[700],
        }}
      >
        <ShieldCheck size={17} strokeWidth={2} aria-hidden />
      </Box>
      <Box>
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 700, color: color.neutral[900], lineHeight: 1.2 }}>
          Secured by {brand.gateway}
        </Typography>
        <Typography sx={{ fontSize: '0.6875rem', color: color.neutral[500] }}>
          Cardholder data stays with the gateway
        </Typography>
      </Box>
    </Stack>
  );
}

export default function PlatformStory() {
  const screenshot = (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          borderRadius: `${radius.shot}px`,
          overflow: 'hidden',
          border: `1px solid rgba(16,26,47,0.10)`,
          boxShadow: shadow.lift,
          '&:hover img': { transform: 'scale(1.015)' },
        }}
      >
        <Box
          component="img"
          src={dashboardHero}
          alt="School portal dashboard showing payable and received amounts with a monthwise dues collection chart"
          loading="lazy"
          decoding="async"
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            transition: `transform ${motion.slow} ${motion.ease}`,
          }}
        />
      </Box>
      <FloatingChip />
    </Box>
  );

  return (
    <Section id="platform" tone="subtle" density="loose">
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
        image={screenshot}
        dotted="br"
      />
    </Section>
  );
}
