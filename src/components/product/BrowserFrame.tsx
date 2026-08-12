import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Lock } from 'lucide-react';
import { color, radius, shadow } from '../../theme/tokens';

export interface BrowserFrameProps {
  children: ReactNode;
  /** Address shown in the URL pill */
  url?: string;
  /** Shadow tuned for dark vs light backgrounds */
  onDark?: boolean;
}

/** Browser chrome wrapper so product UI reads as a real screen, not a diagram. */
export default function BrowserFrame({
  children,
  url = 'app.educationpayments.example',
  onDark = false,
}: BrowserFrameProps) {
  return (
    <Box
      sx={{
        borderRadius: `${radius['2xl']}px`,
        overflow: 'hidden',
        bgcolor: color.neutral[0],
        border: `1px solid ${onDark ? 'rgba(255,255,255,0.12)' : color.neutral[200]}`,
        boxShadow: onDark ? shadow.onDark : shadow['2xl'],
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: 'center',
          px: 2,
          py: 1.5,
          bgcolor: color.neutral[50],
          borderBottom: `1px solid ${color.neutral[200]}`,
        }}
      >
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c, flexShrink: 0 }} />
        ))}

        <Stack
          direction="row"
          spacing={0.75}
          sx={{
            alignItems: 'center',
            ml: 1.5,
            flexGrow: 1,
            maxWidth: 320,
            height: 24,
            px: 1.25,
            borderRadius: `${radius.pill}px`,
            bgcolor: color.neutral[0],
            border: `1px solid ${color.neutral[200]}`,
          }}
        >
          <Lock size={9} strokeWidth={2.5} aria-hidden style={{ color: color.success[600], flexShrink: 0 }} />
          <Typography sx={{ fontSize: 10, color: color.neutral[400], letterSpacing: '0.01em' }} noWrap>
            {url}
          </Typography>
        </Stack>
      </Stack>

      {children}
    </Box>
  );
}
