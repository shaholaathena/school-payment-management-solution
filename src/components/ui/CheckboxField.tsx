import { useId } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import { color, motion, radius } from '../../theme/tokens';

export interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  disabled?: boolean;
}

/**
 * Custom-styled checkbox over a real `<input type="checkbox">` — the native
 * input stays in the tree (visually hidden, not `display:none`) so it remains
 * focusable, keyboard-toggleable and announced correctly.
 */
export default function CheckboxField({
  label,
  name,
  checked,
  onChange,
  error,
  disabled = false,
}: CheckboxFieldProps) {
  const id = useId();

  return (
    <Box>
      <Box
        component="label"
        htmlFor={id}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1.5,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <Box sx={{ position: 'relative', flexShrink: 0, mt: '2px' }}>
          <Box
            component="input"
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
            aria-invalid={Boolean(error)}
            sx={{
              position: 'absolute',
              opacity: 0,
              width: 20,
              height: 20,
              m: 0,
              cursor: 'inherit',
              '&:focus-visible + span': {
                outline: `2px solid ${color.brand[600]}`,
                outlineOffset: 2,
              },
            }}
          />
          <Box
            component="span"
            aria-hidden
            sx={{
              display: 'grid',
              placeItems: 'center',
              width: 20,
              height: 20,
              borderRadius: `${radius.sm - 2}px`,
              border: `1.5px solid ${error ? color.danger[500] : checked ? color.brand[600] : color.neutral[300]}`,
              bgcolor: checked ? color.brand[600] : color.neutral[0],
              color: color.neutral[0],
              transition: `background ${motion.fast} ${motion.ease}, border-color ${motion.fast} ${motion.ease}`,
            }}
          >
            {checked && <Check size={13} strokeWidth={3} />}
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: color.neutral[600] }}>
          {label}
        </Typography>
      </Box>

      {error && (
        <Typography
          role="alert"
          variant="caption"
          sx={{ display: 'block', mt: 0.75, ml: 4.25, fontWeight: 600, color: color.danger[600] }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
}
