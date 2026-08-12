import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Check, type LucideIcon } from 'lucide-react';
import { color, radius, shadow } from '../../theme/tokens';

export interface StakeholderCardProps {
  icon: LucideIcon;
  role: string;
  description: string;
  capabilities: string[];
  /** Visually promotes one card in the set */
  featured?: boolean;
}

export default function StakeholderCard({
  icon: Icon,
  role,
  description,
  capabilities,
  featured = false,
}: StakeholderCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        p: { xs: 3, md: 3.5 },
        borderRadius: `${radius.xl}px`,
        position: 'relative',
        ...(featured && {
          borderColor: color.brand[200],
          boxShadow: shadow.lg,
        }),
        '&:hover': { transform: 'translateY(-3px)', boxShadow: shadow.xl },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: `${radius.lg}px`,
          display: 'grid',
          placeItems: 'center',
          mb: 2.5,
          background: featured
            ? `linear-gradient(135deg, ${color.brand[600]}, ${color.brand[500]})`
            : color.brand[50],
          border: `1px solid ${featured ? 'transparent' : color.brand[100]}`,
          color: featured ? color.neutral[0] : color.brand[600],
        }}
      >
        <Icon size={22} strokeWidth={1.9} aria-hidden />
      </Box>

      <Typography variant="h4" sx={{ mb: 1 }}>
        {role}
      </Typography>
      <Typography variant="body2" sx={{ color: color.neutral[600], mb: 2.5 }}>
        {description}
      </Typography>

      <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {capabilities.map((c) => (
          <Stack
            key={c}
            component="li"
            direction="row"
            spacing={1.25}
            sx={{ alignItems: 'flex-start' }}
          >
            <Box
              sx={{
                mt: '3px',
                width: 16,
                height: 16,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
                bgcolor: color.success[50],
                color: color.success[600],
              }}
            >
              <Check size={10} strokeWidth={3} aria-hidden />
            </Box>
            <Typography variant="body2" sx={{ color: color.neutral[700] }}>
              {c}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
