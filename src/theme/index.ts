import { createTheme } from '@mui/material/styles';
import { color, font, gradient, motion, radius, shadow } from './tokens';

/** Extra palette slots this product needs beyond MUI's defaults. */
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    ink: { 700: string; 800: string; 900: string; foreground: string; muted: string };
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    ink?: { 700: string; 800: string; 900: string; foreground: string; muted: string };
  }
  interface TypeBackground {
    subtle: string;
    dark: string;
  }
}

/**
 * Display type is Sora at 600 — the approved design uses semibold rather than
 * a heavy weight, which is what keeps the headings editorial instead of shouty.
 * Tracking is tight and negative across the display sizes.
 */
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
      contrastText: color.surface.canvas,
    },
    secondary: {
      main: color.ink[900],
      light: color.ink[700],
      dark: '#070C1B',
      contrastText: color.ink.foreground,
    },
    accent: {
      main: color.accent.teal,
      light: color.accent.sky,
      dark: color.accent[600],
      contrastText: color.ink[900],
    },
    ink: {
      700: color.ink[700],
      800: color.ink[800],
      900: color.ink[900],
      foreground: color.ink.foreground,
      muted: color.ink.muted,
    },
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
      default: color.surface.canvas,
      paper: color.surface.card,
      subtle: color.surface.muted,
      dark: color.ink[900],
    },
    text: {
      primary: color.neutral[900],
      secondary: color.neutral[500],
      disabled: color.neutral[400],
    },
    divider: color.surface.line,
  },

  typography: {
    fontFamily: font.body,

    // Display — Plus Jakarta Sans, heavy and friendly, tight negative tracking
    h1: {
      fontFamily: font.display,
      fontSize: 'clamp(2.7rem, 1.6rem + 2.8vw, 4.25rem)',
      fontWeight: 800,
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: font.display,
      fontSize: 'clamp(2rem, 1.35rem + 1.9vw, 3rem)',
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: font.display,
      fontSize: 'clamp(1.625rem, 1.25rem + 1.1vw, 2.25rem)',
      fontWeight: 700,
      lineHeight: 1.14,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontFamily: font.display,
      fontSize: 'clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)',
      fontWeight: 700,
      lineHeight: 1.26,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontFamily: font.display,
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.34,
      letterSpacing: '-0.018em',
    },
    h6: {
      fontFamily: font.display,
      fontSize: '0.98rem',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.012em',
    },

    // Body
    subtitle1: {
      fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
      lineHeight: 1.65,
      fontWeight: 400,
    },
    subtitle2: { fontSize: '0.9375rem', lineHeight: 1.6, fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.65 },
    body2: { fontSize: '0.875rem', lineHeight: 1.65 },
    caption: { fontSize: '0.75rem', lineHeight: 1.6 },

    /** The `.eyebrow` label — every section opens with one of these. */
    overline: {
      fontFamily: font.body,
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.14em',
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    button: { fontFamily: font.body, fontWeight: 600, textTransform: 'none', letterSpacing: '0' },
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
          backgroundColor: color.surface.canvas,
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
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          fontSize: '0.95rem',
          padding: '10px 28px',
          transition: `background ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
        },
        sizeSmall: { padding: '7px 18px', fontSize: '0.875rem' },
        sizeLarge: { padding: '14px 28px', fontSize: '0.95rem' },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        rounded: { borderRadius: radius.panel },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: radius.panel,
          border: `1px solid ${color.surface.line}`,
          boxShadow: shadow.soft,
          transition: `box-shadow ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: { borderRadius: radius.sm, fontWeight: 600, fontSize: '0.8125rem' },
        outlined: { borderColor: color.surface.line },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: {
          maxWidth: 1280,
          paddingInline: '20px',
          '@media (min-width:1200px)': { paddingInline: '32px' },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          backgroundColor: color.surface.card,
          transition: `box-shadow ${motion.fast} ${motion.ease}, border-color ${motion.fast} ${motion.ease}`,
          '& fieldset': { borderColor: color.surface.line },
          '&:hover fieldset': { borderColor: color.surface.lineStrong },
          '&.Mui-focused': { boxShadow: `0 0 0 4px ${color.brand[100]}` },
          '&.Mui-focused fieldset': { borderColor: color.brand[600], borderWidth: 1 },
        },
        input: { padding: '13px 14px', fontSize: '0.9375rem' },
      },
    },

    MuiInputLabel: {
      styleOverrides: { root: { fontSize: '0.9375rem' } },
    },

    /**
     * FAQ items in the approved design are ruled rows, not bordered cards —
     * a bottom hairline, no background, no radius.
     */
    MuiAccordion: {
      defaultProps: { elevation: 0, disableGutters: true, square: true },
      styleOverrides: {
        root: {
          background: 'transparent',
          borderBottom: `1px solid ${color.surface.line}`,
          '&::before': { display: 'none' },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: { padding: 0, minHeight: 0 },
        content: { marginBlock: '20px' },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: { root: { padding: '0 0 24px' } },
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
