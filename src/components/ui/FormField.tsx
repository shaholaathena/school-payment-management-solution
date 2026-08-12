import { useId } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { AlertCircle } from 'lucide-react';
import { color } from '../../theme/tokens';

export interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  /** Validation message. Presence switches the field to its error state. */
  error?: string;
  helper?: string;
  multiline?: boolean;
  rows?: number;
  autoComplete?: string;
  disabled?: boolean;
}

/**
 * Labelled text input. The label is a real `<label for>`, and the error is
 * wired via `aria-describedby` + `aria-invalid` so screen readers announce it.
 */
export default function FormField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  error,
  helper,
  multiline = false,
  rows = 4,
  autoComplete,
  disabled = false,
}: FormFieldProps) {
  const id = useId();
  const describedBy = error ? `${id}-error` : helper ? `${id}-helper` : undefined;

  return (
    <Box>
      <Typography
        component="label"
        htmlFor={id}
        sx={{
          display: 'block',
          mb: 0.875,
          fontSize: '0.875rem',
          fontWeight: 600,
          color: color.neutral[700],
        }}
      >
        {label}
        {required && (
          <Box component="span" aria-hidden sx={{ ml: 0.5, color: color.danger[500] }}>
            *
          </Box>
        )}
      </Typography>

      <OutlinedInput
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        fullWidth
        error={Boolean(error)}
        inputProps={{ 'aria-describedby': describedBy, 'aria-invalid': Boolean(error) }}
        sx={
          error
            ? {
                '& fieldset': { borderColor: `${color.danger[500]} !important` },
                '&.Mui-focused': { boxShadow: `0 0 0 4px ${color.danger[50]}` },
              }
            : undefined
        }
      />

      {error && (
        <Typography
          id={`${id}-error`}
          role="alert"
          variant="caption"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            mt: 0.75,
            fontWeight: 600,
            color: color.danger[600],
          }}
        >
          <AlertCircle size={13} strokeWidth={2.25} aria-hidden />
          {error}
        </Typography>
      )}

      {!error && helper && (
        <Typography
          id={`${id}-helper`}
          variant="caption"
          sx={{ display: 'block', mt: 0.75, color: color.neutral[500] }}
        >
          {helper}
        </Typography>
      )}
    </Box>
  );
}
