/**
 * Design tokens — the single source of truth for the visual system.
 *
 * These are consumed in two places:
 *   1. `src/theme/index.ts`   → the MUI theme (component styling)
 *   2. `src/theme/global.css` → CSS custom properties (raw CSS access)
 *
 * Values are ported from the approved design
 * (https://vision-to-life-builder.lovable.app), whose palette is authored in
 * oklch. The hex below is the sRGB rendering of those oklch values — keep both
 * in the comment so the source of truth stays traceable.
 */

/**
 * ⚠️ CONTRAST — `brand[600]` (#0099F2) is the brand colour, and at 3.07:1 on
 * white it clears WCAG AA for large text and UI graphics but NOT for normal
 * text (4.5:1). So the ramp splits two ways:
 *
 *   • `brand[600]` — fills, icons, graphics, the logo mark, display headings
 *   • `brand[700]` — any small text on a light surface, and any icon sitting on
 *     a `brand[50]`/`brand[100]` chip (4.95:1 on canvas, 4.64:1 on muted)
 *
 * Reach for 700 when the colour is carrying words. Never use 600 for body or
 * label text on white.
 *
 * ⚠️ One known failure remains by design decision: the primary button is
 * `brand[600]` with a white label, which is 3.07:1. Fixing it means either
 * dropping the fill to `brand[700]` (5.02:1) or switching the label to
 * `neutral[950]` (5.99:1) — both change the button's look, so it is a brand
 * call rather than something to silently patch.
 */
export const color = {
  /** Azure — primary brand. hsl(202, 100%, 47%) */
  brand: {
    50: '#EFF8FE',
    100: '#D8EEFD',
    200: '#B0DDFB',
    300: '#74C6F8',
    400: '#2FADF5',
    500: '#0BA0F3',
    600: '#0099F2', // --primary
    700: '#0073BC', // text-safe on light AND muted surfaces
    800: '#0A5F99',
    900: '#0D4E7C',
    950: '#0A3352',
  },
  /**
   * Sky + teal accents, used on ink surfaces and for small highlights.
   * `sky` reads 9.5:1 on `ink.900`, so it is safe for the on-dark eyebrows.
   */
  accent: {
    sky: '#6FC5F7', // --accent-sky
    teal: '#39B7CB', // --accent-teal
    300: '#6FC5F7',
    400: '#39B7CB',
    500: '#39B7CB',
    600: '#2E93A3',
  },
  /** Dark navy surfaces (journey band, stakeholder panel, final CTA). */
  ink: {
    700: '#1E2842', // --secondary-foreground
    800: '#16203C',
    900: '#0E172F', // --ink
    /** Text on ink */
    foreground: '#F3F5F9', // --ink-foreground
    /** Muted text on ink */
    muted: '#A3ABBD', // --ink-muted
  },
  /** Neutral ramp. 900/950 are the display navy; 500 is body-muted. */
  neutral: {
    0: '#FFFFFF',
    50: '#FDFDFF', // --background
    100: '#F3F6FB', // --surface
    200: '#F0F2F8', // --muted
    300: '#DFE3EB', // --border
    400: '#9AA1B1',
    500: '#61697A', // --muted-foreground
    600: '#4B5468',
    700: '#333D52',
    800: '#1E2842',
    900: '#101A2F', // --foreground
    950: '#0B1426',
  },
  /**
   * Page surfaces. Separate from `neutral` because these are *backgrounds*
   * chosen for the editorial layout, not steps on the text ramp — a section
   * should pick `surface.muted`, never guess a neutral.
   */
  surface: {
    /** Page background — a hair cooler than pure white */
    canvas: '#FDFDFF',
    /** Cards and panels */
    card: '#FFFFFF',
    /** Alternating section background */
    muted: '#F3F6FB',
    /** Inset wells inside cards */
    well: '#F0F2F8',
    /** Tinted panel (accent/40 in the source design) */
    tint: '#F1F9FE',
    line: '#DFE3EB',
    lineStrong: '#D2D8E3',
  },
  success: { 50: '#ECFDF5', 500: '#10B981', 600: '#059669', 700: '#047857' },
  warning: { 50: '#FFFBEB', 500: '#F59E0B', 600: '#D97706', 700: '#B45309' },
  danger: { 50: '#FEF2F2', 500: '#EF4444', 600: '#DC2626', 700: '#B91C1C' },
} as const;

