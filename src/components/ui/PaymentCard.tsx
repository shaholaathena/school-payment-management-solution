import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import type { LucideIcon } from 'lucide-react';
import { color, radius, shadow } from '../../theme/tokens';

export interface PaymentCardProps {
  /** Method name, e.g. "bKash" */
  name: string;
  /** Grouping, e.g. "Mobile Financial Service" */
  category: string;
  icon: LucideIcon;
  /**
   * True until the official brand mark is licensed and dropped in.
   * Renders a wordmark placeholder rather than an approximation of the logo.
   */
  placeholderMark?: boolean;
}

export default function PaymentCard({
  name,
  category,
  icon: Icon,
  placeholderMark = true,
}: PaymentCardProps) {
  return (
    <Card
      sx={{
        p: 2.5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: `${radius.lg}px`,
        '&:hover': { boxShadow: shadow.md, borderColor: color.brand[200] },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: `${radius.md}px`,
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
          bgcolor: color.neutral[50],
          border: `1px solid ${color.neutral[200]}`,
          color: color.neutral[600],
        }}
      >
        <Icon size={20} strokeWidth={1.9} aria-hidden />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ color: color.neutral[500] }}>
          {category}
        </Typography>
      </Box>

      {placeholderMark && (
        <Box
          aria-hidden
          title="Official brand mark pending licensing"
          sx={{
            ml: 'auto',
            width: 6,
            height: 6,
            borderRadius: '50%',
            flexShrink: 0,
            bgcolor: color.warning[500],
            opacity: 0.7,
          }}
        />
      )}
    </Card>
  );
}
