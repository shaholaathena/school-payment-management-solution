/**
 * Design tokens — the single source of truth for the visual system.
 *
 * These are consumed in two places:
 *   1. `src/theme/index.ts`   → the MUI theme (component styling)
 *   2. `src/theme/global.css` → CSS custom properties (raw CSS access)
 *
 * ⚠️ BRAND: primary is set to #0099F2 per explicit instruction. Confirm
 * against official SSLCOMMERZ / SSLWIRELESS brand guidelines before launch —
 * everything downstream follows automatically from `brand` here.
 */

export const color = {
  /** Azure — primary brand ramp, anchored at #0099F2 */
  brand: {
    50: '#EFF8FE',
    100: '#D8EEFD',
    200: '#B0DDFB',
    300: '#74C6F8',
    400: '#2FADF5',
    500: '#0BA0F3',
    600: '#0099F2',
    700: '#0073BC',
    800: '#0A5F99',
    900: '#0D4E7C',
    950: '#0A3352',
  },
  /** Cyan — used only for the accent gradient terminus and small highlights */
  accent: {
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
  },
  /** Dark navy surfaces (hero, security band, footer) */
  ink: {
    700: '#1B2340',
    800: '#131A32',
    900: '#0B1020',
  },
  /** Neutral slate ramp */
  neutral: {
    0: '#FFFFFF',
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E5EAF1',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  success: { 50: '#ECFDF5', 500: '#10B981', 600: '#059669', 700: '#047857' },
  warning: { 50: '#FFFBEB', 500: '#F59E0B', 600: '#D97706', 700: '#B45309' },
  danger: { 50: '#FEF2F2', 500: '#EF4444', 600: '#DC2626', 700: '#B91C1C' },
} as const;

export const gradient = {
  /** Primary action / emphasis */
  brand: `linear-gradient(135deg, ${color.brand[600]} 0%, ${color.brand[500]} 100%)`,
  /** Display text emphasis on dark surfaces */
  displayOnDark: `linear-gradient(105deg, ${color.brand[300]} 0%, ${color.accent[300]} 100%)`,
  /** Large dark surface wash — restrained, three low-opacity blooms */
  darkSurface: `
    radial-gradient(at 16% 12%, rgba(0,153,242,0.34) 0px, transparent 52%),
    radial-gradient(at 84% 24%, rgba(6,182,212,0.20) 0px, transparent 50%),
    radial-gradient(at 52% 96%, rgba(11,160,243,0.18) 0px, transparent 55%)
  `,
  /** Subtle light-section wash */
  lightSurface: `linear-gradient(180deg, ${color.neutral[50]} 0%, ${color.neutral[0]} 100%)`,
} as const;

export const font = {
  display: '"Plus Jakarta Sans", "Inter", system-ui, sans-serif',
  body: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: 'ui-monospace, "SF Mono", Menlo, monospace',
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
  32: '128px',
} as const;

export const radius = {
  sm: 8,
  md: 10,
  lg: 14,
  xl: 18,
  '2xl': 24,
  '3xl': 32,
  pill: 999,
} as const;

/** Layered, low-opacity shadows. No heavy single drop shadows. */
export const shadow = {
  xs: '0 1px 2px rgba(15,23,42,0.05)',
  sm: '0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)',
  md: '0 4px 8px -2px rgba(15,23,42,0.08), 0 2px 4px -2px rgba(15,23,42,0.04)',
  lg: '0 12px 16px -4px rgba(15,23,42,0.08), 0 4px 6px -2px rgba(15,23,42,0.03)',
  xl: '0 20px 24px -4px rgba(15,23,42,0.09), 0 8px 8px -4px rgba(15,23,42,0.03)',
  '2xl': '0 32px 64px -12px rgba(15,23,42,0.16)',
  /** For product UI floating over dark surfaces */
  onDark: '0 24px 64px -12px rgba(0,0,0,0.5)',
  /** Brand-tinted lift for primary buttons */
  brand: '0 8px 20px -6px rgba(0,153,242,0.45)',
} as const;

/** One easing, three durations. Consistency is the point. */
export const motion = {
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  fast: '150ms',
  base: '250ms',
  slow: '450ms',
} as const;

/** Vertical rhythm between page sections. */
export const sectionPadding = { xs: 10, md: 16 } as const;

export const zIndex = {
  base: 0,
  raised: 10,
  sticky: 100,
  navbar: 1100,
  drawer: 1200,
  toast: 1400,
} as const;