export const gradient = {
  /** Primary action. Flat, not a gradient — kept as a token so callers are uniform. */
  brand: color.brand[600],
  /** Display text emphasis on dark surfaces */
  displayOnDark: `linear-gradient(105deg, ${color.accent.sky} 0%, ${color.accent.teal} 100%)`,
  /** The single soft wash under the hero. One bloom, very low opacity. */
  heroWash: `linear-gradient(180deg, rgba(0,153,242,0.07) 0%, transparent 60%)`,
  /** Large dark surface wash — restrained blooms for ink sections */
  darkSurface: `
    radial-gradient(at 16% 12%, rgba(0,153,242,0.28) 0px, transparent 52%),
    radial-gradient(at 84% 24%, rgba(57,183,203,0.14) 0px, transparent 50%)
  `,
  /** Subtle light-section wash */
  lightSurface: `linear-gradient(180deg, ${color.surface.muted} 0%, ${color.surface.canvas} 100%)`,
  /** Vivid primary gradient — used on banners and gradient text. */
  vividPrimary: 'linear-gradient(120deg, #0077C4 0%, #0099F2 55%, #39B7CB 100%)',
} as const;

export const font = {
  /** Rounder, friendlier display face — heavier weights carry the vivid look. */
  display: '"Plus Jakarta Sans", "Sora", system-ui, sans-serif',
  body: '"Manrope", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: 'ui-monospace, "SF Mono", Menlo, monospace',
} as const;

/**
 * Vivid gradient set — the "go vivid" direction. All azure-anchored but reaching
 * into cyan and lavender so a row of icons has variety, like the inspiration.
 * `glow` is the matching low-opacity colour for each gradient's drop shadow.
 */
export const vivid = {
  gradients: [
    'linear-gradient(135deg, #0099F2 0%, #39B7CB 100%)', // azure → cyan
    'linear-gradient(135deg, #2FADF5 0%, #6FC5F7 100%)', // azure → sky
    'linear-gradient(135deg, #0077C4 0%, #9D9BE7 100%)', // deep azure → lavender
    'linear-gradient(135deg, #06B6D4 0%, #0099F2 100%)', // cyan → azure
  ],
  glows: [
    'rgba(0,153,242,0.42)',
    'rgba(47,173,245,0.40)',
    'rgba(120,120,220,0.40)',
    'rgba(6,182,212,0.42)',
  ],
  /** Soft tinted section backgrounds, alternating with white/muted. */
  tint: {
    sky: '#EAF5FE',
    lavender: '#F1F0FE',
  },
} as const;

/** 8px base scale. MUI `spacing(n)` = n * 8px. */
export const space = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
} as const;

/**
 * Radii. `--radius` in the source design is 12px; panels are `radius + 8` and
 * screenshot frames `radius + 4`, which is why those two have their own names.
 */
export const radius = {
  sm: 6,
  md: 8,
  lg: 12,
  /** Screenshot / product artifact frames */
  shot: 16,
  /** Cards and panels */
  panel: 20,
  /** @deprecated Alias of `panel`, kept for inner pages not yet ported. */
  xl: 20,
  '2xl': 16,
  '3xl': 24,
  pill: 999,
} as const;

/** Two shadows carry the whole design: resting and lifted. */
export const shadow = {
  xs: '0 1px 2px rgba(16,26,47,0.05)',
  /** Resting state for panels */
  soft: '0 1px 2px rgba(16,26,47,0.05), 0 12px 32px -18px rgba(16,26,47,0.22)',
  /** Hover / raised state, and the resting state for screenshots */
  lift: '0 2px 4px rgba(16,26,47,0.04), 0 28px 60px -30px rgba(16,26,47,0.30)',
  sm: '0 1px 2px rgba(16,26,47,0.05)',
  md: '0 1px 2px rgba(16,26,47,0.05), 0 12px 32px -18px rgba(16,26,47,0.22)',
  lg: '0 2px 4px rgba(16,26,47,0.04), 0 28px 60px -30px rgba(16,26,47,0.30)',
  xl: '0 2px 4px rgba(16,26,47,0.04), 0 28px 60px -30px rgba(16,26,47,0.30)',
  '2xl': '0 32px 64px -12px rgba(16,26,47,0.16)',
  /** For product UI floating over dark surfaces */
  onDark: '0 24px 64px -12px rgba(0,0,0,0.5)',
  /** Real product screenshots */
  artifact: '0 2px 4px rgba(16,26,47,0.04), 0 28px 60px -30px rgba(16,26,47,0.30)',
} as const;

/** One easing, three durations. Consistency is the point. */
export const motion = {
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  fast: '150ms',
  base: '350ms',
  slow: '700ms',
} as const;

/** Vertical rhythm between page sections — 80px mobile, 112px desktop. */
export const sectionPadding = { xs: 10, md: 14 } as const;

/** Layout frame shared by every section and the navbar. */
export const layout = {
  /** max-w-7xl */
  maxWidth: 1280,
  gutter: { xs: 2.5, lg: 4 },
  navHeight: 72,
} as const;

export const zIndex = {
  base: 0,
  raised: 10,
  sticky: 100,
  navbar: 1100,
  drawer: 1200,
  toast: 1400,
} as const;
