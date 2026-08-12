import { useId } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { color, radius } from '../../theme/tokens';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  error,
  disabled = false,
}: SelectFieldProps) {
  const id = useId();

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

      <Select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        fullWidth
        required={required}
        disabled={disabled}
        error={Boolean(error)}
        IconComponent={(props) => (
          <Box
            {...props}
            component={ChevronDown}
            sx={{ width: 18, height: 18, mr: 1.25, color: color.neutral[500] }}
          />
        )}
        inputProps={{ 'aria-invalid': Boolean(error), 'aria-describedby': error ? `${id}-error` : undefined }}
        MenuProps={{
          slotProps: {
            paper: { sx: { borderRadius: `${radius.md}px`, mt: 0.5, border: `1px solid ${color.neutral[200]}` } },
          },
        }}
        sx={{
          borderRadius: `${radius.md}px`,
          '& .MuiSelect-select': { py: '13px', fontSize: '0.9375rem' },
          ...(error && { '& fieldset': { borderColor: `${color.danger[500]} !important` } }),
        }}
        renderValue={(selected) =>
          selected ? (
            options.find((o) => o.value === selected)?.label
          ) : (
            <Box component="span" sx={{ color: color.neutral[400] }}>
              {placeholder}
            </Box>
          )
        }
      >
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value} sx={{ fontSize: '0.9375rem' }}>
            {o.label}
          </MenuItem>
        ))}
      </Select>

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
    </Box>
  );
}
