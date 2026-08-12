import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';
import { color, radius, shadow, zIndex } from '../../theme/tokens';

export type ToastTone = 'success' | 'error' | 'info';

export interface ToastProps {
  open: boolean;
  onClose: () => void;
  tone?: ToastTone;
  title: string;
  description?: string;
  /** Auto-dismiss delay in ms. `null` keeps it open until dismissed. */
  autoHideMs?: number | null;
}

const tones = {
  success: { Icon: CheckCircle2, fg: color.success[600], bg: color.success[50], border: '#A7F3D0' },
  error: { Icon: AlertCircle, fg: color.danger[600], bg: color.danger[50], border: '#FECACA' },
  info: { Icon: Info, fg: color.brand[600], bg: color.brand[50], border: color.brand[100] },
} as const;

export default function Toast({
  open,
  onClose,
  tone = 'success',
  title,
  description,
  autoHideMs = 6000,
}: ToastProps) {
  const { Icon, fg, bg, border } = tones[tone];

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideMs ?? undefined}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ zIndex: zIndex.toast }}
    >
      <Stack
        role="status"
        aria-live="polite"
        direction="row"
        spacing={1.5}
        sx={{
          alignItems: 'flex-start',
          minWidth: { xs: 'calc(100vw - 32px)', sm: 380 },
          maxWidth: 460,
          p: 2,
          bgcolor: color.neutral[0],
          border: `1px solid ${border}`,
          borderRadius: `${radius.lg}px`,
          boxShadow: shadow['2xl'],
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: `${radius.sm}px`,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            bgcolor: bg,
            color: fg,
          }}
        >
          <Icon size={17} strokeWidth={2.1} aria-hidden />
        </Box>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="caption" sx={{ display: 'block', mt: 0.25, color: color.neutral[600] }}>
              {description}
            </Typography>
          )}
        </Box>

        <Box
          component="button"
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: 26,
            height: 26,
            flexShrink: 0,
            border: 'none',
            borderRadius: `${radius.sm - 2}px`,
            bgcolor: 'transparent',
            color: color.neutral[400],
            cursor: 'pointer',
            '&:hover': { bgcolor: color.neutral[100], color: color.neutral[700] },
          }}
        >
          <X size={15} strokeWidth={2.25} aria-hidden />
        </Box>
      </Stack>
    </Snackbar>
  );
}
