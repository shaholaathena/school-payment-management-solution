import { createTheme } from '@mui/material/styles';
import { color, font, gradient, motion, radius, shadow } from './tokens';

/** Extra palette slots this product needs beyond MUI's defaults. */
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    ink: { 700: string; 800: string; 900: string };
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    ink?: { 700: string; 800: string; 900: string };
  }
  interface TypeBackground {
    subtle: string;
    dark: string;
  }
}

const theme = createTheme({
  cssVariables: true,

  palette: {
    primary: {
      50: color.brand[50],
      100: color.brand[100],
      200: color.brand[200],
      300: color.brand[300],
      400: color.brand[400],
      500: color.brand[500],
      main: color.brand[600],
      light: color.brand[500],
      dark: color.brand[700],
      contrastText: color.neutral[0],
    },
    secondary: {
      main: color.ink[900],
      light: color.ink[700],
      dark: '#05070F',
      contrastText: color.neutral[0],
    },
    accent: {
      main: color.accent[500],
      light: color.accent[400],
      dark: color.accent[600],
      contrastText: color.ink[900],
    },
    ink: { 700: color.ink[700], 800: color.ink[800], 900: color.ink[900] },
    success: { main: color.success[600], light: color.success[50], dark: color.success[700] },
    warning: { main: color.warning[600], light: color.warning[50], dark: color.warning[700] },
    error: { main: color.danger[600], light: color.danger[50], dark: color.danger[700] },
    grey: {
      50: color.neutral[50],
      100: color.neutral[100],
      200: color.neutral[200],
      300: color.neutral[300],
      400: color.neutral[400],
      500: color.neutral[500],
      600: color.neutral[600],
      700: color.neutral[700],
      800: color.neutral[800],
      900: color.neutral[900],
    },
    background: {
      default: color.neutral[0],
      paper: color.neutral[0],
      subtle: color.neutral[50],
      dark: color.ink[900],
    },
    text: {
      primary: color.neutral[900],
      secondary: color.neutral[600],
      disabled: color.neutral[400],
    },
    divider: color.neutral[200],
  },

  typography: {
    fontFamily: font.body,

    // Display — Plus Jakarta Sans, tight tracking, confident weights
    h1: {
      fontFamily: font.display,
      fontSize: 'clamp(2.5rem, 1.4rem + 3.4vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: font.display,
      fontSize: 'clamp(1.875rem, 1.2rem + 2vw, 2.75rem)',
      fontWeight: 800,
      lineHeight: 1.14,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: font.display,
      fontSize: 'clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem)',
      fontWeight: 700,
      lineHeight: 1.24,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: font.display,
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.32,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontFamily: font.display,
      fontSize: '1.0625rem',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontFamily: font.display,
      fontSize: '0.9375rem',
      fontWeight: 700,
      lineHeight: 1.45,
    },

    // Body
    subtitle1: { fontSize: 'clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)', lineHeight: 1.62, fontWeight: 400 },
    subtitle2: { fontSize: '0.9375rem', lineHeight: 1.6, fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.68 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.62 },
    caption: { fontSize: '0.8125rem', lineHeight: 1.5 },

    // Labels / metadata
    overline: {
      fontFamily: font.body,
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.11em',
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    button: { fontFamily: font.body, fontWeight: 600, textTransform: 'none', letterSpacing: '-0.005em' },
  },

  shape: { borderRadius: radius.lg },
  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        html: { scrollBehavior: 'smooth', WebkitTextSizeAdjust: '100%' },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        },
        // Anchor targets clear the fixed navbar
        '[id]': { scrollMarginTop: '96px' },
        '::selection': { background: color.brand[100], color: color.brand[800] },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: false },
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          fontSize: '0.9375rem',
          padding: '10px 20px',
          transition: `background ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, transform ${motion.fast} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
          '&:active': { transform: 'translateY(1px)' },
        },
        sizeSmall: { padding: '7px 14px', fontSize: '0.875rem' },
        sizeLarge: { padding: '14px 28px', fontSize: '1rem', borderRadius: radius.lg },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        rounded: { borderRadius: radius.xl },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: radius.xl,
          border: `1px solid ${color.neutral[200]}`,
          boxShadow: shadow.sm,
          transition: `box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: { borderRadius: radius.sm, fontWeight: 600, fontSize: '0.8125rem' },
        outlined: { borderColor: color.neutral[200] },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: {
        root: { paddingInline: '20px', '@media (min-width:900px)': { paddingInline: '32px' } },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          backgroundColor: color.neutral[0],
          transition: `box-shadow ${motion.fast} ${motion.ease}, border-color ${motion.fast} ${motion.ease}`,
          '& fieldset': { borderColor: color.neutral[300] },
          '&:hover fieldset': { borderColor: color.neutral[400] },
          '&.Mui-focused': { boxShadow: `0 0 0 4px ${color.brand[100]}` },
          '&.Mui-focused fieldset': { borderColor: color.brand[600], borderWidth: 1 },
        },
        input: { padding: '13px 14px', fontSize: '0.9375rem' },
      },
    },

    MuiInputLabel: {
      styleOverrides: { root: { fontSize: '0.9375rem' } },
    },

    MuiAccordion: {
      defaultProps: { elevation: 0, disableGutters: true, square: false },
      styleOverrides: {
        root: {
          border: `1px solid ${color.neutral[200]}`,
          borderRadius: `${radius.lg}px !important`,
          background: color.neutral[0],
          overflow: 'hidden',
          transition: `border-color ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}`,
          '&::before': { display: 'none' },
          '&.Mui-expanded': { borderColor: color.brand[200], boxShadow: shadow.sm },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: { padding: '4px 20px', minHeight: 60 },
        content: { marginBlock: 14 },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: { root: { padding: '0 20px 20px' } },
    },

    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: {
        root: { fontWeight: 600, transition: `color ${motion.fast} ${motion.ease}` },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: color.ink[900],
          fontSize: '0.8125rem',
          borderRadius: radius.sm,
          padding: '8px 12px',
        },
      },
    },
  },
});

export default theme;
export { color, font, gradient, motion, radius, shadow };
