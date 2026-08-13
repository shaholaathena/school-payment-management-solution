import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Banknote, Eye, Scale, ShieldCheck, type LucideIcon } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { color, motion, radius } from '../../theme/tokens';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Deliberately unquantified. Each line describes what the platform changes
 * about the work, not how much — there is no verified figure to cite yet.
 */
const VALUES: ValueItem[] = [
  {
    icon: Banknote,
    title: 'Faster collections',
    description: 'Dues generate and reminders go out without manual chasing.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    description: 'Cardholder data stays with the gateway, not the platform.',
  },
  {
    icon: Eye,
    title: 'Real-time visibility',
    description: 'Received, outstanding and pending sit in a single view.',
  },
  {
    icon: Scale,
    title: 'Easier reconciliation',
    description: 'Every payment ties back to a student, a fee and a method.',
  },
];

export default function ValueBar() {
  return (
    <Box
      component="section"
      aria-label="Platform value summary"
      sx={{ bgcolor: color.neutral[0], py: { xs: 6, md: 8 } }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2.5, md: 4 } }}>
        <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              borderRadius: `${radius['2xl']}px`,
              border: `1px solid ${color.surface.line}`,
              bgcolor: color.surface.muted,
              overflow: 'hidden',
            }}
          >
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <Box
                key={title}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  bgcolor: color.neutral[0],
                  // Hairlines come from the parent background showing through a
                  // 1px gap, so no divider doubles up at the wrap points.
                  borderRight: {
                    xs: 'none',
                    sm: i % 2 === 0 ? `1px solid ${color.surface.line}` : 'none',
                    lg: i < 3 ? `1px solid ${color.surface.line}` : 'none',
                  },
                  borderBottom: {
                    xs: i < 3 ? `1px solid ${color.surface.line}` : 'none',
                    sm: i < 2 ? `1px solid ${color.surface.line}` : 'none',
                    lg: 'none',
                  },
                  transition: `background ${motion.base} ${motion.ease}`,
                  '&:hover': { bgcolor: color.surface.lavender },
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    mb: 2,
                    borderRadius: `${radius.md}px`,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: color.brand[50],
                    border: `1px solid ${color.brand[100]}`,
                    color: color.brand[600],
                  }}
                >
                  <Icon size={18} strokeWidth={1.9} aria-hidden />
                </Box>

                <Typography variant="h6" sx={{ mb: 0.75, color: color.neutral[950] }}>
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: color.neutral[600], fontSize: '0.875rem', lineHeight: 1.6 }}
                >
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}
